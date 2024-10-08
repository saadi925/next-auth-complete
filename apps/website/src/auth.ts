import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";


export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/signin",
  },
  events: {
    linkAccount: async ({ user }) => {
      db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;
      if (!user || !user.id) return false;
      const existingUser = await getUserById(user.id);
      if (!existingUser || !existingUser.emailVerified) return false;
      return true;
    },

    //  jwt is called when the JWT is created

    async jwt(jwt ) {
      const {token, user} = jwt
  
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.email = existingUser.email;
      token.name = existingUser.name;
      token.picture = existingUser.image;

      token.role = existingUser.role;
      return token;
    },
    // session uses the JWT token to create and generate the session object
    async session({ session, user, token }) {
     
      if (session.user) {
         
        if (token.role) session.user.role = token.role as UserRole;
        if (token.sub) session.user.id = token.sub;
        if (token.email) session.user.email = token.email;
        if (token.name) session.user.name = token.name;
        if (token.picture) session.user.image = token.picture

      }

      return session;
    },
  },
  adapter: PrismaAdapter(db),

  session: { strategy: "jwt" },
  ...authConfig,
});
