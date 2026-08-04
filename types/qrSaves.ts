export interface SavedQRCode {
  id: string;
  content: string;
  label?: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
  level?: "L" | "M" | "Q" | "H";
  createdAt: string;
}
