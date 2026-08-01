import Layout from '../components/templates/Layout';
import Navigation from '../components/organisms/Navigation';
import HeroSection from '../components/organisms/HeroSection';
import LiveActivitySection from '../components/organisms/LiveActivitySection';
import EducationSection from '../components/organisms/EducationSection';
import SkillsSection from '../components/organisms/SkillsSection';
import ProjectsSection from '../components/organisms/ProjectsSection';
import ContactSection from '../components/organisms/ContactSection';
import Footer from '../components/organisms/Footer';

export default function Home() {
  return (
    <Layout>
      <Navigation />
      <HeroSection />
      <LiveActivitySection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
}