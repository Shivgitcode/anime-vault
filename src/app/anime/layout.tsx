import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-black font-dm">
      <Hero></Hero>
      {children}
      <Footer></Footer>
    </div>
  );
}
