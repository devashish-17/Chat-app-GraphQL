import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import prisma from "../../../lib/prismadb"

// const prisma = new PrismaClient();

export default NextAuth({
  // adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        if (email !== "john@gmail.com" || password !== "1234") {
          throw new Error("invalid credentials");
        }

        // if everything is fine
        return {
          id: "1234",
          name: "John Doe",
          email: "john@gmail.com",
          role: "admin",
        };
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
   // error: '/auth/error',
   // signOut: '/auth/signout'
  },
  secret: process.env.NEXTAUTH_SECRET,
  
})