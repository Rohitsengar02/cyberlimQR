import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Glow from "../../ui/glow";
import { ReactNode } from "react";
import Screenshot from "../../ui/screenshot";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroButtonProps {
  href: string;
  text: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Cyberlim QR Code Generator",
  description = "Generate stunning, high-resolution custom QR codes with cyber-inspired aesthetics. Customize colors, sizes, error correction levels, and embed logos instantly.",
  mockup = (
    <Screenshot
      srcLight="/hero.webp"
      srcDark="/hero.webp"
      alt="Launch UI app screenshot"
      width={1248}
      height={765}
      className="w-full rounded-xl shadow-2xl border border-border/50"
    />
  ),
  buttons = [
    {
      href: "/qrCodeGenerator",
      text: "Create QR Code",
    },
    {
      href: "/login",
      text: "Sign In",
    },
  ],
  className,
}: HeroProps) {
  return (
    <>
      <Section
        className={cn(
          "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
          className
        )}
      >
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <h1 className="animate-appear bg-gradient-to-r from-primary via-purple-500 to-pink-500 relative z-10 inline-block bg-clip-text text-4xl leading-tight font-extrabold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
              {title}
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              {description}
            </p>
            {buttons !== false && buttons.length > 0 && (
              <div className="animate-appear relative z-10 flex flex-wrap justify-center gap-4 opacity-0 delay-300">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    asChild
                    className={
                      index === 0
                        ? "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg shadow-primary/25 transition-all hover:scale-105"
                        : "transition-all hover:scale-105"
                    }
                    variant={index === 0 ? "default" : "outline"}
                  >
                    <Link href={button.href}>
                      {button.icon}
                      {button.text}
                      {button.iconRight}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
            {mockup !== false && (
              <div className="relative w-full pt-12">
                <MockupFrame
                  className="animate-appear opacity-0 delay-700"
                  size="small"
                >
                  <Mockup
                    type="responsive"
                    className="bg-background/90 w-full rounded-xl border-0"
                  >
                    {mockup}
                  </Mockup>
                </MockupFrame>
                <Glow
                  variant="top"
                  className="animate-appear-zoom opacity-0 delay-1000"
                />
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
