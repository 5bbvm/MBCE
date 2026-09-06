"use client";

import React from "react";
import Image from "next/image";
import { CLIENT_BRANDS } from "./clientsData";
import { cn } from "@/lib/utils";

interface ClientMarqueeProps {
  className?: string;
  reverse?: boolean;
}

export function ClientMarquee({ className, reverse = false }: ClientMarqueeProps) {
  // Repeat list to create infinite seamless loop
  const brands = [...CLIENT_BRANDS, ...CLIENT_BRANDS];

  return (
    <div
      dir="ltr"
      className={cn(
        "relative w-full overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-6 sm:gap-8 will-change-transform hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {brands.map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            className="group relative flex h-20 w-36 sm:h-24 sm:w-44 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white/95 px-6 py-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-brand-orange/50 hover:shadow-md dark:border-white/10 dark:bg-brand-carbon-elevated/60 dark:hover:border-brand-orange/40 dark:hover:bg-brand-carbon-elevated"
          >
            <div className="relative h-12 w-full max-w-[120px]">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="160px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
