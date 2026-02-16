import Image from "next/image";
import { Linkedin, Mail, Newspaper } from "lucide-react";
import { socialLinks } from "@/app/data";

export function Hero() {
  return (
    <section className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16">
          {/* Photo */}
          <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[3/4] shrink-0 overflow-hidden rounded-2xl">
            <Image
              src="/headshot.jpeg"
              alt="Jeremy Olken"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 280px, 320px"
            />
          </div>

          {/* Text */}
          <div className="flex-1 pb-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-5">
              I follow my curiosity
              <br />
              and build things.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
              I&apos;ve spent a decade at the intersection of emerging
              technology and real-world impact. Right now, that means AI.
            </p>

            <p className="text-sm text-muted-foreground mb-8">
              Jeremy Olken&ensp;&middot;&ensp;VP, AI Products at GMR
              Marketing&ensp;&middot;&ensp;Denver, CO
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
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
