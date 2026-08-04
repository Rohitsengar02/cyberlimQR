"use client";

import { useState } from "react";
import { createQRCode } from "@/lib/createQrCode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import React, { useRef } from "react";
import { toast } from "sonner";

interface Message {
  text: string;
  type?: "error" | "success"; // determina el color del Alert
}

export default function SaveComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const [message, setMessage] = useState<Message | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const qr = await createQRCode({
        content,
        label,
        size: 256,
        bgColor: "#ffffff",
        fgColor: "#000000",
        level: "M",
      });

      setMessage({ text: "QR saved successfully!", type: "success" });
      console.log("QR created:", qr);
    } catch {
      setMessage({ text: "Error saving QR code", type: "error" });
    }
  };

  return (
    <>
      <div className="mx-auto mb-4 flex justify-center" ref={qrRef}>
        {children}
      </div>
      <Card className="border border-border/50 bg-background/80 backdrop-blur-md shadow-2xl">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Save QR Code
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Content field */}
            <div className="space-y-2">
              <Label htmlFor="content" className="text-sm font-semibold">
                QR Content *
              </Label>
              <Input
                id="content"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="e.g., https://example.com"
                required
                className="bg-card/50"
              />
            </div>

            {/* Label field */}
            <div className="space-y-2">
              <Label htmlFor="label" className="text-sm font-semibold">
                Descriptive Name (Optional)
              </Label>
              <Input
                id="label"
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="e.g., My Website QR"
                className="bg-card/50"
              />
            </div>

            {/* Status message */}
            {message && (
              <Alert
                variant={message.type === "error" ? "destructive" : "default"}
                className="border-primary/40 bg-primary/10"
              >
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}
          </CardContent>

          <CardFooter>
            <Button
              onClick={() =>
                toast("QR Code saved successfully!", {
                  description:
                    "You can view your saved QR codes in the Saved QRs tab.",
                  action: {
                    label: "Dismiss",
                    onClick: () => console.log("Dismissed"),
                  },
                })
              }
              type="submit"
              className="w-full bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:opacity-90 text-white font-bold py-2 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              Save QR Code
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
