import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '55e4199f69604a4d3134',
      clientSecret: 'ffcddcd88169eaad8760d3aac281ef7f857f8205',
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)