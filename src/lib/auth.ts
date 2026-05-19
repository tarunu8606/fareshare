import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/db"
import { loginSchema } from "@/lib/validations/user"
import "@/types/index"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials)
        if (!parsed.success) return null

        const user = await prisma.user.findUnique({
          where: { email: parsed.data.email },
        })
        if (!user || !user.password) return null

        const passwordMatch = await bcrypt.compare(parsed.data.password, user.password)
        if (!passwordMatch) return null

        return { id: user.id, name: user.name, email: user.email, gender: user.gender, age: user.age }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.gender = user.gender
        token.age = user.age
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.gender = token.gender as typeof session.user.gender
      session.user.age = token.age as number | null | undefined
      return session
    },
  },

  pages: { signIn: "/login" },
})
