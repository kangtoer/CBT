import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, examType } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID wajib diisi" },
        { status: 400 }
      );
    }

    // Check for existing incomplete session
    const existingSession = await db.examSession.findFirst({
      where: { userId, completed: false },
    });

    if (existingSession) {
      return NextResponse.json({
        id: existingSession.id,
        resumed: true,
      });
    }

    const session = await db.examSession.create({
      data: {
        userId,
        examType: examType || "psaj_ips_9_2026",
        startTime: new Date(),
      },
    });

    return NextResponse.json({
      id: session.id,
      resumed: false,
    });
  } catch (error) {
    console.error("Start exam error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat memulai ujian" },
      { status: 500 }
    );
  }
}
