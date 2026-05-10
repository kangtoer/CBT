# 🚀 Panduan Deployment CBT IPS Kelas IX - Gratis Selamanya

## Strategi: 100% Gratis, Akses Kapanpun & Di Manapun

Kombinasi layanan gratis berikut membuat CBT ini bisa berjalan **selamanya tanpa biaya**:

| Layanan | Fungsi | Biaya |
|---------|--------|-------|
| **GitHub** | Penyimpanan kode & version control | Gratis |
| **Vercel** | Hosting website (serverless) | Gratis |
| **Neon** | Database PostgreSQL cloud | Gratis (0.5 GB) |

---

## Langkah 1: Buat Akun Gratis (5 menit)

### 1a. GitHub (https://github.com)
1. Daftar akun GitHub gratis
2. Buat repository baru bernama `cbt-ips-kelas9`
3. Jangan centang "Add README" (karena kita sudah punya kode)

### 1b. Vercel (https://vercel.com)
1. Daftar akun Vercel gratis (bisa login pakai GitHub)
2. Nanti kita hubungkan dengan repository GitHub

### 1c. Neon Database (https://neon.tech)
1. Daftar akun Neon gratis (bisa login pakai GitHub)
2. Buat project baru bernama `cbt-ips`
3. Pilih region terdekat (Singapore)
4. **SALIN** connection string yang diberikan, formatnya:
   ```
   postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require
   ```

---

## Langkah 2: Upload Kode ke GitHub

### Opsi A: Via GitHub Website (Termudah)
1. Buka repository GitHub yang sudah dibuat
2. Klik "uploading an existing file"
3. Drag & drop semua file project
4. Commit

### Opsi B: Via Git CLI (Lebih Cepat)
```bash
# Di folder project, jalankan:
git init
git add .
git commit -m "CBT IPS Kelas IX - Initial Release"
git branch -M main
git remote add origin https://github.com/USERNAME/cbt-ips-kelas9.git
git push -u origin main
```

---

## Langkah 3: Konfigurasi Database Neon

1. Di dashboard Neon, buat tabel dengan menjalankan SQL berikut di SQL Editor:

```sql
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ExamSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "examType" TEXT NOT NULL DEFAULT 'psaj_ips_9_2026',
    "answers" TEXT NOT NULL DEFAULT '{}',
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalQuestions" INTEGER NOT NULL DEFAULT 0,
    "correctAnswers" INTEGER NOT NULL DEFAULT 0,
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ExamSession_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

ALTER TABLE "ExamSession" ADD CONSTRAINT "ExamSession_userId_fkey" 
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

---

## Langkah 4: Deploy ke Vercel

### SEBELUM deploy: Ganti Prisma Schema

1. Buka file `prisma/schema.prisma`
2. **Ganti seluruh isinya** dengan isi file `prisma/schema.production.prisma` 
   (yang menggunakan PostgreSQL sebagai provider)
3. Commit dan push ke GitHub

### Deploy ke Vercel:
1. Buka https://vercel.com/dashboard
2. Klik **"Add New..."** → **"Project"**
3. Pilih repository `cbt-ips-kelas9` dari GitHub
4. Di bagian **Environment Variables**, tambahkan:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | `postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require` |
| `DIRECT_URL` | `postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require` |

*(Ganti value dengan connection string dari Neon)*

5. Klik **"Deploy"**
6. Tunggu hingga build selesai (2-3 menit)
7. ✅ Website CBT Anda sudah online!

### URL Website Anda:
- Default: `https://cbt-ips-kelas9.vercel.app`
- Bisa diganti ke custom domain gratis

---

## Langkah 5: Custom Domain (Opsional, Gratis)

### Subdomain Vercel (Gratis)
- Di Vercel Dashboard → Settings → Domains
- Bisa pilih nama seperti: `cbt-ips-kelas9.vercel.app`

### Custom Domain (Jika punya)
- Jika punya domain sendiri, bisa dihubungkan gratis di Vercel
- Atau gunakan subdomain gratis dari Freenom/dll

---

## 🔄 Cara Update / Kembangkan CBT

### Tambah Soal Baru:
1. Edit file `src/lib/questions.ts`
2. Tambah soal baru di array `cbtQuestions`
3. Commit & push ke GitHub
4. Vercel akan **otomatis rebuild dan deploy** (1-2 menit)

### Tambah Fitur:
1. Edit kode di lokal
2. Test dengan `bun run dev`
3. Jika sudah OK, commit & push
4. Vercel auto-deploy!

### Workflow Pengembangan:
```
Edit Kode → Test Lokal → Git Commit → Git Push → Vercel Auto-Deploy
```

---

## 📊 Monitoring (Semua Gratis)

### Vercel Analytics:
- Di Vercel Dashboard → Analytics
- Lihat jumlah pengunjung, performa, dll

### Neon Monitoring:
- Di Neon Dashboard
- Lihat penggunaan database, query, dll

---

## 💡 Tips Agar Tetap Gratis Selamanya

1. **Neon Free Tier**: 0.5 GB storage, cukup untuk ribuan peserta
2. **Vercel Free Tier**: 100 GB bandwidth/bulan, cukup untuk penggunaan sekolah
3. **GitHub Free Tier**: Unlimited repository, cukup untuk kode
4. **Optimasi Database**: Hapus session ujian lama secara berkala
5. **Tidak perlu kartu kredit** untuk semua layanan di atas

---

## 🆘 Troubleshooting

### Build Error di Vercel:
- Pastikan `DATABASE_URL` dan `DIRECT_URL` sudah diisi
- Pastikan schema menggunakan `provider = "postgresql"`

### Database Connection Error:
- Cek Neon dashboard, pastikan database aktif
- Neon database sleep setelah 5 menit tidak aktif (normal, auto-wake saat diakses)

### 404 Error:
- Pastikan file `src/app/page.tsx` ada
- Cek Vercel build logs untuk detail error

---

## 📱 Bagikan ke Peserta

Setelah deploy, bagikan URL CBT ke peserta:
```
https://cbt-ips-kelas9.vercel.app
```

Peserta hanya perlu:
1. Buka URL di browser (HP/laptop)
2. Daftar akun (username + password)
3. Pelajari rangkuman materi
4. Mulai ujian!

---

## 🏗️ Arsitektur

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   GitHub    │────▶│    Vercel    │────▶│  Neon DB    │
│  (Kode)     │     │  (Hosting)   │     │ (PostgreSQL)│
│  GRATIS     │     │  GRATIS      │     │  GRATIS     │
└─────────────┘     └──────────────┘     └─────────────┘
      │                    │
      │  Auto-deploy       │  URL: cbt-ips-kelas9.vercel.app
      │  saat push         │  Akses dari mana saja!
      └────────────────────┘
```

Dibuat Oleh: Catur Pamungkas, S.Pd., Gr.
Guru IPS SMP PGRI 1 Kuwarasan
Follow Channel WA tertera di catatanguruips.blogspot.com
