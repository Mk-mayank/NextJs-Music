import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import WhyChooseUs from "@/components/WhyChooseus";
import Infinite from "@/components/Infinite";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Hero />  
        <Featured />
        <WhyChooseUs />
        <Infinite />
    </main>
  );
}
