import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";

export function Works() {
  return (
    <section id="work" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-xs tracking-[0.35em] text-primary uppercase">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Live AI projects</h2>
          </div>
          <p className="max-w-xs shrink-0 text-sm text-muted-foreground">
            Every frame below links out to where the finished piece lives.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative block overflow-hidden rounded-2xl border border-border bg-card ${
                i % 3 === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  width={1280}
                  height={720}
                  loading="lazy"
                  alt={`${p.title} — ${p.client}`}
                  className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 text-[11px] tracking-widest uppercase backdrop-blur-sm">
                  {p.source} <ArrowUpRight className="size-3" />
                </span>
              </div>

              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 p-6">
                <div className="min-w-0">
                  <h3 className="truncate text-xl font-semibold transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.client} · {p.year} · {p.runtime}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
