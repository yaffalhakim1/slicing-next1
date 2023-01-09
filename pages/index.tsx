import "tailwindcss/tailwind.css";
import ContactSec from "../components/contactSec";
import Hero from "../components/hero";
import Profile from "../components/ProfileSec";
import ProjectSec from "../components/Projects";
import Skills from "../components/SkillsSec";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Skills />
      <ProjectSec />
      <ContactSec />
    </>
  );
}
//menit 56:22 membuat hero
