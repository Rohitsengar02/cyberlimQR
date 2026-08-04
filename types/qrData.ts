export interface QRCodeData {
  content: string;
  label?: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
  level?: "L" | "M" | "Q" | "H";
  userId?: string;
}
