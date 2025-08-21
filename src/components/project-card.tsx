import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Project } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Sheet>
      <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl group">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            <Image
              src={project.images[0]}
              alt={project.images_alt[0]}
              fill
              className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={project.data_ai_hint?.[0]}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6 space-y-4">
          <CardTitle className="font-headline text-2xl">
            {project.title}
          </CardTitle>
          <p className="text-foreground/80 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon">
              <Link
                href={project.githubUrl}
                target="_blank"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link
                href={project.liveUrl}
                target="_blank"
                aria-label="Live Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <SheetTrigger asChild>
            <Button variant="link" className="p-0 h-auto text-primary">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </SheetTrigger>
        </CardFooter>
      </Card>
      <SheetContent className="w-full sm:max-w-xl lg:max-w-2xl p-0">
        <ScrollArea className="h-full">
          <div className="p-6 sm:p-8">
            <SheetHeader className="text-left">
              <SheetTitle className="font-headline text-3xl mb-4">
                {project.title}
              </SheetTitle>
            </SheetHeader>
            <div className="space-y-6">
              <Carousel className="w-full mx-auto mb-4" opts={{ loop: true }}>
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video relative">
                        <Image
                          src={image}
                          alt={project.images_alt[index]}
                          fill
                          className="object-cover rounded-lg border"
                          data-ai-hint={project.data_ai_hint?.[index]}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </>
                )}
              </Carousel>

              <div className="flex flex-wrap gap-2 py-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <SheetDescription className="text-base text-foreground/80 space-y-4">
                {project.longDescription}
              </SheetDescription>

              <div className="flex items-center gap-4 pt-4">
                <Button asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
