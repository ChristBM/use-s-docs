import CTA from "@/components/cta";
import Hero from "@/components/hero";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div
        className="py-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='14' height='14' fill-opacity='0.05' fill='%23C4C9FF'/%3E%3C/svg%3E\")",
        }}
      >
        <Hero />
      </div>
      <Features />
      <CTA />
    </div>
  );
}
