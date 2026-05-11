# CBT (Computerized Based Test) - Setup Guide

## ✅ Konfigurasi Database

Prisma schema sudah dioptimalkan untuk production dengan:
- ✅ PostgreSQL connector
- ✅ Neon connection pooling support
- ✅ Database indexes untuk performa query
- ✅ Cascade delete untuk data integrity

## 🔧 Setup Lokal

### 1. Clone Repository
```bash
git clone https://github.com/kangtoer/CBT.git
cd CBT
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Salin `.env.local.example` ke `.env.local`:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` dengan kredensial Neon Anda:
```env
DATABASE_URL="postgresql://user:password@host.neon.tech/dbname?sslmode=require"
DIRECT_URL="postgresql://user:password@host.neon.tech/dbname?sslmode=require"
```

### 4. Generate Prisma Client
```bash
npm run db:generate
```

### 5. Run Migrations
```bash
npm run db:migrate:deploy
```

### 6. Start Development Server
```bash
npm run dev
```

## 📤 Deploy ke Vercel + Neon

### 1. Setup Environment Variables di Vercel
- Buka project di Vercel dashboard
- Settings → Environment Variables
- Tambahkan `DATABASE_URL` dan `DIRECT_URL` dari Neon

### 2. Deploy
```bash
git push
```

Vercel akan otomatis:
1. Jalankan `npm run db:generate`
2. Build Next.js app
3. Deploy ke production

## 📝 Database Schema

### User Model
```prisma
- id (String, Primary Key)
- username (String, Unique)
- password (String)
- fullName (String, default: "")
- createdAt (DateTime)
- updatedAt (DateTime)
- sessions (ExamSession[])
```

### ExamSession Model
```prisma
- id (String, Primary Key)
- userId (String, Foreign Key)
- examType (String, default: "psaj_ips_9_2026")
- answers (String, JSON format)
- score (Float)
- totalQuestions (Int)
- correctAnswers (Int)
- startTime (DateTime, optional)
- endTime (DateTime, optional)
- completed (Boolean)
- createdAt (DateTime)
- updatedAt (DateTime)
```

## 🔍 Useful Commands

```bash
# Generate Prisma Client
npm run db:generate

# Push schema ke database
npm run db:push

# Create new migration
npm run db:migrate

# Reset database (development only)
npm run db:reset

# Deploy migrations
npm run db:migrate:deploy

# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚨 Important Notes

⚠️ **Password Security**
- Password harus di-hash menggunakan bcryptjs sebelum disimpan
- Jangan pernah simpan password plain text

⚠️ **Environment Variables**
- `.env.local` TIDAK boleh di-commit (sudah di .gitignore)
- Selalu gunakan `.env.local.example` sebagai template

⚠️ **Neon Connection**
- `DATABASE_URL`: Gunakan pool endpoint untuk app
- `DIRECT_URL`: Gunakan direct connection untuk migrations

## 📚 Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Neon Console](https://console.neon.tech/)
- [Next.js Documentation](https://nextjs.org/docs/)
- [Vercel Deployment](https://vercel.com/docs/)

## ✨ Status

- [x] Prisma Schema Optimized
- [x] Database Indexes Added
- [x] Environment Template Created
- [x] Setup Script Ready
- [ ] Password Hashing Implementation (TODO)
- [ ] API Routes (TODO)
- [ ] Authentication Middleware (TODO)

---

**Last Updated**: 2026-05-11
**Version**: 0.2.0
