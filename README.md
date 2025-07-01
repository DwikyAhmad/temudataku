# TemuDataku 🚀

**Live Demo:** [https://temudataku-nu.vercel.app/](https://temudataku-nu.vercel.app/)

Platform pembelajaran terdepan untuk Data Analyst, Data Scientist, dan Machine Learning Engineer. TemuDataku menyediakan dua fitur utama: **Practice** (studi kasus hands-on) dan **Mentoring** (sesi 1-on-1 dengan expert).

## ✨ Fitur Utama

- 🎯 **Practice Modules** - Studi kasus real-world dari berbagai industri
- 👨‍🏫 **Mentoring Packages** - Sesi konsultasi 1-on-1 dengan expert
- 🔐 **Autentikasi** - Login/Register dengan Firebase
- 📱 **Responsive Design** - Optimized untuk semua perangkat
- 🎨 **Modern UI** - Menggunakan Tailwind CSS & shadcn/ui
- ⚡ **Smooth Animations** - Powered by Framer Motion

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** Firebase Auth
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📋 Prerequisites

Pastikan Anda sudah menginstall:

- **Node.js** (versi 18.17 atau lebih baru)
- **npm** atau **yarn** atau **pnpm**
- **Git**

## 🚀 Instalasi & Setup Lokal

### 1. Clone Repository

```bash
git clone https://github.com/DwikyAhmad/temudataku.git
cd temudataku
```

### 2. Install Dependencies

```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install

# Atau menggunakan pnpm
pnpm install
```

### 3. Setup Environment Variables

1. Copy file `.env.template` menjadi `.env`:

```bash
cp .env.template .env
```

2. Buka `.env` dan isi dengan konfigurasi Firebase Anda:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

### 4. Setup Firebase

1. Buat project baru di [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication** dengan provider **Email/Password**
3. Copy konfigurasi Firebase ke file `.env`

### 5. Jalankan Development Server

```bash
# Menggunakan npm
npm run dev

# Atau menggunakan yarn
yarn dev

# Atau menggunakan pnpm
pnpm dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

## 📂 Struktur Project

```
temudataku/
├── public/                 # Static assets
├── src/
│   ├── app/               # App Router pages
│   │   ├── dashboard/     # Protected catalog page
│   │   ├── login/         # Login page
│   │   ├── register/      # Register page
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Landing page
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn/ui components
│   │   └── NavbarComp.tsx # Navigation component
│   ├── contexts/          # React contexts
│   │   └── AuthContext.tsx # Authentication context
│   └── lib/              # Utilities
│       ├── firebase.ts    # Firebase configuration
│       └── utils.ts       # Utility functions
├── .env.template          # Environment variables template
├── components.json        # shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design System

### Color Palette
- **Primary:** `#253978` (Navy Blue)
- **Secondary:** `#0CAC6C` (Green)
- **Background:** `#FFFFFF` (White)

### Typography
- **Font:** Plus Jakarta Sans (Google Fonts)

## 🔐 Authentication

Aplikasi menggunakan Firebase Authentication dengan fitur:
- ✅ Email/Password Registration
- ✅ Email/Password Login
- ✅ Protected Routes
- ✅ Automatic Redirect
- ✅ Logout Functionality

## 📱 Pages

### 🏠 Landing Page (`/`)
- Hero section dengan CTA
- Features overview
- Practice modules showcase
- Mentoring packages
- Responsive navigation

### 🔑 Authentication Pages
- **Login** (`/login`) - User login form
- **Register** (`/register`) - User registration form

### 📦 Catalog Page (`/dashboard`)
- **Protected route** - Hanya untuk user yang login
- Display practice modules dengan pricing
- Display mentoring packages
- Skeleton loading saat autentikasi

## 🚀 Deployment

Aplikasi sudah di-deploy di Vercel: [https://temudataku-nu.vercel.app/](https://temudataku-nu.vercel.app/)

### Deploy ke Vercel

1. Push code ke GitHub repository
2. Connect repository di [Vercel Dashboard](https://vercel.com/dashboard)
3. Set environment variables di Vercel project settings
4. Deploy akan berjalan otomatis

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

