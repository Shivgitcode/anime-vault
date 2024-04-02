import Hero from "@/components/Hero";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen bg-black font-dm flex flex-col">
      <Hero></Hero>
      {children}
      {/* <Footer></Footer> */}
    </div>
  );
}
