"use client";

import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnnouncementBar from "@/components/AnnouncementBar";

import FloatingChat from "@/components/FloatingChat";
import HowItWorksSection from '@/components/HowItWorksSection';



export default function Home() {
    return (
        <main className="font-sans">
            <AnnouncementBar />
            <Navigation />
            <HeroSection />
            <HowItWorksSection />



            <FloatingChat />
        </main>
    );
}