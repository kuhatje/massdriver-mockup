"use client";

import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";




export default function Home() {
    return (
        <main>
            <Navigation />
            <HeroSection />
            <FeatureSection />
            <Footer />
        </main>
    );
}