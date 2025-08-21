import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { education, certifications } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="w-full py-18 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Education & Certifications
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and professional certifications.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="flex flex-col bg-background/80">
            <CardHeader>
              <CardTitle className="font-headline">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-sm text-foreground/80">
                    {edu.institution} - {edu.year}
                  </p>
                  <p className="text-sm text-foreground/60">{edu.grade}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="flex flex-col bg-background/80">
            <CardHeader>
              <CardTitle className="font-headline">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-sm text-foreground/80">
                    Issued by {cert.issuer} - {cert.year}
                  </p>
                  <p className="text-sm text-foreground/60">
                    Grade: {cert.grade}
                  </p>
                  <p className="text-sm text-foreground/60">
                    Skills: {cert.skills.join(", ")}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
