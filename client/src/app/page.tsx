"use client";

import Link from "next/link";
import {
  ArrowRight,
  Database,
  FileSearch,
  LineChart,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroAnimation } from "@/components/hero-animation";
import { FeatureCard } from "@/components/feature-card";
import { SectionReveal } from "@/components/section-reveal";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <header className="container z-40 flex h-20 items-center">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">Vanshavali</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log in
            </Button>
            <Button
              className="hover:cursor-pointer"
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32">
          <SectionReveal>
            <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                Discover Your Genetic Story
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Vanshavali helps you explore your DNA history, understand your
                ancestry, and connect with your genetic heritage.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Start Your Journey <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </SectionReveal>

          <div className="mt-16 h-[300px] w-full max-w-[800px]">
            <HeroAnimation />
          </div>
        </section>

        <section id="features" className="container py-20">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Explore Your DNA Story
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powerful tools to analyze and understand your genetic heritage
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<FileSearch className="h-10 w-10" />}
              title="DNA Analysis"
              description="Advanced algorithms to analyze your genetic data with precision and accuracy."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Ancestry Mapping"
              description="Visualize your family tree and discover connections across generations."
            />
            <FeatureCard
              icon={<LineChart className="h-10 w-10" />}
              title="Population Genetics"
              description="Compare your DNA with global populations to trace your origins."
            />
            <FeatureCard
              icon={<Database className="h-10 w-10" />}
              title="Secure Storage"
              description="Your genetic data is encrypted and stored with the highest security standards."
            />
          </div>
        </section>

        <section id="how-it-works" className="bg-muted/40 py-20">
          <div className="container">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  How It Works
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Simple steps to uncover your genetic heritage
                </p>
              </div>
            </SectionReveal>

            <div className="grid gap-8 md:grid-cols-3">
              <SectionReveal delay={0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Submit Your DNA</h3>
                  <p className="mt-2 text-muted-foreground">
                    Upload your raw DNA data from any major testing service or
                    order our kit.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Advanced Analysis</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our algorithms analyze your genetic markers to trace your
                    ancestry.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Explore Results</h3>
                  <p className="mt-2 text-muted-foreground">
                    Discover your heritage through interactive visualizations
                    and detailed reports.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section id="testimonials" className="container py-20">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                What Our Users Say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join thousands who have discovered their genetic story
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <SectionReveal delay={0.1}>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <p className="text-muted-foreground">
                  "Vanshavali helped me discover my roots in ways I never
                  imagined. The visualization tools are incredible!"
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">
                      New York, USA
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <p className="text-muted-foreground">
                  "I connected with relatives I never knew existed. This
                  platform has changed my understanding of who I am."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">Raj Patel</p>
                    <p className="text-xs text-muted-foreground">
                      Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <p className="text-muted-foreground">
                  "The population genetics feature gave me insights into my
                  mixed heritage that I've been curious about for years."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">Elena Rodriguez</p>
                    <p className="text-xs text-muted-foreground">
                      Barcelona, Spain
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <SectionReveal>
              <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Begin Your Genetic Journey Today
                </h2>
                <p className="mt-4 max-w-[700px] text-lg">
                  Unlock the secrets of your DNA and discover the story of your
                  ancestors.
                </p>
                <Button onClick={()=>{router.push("/dashboard")}} size="lg" variant="secondary" className="mt-8">
                  Get Started Now
                </Button>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Vanshavali. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
