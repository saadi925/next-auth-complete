"use server";
import { db } from "@/lib/db";
import { getVerificationTokenByToken } from "@//data/verification-token";
import { getUserByEmail } from "@/data/user";
import { MessageResponse } from "@/types/auth";

export async function emailVerifyAction(
  token?: string,
): Promise<MessageResponse> {
  if (!token) {
    return {
      message: "invaild token",
      success: false,
    };
  }
  try {
    const dbToken = await getVerificationTokenByToken(token);
    if (!dbToken)
      return {
        message: "invalid request or token may have been expired",
        success: false,
      };
    //  check if token is  valid
    const expired = new Date(dbToken.expires) < new Date();
    if (expired)
      return {
        message: "token has been expired",
        success: false,
      };
    //  check if user exists
    const userExists = await getUserByEmail(dbToken.email);

    if (!userExists)
      return {
        message: "user not found, try to signup first",
        success: false,
      };

  await db.user.update({
      where: {
        id: userExists.id,
      },
      data: {
        emailVerified: new Date(),
        email: dbToken.email,
      },
    });
    

    return {
      message: "Email Verified Sucessfully",
      success: true,
    };
  } catch (error) {
    console.log(error);
    
    return {
      message: "something went wrong",
      success: false,
    };
  }
}
