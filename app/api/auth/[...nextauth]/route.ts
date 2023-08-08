import NextAuth from "next-auth/next";

const handler = NextAuth(
  {
    providers: []
  }
)

export { handler as GET, handler as POST }
