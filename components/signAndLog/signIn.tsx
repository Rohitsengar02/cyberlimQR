"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SignIn() {
  return (
    <Button variant="outline" className="w-full">
      <Link href="/login">Sign In</Link>
    </Button>
  );
}
