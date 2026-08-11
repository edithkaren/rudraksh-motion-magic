import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, Play } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { socials } from "./socials";

const headline = ["EDITING", "WITH", "MACHINES"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="film-grain relative isolate overflow-hidden px-5 pt-28 pb-16 sm:px-8 lg:pt-36 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] -z-10"
        style={{ background: "var(--gradient-glow)" }}
      />
      <motion.div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -top-24 -left-24 -z-10 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--teal-glow) 18%, transparent)" }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end">
        <motion.div style={{ y, opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-xs tracking-[0.42em] text-muted-foreground uppercase"
          >
            Rudraksh Paliwal — AI Video Editor
          </motion.p>

          <h1 className="mt-6 text-[clamp(2.6rem,10vw,7rem)] leading-[0.86] font-bold">
            {headline.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className={i === 1 ? "text-gradient inline-block" : "inline-block"}
                  initial={{ y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.11, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-7 max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            I cut generative footage, real plates and motion graphics into films that feel shot, not
            prompted. Six years of edit-suite instinct, running on a full AI pipeline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              style={{ boxShadow: "var(--shadow-cinema)" }}
            >
              <Play className="size-4" /> Watch the reel
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Start a project
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="glow-frame relative overflow-hidden rounded-3xl"
        >
          <img
            src={portrait}
            width={1024}
            height={1280}
            alt="Rudraksh Paliwal grading a film in his edit suite"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-background to-transparent p-5 text-xs tracking-widest uppercase">
            <span>Based in India</span>
            <span className="text-primary">Available 2026</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.4 }}
        className="mx-auto mt-16 flex max-w-6xl items-center gap-2 text-xs tracking-[0.3em] text-muted-foreground uppercase"
      >
        <ArrowDown className="size-4" /> Scroll
      </motion.div>
    </section>
  );
}
