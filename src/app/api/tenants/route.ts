import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, userId } = body ?? {};

    if (!name || !userId) {
      return NextResponse.json(
        { error: "name e userId são obrigatórios" },
        { status: 400 }
      );
    }

    const tenant = await prisma.tenant.create({
      data: {
        name,
        memberships: {
          create: {
            userId,
            role: "OWNER",
          },
        },
      },
    });

    return NextResponse.json({ tenant }, { status: 201 });
  } catch (err: any) {
    console.error("ERROR /api/tenants:", err);
    return NextResponse.json(
      { error: "Erro interno", detail: String(err?.message ?? err) },
      { status: 500 }
    );
  }
}
