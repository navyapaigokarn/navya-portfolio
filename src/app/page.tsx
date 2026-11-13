import { ContactForm } from "@/components/ContactForm";
import { Nav } from "@/components/Nav";
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/profile";

export default function Home() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <>
      <Nav />
      <main id="top" className="scroll-mt-20">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_0.8fr] md:px-8 md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-copper">
              {profile.role} · Bengaluru
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              Navya
              <span className="block">Manohar Pai</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="border border-ink bg-ink px-5 py-3 text-sm text-paper transition-colors hover:border-copper hover:bg-copper"
              >
                Get in touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line bg-card px-5 py-3 text-sm transition-colors hover:border-ink"
              >
                LinkedIn
              </a>
              <a
                href="#projects"
                className="px-5 py-3 text-sm text-muted underline decoration-line underline-offset-4 hover:text-ink"
              >
                Selected work
              </a>
            </div>
          </div>

          <aside className="flex flex-col justify-between border border-line bg-card p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-copper">Index</p>
              <ul className="mt-5 divide-y divide-line">
                {experience.map((job) => (
                  <li key={job.org} className="flex items-baseline justify-between gap-4 py-3">
                    <a href="#experience" className="hover:text-copper">
                      {job.org}
                    </a>
                    <span className="shrink-0 whitespace-nowrap text-sm text-muted">{job.dates}</span>
                  </li>
                ))}
                <li className="flex items-baseline justify-between gap-4 py-3">
                  <a href="#projects" className="hover:text-copper">
                    Projects
                  </a>
                  <span className="text-sm text-muted">3 builds</span>
                </li>
                <li className="flex items-baseline justify-between gap-4 py-3">
                  <a href="#education" className="hover:text-copper">
                    PES University
                  </a>
                  <span className="text-sm text-muted">CGPA 8.65</span>
                </li>
              </ul>
            </div>
            <p className="mt-8 text-sm leading-6 text-muted">
              C++ · Java · Spring Boot · Oracle DB · Microservices · AI / GenAI
            </p>
          </aside>
        </section>

        <section className="border-y border-line">
          <dl className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
            {profile.highlights.map((item) => (
              <div
                key={item.label}
                className="border-line px-5 py-6 md:px-8 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
              >
                <dt className="font-serif text-3xl tracking-tight">{item.value}</dt>
                <dd className="mt-1 text-sm text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 md:px-8">
          <SectionHeading index="01" title="Experience" />
          <div className="mt-10 flex flex-col gap-12">
            {experience.map((job) => (
              <article key={job.org} className="grid gap-4 border-t border-line pt-8 md:grid-cols-[16rem_1fr]">
                <div>
                  <h3 className="font-serif text-3xl tracking-tight">{job.org}</h3>
                  <p className="mt-2 text-sm">{job.role}</p>
                  <p className="mt-1 text-sm text-muted">
                    {job.place}
                    <span className="mx-2">·</span>
                    {job.dates}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 text-[15px] leading-7 text-muted">
                  {job.points.map((point) => (
                    <li key={point} className="pl-4 border-l border-line">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-t border-line bg-forest text-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#e7b89a]">02 — Projects</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">Selected work</h2>
            <p className="mt-4 max-w-2xl text-[#d7d1c6]">
              Study and side builds across full-stack Java, React, and services.
            </p>

            {featured ? (
              <article className="mt-12 border border-white/15 p-6 md:p-10">
                <p className="text-xs uppercase tracking-[0.18em] text-[#e7b89a]">{featured.kind}</p>
                <h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">{featured.title}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-[#d7d1c6]">{featured.summary}</p>
                <Stack items={featured.stack} onDark />
              </article>
            ) : null}

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {rest.map((project) => (
                <article key={project.title} className="h-full border border-white/15 p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#e7b89a]">{project.kind}</p>
                  <h3 className="mt-3 font-serif text-2xl tracking-tight">{project.title}</h3>
                  <p className="mt-3 leading-7 text-[#d7d1c6]">{project.summary}</p>
                  <Stack items={project.stack} onDark />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 md:px-8">
          <SectionHeading index="03" title="Skills" />
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="bg-paper p-6">
                <h3 className="text-sm uppercase tracking-[0.16em] text-copper">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="border border-line bg-card px-2.5 py-1 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Currently learning {profile.learning.join(", ")}.
          </p>
        </section>

        <section id="education" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 md:grid-cols-2 md:px-8">
            <div>
              <SectionHeading index="04" title="Education" />
              <div className="mt-8 flex flex-col">
                {education.map((item) => (
                  <article key={item.school} className="border-t border-line py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-serif text-2xl tracking-tight">{item.school}</h3>
                      <span className="text-sm text-copper">{item.meta}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {item.detail}
                      <span className="mx-2">·</span>
                      {item.dates}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted">
                Languages: {profile.languages.join(", ")}.
              </p>
            </div>

            <div>
              <SectionHeading index="05" title="Recognition" />
              <h3 className="mt-8 text-sm uppercase tracking-[0.16em] text-muted">Certifications</h3>
              <ul className="mt-3 flex flex-col gap-3">
                {certifications.map((item) => (
                  <li key={item} className="border-l border-copper pl-4 text-[15px] leading-6">
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-sm uppercase tracking-[0.16em] text-muted">Achievements</h3>
              <ul className="mt-3 flex flex-col gap-3">
                {achievements.map((item) => (
                  <li key={item} className="border-l border-line pl-4 text-[15px] leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-8">
            <div>
              <SectionHeading index="06" title="Contact" />
              <p className="mt-6 max-w-sm leading-7 text-muted">
                For roles, collaborations, or a question about the work above.
              </p>
              <address className="mt-8 flex flex-col gap-3 text-sm not-italic">
                <a className="hover:text-copper" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="hover:text-copper" href={profile.phoneHref}>
                  {profile.phone}
                </a>
                <a
                  className="hover:text-copper"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.linkedinLabel}
                </a>
                <span className="text-muted">{profile.location}</span>
              </address>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-muted md:px-8">
          <p>© 2026 {profile.name}</p>
          <p>Bengaluru</p>
        </div>
      </footer>
    </>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-copper">{index}</p>
      <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Stack({ items, onDark }: { items: readonly string[]; onDark?: boolean }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={
            onDark
              ? "border border-white/20 px-2.5 py-1 text-xs tracking-wide text-[#f4f0e7]"
              : "border border-line px-2.5 py-1 text-xs"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
