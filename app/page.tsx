import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6 mx-w-5xl">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
        </main>
    );
}
