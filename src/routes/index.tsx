import { createFileRoute } from "@tanstack/react-router";
import ContentSection from "@/components/content-1";
import Features from "@/components/features-1";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import FooterSection from "@/components/footer";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<>
			<HeroSection />
			<Features />
			<Pricing />
			<ContentSection />
			<FooterSection />
		</>
	);
}
