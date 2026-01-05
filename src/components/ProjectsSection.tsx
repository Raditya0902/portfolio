// src/components/ProjectsSection.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/src/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-bold mb-6">Selected Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
