import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username dan password wajib diisi" },
        { status: 400 }
      );
    }

    const user = await db.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Username tidak ditemukan" },
        { status: 404 }
      );
    }

    const hashedPassword = await hashPassword(password);

    if (user.password !== hashedPassword) {
      return NextResponse.json(
        { error: "Password salah" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      token: `token_${user.id}_${Date.now()}`,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat login" },
      { status: 500 }
    );
  }
}
