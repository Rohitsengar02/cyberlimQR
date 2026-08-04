import { QRCodeData } from "@/types/qrData";

export async function createQRCode(data: QRCodeData) {
  try {
    const res = await fetch("/api/qrcode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al crear el QR");
    }

    const qr = await res.json();
    return qr;
  } catch (error) {
    console.error("Error en createQRCode:", error);
    throw error;
  }
}
