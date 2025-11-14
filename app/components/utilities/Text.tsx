import clsx from "clsx";
import { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  className?: string;
  textClassName?: string;
  underlineClassName?: string;
  weight?: string;
}

export function D1({ children, className, weight }: Readonly<TextProps>) {
  return <h1 className={clsx(`text-[30px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-${weight ?? "normal"} leading-[120%]`, className)}>{children}</h1>;
}
export function H1({ children, className, weight }: Readonly<TextProps>) {
  return <h1 className={clsx(`text-[36px] leading-[130%] sm:text-[44px] font-${weight ?? "normal"}`, className)}>{children}</h1>;
}

export function P({ children, className, weight }: Readonly<TextProps>) {
  return <p className={clsx(`leading-[160%] tracking-wider text-sm sm:text-base font-${weight ?? "normal"}`, className)}>{children}</p>;
}

export function H2({ children, className, weight }: Readonly<TextProps>) {
  return <h2 className={clsx(`text-[24px] md:text-4xl leading-[130%] font-${weight ?? "normal"}`, className)}>{children}</h2>;
}

export function H3({ children, className, weight }: Readonly<TextProps>) {
  return <h3 className={clsx(`text-2xl md:text-[28px] leading-[140%] font-${weight ?? "normal"}`, className)}>{children}</h3>;
}

export function H4({ children, className, weight }: Readonly<TextProps>) {
  return <h4 className={clsx(`text-xl md:text-2xl leading-[150%] font-${weight ?? "normal"}`, className)}>{children}</h4>;
}
export function H5({ children, className, weight }: Readonly<TextProps>) {
  return <h4 className={clsx(`text-[18px] md:text-xl leading-[150%] font-${weight ?? "normal"}`, className)}>{children}</h4>;
}
