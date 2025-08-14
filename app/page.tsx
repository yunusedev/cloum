import { Footer } from "@/components/general/home/Footer";
import { Header } from "@/components/general/home/Header";
import { HeroSection } from "@/components/general/home/HeroSection";
import Waitlist from "@/components/general/home/Waitlist";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
    <Header/>
    <HeroSection />
    <Waitlist />
    <Footer/>
    </main>
  );
}
