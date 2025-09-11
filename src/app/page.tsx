import Layout from '../components/templates/Layout';
import Navigation from '../components/organisms/Navigation';
import HeroSection from '../components/organisms/HeroSection';
import EducationSection from '../components/organisms/EducationSection';
import SkillsSection from '../components/organisms/SkillsSection';
import ProjectsSection from '../components/organisms/ProjectsSection';
import ContactSection from '../components/organisms/ContactSection';

export default function Home() {
  return (
    <Layout>
      <Navigation />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}