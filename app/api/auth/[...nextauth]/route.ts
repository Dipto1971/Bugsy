import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";

const handler = NextAuth({
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
});

export { handler as GET, handler as POST };

// [...nextauth]/route.ts is a catch-all segment that will match any route under /api/auth.
// This means that if you have a route like /api/auth/signin, it will be handled by this file.
