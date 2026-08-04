"use client";

import useSWR from "swr";
import { QRCodeDisplay } from "@/components/qrCode/qrCodeComponent";
import { SavedQRCode } from "@/types/qrSaves";
import DeleteBtn from "../delete/deleteFavBtn";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function SavedQRsList() {
  const { data, error, isLoading } = useSWR<SavedQRCode[]>(
    "/api/qrcode",
    fetcher
  );

  if (isLoading)
    return (
      <p className="col-span-full text-center mt-10 text-muted-foreground animate-pulse">
        Loading saved QR codes...
      </p>
    );
  if (error)
    return (
      <p className="col-span-full text-center mt-10 text-destructive">
        Error loading saved QR codes. Please ensure you are signed in.
      </p>
    );

  if (!data || data.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center p-12 text-center border border-border/40 rounded-2xl bg-background/50 backdrop-blur-sm shadow-xl">
        <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
          No Saved QR Codes Yet
        </h3>
        <p className="text-muted-foreground text-sm max-w-md">
          Create and save a custom QR code in Cyberlim to see and manage it here anytime!
        </p>
      </div>
    );
  }

  return (
    <>
      {data.map((qr) => (
        <div
          className="flex flex-col justify-center items-center gap-4 p-4 rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm shadow-lg transition-all hover:shadow-primary/10"
          key={qr.id}
        >
          <QRCodeDisplay
            key={qr.id}
            url={qr.content}
            title={qr.label || "Saved QR Code"}
            size={qr.size}
            bgColor={qr.bgColor}
            fgColor={qr.fgColor}
            level={qr.level}
          />
          <DeleteBtn
            qr={qr}
            onDelete={() => {
              console.log("Deleted");
            }}
          />
        </div>
      ))}
    </>
  );
}
