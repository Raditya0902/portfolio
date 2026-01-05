// src/components/Skills.tsx
export default function Skills() {
  const skills = [
    "Python",
    "Go",
    "C++",
    "React",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "AWS",
    "SQL",
    "MLflow",
    "DSA",
    "System Design",
  ];
  return (
    <section className="py-12">
      <h3 className="text-2xl font-bold mb-4">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="px-3 py-1 rounded-full bg-slate-100 text-sm">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
