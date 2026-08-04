"use client";
import { toPng } from "html-to-image";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DownloadQR({ children }: { children: React.ReactNode }) {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (qrRef.current === null) return;

    try {
      let dataUrl: string;
      try {
        dataUrl = await toPng(qrRef.current, {
          cacheBust: true,
          skipFonts: true,
          pixelRatio: 2,
        });
      } catch (err) {
        // Fallback: If html-to-image fails due to Tailwind v4 CSS syntax parsing, export the QR canvas directly
        const canvas = qrRef.current.querySelector("canvas");
        if (!canvas) throw err;
        dataUrl = canvas.toDataURL("image/png");
      }

      const link = document.createElement("a");
      link.download = "cyberlim-qr-code.png";
      link.href = dataUrl;
      link.click();
      toast.success("QR Code downloaded successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error(
        "Failed to export QR code. If using an embedded logo, ensure the image URL allows access."
      );
    }
  };

  return (
    <Card className="border border-border/50 bg-background/80 backdrop-blur-md shadow-2xl justify-center items-center p-4">
      <CardHeader className="text-center w-full pb-2">
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Download QR Code
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center py-4">
        <div ref={qrRef}>{children}</div>
      </CardContent>
      <CardFooter className="flex justify-center w-full">
        <Button
          className="w-full bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:opacity-90 text-white font-bold py-2 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] cursor-pointer"
          onClick={handleDownload}
        >
          Download PNG
        </Button>
      </CardFooter>
    </Card>
  );
}
