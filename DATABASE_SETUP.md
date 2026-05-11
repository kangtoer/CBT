# Database Initialization Guide

## 🚀 Cara Menggunakan Database Seeding

### Development Mode

#### Step 1: Install Dependencies
```bash
npm install
```

#### Step 2: Setup Database
Jalankan seed script untuk inisialisasi database:
```bash
npm run db:seed
```

Output yang diharapkan:
```
🌱 Starting database seed...
✅ Created test user: testuser
✅ Created exam session for user
🌱 Database seeding completed successfully!
```

#### Step 3: Jalankan Aplikasi
```bash
npm run dev
```

Akses aplikasi di: `http://localhost:3000`

---

## 🔍 Cek Status Database

### Via API Endpoint
```bash
# GET - Check health status
curl http://localhost:3000/api/db/health

# Respons:
{
  "status": "healthy",
  "database": "connected",
  "stats": {
    "users": 1,
    "examSessions": 1
  },
  "timestamp": "2026-05-11T10:30:45.123Z"
}
```

```bash
# POST - Verify database connection
curl -X POST http://localhost:3000/api/db/health

# Respons:
{
  "status": "ok",
  "message": "Database connection verified",
  "data": {
    "users": 1,
    "examSessions": 1
  },
  "timestamp": "2026-05-11T10:30:45.123Z"
}
```

---

## 🔄 Reset Database

Jika ingin reset database dan menjalankan seed ulang:

```bash
# Reset database (hapus semua data)
npm run db:reset

# Seed ulang
npm run db:seed
```

---

## 📦 Production Build

```bash
# Build aplikasi
npm run build

# Jalankan production
npm start
```

Middleware akan secara otomatis melewatkan routing tanpa inisialisasi, seed data sudah ada di database PostgreSQL production.

---

## ⚠️ Environment Variables

Pastikan `.env` atau `.env.production` memiliki:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/cbt_db"
DIRECT_URL="postgresql://user:password@localhost:5432/cbt_db"
```

---

## ✅ Verifikasi Seeding Berhasil

1. ✅ Middleware tidak lagi deprecated
2. ✅ Database terinisialisasi saat `npm run db:seed`
3. ✅ API endpoint `/api/db/health` dapat dicek kapan saja
4. ✅ Tidak ada warning dari Next.js tentang middleware
5. ✅ Siap untuk production deployment

Selamat! 🎉 Database Anda sudah fully configured!
