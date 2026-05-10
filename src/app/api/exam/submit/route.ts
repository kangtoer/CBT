import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionId, answers, score, correctAnswers, totalQuestions } = body;

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID wajib diisi" },
        { status: 400 }
      );
    }

    const session = await db.examSession.update({
      where: { id: sessionId },
      data: {
        answers: JSON.stringify(answers),
        score,
        correctAnswers,
        totalQuestions,
        endTime: new Date(),
        completed: true,
      },
    });

    return NextResponse.json({
      id: session.id,
      score: session.score,
      correctAnswers: session.correctAnswers,
      totalQuestions: session.totalQuestions,
    });
  } catch (error) {
    console.error("Submit exam error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengumpulkan ujian" },
      { status: 500 }
    );
  }
}
