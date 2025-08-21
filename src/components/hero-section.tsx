import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100dvh-4rem)] flex items-center px-6"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Yash Vishwanath Shetye
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary font-headline">
            Full-Stack Developer
          </h2>
          <p className="max-w-xl mx-auto md:mx-0 text-lg text-foreground/80">
            A results-driven Full-Stack Developer with expertise in the MERN
            stack, dedicated to building and optimizing high-performance web
            applications. I bridge the gap between frontend and backend
            development to create seamless, responsive, and intuitive user
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="https://placehold.co/400x400.png"
            data-ai-hint="professional portrait"
            alt="Yash Shetye"
            width={400}
            height={400}
            className="rounded-full object-cover shadow-2xl aspect-square"
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#projects" aria-label="Scroll to projects section">
          <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
