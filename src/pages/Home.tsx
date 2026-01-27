import { HeroSection } from "../components/HeroSection"
import { BioSection } from "../components/BioSection"
import { FlowerDivider } from "../components/FlowerDivider"
import { PillarsSection } from "../components/PillarsSection"
import { TherapiesSection } from "../components/TherapiesSection"
import { ProductsSection } from "../components/ProductsSection"
import { CoursesSection } from "../components/CoursesSection"
import { FooterSection } from "../components/FooterSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream animate-fade-in">
      <HeroSection />
      <BioSection />
      <FlowerDivider />
      <PillarsSection />
      <TherapiesSection />
      <ProductsSection />
      <CoursesSection />
      <FooterSection />
    </main>
  )
}