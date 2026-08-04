import { QRCodeCanvas } from "qrcode.react"; // 👈
import { QRCodeProps } from "@/types/qrProps";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export function QRCodeDisplay({
  url,
  title = "My QR Code",
  size = 400,
  bgColor = "#ffffff",
  fgColor = "#000000",
  level = "L",
  imageSettings,
}: QRCodeProps) {
  const cleanImageSrc =
    imageSettings && imageSettings.src && imageSettings.src.trim() !== ""
      ? imageSettings.src.startsWith("http://") ||
        imageSettings.src.startsWith("https://")
        ? `/api/proxy-image?url=${encodeURIComponent(imageSettings.src)}`
        : imageSettings.src
      : undefined;

  return (
    <Card className="w-[350px] max-w-full border border-border/60 bg-background/80 backdrop-blur-md shadow-2xl transition-all hover:shadow-primary/10">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-lg font-bold tracking-wide bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center p-6 pt-2">
        <div className="p-4 bg-white rounded-xl shadow-inner border border-gray-200">
          <QRCodeCanvas
            value={url || " "} // Evita error con valor vacío
            title={title}
            size={size}
            bgColor={bgColor}
            fgColor={fgColor}
            level={level}
            imageSettings={
              cleanImageSrc
                ? {
                    ...imageSettings!,
                    src: cleanImageSrc,
                    x: undefined,
                    y: undefined,
                    excavate: imageSettings?.excavate ?? false,
                    crossOrigin: "anonymous",
                  }
                : undefined
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}
