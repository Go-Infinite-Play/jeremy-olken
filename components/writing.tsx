import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/app/data";
import { FadeIn } from "./fade-in";

export function Writing() {
  return (
    <section className="px-6 pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="border-t border-border pt-10">
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4 max-w-xl">
              I write{" "}
              <a
                href={socialLinks.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-muted-foreground/40 hover:decoration-foreground transition-colors duration-200"
              >
                Infinite Play
              </a>{" "}
              on Substack. Technology, humanity, and where they&apos;re headed.
            </p>
            <a
              href={socialLinks.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Read Infinite Play
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
