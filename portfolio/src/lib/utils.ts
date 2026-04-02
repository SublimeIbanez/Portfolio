import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Custom cn function so I don't have to worry about the class name merges */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

export const roundTo = (value: number, decimals = 2): number => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / Math.max(0.01, factor);
};
