"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/project-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import ContactCard from "@/components/contact-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, X } from "lucide-react";

export default function Home() {
  const [openContact, setOpenContact] = useState(false);

  const handleOpenClick = () => {
    setOpenContact(!openContact);
    console.log(openContact);
  };

  return (
    <div className="flex min-h-dvh flex-col bg-background relative">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>
      {openContact && <ContactCard open={openContact} />}
      <div className="fixed bottom-5 right-5 rounded-full z-50">
        <Button
          className="size-10 rounded-full p-2"
          title="Connect"
          onClick={handleOpenClick}
        >
          {openContact ? <X className="text-2xl" /> : <User />}
        </Button>
      </div>
    </div>
  );
}
