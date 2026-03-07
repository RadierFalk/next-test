import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifySessionToken } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Não autenticado" },
        { status: 401 }
      );
    }

    const session = await verifySessionToken(token);
    const userId = session.userId;

    const body = await req.json();
    const { name } = body ?? {};

    if (!name || !String(name).trim()) {
      return NextResponse.json(
        { error: "name é obrigatório" },
        { status: 400 }
      );
    }

    const tenant = await prisma.tenant.create({
      data: {
        name: String(name).trim(),
        memberships: {
          create: {
            userId,
            role: "OWNER",
          },
        },
      },
      include: {
        memberships: true,
      },
    });

    return NextResponse.json({ tenant }, { status: 201 });
  } catch (error) {
    console.error("Erro em /api/tenants:", error);

    return NextResponse.json(
      { error: "Sessão inválida ou erro interno" },
      { status: 401 }
    );
  }
}