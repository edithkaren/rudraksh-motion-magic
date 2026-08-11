import { motion, useScroll, useSpring } from "motion/react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Pipeline", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="min-w-0">
          <span className="font-display block truncate text-sm font-bold tracking-[0.2em] uppercase">
            Rudraksh Paliwal
          </span>
          <span className="block text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            AI Video Editor
          </span>
        </a>
        <ul className="flex shrink-0 items-center gap-5 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div className="h-px origin-left bg-primary" style={{ scaleX: progress }} />
    </motion.header>
  );
}
