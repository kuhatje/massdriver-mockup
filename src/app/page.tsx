"use client";

import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingChat from "@/components/FloatingChat";
import HowItWorksSection from '@/components/HowItWorksSection';
import SeeWhatsPossibleSection from '@/components/SeeWhatsPossibleSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DemoSection from '../components/DemoSection';
import QuestionsSection from '../components/QuestionsSection';
import Footer from '../components/Footer';



export default function Home() {
    return (
        <main className="font-sans">
            <AnnouncementBar />
            <Navigation />
            <HeroSection />
            <HowItWorksSection />
            <SeeWhatsPossibleSection/>
            <TestimonialsSection/>
            <DemoSection/>

            <QuestionsSection/>
            <Footer/>

            <FloatingChat />
        </main>
    );
}