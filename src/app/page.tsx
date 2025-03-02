"use client";

import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnnouncementBar from "@/components/AnnouncementBar";


export default function Home() {
    return (
        <main className="font-sans">
            <AnnouncementBar />
            <Navigation />
            <HeroSection />
        </main>
    );
}