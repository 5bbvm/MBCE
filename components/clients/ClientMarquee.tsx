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
        "relative w-full overflow-hidden py-4 select-none [container-type:inline-size] [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-8 sm:gap-12 md:gap-14 will-change-transform hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {brands.map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            className="group relative flex shrink-0 items-center justify-center transition-all duration-300"
          >
            <div className="relative h-20 sm:h-24 md:h-28 w-48 sm:w-60 md:w-64 flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="(max-width: 640px) 200px, 280px"
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                loading="eager"
                priority={idx < 16}
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
