import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const {email, username, password} = credentials
        if (email !== "dev@graph" && username !== "dev@graph" && password !== "dev@graph"){
          return null;
        }
        return {id: '1', name: 'Mango', email: 'dev@graph'}
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
})