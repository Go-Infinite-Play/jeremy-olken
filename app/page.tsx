'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineCards = document.querySelectorAll('.timeline-card');
    timelineCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('jeremy.olken@gmail.com');
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Headshot */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-[var(--primary)] rounded-full opacity-20 blur-xl"></div>
              <div className="relative w-full h-full bg-white rounded-full overflow-hidden border-4 border-[var(--primary)]">
                <Image
                  src="/headshot.jpeg"
                  alt="Jeremy Olken"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-2 md:order-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)]">
              Hey, I'm Jeremy.
            </h1>

            <div className="space-y-4 text-lg md:text-xl text-[var(--foreground)] leading-relaxed">
              <p>
                I'm an AI-native operator—a new breed of professional who doesn't just understand AI,
                but knows how to integrate it into business operations and build teams around it.
              </p>

              <p className="font-medium">Here's what that means:</p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>I build products with <strong>Claude Code</strong> and <strong>Cursor</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>I run marketing campaigns with custom <strong>N8N workflows</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>I build intelligent agents in <strong>Lindy.AI</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>I generate videos using <strong>Sora</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>I help build and lead teams that operate efficiently in the AI era</span>
                </li>
              </ul>

              <p>
                I bridge the gap between emerging technology and business impact. I understand how AI
                transforms operations, and more importantly, I know how to execute on that transformation.
              </p>
            </div>

            <div className="pt-6">
              <p className="text-2xl font-semibold text-[var(--primary)] mb-4">
                But how did I get here?
              </p>
              <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                <span>Scroll to explore the journey</span>
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 md:px-12 bg-white" ref={timelineRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--foreground)]">
            The Journey to AI-Native
          </h2>

          {/* Timeline Container - Horizontal scroll on mobile, grid on desktop */}
          <div className="space-y-20">

            {/* Era 1: Foundation */}
            <article className="timeline-card opacity-0 transition-all duration-700 translate-y-10">
              <div className="bg-[var(--background)] rounded-2xl p-8 md:p-12 border-2 border-[var(--border)] hover:border-[var(--primary)] transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    📚
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--foreground)]">The Foundation</h3>
                    <p className="text-[var(--muted-foreground)] text-lg">2012-2016</p>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-[var(--foreground)]">
                  <p>
                    <strong>University of Illinois</strong> - Bachelor's in Marketing
                  </p>
                  <p>
                    Where it started: Learning the fundamentals of marketing strategy, consumer behavior,
                    and how to tell stories that move people. This is where I developed my analytical
                    mindset and learned to bridge creative thinking with data-driven decision making.
                  </p>
                  <div className="pt-4 border-t border-[var(--border)]">
                    <p className="text-[var(--primary)] font-semibold">
                      ✓ Foundation in strategic thinking and storytelling
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Era 2: Innovation Strategist */}
            <article className="timeline-card opacity-0 transition-all duration-700 translate-y-10">
              <div className="bg-[var(--background)] rounded-2xl p-8 md:p-12 border-2 border-[var(--border)] hover:border-[var(--primary)] transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    💡
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--foreground)]">The Innovation Strategist Era</h3>
                    <p className="text-[var(--muted-foreground)] text-lg">2016-2022</p>
                  </div>
                </div>

                <div className="space-y-6 text-lg text-[var(--foreground)]">
                  <p>
                    Six years across global advertising agencies—<strong>Epsilon</strong>, <strong>Leo Burnett</strong>,
                    and <strong>Omnicom Health Group</strong>—where I became a specialist in helping Fortune 500
                    clients navigate emerging technology.
                  </p>

                  <div>
                    <h4 className="text-xl font-bold mb-3">What I Built:</h4>

                    <div className="space-y-4 ml-4">
                      <div>
                        <p className="font-semibold text-[var(--primary)]">At Epsilon (2019-2020) - Senior Innovation Strategist</p>
                        <ul className="space-y-2 mt-2 ml-4">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Developed the Amazon Voice Center of Excellence, securing an official partnership with Amazon's Agency Development team</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Created "Get Growing," an internal innovation program connecting junior talent with executives for grassroots innovation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Led trend research and educated teams on emerging tech implications</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-[var(--primary)]">At Leo Burnett (2020-2021) - Senior Innovation Strategist</p>
                        <ul className="space-y-2 mt-2 ml-4">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Co-created the Digital Innovation Lab, a hands-on experience center for clients to experiment with emerging tech</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Built and managed $2M in revenue over 2 years by implementing voice assistants, chatbots, mixed reality, and AI solutions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Established comprehensive strategy, product management, and UX processes for technology implementation</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-[var(--primary)]">At Omnicom Health Group (2021-2022) - VP, Director of Digital Innovation</p>
                        <ul className="space-y-2 mt-2 ml-4">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Founded and led the Digital Fusion group—a cross-network community driving digital transformation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Sourced strategic partnerships with leading tech providers</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Championed AI, voice assistants, and mixed reality in healthcare marketing campaigns</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Organized weekly speaker series and innovation events across the 5,000+ person network</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)]">
                    <p className="font-semibold mb-2">This era taught me three critical abilities:</p>
                    <ol className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] font-bold mr-2">1.</span>
                        <span><strong>Strategic Vision</strong> - Understanding technology implications before they're obvious</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] font-bold mr-2">2.</span>
                        <span><strong>Builder Mindset</strong> - Translating vision into tangible products and solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] font-bold mr-2">3.</span>
                        <span><strong>Internal Evangelism</strong> - Selling innovation internally and building organizational buy-in</span>
                      </li>
                    </ol>
                    <p className="mt-4">
                      I learned how to scope projects, pitch them to stakeholders, and lead cross-functional
                      teams to bring them to life. These skills would prove essential in the AI era.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Era 3: Web3 Detour */}
            <article className="timeline-card opacity-0 transition-all duration-700 translate-y-10">
              <div className="bg-[var(--background)] rounded-2xl p-8 md:p-12 border-2 border-[var(--border)] hover:border-[var(--primary)] transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    🔗
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--foreground)]">The Web3 Experiment</h3>
                    <p className="text-[var(--muted-foreground)] text-lg">2022-2023</p>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-[var(--foreground)]">
                  <p>
                    Like many in tech, I got caught up in the web3 craze.
                  </p>
                  <p>
                    Was it all valuable? No. Did I learn some lessons? Absolutely. Ask me about the stories sometime. 😅
                  </p>

                  <div>
                    <h4 className="text-xl font-bold mb-3">What It Taught Me:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2">•</span>
                        <span>How to evaluate emerging technology with healthy skepticism</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2">•</span>
                        <span>The difference between hype and substance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2">•</span>
                        <span>How to pivot quickly when the market signals change</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2">•</span>
                        <span>That not every trend is worth chasing—but every experience teaches you something</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[var(--border)]">
                    <p className="text-[var(--primary)] font-semibold italic">
                      ✓ Sometimes the detours teach you the most valuable lessons
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Era 4: AI Native */}
            <article className="timeline-card opacity-0 transition-all duration-700 translate-y-10">
              <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-8 md:p-12 border-2 border-[var(--primary)] shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[var(--primary)] text-2xl font-bold">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">AI Native: The Present & Future</h3>
                    <p className="text-white/80 text-lg">2023-Present</p>
                  </div>
                </div>

                <div className="space-y-6 text-lg text-white">
                  <p>
                    In 2023, something clicked. AI wasn't just another trend—it was a fundamental shift
                    in how work gets done. Every business, regardless of industry, was about to go through
                    massive transformation.
                  </p>
                  <p className="font-semibold">I dove in headfirst.</p>

                  <div>
                    <h4 className="text-xl font-bold mb-3">What I've Done:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Product Leadership at an AI Startup</strong> - Led product strategy and development, learning how to build AI-native products from the ground up</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Freelance AI Consultant</strong> - Helped diverse clients integrate AI into their operations, from workflow automation to custom agent development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Founded My Own AI Consultancy</strong> - Now helping companies navigate their AI transformation with hands-on implementation</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">What I've Mastered:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>AI Development Tools:</strong> Claude Code, Cursor, and modern AI-assisted development workflows</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Automation & Agents:</strong> Building intelligent systems with N8N, Lindy.AI, and custom solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>AI Creative Tools:</strong> Leveraging Sora and other generative AI for content creation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Team Building:</strong> Creating and leading AI-native teams that operate at unprecedented efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span><strong>Strategic Implementation:</strong> Not just understanding AI, but knowing how to integrate it into real business operations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/30">
                    <h4 className="text-xl font-bold mb-3">The AI-Native Difference:</h4>
                    <p>
                      I'm not an engineer who learned business. I'm not a business person dabbling in AI.
                      I'm someone who deeply understands both strategic business needs and how to build
                      with AI tools to meet those needs.
                    </p>
                    <p className="mt-4">
                      This is the future of work: operators who can think strategically, build tactically,
                      and lead teams through transformation. That's what being AI-native means.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/30">
                    <p className="text-2xl font-bold">
                      ✓ Current Focus: Helping businesses transform from AI-curious to AI-capable
                    </p>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)]">
            Ready to Build AI-Native?
          </h2>

          <p className="text-xl md:text-2xl text-[var(--foreground)] leading-relaxed">
            Whether you need help integrating AI into your operations, building AI-powered products,
            or transforming your team to work in the AI era—I can help.
          </p>

          <p className="text-2xl font-semibold text-[var(--primary)]">
            Let's talk about what's possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={handleEmailClick}
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold text-lg hover:bg-[var(--primary)]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Get in Touch
            </button>
            <a
              href="https://www.linkedin.com/in/jeremyolken/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[var(--foreground)] border-2 border-[var(--primary)] rounded-full font-semibold text-lg hover:bg-[var(--primary)] hover:text-white transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto text-center text-[var(--muted-foreground)]">
          <p>© 2025 Jeremy Olken. Built with Claude Code.</p>
        </div>
      </footer>

      {/* Email Modal */}
      {showEmailModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setShowEmailModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              Let's be real...
            </h3>
            <p className="text-lg text-[var(--foreground)] mb-6">
              C'mon, these things never work. It'll probably just open up Outlook that you haven't used in 10 years. Just copy and paste my email:
            </p>
            <div className="bg-[var(--background)] rounded-lg p-4 mb-6 flex items-center justify-between">
              <code className="text-lg font-mono text-[var(--foreground)]">jeremy.olken@gmail.com</code>
              <button
                onClick={copyEmail}
                className="ml-4 px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]/90 transition-colors font-semibold"
              >
                Copy
              </button>
            </div>
            <button
              onClick={() => setShowEmailModal(false)}
              className="w-full px-4 py-3 bg-[var(--foreground)] text-white rounded-lg hover:bg-[var(--foreground)]/90 transition-colors font-semibold"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
