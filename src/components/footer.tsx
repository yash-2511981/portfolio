import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-card py-6 px-6">
      <div className="container grid gap-6 md:grid-cols-3 text-sm">
        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-foreground">Contact</h3>
          <div className="flex items-center text-foreground/70">
            <Mail className="mr-2 h-5 w-5" />
            <span>shetyeyash444@gmail.com</span>
          </div>
          <div className="flex items-center text-foreground/70">
            <Phone className="mr-2 h-5 w-5" />
            <span>8788064485</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-4 md:justify-center">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex items-center md:justify-end text-foreground/60">
          © {new Date().getFullYear()} Yash Shetye. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
