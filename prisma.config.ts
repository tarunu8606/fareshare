import path from "node:path"
import { defineConfig } from "prisma/config"

// Load .env and .env.local before Prisma reads environment variables
const { config } = await import("dotenv")
config({ path: ".env" })
config({ path: ".env.local", override: false })

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: process.env.DIRECT_URL,
  },
})
