"use client";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Register({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const resendAction = (formData: FormData) => {
    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });
    signIn("resend", {
      email: formObject.email,
      callbackUrl: "/qrCodeGenerator",
    });
  };

  return (
    <form
      action={resendAction}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email-resend">Email</Label>
          <Input
            id="email-resend"
            type="email"
            placeholder="m@example.com"
            name="email"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
}
