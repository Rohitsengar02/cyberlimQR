// app/api/qrcode/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

export async function DELETE(req: Request) {
  const { id } = await req.json();

  await prisma.qRCode.delete({
    where: { id: id },
  });

  return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
}
