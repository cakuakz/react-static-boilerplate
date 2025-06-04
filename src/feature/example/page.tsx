import Navbar from './components/navbar'
import AboutSection from './section/about-section'
import ContactSection from './section/contact-section'
import FooterSection from './section/footer-section'
import HeroSection from './section/hero-section'
import ProjectSection from './section/project-section'

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-background px-5 md:px-12">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
