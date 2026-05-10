// CBT Questions Data for PSAJ IPS Kelas IX 2026
// Types: "pg" (Pilihan Ganda), "pg_kompleks" (PG Kompleks), "benar_salah" (True/False), "menjodohkan" (Matching)

export type QuestionType = "pg" | "pg_kompleks" | "benar_salah" | "menjodohkan";

export interface PGQuestion {
  id: number;
  type: "pg";
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  topic: string;
}

export interface PGKompleksQuestion {
  id: number;
  type: "pg_kompleks";
  question: string;
  statements: { number: number; text: string; isCorrect: boolean }[];
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  topic: string;
}

export interface BenarSalahQuestion {
  id: number;
  type: "benar_salah";
  question: string;
  statements: { number: number; text: string; isCorrect: boolean }[];
  explanation: string;
  topic: string;
}

export interface MenjodohkanQuestion {
  id: number;
  type: "menjodohkan";
  question: string;
  leftItems: { id: string; text: string }[];
  rightItems: { id: string; text: string }[];
  correctPairs: { left: string; right: string }[];
  explanation: string;
  topic: string;
}

export type Question = PGQuestion | PGKompleksQuestion | BenarSalahQuestion | MenjodohkanQuestion;

// =================== STUDY MATERIAL SUMMARY ===================
export const studyMaterial = {
  title: "Rangkuman Materi IPS Kelas IX - PSAJ 2026",
  sections: [
    {
      title: "A. Sejarah Pemerintahan Indonesia",
      content: `Indonesia telah mengalami tiga masa pemerintahan utama yang masing-masing memiliki ciri khas dan kebijakan yang berbeda:

1. **Orde Lama (1945–1966)**: Dipimpin oleh Presiden Soekarno. Pada masa ini, sistem pemerintahan Indonesia beberapa kali mengalami perubahan, sehingga terjadi pergantian kabinet dalam waktu yang relatif singkat. Beberapa kabinet yang pernah menjabat antara lain Kabinet Sjahrir I, II, III; Kabinet Syahrir; Kabinet Amir Sjarifuddin; Kabinet Hatta; Kabinet Natsir; Kabinet Sukiman-Suwirjo; Kabinet Wilopo; Kabinet Ali Sastroamidjojo I, II; Kabinet Burhanuddin Harahap; Kabinet Djuanda; dan Kabinet Kerja. Kebijakan penting masa ini termasuk "Gunting Syafruddin" yang bertujuan menurunkan inflasi dengan memotong nilai uang yang beredar di masyarakat. Pada masa ini juga terjadi peristiwa G30S/PKI tahun 1965 yang menjadi awal runtuhnya Orde Lama.

2. **Orde Baru (1966–1998)**: Dipimpin oleh Presiden Soeharto selama 32 tahun dalam tujuh periode pemilihan presiden. Orde Baru lahir berdasarkan Supersemar (Surat Perintah 11 Maret 1966) yang memberikan kewenangan kepada Soeharto untuk mengamankan Jakarta setelah peristiwa G30S/PKI. Fokus pembangunan masa ini menggunakan sistem Repelita (Rencana Pembangunan Lima Tahun). Repelita I berfokus pada pemenuhan kebutuhan dasar dan infrastruktur guna meningkatkan sektor pertanian. Namun, Orde Baru berakhir akibat krisis ekonomi 1997-1998 dan tuntutan reformasi yang menggulingkan Soeharto pada 21 Mei 1998.

3. **Reformasi (1998–sekarang)**: Dimulai setelah mundurnya Soeharto. Pada era ini, Indonesia dipimpin oleh beberapa presiden: B.J. Habibie, Abdurrahman Wahid, Megawati Soekarnoputri, Susilo Bambang Yudhoyono, dan Joko Widodo. Program keberhasilan era reformasi antara lain alokasi dana desa 1,4 M per desa, program legalitas kepemilikan tanah, dan pemberian subsidi KIP/KPK (masa Joko Widodo). Era reformasi ditandai dengan meningkatnya partisipasi masyarakat dalam demokrasi, namun masih menghadapi tantangan seperti kesenjangan ekonomi antarwilayah dan masalah lingkungan.`
    },
    {
      title: "B. Indeks Pembangunan Manusia (IPM) dan Kualitas Penduduk",
      content: `**Indeks Pembangunan Manusia (IPM)** atau Human Development Index (HDI) merupakan ukuran komparatif yang mengukur kualitas hidup penduduk suatu negara berdasarkan tiga dimensi utama:

1. **Kesehatan**: Diukur dari angka harapan hidup (life expectancy) saat kelahiran. Data menunjukkan angka harapan hidup Indonesia terus meningkat dari 69,06 (2010) menjadi 74,47 (2024).

2. **Pendidikan**: Diukur dari harapan lama sekolah dan rata-rata lama sekolah. Tingkat pendidikan mencerminkan akses masyarakat terhadap pendidikan yang berkualitas.

3. **Standar Hidup Layak**: Diukur dari pendapatan nasional bruto (GNI) per kapita yang disesuaikan dengan paritas daya beli (PPP).

IPM Indonesia pada tahun 2023 naik 0,62 poin menjadi 74,39 (sebelumnya 73,77). Berdasarkan klasifikasi UNDP: IPM ≥ 80 (Sangat Tinggi), 70 ≤ IPM < 80 (Tinggi), 60 ≤ IPM < 70 (Sedang), IPM < 60 (Rendah). Indonesia berada pada kategori "Tinggi" (High Human Development).

**PDB dan Pendapatan Per Kapita**: Indonesia memiliki PDB yang tergolong tinggi di kawasan Asia Tenggara, namun pendapatan per kapita masih relatif rendah karena jumlah penduduk yang sangat besar sehingga total PDB harus dibagi kepada seluruh penduduk.

**Inflasi**: Dana Moneter Internasional (IMF) memprediksi inflasi negara berkembang meningkat dari 5,9% (2021) menjadi 9,9% (2022), diproyeksikan turun menjadi 8,1% (2023). Baik negara maju maupun berkembang terdampak inflasi, namun negara berkembang lebih terdampak karena pendapatan masyarakat lebih kecil.`
    },
    {
      title: "C. Potensi dan Tantangan Indonesia Menjadi Negara Maju",
      content: `**Potensi Utama Indonesia**:

1. **Bonus Demografi**: Jumlah penduduk usia produktif yang besar dapat menjadi tenaga kerja yang mendorong pembangunan jika dikelola dengan baik melalui pendidikan, teknologi, dan tata kelola yang baik.

2. **Sumber Daya Alam yang Melimpah**: Hasil tambang, hutan, serta kekayaan laut yang jika dikelola optimal mampu mendorong pertumbuhan ekonomi.

3. **Letak Geografis Strategis**: Terletak antara dua benua (Asia dan Australia) dan dua samudra (Hindia dan Pasifik) yang mendukung kegiatan perdagangan internasional.

4. **Pasar Domestik Potensial**: Jumlah penduduk yang besar menjadi pasar domestik yang potensial bagi pengembangan industri.

5. **Perkembangan Ekonomi Digital**: Perkembangan teknologi digital menjadi kekuatan baru dalam mendorong pertumbuhan ekonomi.

**Tantangan Indonesia**:

1. Kualitas sumber daya manusia yang belum merata
2. Ketimpangan pembangunan antarwilayah
3. Kemiskinan yang masih tinggi
4. Ketergantungan pada ekspor bahan mentah
5. Infrastruktur yang belum memadai di beberapa wilayah
6. Tingkat korupsi yang masih tinggi

**Industri Strategis**: Pengembangan industri strategis bertujuan menjadi negara industri maju dan mandiri, meningkatkan kesejahteraan rakyat, dan menguasai hajat hidup orang banyak. BUKAN untuk meningkatkan kesejahteraan pejabat.

**Peran SDM**: Kualitas sumber daya manusia menentukan keberhasilan proses pembangunan. SDM berkualitas mampu meningkatkan produktivitas, mendorong inovasi, dan mempercepat pembangunan nasional.`
    },
    {
      title: "D. Geografi Benua dan Karakteristik Wilayah Dunia",
      content: `**Benua-Benua di Dunia**:

1. **Benua Asia** (Terluas): Memiliki karakteristik geografis sangat kontras. Siberia di utara berhamparan tundra membeku, Himalaya di tengah merupakan pegunungan tertinggi dunia, Asia Tenggara dan Selatan didominasi iklim tropis dengan curah hujan tinggi karena angin muson. Iklim tropis di Asia Tenggara dan Selatan cocok untuk pertanian lahan basah dan perkebunan.

2. **Benua Afrika**: Sungai Nil (terpanjang di dunia) mengalir melintasi beberapa negara termasuk Mesir. Setiap tahun sungai ini mengalami siklus banjir yang membawa endapan lumpur hitam kaya mineral organik, menjadikan tanah di sepanjang lembah sungai sangat subur. Sungai Nil menjadi pusat kegiatan pertanian intensif yang menopang ketahanan pangan penduduk.

3. **Benua Australia**: Memiliki sabana yang sangat cocok untuk aktivitas peternakan. Suku Aborigin merupakan penduduk asli Benua Australia.

4. **Benua Eropa**: Menghadapi masalah penuaan penduduk (aging population) yang menyebabkan kekurangan tenaga kerja dan dapat menghambat pertumbuhan ekonomi.

**Pertumbuhan Penduduk**: India mengalami peningkatan pertumbuhan penduduk paling tinggi di dunia, melampaui Tiongkok.`
    },
    {
      title: "E. Interaksi Antarwilayah dan Kerja Sama Internasional",
      content: `**Faktor Interaksi Antarwilayah**: Perbedaan sumber daya alam antarwilayah mendorong terjadinya interaksi. Misalnya, rempah-rempah di wilayah tropis, logam mulia di wilayah pegunungan, dan gandum di wilayah iklim sub tropis. Faktor utama interaksi adalah adanya saling ketergantungan karena perbedaan kebutuhan dan sumber daya.

**Manfaat Kerja Sama Internasional**: Menciptakan efisiensi produksi dan pemenuhan kebutuhan nasional melalui pertukaran keunggulan masing-masing. Tidak ada negara yang mampu memenuhi seluruh kebutuhannya sendiri secara efisien.

**ASEAN**: Didirikan di Bangkok pada 8 Agustus 1967 berdasarkan Deklarasi Bangkok. Negara dan tokoh pendiri ASEAN yang benar: Indonesia (Adam Malik), Filipina (Narciso Ramos), Thailand (Thanat Khoman), Singapura (S. Rajaratnam), Malaysia (Tun Abdul Razak). Faktor terbentuknya ASEAN: kedekatan lokasi geografis dan kemiripan kondisi alam (iklim tropis, kerawanan bencana alam).

**Kerja Sama Indonesia-Jepang (IJEPA)**: Indonesia mendapatkan akses pasar untuk produk pertanian dan perikanan ke Jepang, sementara Jepang menanamkan investasi dalam pembangunan infrastruktur (MRT Jakarta, Pelabuhan Patimban). Indonesia memposisikan diri sebagai penyedia bahan baku industri sekaligus mitra tujuan investasi teknologi Jepang.

**PBB dan Badan Khususnya**: WHO menangani bidang Kesehatan, FAO bidang Pangan, UNESCO bidang Pendidikan dan Budaya, ILO bidang Peningkatan taraf hidup kaum buruh dan pekerja.

**IPM Negara ASEAN**: Singapura, Brunei, dan Malaysia berada di kategori Sangat Tinggi (≥80). Indonesia berada di kategori Tinggi (70-80), melampaui beberapa negara tetangga seperti Vietnam.`
    },
    {
      title: "F. Pembangunan Berkelanjutan (SDGs)",
      content: `**Pembangunan Berkelanjutan** adalah pembangunan yang memenuhi kebutuhan hidup masa sekarang dengan mempertimbangkan pemenuhan kebutuhan hidup generasi mendatang. Prinsip utamanya adalah mempertahankan kualitas hidup bagi seluruh manusia pada masa sekarang dan masa depan secara berkelanjutan.

**Tujuan SDGs**:
- SDG 2: Menghilangkan kelaparan, mencapai ketahanan pangan, serta meningkatkan gizi yang baik
- SDG 6: Menjamin ketersediaan air bersih dan sanitasi yang layak
- SDG 7: Energi bersih dan terjangkau (mendorong beralih ke energi alternatif: matahari, angin, air, panas bumi)
- SDG 12: Konsumsi dan produksi yang bertanggung jawab (penurunan timbunan sampah, peningkatan rasio daur ulang)
- SDG 13: Penanganan perubahan iklim

**Yang BUKAN tujuan pembangunan berkelanjutan**: Pembangunan yang mengeksploitasi sumber daya alam secara maksimal tanpa mempertimbangkan keberlanjutan.

**Upaya Mencapai SDGs**: Pemisahan pertumbuhan ekonomi dari kerusakan lingkungan, kebijakan pelarangan plastik sekali pakai, optimalisasi bank sampah.

**Kemiskinan Indonesia (Data BPS)**:
- Maret 2022: 9,54% (26,16 juta jiwa)
- Maret 2023: 9,36% (25,9 juta jiwa)
- Maret 2024: 9,03% (25,22 juta jiwa)
Kesimpulan: Indonesia berhasil menekan tingkat kemiskinan di bawah 10% dan terus menurun.`
    }
  ]
};

// =================== CBT QUESTIONS ===================
export const cbtQuestions: Question[] = [
  // ========== PILIHAN GANDA (PG) ==========
  {
    id: 1,
    type: "pg",
    topic: "Sejarah Pemerintahan Indonesia",
    question: "Setiap masa pemerintahan memiliki ciri khas dan kebijakan yang berbeda sesuai dengan konteks zaman tersebut. Di bawah ini urutan waktu yang benar dari masa pemerintahan di Indonesia adalah ....",
    options: [
      { key: "A", text: "Orde Lama – Reformasi – Orde Baru" },
      { key: "B", text: "Orde Baru – Reformasi – Orde Lama" },
      { key: "C", text: "Orde Lama – Orde Baru – Reformasi" },
      { key: "D", text: "Reformasi – Orde Lama – Orde Baru" }
    ],
    correctAnswer: "C",
    explanation: "Urutan yang benar adalah Orde Lama (1945-1966) → Orde Baru (1966-1998) → Reformasi (1998-sekarang). Ini sesuai dengan kronologi sejarah pemerintahan Indonesia."
  },
  {
    id: 2,
    type: "pg",
    topic: "Sejarah Pemerintahan Indonesia",
    question: "Pada masa Orde Lama, pemerintah Indonesia menerapkan kebijakan \"Gunting Syafruddin\" untuk mengatasi masalah ekonomi akibat tingginya jumlah uang yang beredar di masyarakat. Tujuan utama kebijakan tersebut adalah ....",
    options: [
      { key: "A", text: "Menurunkan inflasi" },
      { key: "B", text: "Meningkatkan nilai ekspor" },
      { key: "C", text: "Membangun industri berat" },
      { key: "D", text: "Memperbanyak uang beredar" }
    ],
    correctAnswer: "A",
    explanation: "Kebijakan Gunting Syafruddin dilakukan oleh Menteri Keuangan Syafruddin Prawiranegara pada tahun 1950. Tujuannya adalah menurunkan inflasi dengan memotong (gunting) nilai uang yang beredar, sehingga jumlah uang beredar berkurang dan nilai uang bisa stabil kembali."
  },
  {
    id: 3,
    type: "pg",
    topic: "Sejarah Pemerintahan Indonesia",
    question: "Berikut ini merupakan fokus pembangunan Repelita I pada masa Orde Baru adalah ....",
    options: [
      { key: "A", text: "Meningkatkan pembangunan di luar pulau Jawa, Bali dan Madura" },
      { key: "B", text: "Memenuhi kebutuhan dasar dan infrastruktur guna meningkatkan sektor pertanian" },
      { key: "C", text: "Untuk mengembangkan bidang industri padat karya sehingga meningkatkan aktivitas ekspor" },
      { key: "D", text: "Menciptakan lapangan kerja dan meningkatkan industri yang telah tercipta di repelita sebelumnya" }
    ],
    correctAnswer: "B",
    explanation: "Repelita I (1969-1974) berfokus pada pemenuhan kebutuhan dasar dan pembangunan infrastruktur yang mendukung peningkatan sektor pertanian. Ini merupakan fondasi awal pembangunan Orde Baru yang menitikberatkan pada sektor pertanian sebagai basis perekonomian."
  },
  {
    id: 5,
    type: "pg",
    topic: "Sejarah Pemerintahan Indonesia",
    question: "Peristiwa yang melatarbelakangi lahirnya Orde Baru yang menjadi dasar dipilihnya Suharto oleh MPRS menjadi Presiden RI selanjutnya karena telah berhasil menjalankan tugasnya mengamankan Ibu Kota Jakarta setelah peristiwa G30S/PKI adalah ....",
    options: [
      { key: "A", text: "Keluar TAP MPRS" },
      { key: "B", text: "Peristiwa G30S/PKI" },
      { key: "C", text: "Demonstrasi aksi massa" },
      { key: "D", text: "Keluarnya Supersemar" }
    ],
    correctAnswer: "D",
    explanation: "Supersemar (Surat Perintah 11 Maret 1966) memberikan kewenangan kepada Letjen Soeharto untuk mengambil tindakan yang perlu untuk mengamankan Jakarta setelah peristiwa G30S/PKI. Supersemar inilah yang menjadi dasar hukum dipilihnya Soeharto oleh MPRS sebagai Presiden RI."
  },
  {
    id: 6,
    type: "pg",
    topic: "Sejarah Pemerintahan Indonesia",
    question: "Mengalokasikan dana desa 1,4 M setiap desa, program legalitas kepemilikan tanah 4,5 juta kepada kepala keluarga dan pemberian subsidi 1 juta per kepala keluarga pra sejahtera merupakan program keberhasilan meningkatkan pertumbuhan ekonomi. Program ini ada pada masa kepemimpinan presiden ....",
    options: [
      { key: "A", text: "Abdurahman Wahid" },
      { key: "B", text: "Megawati Sukarno Putri" },
      { key: "C", text: "Joko Widodo" },
      { key: "D", text: "Susilo Bambang Yudhoyono" }
    ],
    correctAnswer: "C",
    explanation: "Program dana desa, legalitas kepemilikan tanah (PTSL), dan pemberian subsidi KIP/KPK merupakan program unggulan masa kepemimpinan Presiden Joko Widodo yang bertujuan meningkatkan pertumbuhan ekonomi dan pemerataan pembangunan."
  },
  {
    id: 8,
    type: "pg",
    topic: "IPM dan Kualitas Penduduk",
    question: "Perhatikan data berikut!\n1) Angka harapan hidup\n2) Tingkat pendidikan\n3) Pendapatan perkapita\n4) Angka Kelahiran\n\nKualitas Penduduk dapat dilihat dengan menggunakan ukuran Human Development Index (HDI) atau Indeks Pembangunan Manusia (IPM). Human Development Index (HDI) merupakan gabungan dari indikator yang ditunjukkan dengan nomor ....",
    options: [
      { key: "A", text: "1, 2, 3" },
      { key: "B", text: "1, 3" },
      { key: "C", text: "2, 3" },
      { key: "D", text: "3, 4" }
    ],
    correctAnswer: "A",
    explanation: "HDI (Human Development Index) merupakan gabungan dari tiga indikator utama: (1) Angka harapan hidup (kesehatan), (2) Tingkat pendidikan (harapan lama sekolah dan rata-rata lama sekolah), dan (3) Pendapatan per kapita (standar hidup layak). Angka kelahiran bukan merupakan indikator HDI."
  },
  {
    id: 9,
    type: "pg",
    topic: "IPM dan Kualitas Penduduk",
    question: "Indonesia memiliki Produk Domestik Bruto (PDB) yang tergolong tinggi di kawasan Asia Tenggara karena didukung oleh sumber daya alam yang melimpah dan jumlah penduduk yang besar. Namun, pendapatan per kapita Indonesia masih tergolong lebih rendah dibandingkan beberapa negara lain. Berdasarkan bacaan tersebut, penyebab Indonesia memiliki pendapatan per kapita yang relatif rendah meskipun PDB-nya tinggi adalah ....",
    options: [
      { key: "A", text: "Indonesia kekurangan sumber daya alam" },
      { key: "B", text: "Jumlah penduduk Indonesia sangat besar" },
      { key: "C", text: "Indonesia tidak memiliki tenaga kerja produktif" },
      { key: "D", text: "PDB Indonesia tidak dihitung secara menyeluruh" }
    ],
    correctAnswer: "B",
    explanation: "Pendapatan per kapita dihitung dari PDB dibagi jumlah penduduk. Meskipun PDB Indonesia tinggi, jumlah penduduk yang sangat besar (270+ juta) membuat hasil pembagian (per kapita) menjadi relatif rendah dibandingkan negara-negara dengan PDB lebih kecil tetapi penduduk sedikit."
  },
  {
    id: 10,
    type: "pg",
    topic: "IPM dan Kualitas Penduduk",
    question: "IPM Indonesia pada tahun 2023 naik 0,62 poin menjadi 74,39. Jika sebelumnya IPM Indonesia adalah 73,77, berapa kenaikan IPM Indonesia dalam angka poin?",
    options: [
      { key: "A", text: "1,72" },
      { key: "B", text: "1,62" },
      { key: "C", text: "0,72" },
      { key: "D", text: "0,62" }
    ],
    correctAnswer: "D",
    explanation: "Kenaikan IPM = IPM 2023 - IPM sebelumnya = 74,39 - 73,77 = 0,62 poin. Soal ini sesuai dengan informasi yang diberikan dalam teks bahwa IPM naik 0,62 poin."
  },
  {
    id: 12,
    type: "pg",
    topic: "IPM dan Kualitas Penduduk",
    question: "Perhatikan grafik Angka Harapan Hidup! Pernyataan yang sesuai dengan isi grafik tersebut adalah ....",
    options: [
      { key: "A", text: "Pembangunan bidang kesehatan di Indonesia selalu mengalami peningkatan" },
      { key: "B", text: "Tingkat harapan hidup di Indonesia menembus angka 70% sejak tahun 2010" },
      { key: "C", text: "Tingkat harapan hidup di Indonesia mengalami pasang surut perkembangan" },
      { key: "D", text: "Umur harapan hidup menjadi tolok ukur pertumbuhan ekonomi di Indonesia" }
    ],
    correctAnswer: "C",
    explanation: "Berdasarkan grafik, angka harapan hidup Indonesia dari 2010-2026 menunjukkan adanya pasang surut (fluktuasi), meskipun secara umum meningkat. Beberapa tahun tertentu terjadi penurunan kecil sebelum kembali naik, misalnya dari 71,2 ke 69,52 lalu naik lagi."
  },
  {
    id: 13,
    type: "pg",
    topic: "Potensi dan Tantangan Indonesia",
    question: "Pemerintah Indonesia terus meningkatkan kualitas sumber daya manusia melalui berbagai program seperti pelatihan kerja, peningkatan akses pendidikan, serta layanan kesehatan yang lebih baik. Berdasarkan pernyataan di atas, yang paling tepat mengenai peran sumber daya manusia dalam pembangunan adalah ....",
    options: [
      { key: "A", text: "Pembangunan hanya ditentukan oleh kekayaan sumber daya alam" },
      { key: "B", text: "Pembangunan nasional hanya bergantung pada bantuan luar negeri" },
      { key: "C", text: "Kualitas sumber daya manusia menentukan keberhasilan proses pembangunan" },
      { key: "D", text: "Sumber daya manusia tidak berpengaruh terhadap keberhasilan pembangunan" }
    ],
    correctAnswer: "C",
    explanation: "SDM yang berkualitas diyakini mampu meningkatkan produktivitas, mendorong inovasi, dan mempercepat pembangunan nasional. Negara dengan kualitas SDM yang baik cenderung memiliki tingkat kesejahteraan yang lebih tinggi."
  },
  {
    id: 14,
    type: "pg",
    topic: "Potensi dan Tantangan Indonesia",
    question: "Sebuah negara meningkatkan kualitas pendidikan melalui pelatihan kerja dan pendidikan vokasi. Setelah beberapa tahun, produktivitas tenaga kerja meningkat dan pendapatan nasional ikut bertambah. Faktor utama yang memengaruhi pertumbuhan ekonomi berdasarkan ilustrasi tersebut adalah ....",
    options: [
      { key: "A", text: "Modal fisik" },
      { key: "B", text: "Stabilitas politik" },
      { key: "C", text: "Sumber daya alam" },
      { key: "D", text: "Kualitas sumber daya manusia" }
    ],
    correctAnswer: "D",
    explanation: "Ilustrasi menunjukkan bahwa peningkatan kualitas pendidikan (pelatihan kerja dan pendidikan vokasi) menghasilkan peningkatan produktivitas tenaga kerja dan pendapatan nasional. Ini membuktikan bahwa kualitas SDM adalah faktor utama yang memengaruhi pertumbuhan ekonomi."
  },
  {
    id: 15,
    type: "pg",
    topic: "Potensi dan Tantangan Indonesia",
    question: "Indonesia merupakan negara kepulauan terbesar di dunia yang terletak di posisi strategis antara dua benua dan dua samudra. Berdasarkan bacaan, potensi utama Indonesia untuk menjadi negara maju adalah ....",
    options: [
      { key: "A", text: "Jumlah pulau yang sangat banyak tanpa pengelolaan" },
      { key: "B", text: "Letak geografis yang jauh dari jalur perdagangan dunia" },
      { key: "C", text: "Sumber daya alam melimpah dan penduduk usia produktif yang besar" },
      { key: "D", text: "Jumlah penduduk yang besar tanpa peningkatan kualitas pendidikan" }
    ],
    correctAnswer: "C",
    explanation: "Potensi utama Indonesia adalah sumber daya alam yang melimpah (hasil tambang, hutan, kekayaan laut) dan jumlah penduduk usia produktif yang besar. Jika dikelola dengan baik melalui pendidikan, teknologi, dan tata kelola yang baik, potensi tersebut dapat mendorong Indonesia menjadi negara maju."
  },
  {
    id: 16,
    type: "pg",
    topic: "Potensi dan Tantangan Indonesia",
    question: "Jumlah penduduk usia produktif dapat menjadi potensi bagi Indonesia untuk menjadi negara maju, karena ....",
    options: [
      { key: "A", text: "Jumlah penduduk yang besar secara otomatis menjadikan negara maju" },
      { key: "B", text: "Penduduk usia produktif tidak memerlukan pendidikan dan pelatihan" },
      { key: "C", text: "Semakin banyak penduduk, semakin sedikit kebutuhan lapangan kerja" },
      { key: "D", text: "Penduduk usia produktif dapat menjadi tenaga kerja yang mendorong pembangunan jika dikelola dengan baik" }
    ],
    correctAnswer: "D",
    explanation: "Penduduk usia produktif dapat menjadi potensi karena mereka dapat menjadi tenaga kerja yang mendorong pembangunan, dengan syarat dikelola dengan baik melalui pendidikan, teknologi, dan tata kelola yang baik. Jumlah penduduk besar saja tidak otomatis menjadikan negara maju."
  },
  {
    id: 17,
    type: "pg",
    topic: "Potensi dan Tantangan Indonesia",
    question: "Berikut yang BUKAN tujuan pengembangan industri strategis adalah ....",
    options: [
      { key: "A", text: "Menjadi negara industri maju dan mandiri" },
      { key: "B", text: "Meningkatkan kesejahteraan pejabat" },
      { key: "C", text: "Meningkatkan kesejahteraan rakyat" },
      { key: "D", text: "Menguasai hajat hidup orang banyak" }
    ],
    correctAnswer: "B",
    explanation: "Tujuan pengembangan industri strategis adalah menjadi negara industri maju dan mandiri, meningkatkan kesejahteraan rakyat, dan menguasai hajat hidup orang banyak. Meningkatkan kesejahteraan pejabat BUKAN tujuan pengembangan industri strategis."
  },
  {
    id: 18,
    type: "pg",
    topic: "Potensi dan Tantangan Indonesia",
    question: "Tantangan signifikan yang dihadapi Indonesia dalam mewujudkan status negara maju adalah ....",
    options: [
      { key: "A", text: "Tingginya tingkat ekspor komoditas primer" },
      { key: "B", text: "Pertumbuhan ekonomi yang stabil setiap tahun" },
      { key: "C", text: "Kualitas sumber daya manusia yang belum merata" },
      { key: "D", text: "Tingginya tingkat partisipasi masyarakat dalam pembangunan" }
    ],
    correctAnswer: "C",
    explanation: "Kualitas SDM yang belum merata merupakan tantangan signifikan bagi Indonesia. Meskipun Indonesia memiliki banyak potensi, ketidakmerataan kualitas SDM menghambat optimalisasi potensi tersebut untuk mewujudkan status negara maju."
  },
  {
    id: 19,
    type: "pg",
    topic: "Potensi dan Tantangan Indonesia",
    question: "Meskipun pertumbuhan ekonomi Indonesia cukup stabil, tingkat ketimpangan pendapatan dan kemiskinan di beberapa daerah masih menjadi perhatian pemerintah. Tantangan yang perlu diatasi agar Indonesia menjadi negara maju adalah ....",
    options: [
      { key: "A", text: "Mengurangi jumlah penduduk" },
      { key: "B", text: "Meningkatkan impor barang konsumsi" },
      { key: "C", text: "Membatasi pembangunan infrastruktur" },
      { key: "D", text: "Mengatasi ketimpangan sosial dan kemiskinan" }
    ],
    correctAnswer: "D",
    explanation: "Ketimpangan sosial dan kemiskinan merupakan tantangan yang perlu diatasi agar Indonesia bisa menjadi negara maju. Mengurangi penduduk, meningkatkan impor, dan membatasi pembangunan bukan merupakan solusi yang tepat."
  },
  {
    id: 21,
    type: "pg",
    topic: "Geografi Benua",
    question: "Berdasarkan data luas wilayah di permukaan bumi, benua yang menempati urutan pertama sebagai benua terluas di dunia adalah ....",
    options: [
      { key: "A", text: "Benua Afrika" },
      { key: "B", text: "Benua Amerika" },
      { key: "C", text: "Benua Asia" },
      { key: "D", text: "Benua Eropa" }
    ],
    correctAnswer: "C",
    explanation: "Benua Asia merupakan benua terluas di dunia dengan luas wilayah sekitar 44,58 juta km², diikuti oleh Benua Afrika, Amerika Utara, Amerika Selatan, Antartika, Eropa, dan Australia."
  },
  {
    id: 22,
    type: "pg",
    topic: "Geografi Benua",
    question: "Benua Asia memiliki karakteristik geografis sangat kontras. Berdasarkan kondisi alam tersebut, dampak yang paling tepat terhadap pola kehidupan penduduk di wilayah Asia Tenggara dan Asia Selatan adalah ....",
    options: [
      { key: "A", text: "Sektor transportasi darat menjadi satu-satunya jalur distribusi barang karena jarang terjadi bencana banjir" },
      { key: "B", text: "Kegiatan ekonomi utama penduduk berpusat pada sektor pertanian lahan basah dan perkebunan" },
      { key: "C", text: "Penduduk lebih banyak memilih tinggal di wilayah pedalaman yang jauh dari sumber air" },
      { key: "D", text: "Penduduk cenderung membangun rumah dengan atap datar untuk menampung salju" }
    ],
    correctAnswer: "B",
    explanation: "Asia Tenggara dan Asia Selatan didominasi iklim tropis dengan curah hujan tinggi karena angin muson. Kondisi ini sangat cocok untuk pertanian lahan basah (sawah) dan perkebunan, sehingga kegiatan ekonomi utama penduduk berpusat pada sektor tersebut."
  },
  {
    id: 23,
    type: "pg",
    topic: "Geografi Benua",
    question: "Sungai Nil adalah sungai terpanjang di dunia yang mengalir melintasi beberapa negara di Afrika. Berdasarkan informasi tersebut, pengaruh utama Sungai Nil terhadap kehidupan penduduk di wilayah sekitarnya adalah ....",
    options: [
      { key: "A", text: "Penduduk membangun pemukiman di atas air untuk menghindari banjir tahunan" },
      { key: "B", text: "Sungai Nil menjadi pusat kegiatan pertanian intensif yang menopang ketahanan pangan penduduk" },
      { key: "C", text: "Penduduk meninggalkan sektor pertanian dan beralih sepenuhnya ke sektor pertambangan gurun" },
      { key: "D", text: "Aliran sungai yang deras digunakan penduduk sebagai satu-satunya sumber energi listrik utama di Afrika" }
    ],
    correctAnswer: "B",
    explanation: "Sungai Nil setiap tahun mengalami siklus banjir yang membawa endapan lumpur hitam kaya mineral organik. Endapan ini membuat tanah di sepanjang lembah sungai sangat subur, sehingga menjadikannya pusat kegiatan pertanian intensif yang menopang ketahanan pangan penduduk Mesir."
  },
  {
    id: 24,
    type: "pg",
    topic: "Geografi Benua",
    question: "Gambar sabana di Benua Australia. Daerah tersebut sangat cocok untuk aktivitas penduduk di sektor ....",
    options: [
      { key: "A", text: "Pertanian lahan kering" },
      { key: "B", text: "Pertanian tumpang sari" },
      { key: "C", text: "Industri" },
      { key: "D", text: "Peternakan" }
    ],
    correctAnswer: "D",
    explanation: "Sabana di Benua Australia merupakan padang rumput luas yang sangat cocok untuk aktivitas peternakan. Peternakan sapi dan domba merupakan kegiatan ekonomi utama di wilayah sabana Australia."
  },
  {
    id: 25,
    type: "pg",
    topic: "Geografi Benua",
    question: "Berdasarkan bacaan pertumbuhan penduduk, negara yang mengalami peningkatan pertumbuhan penduduk yang paling tinggi adalah ....",
    options: [
      { key: "A", text: "India" },
      { key: "B", text: "Tiongkok" },
      { key: "C", text: "Indonesia" },
      { key: "D", text: "Ethiopia" }
    ],
    correctAnswer: "A",
    explanation: "India mengalami peningkatan pertumbuhan penduduk tertinggi dan telah melampaui Tiongkok sebagai negara dengan jumlah penduduk terbanyak di dunia pada tahun 2023."
  },
  {
    id: 26,
    type: "pg",
    topic: "Geografi Benua",
    question: "Berdasarkan data komposisi penduduk negara-negara Benua Eropa, dampak jangka panjang yang paling mungkin dihadapi oleh negara-negara di Benua Eropa adalah ....",
    options: [
      { key: "A", text: "Meningkatnya jumlah tenaga kerja muda yang kompetitif di pasar global" },
      { key: "B", text: "Menurunnya beban ketergantungan karena jumlah lansia yang produktif" },
      { key: "C", text: "Terjadinya kekurangan tenaga kerja yang dapat menghambat pertumbuhan ekonomi" },
      { key: "D", text: "Pemerintah akan mengurangi anggaran kesehatan karena jumlah penduduk usia muda sangat sedikit" }
    ],
    correctAnswer: "C",
    explanation: "Negara-negara Eropa menghadapi masalah penuaan penduduk (aging population) dengan proporsi lansia yang tinggi dan penduduk usia produktif yang menurun. Hal ini menyebabkan kekurangan tenaga kerja yang dapat menghambat pertumbuhan ekonomi."
  },
  {
    id: 27,
    type: "pg",
    topic: "Geografi Benua",
    question: "Suku bangsa Aborigin berasal dari Benua ....",
    options: [
      { key: "A", text: "Asia" },
      { key: "B", text: "Amerika" },
      { key: "C", text: "Australia" },
      { key: "D", text: "Afrika" }
    ],
    correctAnswer: "C",
    explanation: "Suku Aborigin merupakan penduduk asli Benua Australia. Mereka telah mendiami Australia selama puluhan ribu tahun sebelum kedatangan bangsa Eropa."
  },
  {
    id: 28,
    type: "pg",
    topic: "Kerja Sama Internasional",
    question: "Faktor utama yang mendeskripsikan awal terjadinya interaksi antarwilayah di dunia adalah ....",
    options: [
      { key: "A", text: "Adanya saling ketergantungan karena perbedaan kebutuhan dan sumber daya" },
      { key: "B", text: "Kesamaan kondisi iklim yang memudahkan perpindahan penduduk" },
      { key: "C", text: "Keinginan untuk memperluas wilayah kekuasaan melalui perang" },
      { key: "D", text: "Persamaan ideologi politik antar pemimpin wilayah" }
    ],
    correctAnswer: "A",
    explanation: "Perbedaan sumber daya alam antarwilayah (rempah-rempah di tropis, logam mulia di pegunungan, gandum di sub tropis) mendorong manusia untuk melakukan perjalanan jauh. Ini menunjukkan adanya saling ketergantungan karena perbedaan kebutuhan dan sumber daya."
  },
  {
    id: 29,
    type: "pg",
    topic: "Kerja Sama Internasional",
    question: "Manfaat utama dari kerja sama internasional bagi negara dengan keunggulan berbeda adalah ....",
    options: [
      { key: "A", text: "Membatasi akses produk asing agar industri dalam negeri tumbuh tanpa persaingan" },
      { key: "B", text: "Menciptakan efisiensi produksi dan pemenuhan kebutuhan nasional melalui pertukaran keunggulan masing-masing" },
      { key: "C", text: "Mempercepat proses asimilasi budaya sehingga kedua negara memiliki identitas yang sama" },
      { key: "D", text: "Menghilangkan ketergantungan suatu negara terhadap negara lain dalam jangka panjang" }
    ],
    correctAnswer: "B",
    explanation: "Kerja sama internasional memungkinkan negara-negara untuk bertukar keunggulan masing-masing, menciptakan efisiensi produksi, dan memenuhi kebutuhan nasional. Tidak ada negara yang mampu memenuhi seluruh kebutihannya sendiri secara efisien."
  },
  {
    id: 32,
    type: "pg",
    topic: "Kerja Sama Internasional",
    question: "Sebagai lembaga kerjasama internasional terbesar di dunia, PBB memiliki badan khusus. WHO merupakan badan khusus yang dibentuk PBB yang memiliki tugas menangani permasalahan dalam bidang ....",
    options: [
      { key: "A", text: "Pangan" },
      { key: "B", text: "Kesehatan" },
      { key: "C", text: "Pendidikan dan budaya" },
      { key: "D", text: "Peningkatan taraf hidup kaum buruh dan pekerja" }
    ],
    correctAnswer: "B",
    explanation: "WHO (World Health Organization) adalah badan khusus PBB yang menangani permasalahan di bidang kesehatan. FAO menangani pangan, UNESCO menangani pendidikan dan budaya, dan ILO menangani peningkatan taraf hidup kaum buruh."
  },
  {
    id: 33,
    type: "pg",
    topic: "Kerja Sama Internasional",
    question: "Faktor utama yang mendeskripsikan pengaruh terbentuknya kerja sama regional ASEAN adalah ....",
    options: [
      { key: "A", text: "Kedekatan lokasi geografis dan kemiripan kondisi alam" },
      { key: "B", text: "Kesamaan sistem pemerintahan, ideologi dan dasar negara" },
      { key: "C", text: "Adanya perbedaan sumber daya alam yang sangat ekstrem" },
      { key: "D", text: "Keinginan untuk bersaing secara militer dengan kawasan lain" }
    ],
    correctAnswer: "A",
    explanation: "Negara-negara ASEAN terletak di wilayah berdekatan dan memiliki karakteristik lingkungan alam yang serupa (iklim tropis, kerawanan terhadap bencana alam yang sama). Kedekatan geografis dan kemiripan kondisi alam inilah yang menjadi faktor utama terbentuknya ASEAN."
  },
  {
    id: 34,
    type: "pg",
    topic: "Kerja Sama Internasional",
    question: "Berdasarkan kerja sama IJEPA, analisis mengenai bentuk keterlibatan strategis Indonesia dalam kerja sama dengan Jepang adalah ....",
    options: [
      { key: "A", text: "Indonesia memposisikan diri sebagai penyedia bahan baku industri sekaligus mitra tujuan investasi teknologi Jepang" },
      { key: "B", text: "Keterlibatan Indonesia hanya sebatas wilayah transit bagi produk Jepang ke Eropa" },
      { key: "C", text: "Indonesia mendominasi sektor teknologi Jepang melalui pengiriman tenaga ahli mesin" },
      { key: "D", text: "Indonesia berperan pasif dengan hanya menerima bantuan hibah tanpa timbal balik" }
    ],
    correctAnswer: "A",
    explanation: "Melalui IJEPA, Indonesia menyediakan bahan baku industri (produk pertanian dan perikanan) sekaligus menjadi mitra tujuan investasi teknologi Jepang (MRT Jakarta, Pelabuhan Patimban). Ini menunjukkan keterlibatan strategis yang saling menguntungkan."
  },
  {
    id: 36,
    type: "pg",
    topic: "Pembangunan Berkelanjutan (SDGs)",
    question: "Pernyataan berikut yang TIDAK sesuai dengan tujuan pembangunan berkelanjutan adalah ....",
    options: [
      { key: "A", text: "Menjaga keberlangsungan kehidupan sosial masyarakat" },
      { key: "B", text: "Pembangunan dan pemeliharaan kualitas hidup masyarakat" },
      { key: "C", text: "Pembangunan yang mengeksploitasi sumber daya alam secara maksimal" },
      { key: "D", text: "Mempertahankan peningkatan kesejahteraan ekonomi masyarakat secara berkelanjutan" }
    ],
    correctAnswer: "C",
    explanation: "Pembangunan berkelanjutan bertujuan memenuhi kebutuhan masa sekarang dengan mempertimbangkan kebutuhan generasi mendatang. Eksploitasi sumber daya alam secara maksimal tanpa mempertimbangkan keberlanjutan bertentangan dengan prinsip pembangunan berkelanjutan."
  },
  {
    id: 37,
    type: "pg",
    topic: "Pembangunan Berkelanjutan (SDGs)",
    question: "Analisis terhadap efektivitas pelaksanaan SDGs berdasarkan indikator penurunan sampah plastik 20% meskipun ekonomi tumbuh 5% adalah ....",
    options: [
      { key: "A", text: "Kebijakan tersebut merugikan ekonomi karena pertumbuhan 5% dianggap terlalu kecil" },
      { key: "B", text: "Kota tersebut berhasil melakukan pemisahan antara pertumbuhan ekonomi dengan kerusakan lingkungan" },
      { key: "C", text: "Rasio daur ulang yang meningkat menunjukkan bahwa masyarakat menjadi lebih boros" },
      { key: "D", text: "Indikator pengurangan sampah plastik hanya bersifat sementara dan tidak berpengaruh pada jangka panjang" }
    ],
    correctAnswer: "B",
    explanation: "Kota tersebut berhasil memisahkan pertumbuhan ekonomi (5%) dari kerusakan lingkungan (pengurangan sampah plastik 20%). Ini menunjukkan bahwa pembangunan ekonomi tidak harus selalu diikuti kerusakan lingkungan, sesuai prinsip SDGs."
  },
  {
    id: 38,
    type: "pg",
    topic: "Pembangunan Berkelanjutan (SDGs)",
    question: "Berdasarkan gambar tujuan pembangunan berkelanjutan, fokus utama yang ingin dicapai oleh masyarakat dunia adalah ....",
    options: [
      { key: "A", text: "Menghapus segala bentuk diskriminasi terhadap perempuan di sektor pertanian" },
      { key: "B", text: "Menjamin ketersediaan air bersih dan sanitasi yang layak bagi seluruh penduduk desa" },
      { key: "C", text: "Membatasi konsumsi makanan olahan untuk mengurangi limbah rumah tangga" },
      { key: "D", text: "Menghilangkan kelaparan, mencapai ketahanan pangan, serta meningkatkan gizi yang baik" }
    ],
    correctAnswer: "D",
    explanation: "SDG 2 (Zero Hunger) berfokus pada penghilangan kelaparan, pencapaian ketahanan pangan, dan peningkatan gizi yang baik. Ini merupakan salah satu tujuan utama pembangunan berkelanjutan yang ingin dicapai oleh masyarakat dunia."
  },
  {
    id: 39,
    type: "pg",
    topic: "Pembangunan Berkelanjutan (SDGs)",
    question: "Upaya mendorong produksi energi sambil beralih ke bentuk energi yang ramah lingkungan seperti energi alternatif dari matahari, angin, air, panas bumi merupakan tujuan SDGs dalam ....",
    options: [
      { key: "A", text: "Penanganan perubahan iklim" },
      { key: "B", text: "Air bersih dan sanitasi layak" },
      { key: "C", text: "Energi bersih dan terjangkau" },
      { key: "D", text: "Berkurangnya kesenjangan" }
    ],
    correctAnswer: "C",
    explanation: "SDG 7 (Affordable and Clean Energy) mendorong setiap negara untuk beralih ke energi yang ramah lingkungan seperti energi alternatif dari matahari, angin, air, dan panas bumi, menggantikan bahan bakar fosil yang tidak ramah lingkungan dan tidak terbarukan."
  },
  {
    id: 40,
    type: "pg",
    topic: "Pembangunan Berkelanjutan (SDGs)",
    question: "Berdasarkan tabel profil kemiskinan, kesimpulan yang paling tepat mengenai kondisi kemiskinan di Indonesia selama periode 2022 hingga 2024 adalah ....",
    options: [
      { key: "A", text: "Indonesia berhasil menekan tingkat kemiskinan sehingga persentasenya berada di bawah 10% dan terus menurun" },
      { key: "B", text: "Penurunan persentase penduduk miskin tidak diikuti dengan penurunan jumlah jiwa penduduk miskin" },
      { key: "C", text: "Tingkat kemiskinan pada tahun 2024 merupakan yang tertinggi dalam tiga tahun terakhir" },
      { key: "D", text: "Jumlah penduduk miskin mengalami kenaikan yang signifikan setiap tahunnya" }
    ],
    correctAnswer: "A",
    explanation: "Data BPS menunjukkan persentase penduduk miskin turun dari 9,54% (2022) menjadi 9,36% (2023) dan 9,03% (2024), semua di bawah 10% dan terus menurun. Jumlah jiwa juga menurun dari 26,16 juta ke 25,22 juta."
  },

  // ========== PG KOMPLEKS ==========
  {
    id: 4,
    type: "pg_kompleks",
    topic: "Sejarah Pemerintahan Indonesia",
    question: "Pada tahun 1998, Indonesia mengalami krisis ekonomi yang parah. Banyak rakyat Indonesia yang merasa tidak puas dengan kondisi politik dan ekonomi yang dihadapi negara. Korupsi yang merajalela, krisis moneter, dan ketidakadilan sosial membuat banyak rakyat tidak puas. Hal itu kemudian menjadi penyebab kekesalan yang akhirnya memicu peristiwa Reformasi 21 Mei 1998. Tentukan apakah pernyataan berikut Benar (B) atau Salah (S)!",
    statements: [
      { number: 1, text: "Tahun 1998 menjadi awal era reformasi", isCorrect: true },
      { number: 2, text: "Krisis ekonomi 1997 menjadi pemicu runtuhnya Orde Baru", isCorrect: true },
      { number: 3, text: "Pasca Soeharto lengser, MPR menunjuk Megawati sebagai presiden", isCorrect: false }
    ],
    options: [
      { key: "A", text: "Benar, Benar dan Salah" },
      { key: "B", text: "Benar, Salah dan Benar" },
      { key: "C", text: "Salah, Salah, Benar" },
      { key: "D", text: "Salah, Benar, Salah" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan 1 BENAR karena 1998 memang menjadi awal era reformasi. Pernyataan 2 BENAR karena krisis ekonomi 1997 menjadi pemicu runtuhnya Orde Baru. Pernyataan 3 SALAH karena pasca Soeharto lengser, yang diangkat menjadi presiden adalah B.J. Habibie (bukan Megawati)."
  },
  {
    id: 7,
    type: "pg_kompleks",
    topic: "Sejarah Pemerintahan Indonesia",
    question: "Sejak era Reformasi, Indonesia mengalami banyak perubahan dalam pembangunan di berbagai sektor. Pernyataan berikut yang benar tentang pembangunan Indonesia pada era Reformasi hingga saat ini adalah:",
    statements: [
      { number: 1, text: "Pemerintah telah meningkatkan kesejahteraan rakyat melalui pembangunan infrastruktur", isCorrect: true },
      { number: 2, text: "Masyarakat kurang terlibat dalam proses demokrasi di era Reformasi", isCorrect: false },
      { number: 3, text: "Tantangan pembangunan termasuk kesenjangan ekonomi dan masalah lingkungan", isCorrect: true },
      { number: 4, text: "Pembangunan pendidikan tidak menjadi prioritas pemerintah sejak era Reformasi", isCorrect: false }
    ],
    options: [
      { key: "A", text: "1, 2, 3" },
      { key: "B", text: "1, 3" },
      { key: "C", text: "2, 4" },
      { key: "D", text: "3, 4" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan 1 BENAR dan 3 BENAR. Pernyataan 2 SALAH karena partisipasi masyarakat dalam demokrasi justru semakin besar di era Reformasi. Pernyataan 4 SALAH karena pemerintah terus meningkatkan kualitas pendidikan di era Reformasi."
  },
  {
    id: 11,
    type: "pg_kompleks",
    topic: "IPM dan Kualitas Penduduk",
    question: "IMF memprediksi inflasi negara berkembang akan membengkak pada akhir tahun ini. Pernyataan berikut yang benar adalah:",
    statements: [
      { number: 1, text: "Baik negara maju maupun berkembang terdampak inflasi", isCorrect: true },
      { number: 2, text: "Indonesia bukan merupakan contoh negara berkembang", isCorrect: false },
      { number: 3, text: "Negara berkembang lebih terdampak inflasi karena pendapatan masyarakat lebih kecil", isCorrect: true },
      { number: 4, text: "Masyarakat di negara berkembang lebih sejahtera dibandingkan negara maju", isCorrect: false }
    ],
    options: [
      { key: "A", text: "1, 2, 3" },
      { key: "B", text: "1, 3" },
      { key: "C", text: "2, 4" },
      { key: "D", text: "3, 4" }
    ],
    correctAnswer: "B",
    explanation: "Pernyataan 1 BENAR karena baik negara maju maupun berkembang terdampak inflasi. Pernyataan 3 BENAR karena negara berkembang lebih terdampak karena pendapatan masyarakat lebih kecil. Pernyataan 2 SALAH karena Indonesia adalah negara berkembang. Pernyataan 4 SALAH karena masyarakat negara berkembang tidak lebih sejahtera."
  },
  {
    id: 20,
    type: "pg_kompleks",
    topic: "Potensi dan Tantangan Indonesia",
    question: "Perhatikan pernyataan berikut tentang faktor dan tantangan menuju negara maju!",
    statements: [
      { number: 1, text: "Stabilitas politik dan keamanan mendukung masuknya investasi asing", isCorrect: true },
      { number: 2, text: "Penguasaan teknologi dan inovasi menjadi faktor penting dalam daya saing global", isCorrect: true },
      { number: 3, text: "Tingginya angka kemiskinan bukan merupakan tantangan menuju negara maju", isCorrect: false }
    ],
    options: [
      { key: "A", text: "Benar, Benar dan Salah" },
      { key: "B", text: "Benar, Salah dan Benar" },
      { key: "C", text: "Salah, Salah dan Benar" },
      { key: "D", text: "Salah, Benar, Salah" }
    ],
    correctAnswer: "A",
    explanation: "Pernyataan 1 BENAR karena stabilitas politik dan keamanan memang mendukung masuknya investasi asing. Pernyataan 2 BENAR karena penguasaan teknologi dan inovasi penting untuk daya saing global. Pernyataan 3 SALAH karena kemiskinan tinggi justru merupakan tantangan besar menuju negara maju."
  },
  {
    id: 30,
    type: "pg_kompleks",
    topic: "Kerja Sama Internasional",
    question: "Berikut merupakan negara dan tokoh pendiri ASEAN. Pernyataan yang benar tentang negara dan tokoh pendiri ASEAN adalah ....",
    statements: [
      { number: 1, text: "Indonesia - Adam Malik (BENAR)", isCorrect: true },
      { number: 2, text: "Filipina - Narciso Ramos (BENAR)", isCorrect: true },
      { number: 3, text: "Thailand - Thanat Khoman (BENAR)", isCorrect: true },
      { number: 4, text: "Singapura - Tun Abdul Razak (SALAH - yang benar Singapura = S. Rajaratnam, Tun Abdul Razak = Malaysia)", isCorrect: false }
    ],
    options: [
      { key: "A", text: "1, 2, 3" },
      { key: "B", text: "1, 3" },
      { key: "C", text: "2, 4" },
      { key: "D", text: "3, 4" }
    ],
    correctAnswer: "A",
    explanation: "Tokoh pendiri ASEAN yang benar: Indonesia (Adam Malik), Filipina (Narciso Ramos), Thailand (Thanat Khoman), Singapura (S. Rajaratnam), Malaysia (Tun Abdul Razak). Pernyataan 4 salah karena Tun Abdul Razak berasal dari Malaysia, bukan Singapura."
  },
  {
    id: 31,
    type: "pg_kompleks",
    topic: "Kerja Sama Internasional",
    question: "Indonesia menawarkan 39 proyek dalam ASEAN Indo-Pacific Forum (AIPF). Perhatikan pernyataan berikut!",
    statements: [
      { number: 1, text: "ASEAN Indo-Pacific Forum termasuk kerja sama bilateral", isCorrect: false },
      { number: 2, text: "PT Antam merupakan BUMN yang bergerak di bidang industri strategis", isCorrect: true },
      { number: 3, text: "Kerja sama internasional dapat membuat pengerjaan proyek menjadi kurang efisien", isCorrect: false }
    ],
    options: [
      { key: "A", text: "Benar, Benar dan Salah" },
      { key: "B", text: "Benar, Salah dan Benar" },
      { key: "C", text: "Salah, Salah dan Benar" },
      { key: "D", text: "Salah, Benar, Salah" }
    ],
    correctAnswer: "D",
    explanation: "Pernyataan 1 SALAH karena AIPF merupakan kerja sama multilateral, bukan bilateral. Pernyataan 2 BENAR karena PT Antam memang BUMN di bidang industri strategis (pertambangan). Pernyataan 3 SALAH karena kerja sama internasional justru membuat pengerjaan proyek lebih efisien."
  },
  {
    id: 35,
    type: "pg_kompleks",
    topic: "Kerja Sama Internasional",
    question: "Tabel IPM negara-negara Asia Tenggara. Berdasarkan klasifikasi UNDP, perhatikan pernyataan berikut tentang IPM Indonesia!",
    statements: [
      { number: 1, text: "Indonesia menempati urutan teratas dalam kelompok negara dengan pembangunan manusia sangat tinggi", isCorrect: false },
      { number: 2, text: "Posisi Indonesia berada pada kelompok pembangunan manusia kategori 'Tinggi' (High Human Development), melampaui beberapa negara tetangga seperti Vietnam", isCorrect: true },
      { number: 3, text: "Indonesia masih berada di kelompok pembangunan manusia rendah karena skornya di bawah 0,684", isCorrect: false }
    ],
    options: [
      { key: "A", text: "Benar, Benar dan Salah" },
      { key: "B", text: "Benar, Salah dan Benar" },
      { key: "C", text: "Salah, Salah dan Benar" },
      { key: "D", text: "Salah, Benar, Salah" }
    ],
    correctAnswer: "D",
    explanation: "Pernyataan 1 SALAH karena Indonesia tidak menempati urutan teratas (yang teratas adalah Singapura, Brunei). Pernyataan 2 BENAR karena Indonesia berada di kategori Tinggi (70-80) dan melampaui Vietnam. Pernyataan 3 SALAH karena Indonesia berada di kategori Tinggi, bukan rendah."
  },

  // ========== BENAR / SALAH ==========
  {
    id: 101,
    type: "benar_salah",
    topic: "Sejarah Pemerintahan Indonesia",
    question: "Tentukan apakah pernyataan berikut tentang Orde Lama di Indonesia Benar atau Salah!",
    statements: [
      { number: 1, text: "Orde Lama berlangsung sejak kemerdekaan Indonesia hingga tahun 1966", isCorrect: true },
      { number: 2, text: "Pada masa Orde Lama, sistem pemerintahan tidak pernah mengalami perubahan", isCorrect: false },
      { number: 3, text: "Gunting Syafruddin merupakan kebijakan ekonomi pada masa Orde Lama", isCorrect: true },
      { number: 4, text: "Presiden Soeharto memimpin Indonesia pada masa Orde Lama", isCorrect: false }
    ],
    explanation: "Pernyataan 1 BENAR: Orde Lama berlangsung 1945-1966. Pernyataan 2 SALAH: Sistem pemerintahan beberapa kali berubah dengan pergantian kabinet. Pernyataan 3 BENAR: Gunting Syafruddin adalah kebijakan ekonomi masa Orde Lama (1950). Pernyataan 4 SALAH: Yang memimpin masa Orde Lama adalah Presiden Soekarno, bukan Soeharto."
  },
  {
    id: 102,
    type: "benar_salah",
    topic: "IPM dan Kualitas Penduduk",
    question: "Tentukan apakah pernyataan berikut tentang IPM dan kualitas penduduk Benar atau Salah!",
    statements: [
      { number: 1, text: "IPM diukur berdasarkan tiga aspek utama: kesehatan, pendidikan, dan standar hidup layak", isCorrect: true },
      { number: 2, text: "Angka kelahiran merupakan salah satu indikator dalam perhitungan IPM", isCorrect: false },
      { number: 3, text: "Indonesia memiliki PDB tinggi tetapi pendapatan per kapita rendah karena jumlah penduduk besar", isCorrect: true },
      { number: 4, text: "IPM Indonesia termasuk kategori sangat tinggi (≥80)", isCorrect: false }
    ],
    explanation: "Pernyataan 1 BENAR: IPM diukur dari kesehatan, pendidikan, dan standar hidup layak. Pernyataan 2 SALAH: Angka kelahiran bukan indikator IPM. Pernyataan 3 BENAR: PDB tinggi dibagi penduduk besar = per kapita rendah. Pernyataan 4 SALAH: IPM Indonesia 74,39 termasuk kategori Tinggi (70-80), bukan Sangat Tinggi."
  },
  {
    id: 103,
    type: "benar_salah",
    topic: "Pembangunan Berkelanjutan (SDGs)",
    question: "Tentukan apakah pernyataan berikut tentang pembangunan berkelanjutan Benar atau Salah!",
    statements: [
      { number: 1, text: "Pembangunan berkelanjutan mempertimbangkan kebutuhan generasi mendatang", isCorrect: true },
      { number: 2, text: "Eksploitasi sumber daya alam secara maksimal sesuai dengan prinsip pembangunan berkelanjutan", isCorrect: false },
      { number: 3, text: "SDGs mendorong transisi dari bahan bakar fosil ke energi terbarukan", isCorrect: true },
      { number: 4, text: "Persentase penduduk miskin Indonesia pada Maret 2024 berada di atas 10%", isCorrect: false }
    ],
    explanation: "Pernyataan 1 BENAR: Inti pembangunan berkelanjutan adalah mempertimbangkan kebutuhan generasi mendatang. Pernyataan 2 SALAH: Eksploitasi maksimal bertentangan dengan prinsip keberlanjutan. Pernyataan 3 BENAR: SDG 7 mendorong energi bersih dan terjangkau. Pernyataan 4 SALAH: Persentase penduduk miskin Maret 2024 adalah 9,03% (di bawah 10%)."
  },
  {
    id: 104,
    type: "benar_salah",
    topic: "Geografi Benua",
    question: "Tentukan apakah pernyataan berikut tentang geografi benua Benar atau Salah!",
    statements: [
      { number: 1, text: "Benua Asia merupakan benua terluas di dunia", isCorrect: true },
      { number: 2, text: "Sungai Nil mengalir hanya melalui negara Mesir saja", isCorrect: false },
      { number: 3, text: "Suku Aborigin merupakan penduduk asli Benua Australia", isCorrect: true },
      { number: 4, text: "Negara-negara di Benua Eropa mengalami peningkatan drastis jumlah penduduk usia muda", isCorrect: false }
    ],
    explanation: "Pernyataan 1 BENAR: Asia adalah benua terluas. Pernyataan 2 SALAH: Sungai Nil mengalir melintasi beberapa negara di Afrika, bukan hanya Mesir. Pernyataan 3 BENAR: Aborigin adalah penduduk asli Australia. Pernyataan 4 SALAH: Eropa mengalami penuaan penduduk, bukan peningkatan penduduk muda."
  },

  // ========== MENJODOHKAN ==========
  {
    id: 201,
    type: "menjodohkan",
    topic: "Sejarah Pemerintahan Indonesia",
    question: "Jodohkan masa pemerintahan Indonesia dengan tokoh dan peristiwanya yang tepat!",
    leftItems: [
      { id: "L1", text: "Orde Lama" },
      { id: "L2", text: "Orde Baru" },
      { id: "L3", text: "Reformasi" }
    ],
    rightItems: [
      { id: "R1", text: "Supersemar" },
      { id: "R2", text: "Gunting Syafruddin" },
      { id: "R3", text: "Dana Desa 1,4 M" }
    ],
    correctPairs: [
      { left: "L1", right: "R2" },
      { left: "L2", right: "R1" },
      { left: "L3", right: "R3" }
    ],
    explanation: "Orde Lama → Gunting Syafruddin (kebijakan ekonomi masa Soekarno). Orde Baru → Supersemar (dasar hukum kekuasaan Soeharto). Reformasi → Dana Desa 1,4 M (program masa Joko Widodo)."
  },
  {
    id: 202,
    type: "menjodohkan",
    topic: "Kerja Sama Internasional",
    question: "Jodohkan badan khusus PBB dengan bidang yang ditanganinya!",
    leftItems: [
      { id: "L1", text: "WHO" },
      { id: "L2", text: "FAO" },
      { id: "L3", text: "UNESCO" },
      { id: "L4", text: "ILO" }
    ],
    rightItems: [
      { id: "R1", text: "Pangan" },
      { id: "R2", text: "Kesehatan" },
      { id: "R3", text: "Peningkatan taraf hidup kaum buruh" },
      { id: "R4", text: "Pendidikan dan budaya" }
    ],
    correctPairs: [
      { left: "L1", right: "R2" },
      { left: "L2", right: "R1" },
      { left: "L3", right: "R4" },
      { left: "L4", right: "R3" }
    ],
    explanation: "WHO → Kesehatan. FAO → Pangan. UNESCO → Pendidikan dan budaya. ILO → Peningkatan taraf hidup kaum buruh dan pekerja."
  },
  {
    id: 203,
    type: "menjodohkan",
    topic: "Kerja Sama Internasional",
    question: "Jodohkan negara pendiri ASEAN dengan tokoh pendirinya!",
    leftItems: [
      { id: "L1", text: "Indonesia" },
      { id: "L2", text: "Filipina" },
      { id: "L3", text: "Singapura" },
      { id: "L4", text: "Malaysia" }
    ],
    rightItems: [
      { id: "R1", text: "S. Rajaratnam" },
      { id: "R2", text: "Adam Malik" },
      { id: "R3", text: "Narciso Ramos" },
      { id: "R4", text: "Tun Abdul Razak" }
    ],
    correctPairs: [
      { left: "L1", right: "R2" },
      { left: "L2", right: "R3" },
      { left: "L3", right: "R1" },
      { left: "L4", right: "R4" }
    ],
    explanation: "Indonesia → Adam Malik. Filipina → Narciso Ramos. Singapura → S. Rajaratnam. Malaysia → Tun Abdul Razak."
  },
  {
    id: 204,
    type: "menjodohkan",
    topic: "Pembangunan Berkelanjutan (SDGs)",
    question: "Jodohkan tujuan SDGs dengan nomor dan fokusnya yang tepat!",
    leftItems: [
      { id: "L1", text: "SDG 2" },
      { id: "L2", text: "SDG 6" },
      { id: "L3", text: "SDG 7" },
      { id: "L4", text: "SDG 12" }
    ],
    rightItems: [
      { id: "R1", text: "Konsumsi dan produksi bertanggung jawab" },
      { id: "R2", text: "Energi bersih dan terjangkau" },
      { id: "R3", text: "Zero Hunger (Kelaparan Nol)" },
      { id: "R4", text: "Air bersih dan sanitasi layak" }
    ],
    correctPairs: [
      { left: "L1", right: "R3" },
      { left: "L2", right: "R4" },
      { left: "L3", right: "R2" },
      { left: "L4", right: "R1" }
    ],
    explanation: "SDG 2 → Zero Hunger. SDG 6 → Air bersih dan sanitasi layak. SDG 7 → Energi bersih dan terjangkau. SDG 12 → Konsumsi dan produksi bertanggung jawab."
  },
  {
    id: 205,
    type: "menjodohkan",
    topic: "Geografi Benua",
    question: "Jodohkan benua dengan karakteristik geografisnya!",
    leftItems: [
      { id: "L1", text: "Asia Tenggara" },
      { id: "L2", text: "Afrika (Lembah Sungai Nil)" },
      { id: "L3", text: "Australia (Sabana)" },
      { id: "L4", text: "Eropa" }
    ],
    rightItems: [
      { id: "R1", text: "Peternakan sapi dan domba" },
      { id: "R2", text: "Pertanian lahan basah dan perkebunan" },
      { id: "R3", text: "Penuaan penduduk (aging population)" },
      { id: "R4", text: "Pertanian intensif di lembah sungai" }
    ],
    correctPairs: [
      { left: "L1", right: "R2" },
      { left: "L2", right: "R4" },
      { left: "L3", right: "R1" },
      { left: "L4", right: "R3" }
    ],
    explanation: "Asia Tenggara → Pertanian lahan basah (iklim tropis, muson). Afrika (Sungai Nil) → Pertanian intensif di lembah sungai (tanah subur dari endapan banjir). Australia (Sabana) → Peternakan sapi dan domba. Eropa → Penuaan penduduk."
  }
];

// Get questions by type
export function getQuestionsByType(type: QuestionType): Question[] {
  return cbtQuestions.filter(q => q.type === type);
}

// Get all questions
export function getAllQuestions(): Question[] {
  return cbtQuestions;
}

// Shuffle array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
