import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../lib/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  theme: {
    colorScheme: 'auto',
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'user'
      return token
    },
  },
})
