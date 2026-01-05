// src/components/ExperienceSection.tsx
import React from "react";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "@/src/data/experience"; // adjust path to data file if needed

export default function ExperienceSection() {
  // Optionally split education vs experience
  const education = experiences.filter((e) => e.kind === "education");
  const work = experiences.filter((e) => e.kind === "experience");

  return (
    <section id="experience" className="py-12">
      <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>

      <div className="space-y-6">
        {/* Education first */}
        {education.map((e) => (
          <ExperienceItem
            key={e.id}
            id={e.id}
            title={e.title}
            subtitle={e.subtitle}
            timeframe={e.timeframe}
            bullets={e.bullets}
            collapsibleOnMobile={false}
          />
        ))}

        {/* Work experience */}
        {work.map((e) => (
          <ExperienceItem
            key={e.id}
            id={e.id}
            title={e.title}
            subtitle={e.subtitle}
            timeframe={e.timeframe}
            bullets={e.bullets}
            collapsibleOnMobile={true}
          />
        ))}
      </div>
    </section>
  );
}
