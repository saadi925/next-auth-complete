import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}
// const connectionString = `${process.env.DB_URL}`
// const pool = new Pool({ connectionString })
// const adapter = new PrismaPg(pool)
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}