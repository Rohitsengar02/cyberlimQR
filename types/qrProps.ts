export interface QRCodeProps {
  url: string;
  title?: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
  level?: "L" | "M" | "Q" | "H";
  imageSettings?: {
    src: string;
    height: number;
    width: number;
    opacity?: number;
    excavate?: boolean;
    x?: number;
    y?: number;
  };
}
