import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function getBaseUrl(): string {
    if (typeof window !== "undefined")
      // browser should use relative path
      return "";
    if (process.env.VERCEL_URL)  
      // reference for vercel.com
      return `https://${process.env.VERCEL_URL}`;
    if (process.env.NEXT_PUBLIC_VERCEL_URL)  
        // reference for vercel.com
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    // assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`;
  }

  export function getBaseUrlServer(): string {
    if (process.env.VERCEL_URL)
      // reference for vercel.com
      return `https://${process.env.VERCEL_URL}`;
    if (process.env.NEXT_PUBLIC_VERCEL_URL)  
        // reference for vercel.com
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    // assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`;
  }

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

