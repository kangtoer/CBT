#!/bin/bash
# Script untuk switch antara development (SQLite) dan production (PostgreSQL) schema
# Cara pakai:
#   bash scripts/switch-db.sh dev       → Untuk development lokal (SQLite)
#   bash scripts/switch-db.sh prod      → Untuk deploy ke Vercel (PostgreSQL)

SCHEMA_DIR="prisma"
PROD_SCHEMA="$SCHEMA_DIR/schema.production.prisma"
MAIN_SCHEMA="$SCHEMA_DIR/schema.prisma"

case "$1" in
  dev)
    echo "📦 Switching to DEVELOPMENT mode (SQLite)..."
    cat > "$MAIN_SCHEMA" << 'EOF'
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  username  String   @unique
  password  String
  fullName  String   @default("")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  sessions  ExamSession[]
}

model ExamSession {
  id             String    @id @default(cuid())
  userId         String
  user           User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  examType       String    @default("psaj_ips_9_2026")
  answers        String    @default("{}")
  score          Float     @default(0)
  totalQuestions  Int      @default(0)
  correctAnswers  Int      @default(0)
  startTime      DateTime?
  endTime        DateTime?
  completed      Boolean   @default(false)
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
}
EOF
    echo 'DATABASE_URL="file:./dev.db"' > .env
    echo "✅ Development mode active (SQLite)"
    echo "Run: bun run db:push && bun run dev"
    ;;

  prod)
    echo "🚀 Switching to PRODUCTION mode (PostgreSQL)..."
    cp "$PROD_SCHEMA" "$MAIN_SCHEMA"
    echo "✅ Production mode active (PostgreSQL)"
    echo ""
    echo "⚠️  Pastikan .env sudah berisi DATABASE_URL dan DIRECT_URL dari Neon!"
    echo ""
    echo "Lalu: bun run db:push"
    ;;

  *)
    echo "CBT IPS Kelas IX - Database Switcher"
    echo ""
    echo "Usage:"
    echo "  bash scripts/switch-db.sh dev    → Switch ke SQLite (development lokal)"
    echo "  bash scripts/switch-db.sh prod   → Switch ke PostgreSQL (production/Vercel)"
    ;;
esac
