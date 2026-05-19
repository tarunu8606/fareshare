import { Gender } from "@prisma/client"

// Extends the default NextAuth Session so session.user.id etc. work without TypeScript errors
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      image?: string | null
      gender?: Gender | null
      age?: number | null
    }
  }
  interface User {
    gender?: Gender | null
    age?: number | null
  }
}

export type { Gender }
