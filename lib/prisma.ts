import { PrismaClient } from "@prisma/client";

export {};

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client as PrismaClient;

// use : import prisma from "./lib/prismadb";
