import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { tools, services } from "./data";
import { socials } from "./socials";

export function ToolsMarquee() {
  const loop = [...tools, ...tools];
  return (
    <section id="tools" className="border-y border-border py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-display text-xs tracking-[0.35em] text-accent uppercase">The pipeline</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
          Fourteen AI tools, one edit timeline
        </h2>
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-4">
          {loop.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="glow-frame flex items-center gap-3 rounded-full px-6 py-4 whitespace-nowrap"
            >
              <Sparkles className="size-4 text-primary" />
              <span className="font-display font-semibold">{t.name}</span>
              <span className="text-sm text-muted-foreground">{t.role}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <span className="font-display text-sm text-primary">0{i + 1}</span>
            <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

const stats = [
  { value: "240+", label: "Films delivered" },
  { value: "38M", label: "Views on client channels" },
  { value: "6 yrs", label: "In the edit suite" },
];

export function Stats() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:grid-cols-3 sm:px-8">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <p className="text-gradient font-display text-5xl font-bold">{s.value}</p>
          <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
        </motion.div>
      ))}
    </section>
  );
}

export function Contact() {
  return (
    <footer
      id="contact"
      className="film-grain relative overflow-hidden border-t border-border px-5 py-24 sm:px-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full"
        style={{ background: "var(--gradient-glow)", transform: "rotate(180deg)" }}
      />
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl text-[clamp(2.2rem,7vw,4.5rem)] leading-[0.95] font-bold">
          Got footage, a prompt, or just a <span className="text-gradient">wild idea</span>?
        </h2>
        <a
          href="mailto:hello@rudrakshpaliwal.com"
          className="mt-8 inline-block text-lg text-primary underline-offset-8 hover:underline sm:text-2xl"
        >
          hello@rudrakshpaliwal.com
        </a>

        <ul className="mt-12 flex flex-wrap gap-3">
          {socials.map(({ name, href, Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" /> {name}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-xs tracking-widest text-muted-foreground uppercase">
          © {new Date().getFullYear()} Rudraksh Paliwal — AI Video Editor
        </p>
      </div>
    </footer>
  );
}
