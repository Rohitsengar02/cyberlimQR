// app/api/qrcode/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { auth } from "@/auth";

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { content, label, size, bgColor, fgColor, level } = body;

    if (!content) {
      return NextResponse.json(
        { message: 'El campo "content" es obligatorio' },
        { status: 400 }
      );
    }

    const qr = await prisma.qRCode.create({
      data: {
        content,
        label,
        size,
        bgColor,
        fgColor,
        level,
        userId: session.user.id,
      },
    });

    return NextResponse.json(qr, { status: 201 });
  } catch (error) {
    console.error("Error al crear QR:", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  try {
    const qrcodes = await prisma.qRCode.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(qrcodes);
  } catch (error) {
    console.error("Error al obtener QR:", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
