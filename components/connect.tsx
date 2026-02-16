"use client";

import { useState } from "react";
import { Linkedin, Mail, Newspaper, ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/app/data";
import { FadeIn } from "./fade-in";
import { EmailModal } from "./email-modal";

export function Connect() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section className="px-6 pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="border-t border-border pt-10">
            <p className="text-lg md:text-xl text-foreground mb-3">
              Say hello.
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-md">
              For my full background,{" "}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors duration-200"
              >
                find me on LinkedIn
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </p>
            <div className="flex items-center gap-5">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Substack"
              >
                <Newspaper className="w-5 h-5" />
              </a>
              <button
                onClick={() => setShowEmail(true)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      <EmailModal open={showEmail} onClose={() => setShowEmail(false)} />
    </section>
  );
}
