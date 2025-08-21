import { skills } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-18 md:py-24 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Skills & Resume
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies I am proficient with and a link to my
              resume.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline">Technologies</CardTitle>
              <CardDescription>
                The tools and tech I use to build things.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 flex-grow">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline">My Resume</CardTitle>
              <CardDescription>
                Interested in learning more about my experience?
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 flex-grow items-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#" download>
                  <Download className="mr-2 h-4 w-4" /> Download
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="#" target="_blank">
                  <Eye className="mr-2 h-4 w-4" /> View
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
