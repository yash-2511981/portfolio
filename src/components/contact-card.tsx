"use client";

import React from "react";
import { Mail, MapPin, PhoneIcon } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const ContactCard = ({ open }: { open: boolean }) => {
  return (
    <div
      className={cn(
        "px-4 md:px-6 fixed bottom-14 right-10 sm:bottom-12 sm:right-9 transition-all duration-300",
        {
          "h-0 w-0": !open,
          "scale-100": open,
        }
      )}
    >
      <div className="max-w-md mx-auto">
        {/* Contact Card - Only Left Side */}
        <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm bg-gradient-to-br from-background via-card to-background p-8">
          <CardContent className="p-0">
            <div className="">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h4 className="text-xl font-bold">
                    Building with purpose, improving with passion
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Get in touch and let&apos;s bring ideas to life.
                  </p>
                </div>

                <div className="space-y-4">
                  <div
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer group"
                    onClick={() => {
                      navigator.clipboard.writeText("8788064485");
                      toast.success("Contact number copied!");
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <PhoneIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">
                        +91 8788064485
                      </p>
                    </div>
                  </div>

                  <a
                    href="mailto:shetyeyash444@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                    onClick={() => {
                      navigator.clipboard.writeText("shetyeyash444@gmail.com");
                      toast.success("Mail Id copied!");
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">
                        shetyeyash444@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">
                        Virar, Maharashtra
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-8 justify-end">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-accent hover:bg-primary/20 flex items-center justify-center transition-colors group"
                      title={link.name}
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactCard;
