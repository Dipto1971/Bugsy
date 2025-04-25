import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // Exclamation mark lets TypeScript know that this value is available.
    }),
  ],
});

export { handler as GET, handler as POST };

// [...nextauth]/route.ts is a catch-all segment that will match any route under /api/auth.
// This means that if you have a route like /api/auth/signin, it will be handled by this file.
