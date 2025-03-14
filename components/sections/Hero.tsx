import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import HeroImage from "@/public/hero.png";

export default async function Hero() {
  const t = await getTranslations("hero");
  return (
    <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {t("title")}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {t("subtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t("primaryCta")}
              </Link>
              <Link
                href="#services"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t("secondaryCta")}
              </Link>
            </div>
          </div>
          <Image
            src={HeroImage}
            width={550}
            height={550}
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
