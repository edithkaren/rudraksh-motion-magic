import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Project = {
  title: string;
  client: string;
  year: string;
  runtime: string;
  stack: string[];
  image: string;
  href: string;
  source: string;
};

export const projects: Project[] = [
  {
    title: "Neon Monsoon",
    client: "Short film / spec",
    year: "2026",
    runtime: "2:14",
    stack: ["Runway Gen-4", "Topaz", "DaVinci"],
    image: work1,
    href: "https://www.youtube.com/@rudrakshpaliwal",
    source: "YouTube",
  },
  {
    title: "Vapour No. 7",
    client: "Fragrance brand film",
    year: "2026",
    runtime: "0:38",
    stack: ["Sora", "Kling 2.0", "After Effects"],
    image: work2,
    href: "https://www.instagram.com/rudrakshpaliwal",
    source: "Instagram",
  },
  {
    title: "The Monolith",
    client: "Sci-fi proof of concept",
    year: "2025",
    runtime: "1:47",
    stack: ["Veo 3", "Midjourney", "ElevenLabs"],
    image: work3,
    href: "https://www.youtube.com/@rudrakshpaliwal",
    source: "YouTube",
  },
  {
    title: "Bodies in Light",
    client: "Music video",
    year: "2025",
    runtime: "3:02",
    stack: ["Luma Ray 2", "Suno", "Premiere Pro"],
    image: work4,
    href: "https://www.framer.com/",
    source: "Framer",
  },
  {
    title: "Above the Clouds",
    client: "Travel documentary",
    year: "2025",
    runtime: "4:20",
    stack: ["Pika 2.0", "Descript", "DaVinci"],
    image: work5,
    href: "https://www.pinterest.com/",
    source: "Pinterest",
  },
  {
    title: "Chromewear",
    client: "Fashion film",
    year: "2024",
    runtime: "1:05",
    stack: ["Kling 2.0", "Firefly", "After Effects"],
    image: work6,
    href: "https://www.figma.com/",
    source: "Figma",
  },
];

export const tools: { name: string; role: string }[] = [
  { name: "Runway Gen-4", role: "Generative shots" },
  { name: "OpenAI Sora", role: "Text to video" },
  { name: "Google Veo 3", role: "Cinematic sequences" },
  { name: "Kling 2.0", role: "Motion realism" },
  { name: "Luma Ray 2", role: "Camera moves" },
  { name: "Pika Labs", role: "Fast ideation" },
  { name: "Midjourney", role: "Frame design" },
  { name: "Adobe Firefly", role: "Clean plates" },
  { name: "ElevenLabs", role: "Voice & dubbing" },
  { name: "Suno", role: "Original score" },
  { name: "Topaz Video AI", role: "Upscale & deflicker" },
  { name: "Descript", role: "Paper edit" },
  { name: "HeyGen", role: "Avatar presenters" },
  { name: "DaVinci Neural", role: "Grade & finish" },
];

export const services = [
  {
    title: "AI Film & Ad Spots",
    body: "Concept to master. Generative plates, real footage, and a grade that holds them together.",
  },
  {
    title: "Motion Graphics",
    body: "Kinetic type, title cards, and UI animation built frame by frame in After Effects.",
  },
  {
    title: "Voice, Score & Sound",
    body: "Cloned VO, multi-language dubs, and original scoring cut to picture.",
  },
  {
    title: "Restoration & Finish",
    body: "Upscaling, denoise, deflicker and delivery specs for every platform.",
  },
];
