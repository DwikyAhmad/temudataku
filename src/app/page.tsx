"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Users,
    BookOpen,
    BarChart3,
    Brain,
    TrendingUp,
    Eye,
    Clock,
    MessageSquare,
    CheckCircle,
    Video,
    Shield,
    Star,
    UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/NavbarComp";

export default function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const practiceModules = [
        {
            title: "Data Analysis",
            subtitle: "Customer Analysis",
            description:
                "Pelajari teknik analisis pelanggan untuk memahami perilaku dan preferensi konsumen",
            icon: BarChart3,
            color: "from-blue-500 to-purple-600",
        },
        {
            title: "Machine Learning",
            subtitle: "Natural Language Processing",
            description:
                "Kuasai pemrosesan bahasa alami untuk menganalisis teks dan sentimen",
            icon: MessageSquare,
            color: "from-green-500 to-teal-600",
        },
        {
            title: "Data Science",
            subtitle: "Churn Prediction",
            description:
                "Prediksi tingkat churn pelanggan menggunakan algoritma machine learning",
            icon: TrendingUp,
            color: "from-red-500 to-pink-600",
        },
        {
            title: "Machine Learning",
            subtitle: "Classification",
            description:
                "Implementasi algoritma klasifikasi untuk berbagai kasus bisnis",
            icon: Brain,
            color: "from-yellow-500 to-orange-600",
        },
        {
            title: "Machine Learning",
            subtitle: "Computer Vision",
            description:
                "Teknologi pengenalan gambar dan pengolahan visual untuk aplikasi AI",
            icon: Eye,
            color: "from-indigo-500 to-blue-600",
        },
        {
            title: "Machine Learning",
            subtitle: "Time Series",
            description:
                "Analisis dan prediksi data time series untuk forecasting bisnis",
            icon: Clock,
            color: "from-purple-500 to-pink-600",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.h1
                            {...fadeInUp}
                            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6"
                        >
                            Temu<span className="text-secondary">Dataku</span>
                        </motion.h1>
                        <motion.p
                            {...fadeInUp}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
                        >
                            Platform pembelajaran terdepan untuk Data Analyst,
                            Data Scientist, dan Machine Learning
                        </motion.p>
                        <motion.p
                            {...fadeInUp}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
                        >
                            Bergabunglah dengan ribuan profesional data yang
                            telah mengembangkan karir mereka bersama kami
                        </motion.p>
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button
                                onClick={() =>
                                    (window.location.href = "/dashboard")
                                }
                                className="bg-secondary text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all flex items-center gap-2 group h-auto shadow-lg hover:shadow-xl"
                            >
                                <div className="flex items-center gap-2">
                                    Mulai Perjalanan Anda
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Button>
                            <Button
                                variant="outline"
                                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all h-auto bg-transparent"
                                onClick={() => {
                                    document
                                        .getElementById("features")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                Pelajari Lebih Lanjut
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                            Fitur Utama TemuDataku
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Dua layanan unggulan yang dirancang khusus untuk
                            mengakselerasi pembelajaran data Anda
                        </p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Mentoring 1-on-1
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Dapatkan bimbingan personal dari mentor
                                berpengalaman. Tanyakan apapun seputar data
                                analyst, data scientist, dan machine learning
                                dalam sesi eksklusif.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-secondary" />
                                    <span className="text-gray-700">
                                        Sesi personal 1-on-1
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-secondary" />
                                    <span className="text-gray-700">
                                        Mentor berpengalaman industri
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-secondary" />
                                    <span className="text-gray-700">
                                        Jadwal fleksibel
                                    </span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <BookOpen className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Practice & Studi Kasus
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Kembangkan skills dengan pengalaman hands-on
                                melalui studi kasus nyata dari berbagai industri
                                dan domain spesialisasi.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-secondary" />
                                    <span className="text-gray-700">
                                        Studi kasus real-world
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-secondary" />
                                    <span className="text-gray-700">
                                        Dataset industri terkini
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-secondary" />
                                    <span className="text-gray-700">
                                        Feedback & evaluasi
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Practice Modules Section */}
            <section id="practice" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                            Modul Practice Pembelajaran
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Eksplorasi berbagai domain dalam data science dengan
                            studi kasus praktis yang disesuaikan dengan
                            kebutuhan industri
                        </p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {practiceModules.map((module, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            >
                                <div
                                    className={`h-2 bg-gradient-to-r ${module.color}`}
                                ></div>
                                <div className="p-6">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <module.icon className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">
                                        {module.title}
                                    </h3>
                                    <h4 className="text-secondary font-semibold mb-3">
                                        {module.subtitle}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {module.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mentoring Pricing Section */}
            <section id="mentoring" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                            Paket Mentoring TemuDataku
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pilih paket mentoring yang sesuai dengan kebutuhan
                            pembelajaran Anda. Dapatkan bimbingan langsung dari
                            mentor berpengalaman di industri data.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        {/* Mentoring 1 on 1 */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-red-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                                Most Popular
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                                        <UserCheck className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary">
                                        Mentoring 1 on 1
                                    </h3>
                                </div>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">
                                        Rp 49.000
                                    </span>
                                    <span className="text-gray-500 ml-2">
                                        /sesi
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <Clock className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Mentoring 45 menit
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <MessageSquare className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Tanya apapun permasalahan dalam bidang
                                        data science
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <Video className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Rekaman sesi mentoring
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <Shield className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Garansi kepuasan*
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <Star className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Dapatkan akses ke praktik data science**
                                    </span>
                                </li>
                            </ul>

                            <Button
                                variant="outline"
                                onClick={() =>
                                    (window.location.href = "/dashboard")
                                }
                                className="w-full rounded-xl border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white h-12 font-semibold transition-all duration-300"
                            >
                                Choose Plan
                            </Button>
                        </motion.div>

                        {/* Mentoring Group */}
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-secondary relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold">
                                Best Value
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary">
                                        Mentoring Group
                                    </h3>
                                </div>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">
                                        Rp 159.000
                                    </span>
                                    <span className="text-gray-500 ml-2">
                                        /sesi
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <Clock className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Mentoring 90 menit
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <MessageSquare className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Tanya apapun permasalahan dalam bidang
                                        data science
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <Video className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Rekaman sesi mentoring
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <Shield className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Garansi kepuasan*
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <Star className="w-3 h-3 text-secondary" />
                                    </div>
                                    <span className="text-gray-700">
                                        Dapatkan akses ke praktik data science**
                                    </span>
                                </li>
                            </ul>

                            <Button
                                onClick={() =>
                                    (window.location.href = "/dashboard")
                                }
                                className="w-full bg-secondary hover:bg-secondary/90 rounded-xl h-12 font-semibold transition-all duration-300"
                            >
                                Choose Plan
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        {...fadeInUp}
                        className="text-3xl sm:text-4xl font-bold text-white mb-6"
                    >
                        Siap Memulai Perjalanan Data Anda?
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
                    >
                        Bergabunglah dengan TemuDataku hari ini dan dapatkan
                        akses ke semua fitur pembelajaran premium
                    </motion.p>
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            onClick={() => (window.location.href = "/dashboard")}
                            className="bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all flex items-center gap-2 group h-auto shadow-lg hover:shadow-xl"
                        >
                            <div className="flex items-center gap-2">
                                Daftar Sekarang
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => (window.location.href = "/login")}
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all h-auto bg-transparent"
                        >
                            Masuk ke Akun
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold mb-4">
                                TemuDataku
                            </h3>
                            <p className="text-gray-400 mb-4 max-w-md">
                                Platform pembelajaran terdepan untuk
                                mengembangkan skills data analyst, data
                                scientist, dan machine learning.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Layanan</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-secondary transition-colors"
                                    >
                                        Mentoring
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-secondary transition-colors"
                                    >
                                        Practice
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-secondary transition-colors"
                                    >
                                        Certification
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Dukungan</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-secondary transition-colors"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-secondary transition-colors"
                                    >
                                        Kontak
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-secondary transition-colors"
                                    >
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 TemuDataku. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
