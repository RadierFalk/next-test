import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body ?? {};

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "name, email e password são obrigatórios" },
        { status: 400 }
      );
    }

    const emailNormalizado = String(email).trim().toLowerCase();

    const usuarioExistente = await prisma.user.findUnique({
      where: { email: emailNormalizado },
    });

    if (usuarioExistente) {
      return NextResponse.json(
        { error: "Já existe um usuário com esse email" },
        { status: 409 }
      );
    }

    const senhaHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: String(name).trim(),
        email: emailNormalizado,
        password: senhaHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      { message: "Usuário cadastrado com sucesso", user },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Erro em /api/auth/register:", error);

    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}