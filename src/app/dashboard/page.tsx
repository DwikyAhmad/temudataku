"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
    LogOut, 
    BookOpen, 
    Users, 
    Clock, 
    Star, 
    CheckCircle,
    BarChart3,
    Brain,
    MessageSquare,
    TrendingUp,
    Eye,
} from "lucide-react";
import Link from "next/link";

export default function CatalogPage() {
    const { currentUser, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!currentUser) {
            router.push("/login");
        }
    }, [currentUser, router]);

    const handleLogout = async () => {
        try {
            await logout();
            router.push("/");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    if (!currentUser) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center justify-center">
                <div className="animate-pulse space-y-8 w-full max-w-7xl mx-auto px-4">
                    {/* Header Skeleton */}
                    <div className="bg-white shadow-sm border-b border-gray-100 h-16 w-full rounded-lg"></div>
                    
                    {/* Welcome Section Skeleton */}
                    <div className="bg-white rounded-3xl shadow-lg p-8">
                        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    
                    {/* Products Grid Skeleton */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const practiceModules = [
        {
            id: 1,
            title: "Customer Analysis",
            category: "Data Analysis",
            description: "Pelajari teknik analisis pelanggan untuk memahami perilaku dan preferensi konsumen",
            duration: "4-6 jam",
            level: "Beginner",
            price: "Rp 299.000",
            icon: BarChart3,
            rating: 4.8,
            students: 1205,
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            title: "Natural Language Processing",
            category: "Machine Learning",
            description: "Kuasai pemrosesan bahasa alami untuk menganalisis teks dan sentimen",
            duration: "6-8 jam",
            level: "Intermediate",
            price: "Rp 399.000",
            icon: MessageSquare,
            rating: 4.9,
            students: 892,
            color: "from-green-500 to-teal-600"
        },
        {
            id: 3,
            title: "Churn Prediction",
            category: "Data Science",
            description: "Prediksi tingkat churn pelanggan menggunakan algoritma machine learning",
            duration: "5-7 jam",
            level: "Intermediate",
            price: "Rp 449.000",
            icon: TrendingUp,
            rating: 4.7,
            students: 756,
            color: "from-red-500 to-pink-600"
        },
        {
            id: 4,
            title: "Classification Algorithms",
            category: "Machine Learning",
            description: "Implementasi algoritma klasifikasi untuk berbagai kasus bisnis",
            duration: "4-5 jam",
            level: "Beginner",
            price: "Rp 349.000",
            icon: Brain,
            rating: 4.6,
            students: 1034,
            color: "from-yellow-500 to-orange-600"
        },
        {
            id: 5,
            title: "Computer Vision",
            category: "Machine Learning",
            description: "Teknologi pengenalan gambar dan pengolahan visual untuk aplikasi AI",
            duration: "7-9 jam",
            level: "Advanced",
            price: "Rp 599.000",
            icon: Eye,
            rating: 4.9,
            students: 623,
            color: "from-indigo-500 to-blue-600"
        },
        {
            id: 6,
            title: "Time Series Forecasting",
            category: "Machine Learning",
            description: "Analisis dan prediksi data time series untuk forecasting bisnis",
            duration: "6-8 jam",
            level: "Advanced",
            price: "Rp 549.000",
            icon: Clock,
            rating: 4.8,
            students: 445,
            color: "from-purple-500 to-pink-600"
        }
    ];

    const mentoringPackages = [
        {
            id: 1,
            title: "Konsultasi Data Science",
            description: "Sesi mentoring 45 menit dengan expert untuk membahas permasalahan data science",
            duration: "45 menit",
            price: "Rp 150.000",
            features: ["Video call 1-on-1", "Recording tersedia", "Follow-up via chat"],
            popular: false
        },
        {
            id: 2,
            title: "Career Guidance",
            description: "Bimbingan karir lengkap 90 menit untuk pengembangan profesional di bidang data",
            duration: "90 menit",
            price: "Rp 250.000",
            features: ["CV/Portfolio review", "Interview preparation", "Career roadmap", "Recording tersedia"],
            popular: true
        },
        {
            id: 3,
            title: "Project Review",
            description: "Review mendalam project data science Anda dengan feedback konstruktif",
            duration: "60 menit",
            price: "Rp 200.000",
            features: ["Code review", "Architecture feedback", "Improvement suggestions", "Best practices"],
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            TemuDataku
                        </Link>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600">
                                Halo, {currentUser.displayName || currentUser.email}
                            </span>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleLogout}
                                className="flex items-center gap-2"
                            >
                                <LogOut className="w-4 h-4" />
                                Keluar
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Welcome Section */}
                    <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            Eksplorasi Produk Kami! 🚀
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Temukan berbagai course practice dan paket mentoring yang dirancang khusus 
                            untuk mengembangkan skill data science Anda dari level pemula hingga expert.
                        </p>
                    </div>

                    {/* Practice Modules Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <BookOpen className="w-8 h-8 text-primary" />
                            <h2 className="text-2xl font-bold text-primary">Practice Modules</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {practiceModules.map((module, index) => {
                                const IconComponent = module.icon;
                                return (
                                    <motion.div
                                        key={module.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                                {module.category}
                                            </span>
                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                {module.level}
                                            </span>
                                        </div>
                                        
                                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {module.title}
                                        </h3>
                                        
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {module.description}
                                        </p>
                                        
                                        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {module.duration}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                {module.rating}
                                            </div>
                                            <span>{module.students} students</span>
                                        </div>
                                        
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-primary">
                                                {module.price}
                                            </span>
                                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                                                Mulai Belajar
                                            </Button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mentoring Packages Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Users className="w-8 h-8 text-secondary" />
                            <h2 className="text-2xl font-bold text-primary">Paket Mentoring</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            {mentoringPackages.map((pkg, index) => (
                                <motion.div
                                    key={pkg.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                                        pkg.popular ? 'ring-2 ring-secondary ring-opacity-50' : ''
                                    }`}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="text-center mb-6">
                                        <h3 className="font-bold text-gray-900 text-lg mb-2">
                                            {pkg.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {pkg.description}
                                        </p>
                                        <div className="text-2xl font-bold text-secondary mb-1">
                                            {pkg.price}
                                        </div>
                                        <span className="text-sm text-gray-500">
                                            per {pkg.duration}
                                        </span>
                                    </div>
                                    
                                    <ul className="space-y-3 mb-6">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm">
                                                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <Button 
                                        className={`w-full ${
                                            pkg.popular 
                                                ? 'bg-secondary hover:bg-secondary/90' 
                                                : 'bg-primary hover:bg-primary/90'
                                        }`}
                                    >
                                        Pilih Paket
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
