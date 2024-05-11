import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateString(str: string): string {
  return str.length > 6 ? str.slice(0, 6) + "..." + str.slice(-6) : str;
}