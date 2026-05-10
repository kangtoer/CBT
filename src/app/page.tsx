'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useAppStore, type AppView } from '@/store/useAppStore';
import {
  getAllQuestions,
  getQuestionsByType,
  shuffleArray,
  type Question,
  type PGQuestion,
  type PGKompleksQuestion,
  type BenarSalahQuestion,
  type MenjodohkanQuestion,
  studyMaterial,
} from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  BookOpen,
  LogIn,
  UserPlus,
  Play,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Clock,
  Shield,
  GraduationCap,
  Eye,
  EyeOff,
  AlertTriangle,
  Trophy,
  RotateCcw,
  Home,
  BookMarked,
  Star,
  Users,
  ChevronRight,
  Maximize,
  Minimize,
  Info,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// =================== LANDING PAGE ===================
function LandingPage() {
  const { setCurrentView } = useAppStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <GraduationCap className="w-10 h-10" />
              <h1 className="text-3xl font-bold">CBT IPS Kelas IX</h1>
            </div>
            <p className="text-emerald-100 text-lg">
              Penilaian Sumatif Akhir Jenjang 2025/2026
            </p>
            <p className="text-emerald-200 text-sm mt-1">
              SMP PGRI 1 Kuwarasan
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Login Card */}
          <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-lg cursor-pointer" onClick={() => setCurrentView('login')}>
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                <LogIn className="w-8 h-8 text-emerald-700" />
              </div>
              <CardTitle className="text-xl text-emerald-800">Masuk</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Sudah punya akun? Masuk untuk mengerjakan ujian</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Masuk <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>

          {/* Register Card */}
          <Card className="border-2 border-teal-200 hover:border-teal-400 transition-all hover:shadow-lg cursor-pointer" onClick={() => setCurrentView('register')}>
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-3">
                <UserPlus className="w-8 h-8 text-teal-700" />
              </div>
              <CardTitle className="text-xl text-teal-800">Daftar</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Belum punya akun? Daftar terlebih dahulu</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="bg-teal-600 hover:bg-teal-700">
                Daftar <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="text-center p-4">
            <BookOpen className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
            <h3 className="font-semibold text-sm">Rangkuman Materi</h3>
            <p className="text-xs text-gray-500">Pelajari materi sebelum ujian</p>
          </Card>
          <Card className="text-center p-4">
            <Shield className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
            <h3 className="font-semibold text-sm">Full Screen Mode</h3>
            <p className="text-xs text-gray-500">Ujian berjalan fokus penuh</p>
          </Card>
          <Card className="text-center p-4">
            <Star className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
            <h3 className="font-semibold text-sm">4 Tipe Soal</h3>
            <p className="text-xs text-gray-500">PG, PG Kompleks, B/S, Menjodohkan</p>
          </Card>
        </div>

        {/* Attribution */}
        <div className="text-center py-4 border-t border-emerald-100">
          <p className="text-sm text-gray-600 font-medium">
            Dibuat Oleh : <span className="text-emerald-700">Catur Pamungkas, S.Pd., Gr.</span>
          </p>
          <p className="text-xs text-gray-500">
            Guru IPS SMP PGRI 1 Kuwarasan
          </p>
          <p className="text-xs text-teal-600 mt-1">
            Follow Channel WA tertera di catatanguruips.blogspot.com
          </p>
        </div>
      </main>
    </div>
  );
}

// =================== LOGIN FORM ===================
function LoginForm() {
  const { setCurrentView, setUser, setAuthToken } = useAppStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login gagal');
        return;
      }

      setUser({ id: data.id, username: data.username, fullName: data.fullName });
      setAuthToken(data.token);
      setCurrentView('dashboard');
      toast({ title: 'Berhasil masuk!', description: `Selamat datang, ${data.username}` });
    } catch {
      setError('Terjadi kesalahan koneksi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-emerald-200">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
            <LogIn className="w-8 h-8 text-emerald-700" />
          </div>
          <CardTitle className="text-2xl text-emerald-800">Masuk ke CBT</CardTitle>
          <p className="text-gray-500 text-sm">IPS Kelas IX - PSAJ 2026</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
              {loading ? 'Memproses...' : 'Masuk'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center flex-col gap-2">
          <p className="text-sm text-gray-500">
            Belum punya akun?{' '}
            <button onClick={() => setCurrentView('register')} className="text-emerald-600 font-semibold hover:underline">
              Daftar di sini
            </button>
          </p>
          <button onClick={() => setCurrentView('landing')} className="text-xs text-gray-400 hover:text-gray-600">
            ← Kembali ke beranda
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}

// =================== REGISTER FORM ===================
function RegisterForm() {
  const { setCurrentView, setUser, setAuthToken } = useAppStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak sama');
      return;
    }

    if (password.length < 4) {
      setError('Password minimal 4 karakter');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, fullName }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Registrasi gagal');
        return;
      }

      // Auto login after register
      const loginRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const loginData = await loginRes.json();
      setUser({ id: loginData.id, username: loginData.username, fullName: loginData.fullName });
      setAuthToken(loginData.token);
      setCurrentView('dashboard');
      toast({ title: 'Registrasi berhasil!', description: `Selamat datang, ${username}` });
    } catch {
      setError('Terjadi kesalahan koneksi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-teal-200">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-3">
            <UserPlus className="w-8 h-8 text-teal-700" />
          </div>
          <CardTitle className="text-2xl text-teal-800">Daftar Akun</CardTitle>
          <p className="text-gray-500 text-sm">Buat akun untuk mengerjakan CBT</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="fullName">Nama Lengkap</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Buat username (min. 3 karakter)"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Buat password (min. 4 karakter)"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Ulangi password"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={loading}>
              {loading ? 'Memproses...' : 'Daftar'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center flex-col gap-2">
          <p className="text-sm text-gray-500">
            Sudah punya akun?{' '}
            <button onClick={() => setCurrentView('login')} className="text-teal-600 font-semibold hover:underline">
              Masuk di sini
            </button>
          </p>
          <button onClick={() => setCurrentView('landing')} className="text-xs text-gray-400 hover:text-gray-600">
            ← Kembali ke beranda
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}

// =================== DASHBOARD ===================
function Dashboard() {
  const { user, setCurrentView, setExamQuestions, setExamStartTime, setTotalQuestions, resetExam } = useAppStore();

  const startExam = () => {
    resetExam();
    const questions = shuffleArray(getAllQuestions());
    setExamQuestions(questions);
    setTotalQuestions(questions.length);
    setCurrentView('exam');
  };

  const startExamByType = (type: string) => {
    resetExam();
    const questions = shuffleArray(getQuestionsByType(type as any));
    setExamQuestions(questions);
    setTotalQuestions(questions.length);
    setCurrentView('exam');
  };

  const pgCount = getQuestionsByType('pg').length;
  const pgkCount = getQuestionsByType('pg_kompleks').length;
  const bsCount = getQuestionsByType('benar_salah').length;
  const mjCount = getQuestionsByType('menjodohkan').length;
  const total = getAllQuestions().length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex flex-col">
      <header className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">CBT IPS Kelas IX</h1>
              <p className="text-emerald-200 text-xs">PSAJ 2025/2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="text-sm">{user?.username}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-emerald-800 mb-1">Selamat Datang, {user?.fullName || user?.username}!</h2>
          <p className="text-gray-600">Pilih menu untuk memulai persiapan ujian</p>
        </div>

        {/* Exam Options */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Full Exam */}
          <Card className="border-2 border-emerald-300 hover:border-emerald-500 transition-all cursor-pointer hover:shadow-lg" onClick={startExam}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <CardTitle className="text-lg text-emerald-800">Ujian Lengkap</CardTitle>
                  <p className="text-sm text-gray-500">{total} soal semua tipe</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{pgCount} PG</Badge>
                <Badge variant="secondary">{pgkCount} PG Kompleks</Badge>
                <Badge variant="secondary">{bsCount} B/S</Badge>
                <Badge variant="secondary">{mjCount} Menjodohkan</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Study Material */}
          <Card className="border-2 border-teal-300 hover:border-teal-500 transition-all cursor-pointer hover:shadow-lg" onClick={() => setCurrentView('study')}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <BookMarked className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <CardTitle className="text-lg text-teal-800">Rangkuman Materi</CardTitle>
                  <p className="text-sm text-gray-500">Pelajari sebelum ujian</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">6 Bab Materi</Badge>
                <Badge variant="secondary">Pembahasan Lengkap</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Practice by Type */}
        <h3 className="text-lg font-semibold text-emerald-800 mb-3">Latihan Per Tipe Soal</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <Card className="cursor-pointer hover:shadow-md transition-all text-center p-4" onClick={() => startExamByType('pg')}>
            <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
            <p className="font-semibold text-sm">Pilihan Ganda</p>
            <p className="text-xs text-gray-500">{pgCount} soal</p>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-all text-center p-4" onClick={() => startExamByType('pg_kompleks')}>
            <Star className="w-8 h-8 mx-auto text-amber-600 mb-2" />
            <p className="font-semibold text-sm">PG Kompleks</p>
            <p className="text-xs text-gray-500">{pgkCount} soal</p>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-all text-center p-4" onClick={() => startExamByType('benar_salah')}>
            <Info className="w-8 h-8 mx-auto text-blue-600 mb-2" />
            <p className="font-semibold text-sm">Benar / Salah</p>
            <p className="text-xs text-gray-500">{bsCount} soal</p>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-all text-center p-4" onClick={() => startExamByType('menjodohkan')}>
            <BookOpen className="w-8 h-8 mx-auto text-purple-600 mb-2" />
            <p className="font-semibold text-sm">Menjodohkan</p>
            <p className="text-xs text-gray-500">{mjCount} soal</p>
          </Card>
        </div>

        {/* Attribution */}
        <div className="text-center py-4 border-t border-emerald-100">
          <p className="text-sm text-gray-600 font-medium">
            Dibuat Oleh : <span className="text-emerald-700">Catur Pamungkas, S.Pd., Gr.</span>
          </p>
          <p className="text-xs text-gray-500">
            Guru IPS SMP PGRI 1 Kuwarasan
          </p>
          <p className="text-xs text-teal-600 mt-1">
            Follow Channel WA tertera di catatanguruips.blogspot.com
          </p>
        </div>
      </main>
    </div>
  );
}

// =================== STUDY MATERIAL ===================
function StudyMaterial() {
  const { setCurrentView } = useAppStore();
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex flex-col">
      <header className="bg-gradient-to-r from-teal-700 to-emerald-700 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button variant="ghost" className="text-white hover:bg-teal-600" onClick={() => setCurrentView('dashboard')}>
            <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
          </Button>
          <h1 className="text-xl font-bold">Rangkuman Materi</h1>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-1">{studyMaterial.title}</h2>
          <p className="text-gray-600">Pelajari materi berikut untuk mempersiapkan ujian</p>
        </div>

        <div className="space-y-4">
          {studyMaterial.sections.map((section, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader
                className="cursor-pointer hover:bg-teal-50 transition-colors"
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-teal-800">{section.title}</CardTitle>
                  <ChevronRight className={`w-5 h-5 text-teal-600 transition-transform ${expandedSection === index ? 'rotate-90' : ''}`} />
                </div>
              </CardHeader>
              {expandedSection === index && (
                <CardContent className="pt-0">
                  <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {section.content.split('\n').map((line, i) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <h3 key={i} className="text-base font-bold text-teal-700 mt-3 mb-1">{line.replace(/\*\*/g, '')}</h3>;
                      }
                      if (line.startsWith('- ')) {
                        return <p key={i} className="ml-4">• {line.substring(2)}</p>;
                      }
                      if (line.match(/^\d+\./)) {
                        return <p key={i} className="ml-4">{line}</p>;
                      }
                      if (line.trim() === '') {
                        return <br key={i} />;
                      }
                      // Bold inline
                      const parts = line.split(/(\*\*[^*]+\*\*)/g);
                      return (
                        <p key={i}>
                          {parts.map((part, j) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={j} className="text-teal-800">{part.replace(/\*\*/g, '')}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      );
                    })}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

// =================== MENJODOHKAN COMPONENT ===================
function MenjodohkanComponent({ question, currentAnswers, onAnswerChange }: {
  question: MenjodohkanQuestion;
  currentAnswers: Record<string, string>;
  onAnswerChange: (answers: Record<string, string>) => void;
}) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [shuffledRight] = useState(() => shuffleArray(question.rightItems));

  const handleRightClick = (rightId: string) => {
    if (!selectedLeft) {
      // Find next unmatched left
      const unmatchedLeft = question.leftItems.find((l) => !currentAnswers[l.id]);
      if (unmatchedLeft) {
        onAnswerChange({ ...currentAnswers, [unmatchedLeft.id]: rightId });
      }
    } else {
      onAnswerChange({ ...currentAnswers, [selectedLeft]: rightId });
      setSelectedLeft(null);
    }
  };

  const handleLeftClick = (leftId: string) => {
    if (selectedLeft === leftId) {
      setSelectedLeft(null);
    } else {
      setSelectedLeft(leftId);
    }
  };

  const handleResetLeft = (leftId: string) => {
    const newAnswers = { ...currentAnswers };
    delete newAnswers[leftId];
    onAnswerChange(newAnswers);
  };

  return (
    <>
      <p className="text-base font-medium mb-3 whitespace-pre-wrap">{question.question}</p>
      <p className="text-xs text-gray-500 mb-3">Klik item di kolom kiri, lalu klik pasangan di kolom kanan. Klik item kiri yang sudah dipasangkan untuk menghapus pasangan.</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <p className="font-semibold text-sm text-gray-600 mb-2">Kolom Kiri</p>
          {question.leftItems.map((left) => {
            const isSelected = selectedLeft === left.id;
            const hasMatch = !!currentAnswers[left.id];
            const matchText = hasMatch
              ? question.rightItems.find(r => r.id === currentAnswers[left.id])?.text || '?'
              : '';
            return (
              <button
                key={left.id}
                className={`w-full p-3 rounded-lg border text-left text-sm transition-all ${
                  isSelected
                    ? 'bg-purple-200 border-purple-500 ring-2 ring-purple-300'
                    : hasMatch
                    ? 'bg-purple-50 border-purple-300'
                    : 'bg-white border-purple-200 hover:border-purple-400 hover:bg-purple-50'
                }`}
                onClick={() => handleLeftClick(left.id)}
              >
                <p className="font-medium">{left.text}</p>
                {hasMatch && (
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-purple-600">→ {matchText}</p>
                    <button
                      className="text-xs text-red-500 hover:text-red-700 underline"
                      onClick={(e) => { e.stopPropagation(); handleResetLeft(left.id); }}
                    >
                      Hapus
                    </button>
                  </div>
                )}
              </button>
            );
          })}
        </div>
        <div className="space-y-3">
          <p className="font-semibold text-sm text-gray-600 mb-2">Kolom Kanan</p>
          {shuffledRight.map((right) => {
            const isUsed = Object.values(currentAnswers).includes(right.id);
            return (
              <button
                key={right.id}
                className={`w-full p-3 rounded-lg border text-left text-sm transition-all ${
                  isUsed
                    ? 'bg-gray-100 border-gray-300 opacity-50 cursor-not-allowed'
                    : 'bg-white border-teal-200 hover:border-teal-400 hover:bg-teal-50 cursor-pointer'
                }`}
                disabled={isUsed}
                onClick={() => handleRightClick(right.id)}
              >
                {right.text}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

// =================== EXAM VIEW ===================
function ExamView() {
  const {
    examQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setAnswer,
    setExamStartTime,
    setExamCompleted,
    setExamScore,
    setCorrectCount,
    user,
    sessionId,
    setSessionId,
    violationCount,
    incrementViolation,
  } = useAppStore();

  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const examStartedRef = useRef(false);

  const currentQuestion = examQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / examQuestions.length) * 100;

  // Start exam session
  useEffect(() => {
    if (!examStartedRef.current && user) {
      examStartedRef.current = true;
      setExamStartTime(Date.now());
      setTimeLeft(90 * 60);

      fetch('/api/exam/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, examType: 'psaj_ips_9_2026' }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) setSessionId(data.id);
        })
        .catch(console.error);
    }
  }, [user, setExamStartTime, setSessionId]);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fullscreen enforcement
  const enterFullscreen = useCallback(() => {
    const elem = document.documentElement as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
    setIsFullscreen(true);
  }, []);

  const exitFullscreen = useCallback(() => {
    const doc = document as any;
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    }
    setIsFullscreen(false);
  }, []);

  // Auto-enter fullscreen on mount
  useEffect(() => {
    enterFullscreen();
    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, [enterFullscreen]);

  // Detect visibility/tab change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        incrementViolation();
        toast({
          title: 'Peringatan!',
          description: `Anda meninggalkan halaman ujian (Pelanggaran ke-${violationCount + 1}). Ujian bisa otomatis dikumpulkan!`,
          variant: 'destructive',
        });

        if (violationCount >= 2) {
          handleAutoSubmit();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [violationCount, incrementViolation]);

  // Detect fullscreen exit
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
        incrementViolation();
        toast({
          title: 'Peringatan!',
          description: 'Anda keluar dari mode layar penuh. Klik tombol untuk kembali ke fullscreen.',
          variant: 'destructive',
        });
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [incrementViolation]);

  // Prevent keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || 
          (e.ctrlKey && e.key === 't') || 
          (e.ctrlKey && e.key === 'w') ||
          (e.ctrlKey && e.key === 'n') ||
          (e.altKey && e.key === 'Tab')) {
        e.preventDefault();
        incrementViolation();
        toast({
          title: 'Peringatan!',
          description: 'Shortcut keyboard tidak diperbolehkan selama ujian.',
          variant: 'destructive',
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [incrementViolation]);

  // Prevent right-click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Auto-submit function
  const handleAutoSubmit = useCallback(() => {
    calculateAndSubmit();
  }, [answers, examQuestions, sessionId]);

  // Calculate score and submit
  const calculateAndSubmit = async () => {
    let correctCount = 0;

    examQuestions.forEach((q) => {
      const userAnswer = answers[q.id];
      if (!userAnswer) return;

      if (q.type === 'pg') {
        const pgQ = q as PGQuestion;
        if (userAnswer === pgQ.correctAnswer) correctCount++;
      } else if (q.type === 'pg_kompleks') {
        const pgkQ = q as PGKompleksQuestion;
        if (userAnswer === pgkQ.correctAnswer) correctCount++;
      } else if (q.type === 'benar_salah') {
        const bsQ = q as BenarSalahQuestion;
        const userBsAnswer = userAnswer as Record<string, string>;
        const bsAnswerStr = bsQ.statements
          .map((s) => (userBsAnswer[s.number] === (s.isCorrect ? 'B' : 'S') ? '1' : '0'))
          .join('');
        const correctStr = bsQ.statements.map(() => '1').join('');
        if (bsAnswerStr === correctStr) correctCount++;
      } else if (q.type === 'menjodohkan') {
        const mjQ = q as MenjodohkanQuestion;
        const userMjAnswer = userAnswer as Record<string, string>;
        let allCorrect = true;
        for (const pair of mjQ.correctPairs) {
          if (userMjAnswer[pair.left] !== pair.right) {
            allCorrect = false;
            break;
          }
        }
        if (allCorrect) correctCount++;
      }
    });

    const score = examQuestions.length > 0 ? Math.round((correctCount / examQuestions.length) * 100) : 0;

    setExamScore(score);
    setCorrectCount(correctCount);
    setExamCompleted(true);

    // Submit to API
    if (sessionId) {
      try {
        await fetch('/api/exam/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            answers,
            score,
            correctAnswers: correctCount,
            totalQuestions: examQuestions.length,
          }),
        });
      } catch (error) {
        console.error('Submit error:', error);
      }
    }

    // Exit fullscreen
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    const { setCurrentView } = useAppStore.getState();
    setCurrentView('result');
  };

  // Format time
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Handle answer for PG
  const handlePGAnswer = (questionId: number, value: string) => {
    setAnswer(questionId, value);
  };

  // Handle answer for Benar/Salah
  const handleBSAnswer = (questionId: number, statementNumber: number, value: string) => {
    const currentAnswer = (answers[questionId] as Record<string, string>) || {};
    setAnswer(questionId, { ...currentAnswer, [statementNumber]: value });
  };

  // Get question type label
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'pg': return 'Pilihan Ganda';
      case 'pg_kompleks': return 'PG Kompleks';
      case 'benar_salah': return 'Benar / Salah';
      case 'menjodohkan': return 'Menjodohkan';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'pg': return 'bg-emerald-100 text-emerald-800';
      case 'pg_kompleks': return 'bg-amber-100 text-amber-800';
      case 'benar_salah': return 'bg-blue-100 text-blue-800';
      case 'menjodohkan': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />
              <span className="font-bold text-sm">CBT IPS Kelas IX</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm">
                <Clock className="w-4 h-4" />
                <span className={`font-mono font-bold ${timeLeft < 300 ? 'text-red-300 animate-pulse' : ''}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              {violationCount > 0 && (
                <Badge variant="destructive" className="text-xs">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {violationCount} Pelanggaran
                </Badge>
              )}
              {!isFullscreen && (
                <Button size="sm" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-xs" onClick={enterFullscreen}>
                  <Maximize className="w-3 h-3 mr-1" /> Fullscreen
                </Button>
              )}
            </div>
          </div>
          <div className="mt-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-emerald-200 mt-1">
              <span>Soal {currentQuestionIndex + 1} dari {examQuestions.length}</span>
              <span>{Math.round(progress)}% selesai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge className={getTypeColor(currentQuestion.type)}>
                {getTypeLabel(currentQuestion.type)}
              </Badge>
              <Badge variant="outline">{currentQuestion.topic}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* PG Question */}
            {currentQuestion.type === 'pg' && (() => {
              const q = currentQuestion as PGQuestion;
              return (
                <>
                  <p className="text-base font-medium mb-4 whitespace-pre-wrap">{q.question}</p>
                  <RadioGroup
                    value={(answers[q.id] as string) || ''}
                    onValueChange={(value) => handlePGAnswer(q.id, value)}
                    className="space-y-3"
                  >
                    {q.options.map((opt) => (
                      <div key={opt.key} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200">
                        <RadioGroupItem value={opt.key} id={`q${q.id}_${opt.key}`} className="mt-0.5" />
                        <Label htmlFor={`q${q.id}_${opt.key}`} className="cursor-pointer flex-1 text-sm leading-relaxed">
                          <span className="font-semibold mr-2">{opt.key}.</span>{opt.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </>
              );
            })()}

            {/* PG Kompleks Question */}
            {currentQuestion.type === 'pg_kompleks' && (() => {
              const q = currentQuestion as PGKompleksQuestion;
              return (
                <>
                  <p className="text-base font-medium mb-3 whitespace-pre-wrap">{q.question}</p>
                  <div className="bg-amber-50 rounded-lg p-4 mb-4 space-y-2">
                    {q.statements.map((s) => (
                      <p key={s.number} className="text-sm">
                        <span className="font-semibold">{s.number})</span> {s.text.replace(/\(.*?\)/g, '')}
                      </p>
                    ))}
                  </div>
                  <RadioGroup
                    value={(answers[q.id] as string) || ''}
                    onValueChange={(value) => handlePGAnswer(q.id, value)}
                    className="space-y-3"
                  >
                    {q.options.map((opt) => (
                      <div key={opt.key} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors border border-transparent hover:border-amber-200">
                        <RadioGroupItem value={opt.key} id={`q${q.id}_${opt.key}`} className="mt-0.5" />
                        <Label htmlFor={`q${q.id}_${opt.key}`} className="cursor-pointer flex-1 text-sm leading-relaxed">
                          <span className="font-semibold mr-2">{opt.key}.</span>{opt.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </>
              );
            })()}

            {/* Benar/Salah Question */}
            {currentQuestion.type === 'benar_salah' && (() => {
              const q = currentQuestion as BenarSalahQuestion;
              const currentBsAnswers = (answers[q.id] as Record<string, string>) || {};
              return (
                <>
                  <p className="text-base font-medium mb-3 whitespace-pre-wrap">{q.question}</p>
                  <div className="space-y-3">
                    {q.statements.map((s) => (
                      <div key={s.number} className="flex items-center gap-4 p-3 rounded-lg bg-blue-50">
                        <span className="font-semibold text-sm min-w-[2rem]">{s.number})</span>
                        <p className="text-sm flex-1">{s.text}</p>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant={currentBsAnswers[s.number] === 'B' ? 'default' : 'outline'}
                            className={currentBsAnswers[s.number] === 'B' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                            onClick={() => handleBSAnswer(q.id, s.number, 'B')}
                          >
                            B
                          </Button>
                          <Button
                            size="sm"
                            variant={currentBsAnswers[s.number] === 'S' ? 'default' : 'outline'}
                            className={currentBsAnswers[s.number] === 'S' ? 'bg-red-600 hover:bg-red-700' : ''}
                            onClick={() => handleBSAnswer(q.id, s.number, 'S')}
                          >
                            S
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}

            {/* Menjodohkan Question */}
            {currentQuestion.type === 'menjodohkan' && (
              <MenjodohkanComponent
                question={currentQuestion as MenjodohkanQuestion}
                currentAnswers={(answers[currentQuestion.id] as Record<string, string>) || {}}
                onAnswerChange={(ans) => {
                  setMatchingAnswers(ans);
                  setAnswer(currentQuestion.id, ans);
                }}
              />
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Sebelumnya
          </Button>

          <div className="flex gap-2">
            {/* Question Navigator */}
            <div className="hidden md:flex flex-wrap gap-1 max-w-md">
              {examQuestions.slice(Math.max(0, currentQuestionIndex - 5), Math.min(examQuestions.length, currentQuestionIndex + 6)).map((q, i) => {
                const realIndex = Math.max(0, currentQuestionIndex - 5) + i;
                const isAnswered = answers[q.id] !== undefined;
                const isCurrent = realIndex === currentQuestionIndex;
                return (
                  <button
                    key={q.id}
                    className={`w-8 h-8 rounded text-xs font-medium transition-all ${
                      isCurrent
                        ? 'bg-emerald-600 text-white'
                        : isAnswered
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-gray-100 text-gray-600 border border-gray-300'
                    }`}
                    onClick={() => setCurrentQuestionIndex(realIndex)}
                  >
                    {realIndex + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {currentQuestionIndex === examQuestions.length - 1 ? (
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => setShowConfirmSubmit(true)}
            >
              Kumpulkan <CheckCircle2 className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => setCurrentQuestionIndex(Math.min(examQuestions.length - 1, currentQuestionIndex + 1))}
            >
              Selanjutnya <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </main>

      {/* Confirm Submit Dialog */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-center">Kumpulkan Ujian?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-3">
                Anda telah menjawab {Object.keys(answers).length} dari {examQuestions.length} soal.
              </p>
              {Object.keys(answers).length < examQuestions.length && (
                <Alert variant="destructive" className="mb-3">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Masih ada {examQuestions.length - Object.keys(answers).length} soal belum dijawab!
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter className="justify-center gap-3">
              <Button variant="outline" onClick={() => setShowConfirmSubmit(false)}>
                Kembali
              </Button>
              <Button className="bg-red-600 hover:bg-red-700" onClick={calculateAndSubmit}>
                Ya, Kumpulkan
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}

// =================== RESULT VIEW ===================
function ResultView() {
  const { examScore, correctCount, totalQuestions, examQuestions, answers, setCurrentView, resetExam } = useAppStore();
  const [showReview, setShowReview] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const getScoreColor = () => {
    if (examScore >= 80) return 'text-emerald-600';
    if (examScore >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    if (examScore >= 90) return 'Luar Biasa!';
    if (examScore >= 80) return 'Hebat!';
    if (examScore >= 70) return 'Bagus!';
    if (examScore >= 60) return 'Cukup Baik';
    return 'Perlu Belajar Lagi';
  };

  const getGradeLabel = () => {
    if (examScore >= 90) return 'A';
    if (examScore >= 80) return 'B';
    if (examScore >= 70) return 'C';
    if (examScore >= 60) return 'D';
    return 'E';
  };

  if (showReview && examQuestions[reviewIndex]) {
    const q = examQuestions[reviewIndex];
    const isCorrect = (() => {
      const userAnswer = answers[q.id];
      if (!userAnswer) return false;
      if (q.type === 'pg') return userAnswer === (q as PGQuestion).correctAnswer;
      if (q.type === 'pg_kompleks') return userAnswer === (q as PGKompleksQuestion).correctAnswer;
      if (q.type === 'benar_salah') {
        const bsQ = q as BenarSalahQuestion;
        const userBsAnswer = userAnswer as Record<string, string>;
        return bsQ.statements.every((s) => userBsAnswer[s.number] === (s.isCorrect ? 'B' : 'S'));
      }
      if (q.type === 'menjodohkan') {
        const mjQ = q as MenjodohkanQuestion;
        const userMjAnswer = userAnswer as Record<string, string>;
        return mjQ.correctPairs.every((pair) => userMjAnswer[pair.left] === pair.right);
      }
      return false;
    })();

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-lg">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
            <Button variant="ghost" className="text-white hover:bg-emerald-600" onClick={() => setShowReview(false)}>
              <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
            </Button>
            <h1 className="text-lg font-bold">Pembahasan Soal {reviewIndex + 1}/{examQuestions.length}</h1>
          </div>
        </header>
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600" />
                )}
                <span className={`font-bold ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                  {isCorrect ? 'Benar' : 'Salah'}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-medium whitespace-pre-wrap">{q.question || (q as any).question}</p>

              {/* Show correct answer based on type */}
              {q.type === 'pg' && (() => {
                const pgQ = q as PGQuestion;
                return (
                  <div className="space-y-2">
                    {pgQ.options.map((opt) => (
                      <div key={opt.key} className={`p-3 rounded-lg text-sm ${
                        opt.key === pgQ.correctAnswer ? 'bg-emerald-100 border-2 border-emerald-400' :
                        opt.key === answers[q.id] && opt.key !== pgQ.correctAnswer ? 'bg-red-100 border-2 border-red-400' :
                        'bg-gray-50'
                      }`}>
                        <span className="font-semibold mr-2">{opt.key}.</span>{opt.text}
                        {opt.key === pgQ.correctAnswer && <CheckCircle2 className="w-4 h-4 inline ml-2 text-emerald-600" />}
                        {opt.key === answers[q.id] && opt.key !== pgQ.correctAnswer && <XCircle className="w-4 h-4 inline ml-2 text-red-600" />}
                      </div>
                    ))}
                  </div>
                );
              })()}

              {q.type === 'pg_kompleks' && (() => {
                const pgkQ = q as PGKompleksQuestion;
                return (
                  <div className="space-y-2">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      {pgkQ.statements.map((s) => (
                        <p key={s.number} className="text-sm mb-1">
                          {s.number}) {s.text} — <span className={s.isCorrect ? 'text-emerald-600 font-semibold' : 'text-red-600 font-semibold'}>
                            {s.isCorrect ? 'Benar' : 'Salah'}
                          </span>
                        </p>
                      ))}
                    </div>
                    <p className="text-sm font-medium">Jawaban yang benar: <span className="text-emerald-600">{pgkQ.correctAnswer}</span></p>
                    <p className="text-sm">Jawaban Anda: <span className={answers[q.id] === pgkQ.correctAnswer ? 'text-emerald-600' : 'text-red-600'}>{(answers[q.id] as string) || 'Tidak dijawab'}</span></p>
                  </div>
                );
              })()}

              {q.type === 'benar_salah' && (() => {
                const bsQ = q as BenarSalahQuestion;
                const userBsAnswer = (answers[q.id] as Record<string, string>) || {};
                return (
                  <div className="space-y-2">
                    {bsQ.statements.map((s) => (
                      <div key={s.number} className={`p-3 rounded-lg text-sm ${
                        (userBsAnswer[s.number] === 'B') === s.isCorrect ? 'bg-emerald-50' : 'bg-red-50'
                      }`}>
                        {s.number}) {s.text} — 
                        <span className="font-semibold ml-1">Kunci: {s.isCorrect ? 'Benar' : 'Salah'}</span>
                        {userBsAnswer[s.number] && (
                          <span className="ml-2">| Jawaban Anda: {userBsAnswer[s.number] === 'B' ? 'Benar' : 'Salah'}</span>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })()}

              {q.type === 'menjodohkan' && (() => {
                const mjQ = q as MenjodohkanQuestion;
                const userMjAnswer = (answers[q.id] as Record<string, string>) || {};
                return (
                  <div className="space-y-2">
                    {mjQ.correctPairs.map((pair) => {
                      const leftText = mjQ.leftItems.find(l => l.id === pair.left)?.text;
                      const rightText = mjQ.rightItems.find(r => r.id === pair.right)?.text;
                      const userRight = userMjAnswer[pair.left];
                      const userRightText = mjQ.rightItems.find(r => r.id === userRight)?.text;
                      const isPairCorrect = userRight === pair.right;

                      return (
                        <div key={pair.left} className={`p-3 rounded-lg text-sm ${isPairCorrect ? 'bg-emerald-50' : 'bg-red-50'}`}>
                          <span className="font-semibold">{leftText}</span> → <span className="font-semibold text-emerald-600">{rightText}</span>
                          {userRight && !isPairCorrect && (
                            <span className="ml-2 text-red-600">(Jawaban Anda: {userRightText})</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}

              <Separator />
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-1">Pembahasan:</p>
                <p className="text-sm text-blue-700">{q.explanation}</p>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline" onClick={() => setReviewIndex(Math.max(0, reviewIndex - 1))} disabled={reviewIndex === 0}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Sebelumnya
              </Button>
              <span className="text-sm text-gray-500">{reviewIndex + 1}/{examQuestions.length}</span>
              <Button variant="outline" onClick={() => setReviewIndex(Math.min(examQuestions.length - 1, reviewIndex + 1))} disabled={reviewIndex === examQuestions.length - 1}>
                Selanjutnya <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex flex-col">
      <header className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <GraduationCap className="w-8 h-8" />
          <h1 className="text-xl font-bold">Hasil Ujian</h1>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        {/* Score Card */}
        <Card className="border-2 border-emerald-200 mb-6">
          <CardContent className="text-center py-8">
            <Trophy className="w-16 h-16 mx-auto text-amber-500 mb-4" />
            <h2 className={`text-5xl font-bold ${getScoreColor()} mb-2`}>{examScore}</h2>
            <p className="text-lg font-semibold text-gray-700 mb-1">{getScoreMessage()}</p>
            <p className="text-sm text-gray-500">Grade: {getGradeLabel()}</p>
            <div className="flex justify-center gap-6 mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-600">{correctCount}</p>
                <p className="text-xs text-gray-500">Benar</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">{totalQuestions - correctCount}</p>
                <p className="text-xs text-gray-500">Salah</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-600">{totalQuestions}</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
            </div>
            <Progress value={examScore} className="h-3 mt-4 max-w-xs mx-auto" />
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={() => { setShowReview(true); setReviewIndex(0); }}>
            <BookOpen className="w-4 h-4 mr-2" /> Lihat Pembahasan
          </Button>
          <Button variant="outline" className="w-full" onClick={() => { resetExam(); setCurrentView('dashboard'); }}>
            <Home className="w-4 h-4 mr-2" /> Dashboard
          </Button>
        </div>

        {/* Question Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ringkasan Jawaban</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {examQuestions.map((q, i) => {
                const isCorrect = (() => {
                  const userAnswer = answers[q.id];
                  if (!userAnswer) return false;
                  if (q.type === 'pg') return userAnswer === (q as PGQuestion).correctAnswer;
                  if (q.type === 'pg_kompleks') return userAnswer === (q as PGKompleksQuestion).correctAnswer;
                  if (q.type === 'benar_salah') {
                    const bsQ = q as BenarSalahQuestion;
                    const userBsAnswer = userAnswer as Record<string, string>;
                    return bsQ.statements.every((s) => userBsAnswer[s.number] === (s.isCorrect ? 'B' : 'S'));
                  }
                  if (q.type === 'menjodohkan') {
                    const mjQ = q as MenjodohkanQuestion;
                    const userMjAnswer = userAnswer as Record<string, string>;
                    return mjQ.correctPairs.every((pair) => userMjAnswer[pair.left] === pair.right);
                  }
                  return false;
                })();

                return (
                  <button
                    key={q.id}
                    className={`w-10 h-10 rounded-lg text-xs font-bold transition-all ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300' :
                      answers[q.id] ? 'bg-red-100 text-red-800 border-2 border-red-300' :
                      'bg-gray-100 text-gray-500 border-2 border-gray-300'
                    }`}
                    onClick={() => { setShowReview(true); setReviewIndex(i); }}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-4 mt-3 text-xs text-gray-500">
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300" /> Benar</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-red-100 border border-red-300" /> Salah</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-gray-100 border border-gray-300" /> Tidak dijawab</span>
            </div>
          </CardContent>
        </Card>

        {/* Attribution */}
        <div className="text-center py-4 mt-6 border-t border-emerald-100">
          <p className="text-sm text-gray-600 font-medium">
            Dibuat Oleh : <span className="text-emerald-700">Catur Pamungkas, S.Pd., Gr.</span>
          </p>
          <p className="text-xs text-gray-500">Guru IPS SMP PGRI 1 Kuwarasan</p>
          <p className="text-xs text-teal-600 mt-1">Follow Channel WA tertera di catatanguruips.blogspot.com</p>
        </div>
      </main>
    </div>
  );
}

// =================== MAIN APP ===================
export default function CBTApp() {
  const { currentView } = useAppStore();

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
      case 'dashboard':
        return <Dashboard />;
      case 'study':
        return <StudyMaterial />;
      case 'exam':
        return <ExamView />;
      case 'result':
        return <ResultView />;
      default:
        return <LandingPage />;
    }
  };

  return renderView();
}
