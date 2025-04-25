import authOptions from "@/app/auth/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// [...nextauth]/route.ts is a catch-all segment that will match any route under /api/auth.
// This means that if you have a route like /api/auth/signin, it will be handled by this file.
