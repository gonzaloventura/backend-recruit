import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '70a34fe8aa441c3d6884',
      clientSecret: '435a525413c8c47ae830a7b5ad70634d07a72b7a',
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)