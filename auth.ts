import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import Resend from "next-auth/providers/resend";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret:
    process.env.AUTH_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "cyberlim_qr_generator_default_secret_key_2026",
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      from: "noreply@resend.dev",
    }),
  ],
});
