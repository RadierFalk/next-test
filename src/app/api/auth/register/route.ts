import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, tenantName, tenantCode } = body ?? {};

    if (!name || !email || !password || !tenantName || !tenantCode) {
      return NextResponse.json(
        {
          error:
            "name, email, password, tenantName e tenantCode são obrigatórios",
        },
        { status: 400 }
      );
    }

    const normalizedName = String(name).trim();
    const normalizedEmail = String(email).trim().toLowerCase();
    const normalizedTenantName = String(tenantName).trim();
    const normalizedTenantCode = String(tenantCode).trim().toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Já existe um usuário com esse email" },
        { status: 409 }
      );
    }

    const existingTenant = await prisma.tenant.findUnique({
      where: { code: normalizedTenantCode },
    });

    if (
      existingTenant &&
      existingTenant.name.trim().toLowerCase() !==
        normalizedTenantName.toLowerCase()
    ) {
      return NextResponse.json(
        {
          error:
            "Esse tenantCode já pertence a outra empresa com nome diferente",
        },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: normalizedName,
          email: normalizedEmail,
          password: passwordHash,
        },
      });

      if (!existingTenant) {
        const tenant = await tx.tenant.create({
          data: {
            name: normalizedTenantName,
            code: normalizedTenantCode,
          },
        });

        const membership = await tx.membership.create({
          data: {
            userId: user.id,
            tenantId: tenant.id,
            role: "OWNER",
          },
        });

        return {
          user,
          tenant,
          membership,
        };
      }

      const membership = await tx.membership.create({
        data: {
          userId: user.id,
          tenantId: existingTenant.id,
          role: "PENDING",
        },
      });

      return {
        user,
        tenant: existingTenant,
        membership,
      };
    });

    return NextResponse.json(
      {
        message: "Usuário cadastrado com sucesso",
        user: {
          id: result.user.id,
          name: result.user.name,
          email: result.user.email,
        },
        tenant: {
          id: result.tenant.id,
          name: result.tenant.name,
          code: result.tenant.code,
        },
        membership: {
          id: result.membership.id,
          role: result.membership.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro em /api/auth/register:", error);

    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}