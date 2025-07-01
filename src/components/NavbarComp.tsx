"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            TemuDataku
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            Our Features
                        </a>
                        <a
                            href="#practice"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            Practice
                        </a>
                        <a
                            href="#mentoring"
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            Mentoring
                        </a>
                        <Link
                            href="/dashboard"
                            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                        >
                            Mulai Belajar
                        </Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
