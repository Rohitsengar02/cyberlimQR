"use client";

import { useState } from "react";
import { QRForm } from "@/components/form/formComponent";
import { QRCodeDisplay } from "@/components/qrCode/qrCodeComponent";
import { QRCodeProps } from "@/types/qrProps";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import QrDataComponent from "@/components/qrData/qrDataComponent";

export default function QRGenerator() {
  const [qrData, setQrData] = useState<QRCodeProps>({
    url: "https://example.com",
    title: "My QR Code",
    size: 256,
    bgColor: "#ffffff",
    fgColor: "#000000",
    level: "M",
  });

  return (
    <>
      <Sidebar>
        <SidebarContent className="p-2">
          <QRForm onSubmit={setQrData} defaultValues={qrData} />
        </SidebarContent>
      </Sidebar>
      <div className="flex flex-col items-center justify-center gap-6 p-4 md:p-8 mx-auto max-w-xl w-full min-h-[75vh]">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Live QR Preview
          </h2>
          <p className="text-sm text-muted-foreground">
            Customize settings in the sidebar to generate your QR code
          </p>
        </div>
        <QRCodeDisplay {...qrData} />
        <QrDataComponent qrData={qrData} />
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-sm">
          <Button
            asChild
            className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white font-semibold py-2.5 shadow-md shadow-primary/20 transition-all hover:scale-105 cursor-pointer"
            onClick={() => {
              localStorage.setItem("qrData", JSON.stringify(qrData));
            }}
          >
            <Link href="/qrCodeGenerator/downloader">Download PNG</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 border-primary/40 hover:bg-primary/10 text-primary font-semibold py-2.5 transition-all hover:scale-105 cursor-pointer"
            onClick={() => {
              localStorage.setItem("qrData", JSON.stringify(qrData));
            }}
          >
            <Link href="/qrCodeGenerator/save">Save QR Code</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
