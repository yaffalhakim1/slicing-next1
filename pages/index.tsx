import "tailwindcss/tailwind.css";
import ContactSec from "../components/contacts/contactSec";
import ContactSection from "../components/contacts/contactsection2";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ProjectSec from "../components/projects/Projects";
import Profile from "../components/skills/ProfileSec";
import Skills from "../components/skills/SkillsSec";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <ProjectSec />
      <ContactSection />
      <Footer />
    </>
  );
}
//menit 56:22 membuat hero
