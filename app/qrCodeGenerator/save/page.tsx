"use client";

import SaveComponent from "@/components/save/saveComponent";
import { useEffect, useState } from "react";
import { QRCodeDisplay } from "@/components/qrCode/qrCodeComponent";
import { QRCodeProps } from "@/types/qrProps";
import { DrawerDemo } from "@/ui/drawer";

export default function Save() {
  const [qrData, setQrData] = useState<QRCodeProps | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("qrData");
    if (data) {
      setQrData(JSON.parse(data));
    }
  }, []);

  if (!qrData)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8 text-center">
        <p className="text-muted-foreground text-lg">
          No QR code found to save. Please generate one first.
        </p>
      </div>
    );

  return (
    <div className="flex flex-col min-h-[75vh] w-full items-center justify-center p-6 md:p-10 gap-6">
      <div className="w-full max-w-sm">
        <SaveComponent>
          <QRCodeDisplay {...qrData} />
        </SaveComponent>
      </div>
      <DrawerDemo />
    </div>
  );
}
