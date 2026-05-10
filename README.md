# 🎓 CBT IPS Kelas IX - PSAJ 2026

Sistem Computer Based Test (CBT) untuk Penilaian Sumatif Akhir Jenjang IPS Kelas IX Tahun Ajaran 2025/2026 - SMP PGRI 1 Kuwarasan

## 🌐 Live Demo
Deploy ke Vercel gratis! Lihat [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) untuk panduan lengkap.

## ✨ Fitur

- 📝 **4 Tipe Soal**: Pilihan Ganda, PG Kompleks, Benar/Salah, Menjodohkan
- 🔒 **Anti-Cheat**: Fullscreen mode, tab detection, keyboard shortcut blocking
- ⏱️ **Timer**: 90 menit dengan auto-submit
- 📚 **Rangkuman Materi**: 6 bab lengkap dengan pembahasan
- 🔍 **Review Pembahasan**: Kunci jawaban + penjelasan detail
- 👤 **Registrasi**: Peserta buat akun sendiri (username + password)
- 📊 **Scoring**: Otomatis hitung skor dan tampilkan hasil

## 🛠️ Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Prisma ORM (SQLite dev / PostgreSQL prod)
- Zustand (State Management)

## 🚀 Quick Start

### Development (Lokal)
```bash
# Install dependencies
bun install

# Setup database
bun run db:push

# Run development server
bun run dev
```

### Production (Vercel)
Lihat [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 📖 Cara Tambah Soal

Edit file `src/lib/questions.ts`, tambahkan soal baru di array `cbtQuestions`:

```typescript
{
  id: 99,
  type: "pg", // atau "pg_kompleks", "benar_salah", "menjodohkan"
  topic: "Topik Materi",
  question: "Pertanyaan...",
  options: [
    { key: "A", text: "Opsi A" },
    { key: "B", text: "Opsi B" },
    { key: "C", text: "Opsi C" },
    { key: "D", text: "Opsi D" }
  ],
  correctAnswer: "A",
  explanation: "Pembahasan..."
}
```

## 🔧 Switch Database

```bash
# Development (SQLite)
bash scripts/switch-db.sh dev

# Production (PostgreSQL - Neon)
bash scripts/switch-db.sh prod
```

## 📋 Atribusi

**Dibuat Oleh**: Catur Pamungkas, S.Pd., Gr.  
**Guru IPS SMP PGRI 1 Kuwarasan**  
**Follow Channel WA tertera di catatanguruips.blogspot.com**

## 📜 Lisensi

Proyek ini bersifat open-source untuk keperluan pendidikan. Gratis digunakan selamanya.
