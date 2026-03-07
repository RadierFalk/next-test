import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken } from "@/lib/session";


//Rota para testar se a sessão está ativa 

export async function GET() {
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

    return NextResponse.json(
      { message: "Sessão válida", session },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro em /api/auth/me:", error);

    return NextResponse.json(
      { error: "Sessão inválida ou expirada" },
      { status: 401 }
    );
  }
}