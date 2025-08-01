import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { prisma } from "@/lib/prisma"
// import { compare } from "bcryptjs"

const handler = NextAuth({
  // adapter: PrismaAdapter(prisma),
  debug: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email;
        const password = credentials.password;

        try {
          const loginRes = await fetch(
            "https://api.escuelajs.co/api/v1/auth/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );

          if (!loginRes.ok) {
            console.error("Login failed:", await loginRes.text());
            return null;
          }

          const loginData = await loginRes.json();
          const accessToken = loginData.access_token;

          if (!accessToken) {
            console.error("No access token returned.");
            return null;
          }

          const profileRes = await fetch(
            "https://api.escuelajs.co/api/v1/auth/profile",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (!profileRes.ok) {
            console.error("Profile fetch failed:", await profileRes.text());
            return null;
          }

          const profileData = await profileRes.json();

         
          return {
            ...loginData,
            ...profileData,
          };
        } catch (err) {
          console.error("Unexpected error:", err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log(token, user);
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.avatar = user.avatar;
        token.access_token = user.access_token;
        token.refresh_token = user.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id && session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.role = token.role;
        session.user.avatar = token.avatar;
        session.user.access_token = token.access_token;
        session.user.refresh_token = token.refresh_token;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export default handler
