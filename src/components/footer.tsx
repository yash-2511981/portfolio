import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-6 bg-card border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
          <span className="font-headline font-bold">Yash Shetye</span>
        </div>
        <div className="text-center text-foreground/60">
          © {new Date().getFullYear()} Yash Shetye. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
