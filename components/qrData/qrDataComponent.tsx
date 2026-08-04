import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { QRCodeProps } from "@/types/qrProps";

export default function QrDataComponent({ qrData }: { qrData: QRCodeProps }) {
  return (
    <>
      {qrData.url && (
        <Card className="w-full max-w-sm border border-border/50 bg-background/80 backdrop-blur-sm shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Current Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-card/60 p-3 rounded-lg overflow-x-auto border border-border/30 font-mono text-primary/90">
              {JSON.stringify(qrData, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </>
  );
}
