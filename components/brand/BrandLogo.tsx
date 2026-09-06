import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "auto" | "dark" | "light"; // "auto" switches with theme; "dark" forces white text; "light" forces slate text
  format?: "svg" | "png";
  className?: string;
  imageClassName?: string;
  href?: string;
  priority?: boolean;
}

export function BrandLogo({
  variant = "auto",
  format = "svg",
  className,
  imageClassName,
  href = "/",
  priority = true,
}: BrandLogoProps) {
  let content: React.ReactNode;

  if (variant === "dark") {
    const src =
      format === "svg"
        ? "/assets/brand/mbce-logo-dark.svg"
        : "/assets/brand/MBCE-LightGray.png";

    content = (
      <Image
        src={src}
        alt="Modern Building For Engineering Consultancy (MBEC)"
        width={200}
        height={65}
        priority={priority}
        className={cn("h-14 w-auto object-contain select-none", imageClassName)}
      />
    );
  } else if (variant === "light") {
    const src =
      format === "svg"
        ? "/assets/brand/mbce-logo-light.svg"
        : "/assets/brand/MBCE-Colored.png";

    content = (
      <Image
        src={src}
        alt="Modern Building For Engineering Consultancy (MBEC)"
        width={200}
        height={65}
        priority={priority}
        className={cn("h-14 w-auto object-contain select-none", imageClassName)}
      />
    );
  } else {
    // "auto": dual CSS-swapped images for zero hydration mismatch
    content = (
      <>
        {/* Light theme logo: slate text on light canvas */}
        <Image
          src="/assets/brand/mbce-logo-light.svg"
          alt="Modern Building For Engineering Consultancy (MBEC)"
          width={200}
          height={65}
          priority={priority}
          className={cn("h-14 w-auto object-contain select-none dark:hidden", imageClassName)}
        />
        {/* Dark theme logo: white text on dark canvas */}
        <Image
          src="/assets/brand/mbce-logo-dark.svg"
          alt="Modern Building For Engineering Consultancy (MBEC)"
          width={200}
          height={65}
          priority={priority}
          className={cn("h-14 w-auto object-contain select-none hidden dark:block", imageClassName)}
        />
      </>
    );
  }

  const wrapper = (
    <div
      className={cn(
        "relative flex items-center justify-center shrink-0 transition-opacity hover:opacity-95",
        className
      )}
    >
      {content}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="MBEC Home" className="inline-flex items-center">
        {wrapper}
      </Link>
    );
  }

  return wrapper;
}
