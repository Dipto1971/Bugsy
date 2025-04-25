import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // Exclamation mark lets TypeScript know that this value is available.
    }),
  ],
  session: {
    strategy: "jwt",
    // When we use an adapter, NEXTAuth changes the session strategy to "database" by default. so, database -> jwt
  },
};

export default authOptions;
