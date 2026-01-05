// src/data/experience.ts
export type ResumeEntry = {
  id: string; // unique id (slug)
  title: string; // shown as CardTitle — e.g. "BSNL — GSM Intern"
  subtitle?: string; // small line under title — role or degree
  timeframe?: string; // e.g. "May 2024 – June 2024 · Eluru, India"
  meta?: string; // small right-hand meta (GPA / type / location)
  bullets?: string[]; // list of responsibilities / achievements
  kind?: "experience" | "education";
};

export const experiences: ResumeEntry[] = [
  {
    id: "asu-ms-dsae",
    title: "Arizona State University — Tempe, AZ",
    subtitle: "M.S. in Data Science, Analytics & Engineering",
    timeframe: "Jan 2025 – Dec 2026 · GPA: 4.0",
    bullets: [
      "Relevant coursework: Data Mining, Data Processing at Scale, NLP, Statistics for Data Analysts",
      "Focus on machine learning systems, large-scale data processing, and applied analytics",
    ],
    kind: "education",
  },
  {
    id: "nit-manipur",
    title: "National Institute of Technology, Manipur — India",
    subtitle: "B.Tech in Electronics & Communication Engineering",
    timeframe: "Dec 2020 – May 2024 · GPA: 8.17",
    bullets: [
      "Core coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS",
      "Built a strong foundation in systems, algorithms, and software engineering principles",
    ],
    kind: "education",
  },
  {
    id: "letsgrowmore-intern",
    title: "LetsGrowMore — Data Science & Web Developer Intern",
    subtitle: "Internship",
    timeframe: "Aug 2024 – Sept 2024 · Remote",
    bullets: [
      "Implemented deep learning pipelines for semantic segmentation (DeepLabV3+ on CamVid), achieving 90.78% accuracy and 69.43% mean IoU",
      "Built CNN-based disease detection models for paddy leaves with 92.8% classification accuracy",
      "Developed responsive full-stack applications integrating ML models using React, Flask, and Node.js",
    ],
    kind: "experience",
  },
  {
    id: "bsnl-gsm",
    title: "BSNL — GSM Intern",
    subtitle: "Internship",
    timeframe: "May 2024 – June 2024 · Eluru, India",
    bullets: [
      "Supported GSM and optical fiber communication infrastructure operations",
      "Assisted with installation, monitoring, and troubleshooting of telecom network equipment",
    ],
    kind: "experience",
  },
];
