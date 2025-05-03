// pages/api/auth/[...nextauth].ts

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Secret used to encrypt session tokens, etc.
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: { scope: "openid email profile" },
      },
    }),
  ],

  // Use JSON Web Tokens for session instead of database sessions
  session: {
    strategy: "jwt",
  },

  callbacks: {
    /**
     * `token` is the JWT.  `account` and `profile` come from the provider on first sign-in.
     * Because we declared `authOptions: NextAuthOptions`, TS knows:
     *   token  : JWT
     *   account: Account | null
     *   profile: Profile | undefined
     */
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email   = profile.email;
        token.name    = profile.name;
        token.picture = profile.picture;
      }
      return token;
    },

    /**
     * `session.user` is what gets exposed to the client.  We copy
     * properties from the JWT into the session object here.
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.name   = token.name as string;
        session.user.email  = token.email as string;
        session.user.image  = token.picture as string;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
