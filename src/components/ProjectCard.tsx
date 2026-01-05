// src/components/ProjectCard.tsx
import React from "react";
import { Button } from "@/src/components/ui/button"; // adjust path for your shadcn wrapper if needed

type Project = {
  title: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  repo?: string;
  demo?: string;
};

export default function ProjectCard({ p }: { p: Project }) {
  const slug = p.title.toLowerCase().replace(/\s+/g, "-");
  const href = p.repo ?? p.demo ?? `/projects/${encodeURIComponent(slug)}`;

  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm flex flex-col h-full">
      <header className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold leading-snug">{p.title}</h4>
        <span className="text-xs text-slate-400">2024</span>
      </header>

      <p className="mt-3 text-sm text-slate-600 flex-shrink-0">
        {p.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex-1">
        <ul className="hidden md:block md:list-disc md:pl-5 md:space-y-2 md:text-sm md:text-slate-600">
          {p.bullets?.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <details className="md:hidden">
          <summary className="cursor-pointer text-sm text-slate-600 underline">
            Key bullets
          </summary>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            {p.bullets?.map((b, i) => (
              <li key={i} className="bg-slate-50 p-2 rounded text-xs">
                {b}
              </li>
            ))}
          </ul>
        </details>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <a
          href={href}
          target={p.repo || p.demo ? "_blank" : undefined}
          rel={p.repo || p.demo ? "noopener noreferrer" : undefined}
          className="text-sm underline text-indigo-600"
        >
          View details
        </a>
        <a href="#contact" className="text-sm">
          Discuss
        </a>
      </div>
    </article>
  );
}
