import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const animations = {
  fadeInUp: "animate-[fadeInUp_0.6s_ease-out]",
  fadeInUpDelay1: "animate-[fadeInUp_0.6s_ease-out_0.1s_both]",
  fadeInUpDelay2: "animate-[fadeInUp_0.6s_ease-out_0.2s_both]",
  fadeInUpDelay3: "animate-[fadeInUp_0.6s_ease-out_0.3s_both]",
  scaleIn: "animate-[scaleIn_0.5s_ease-out]",
  slideInLeft: "animate-[slideInLeft_0.6s_ease-out]",
  slideInRight: "animate-[slideInRight_0.6s_ease-out]",
  pulse: "animate-[pulse_2s_infinite]",
  rotate: "animate-[rotate_2s_linear_infinite]",
  bounce: "animate-[bounce_1s_ease-in-out]",
  loading: "animate-[loading_1s_linear_infinite]",
};

export const hoverEffects = {
  cardHover:
    "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl",
  buttonHover:
    "transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg",
  glowHover:
    "transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
};
