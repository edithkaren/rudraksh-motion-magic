import { Instagram, Youtube, Figma, Framer } from "lucide-react";
import type { ComponentType } from "react";

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.65 19.31c-.09-.78-.17-1.98.03-2.83.19-.79 1.2-5.03 1.2-5.03s-.3-.61-.3-1.51c0-1.42.82-2.48 1.85-2.48.87 0 1.29.65 1.29 1.44 0 .88-.56 2.19-.85 3.4-.24 1.02.51 1.86 1.52 1.86 1.82 0 3.22-1.92 3.22-4.7 0-2.46-1.76-4.18-4.28-4.18-2.92 0-4.63 2.18-4.63 4.44 0 .88.34 1.82.76 2.33.08.1.09.19.07.29l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.38c-.23.86-.83 1.94-1.24 2.6A10 10 0 1 0 12 2z" />
    </svg>
  );
}

export const socials: { name: string; href: string; Icon: ComponentType<{ className?: string }> }[] =
  [
    { name: "Instagram", href: "https://www.instagram.com/", Icon: Instagram },
    { name: "YouTube", href: "https://www.youtube.com/", Icon: Youtube },
    { name: "Pinterest", href: "https://www.pinterest.com/", Icon: PinterestIcon },
    { name: "Figma", href: "https://www.figma.com/", Icon: Figma },
    { name: "Framer", href: "https://www.framer.com/", Icon: Framer },
  ];
