import { Hero } from "@/components/hero";
import { Writing } from "@/components/writing";
import { Connect } from "@/components/connect";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Writing />
      <Connect />
      <Footer />
    </main>
  );
}
