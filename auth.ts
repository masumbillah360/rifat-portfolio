
import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmailPass } from "./actions/auth.action";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, request) {
        if (credentials === null) return null;
        try {
          const user = await getUserByEmailPass(
            credentials.email as string,
            credentials.password as string
          );
          if (user) {
            const isMatch = user?.password === credentials?.password;
            if (isMatch) {
              return user;
            } else {
              throw new Error("Invalid Password");
            }
          } else {
            throw new Error("Invalid Credentials");
          }
        } catch (error) {
          console.log(["error"], error);
          throw new Error("Failed to login!");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session: async ({ session, token }) => {
      session.user.id = token.sub!;
      return session;
    },
    signIn: async ({ user, account }) => {
      try {
        if (account?.provider === "credentials") {
          if (user) {
            return true;
          }
        }
        return false;
      } catch (error) {
        throw new AuthError("Failed to sign in");
      }
    },
  },
});
