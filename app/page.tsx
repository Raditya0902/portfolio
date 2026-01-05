// import React from "react";
// // Portfolio single-file React component (Tailwind + shadcn/ui + lucide-react + framer-motion)
// // Drop this file into a Next.js / Vite React app. Tailwind must be configured.

// import { Button } from "@/src/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/src/components/ui/card";

// import { motion } from "framer-motion";
// import HeroClient from "@/src/components/HeroClient";
// import ContactForm from "@/src/components/ContactForm";

// const projects = [
//   {
//     title: "Real-Time Graph Analytics Pipeline(Kafka, Neo4j, Kubernetes)",
//     description:
//       "Designed and deployed a real-time graph analytics pipeline on Kubernetes for continuous ingestion and analysis of NYC taxi trip data. Built both batch and streaming workflows, scaling ingestion from ~1.5K relationships to ~150 messages/sec with sub-200ms latency.",
//     bullets: [
//       "Streaming ingestion using Apache Kafka and Kafka Connect",
//       "Graph storage and analytics using Neo4j with Graph Data Science (GDS) plugin",
//       "Implemented PageRank and BFS for influence analysis and pathfinding",
//       "Optimized Kubernetes deployments by resolving OOM errors and connector misconfigurations",
//       "Production-ready manifests using Helm, Docker, and fine-tuned Cypher mappings",
//     ],
//     tags: ["Kafka", "Neo4j", "Graph Analytics", "Kubernetes"],
//     repo: "https://github.com/Raditya0902/Real-Time-Graph-Analytics-Pipeline",
//     demo: "",
//   },
//   {
//     title: "PhishGuard AI — Phishing Detection System",
//     description:
//       "Built a phishing detection system combining classical ML models and LLM-based semantic analysis to identify sophisticated phishing attacks beyond surface-level URL features.",
//     bullets: [
//       "Trained ML models (XGBoost, Random Forest) using URL and HTML content features",
//       "Developed an LLM-driven pipeline using LangChain and OpenAI SDK for semantic HTML analysis",
//       "Automated feature extraction with Playwright and integrated VirusTotal API for threat intelligence",
//       "LLM-based approach improved detection of semantically complex phishing attempts",
//       "Exposed detection via Flask APIs and browser extension integration",
//     ],
//     tags: ["Security", "Machine Learning", "LLMs", "Flask"],
//     repo: "https://github.com/cse543-project/ai-based-phishing-detection",
//     demo: "",
//   },
//   {
//     title: "RAG-Driven Quiz Bot",
//     description:
//       "Developed an AI-powered quiz generation platform using Retrieval-Augmented Generation (RAG) to create context-aware questions from domain-specific documents.",
//     bullets: [
//       "Implemented RAG pipeline using LangChain, Ollama LLM, and ChromaDB",
//       "Document chunking, embeddings, retrieval, and multi-format question generation (MCQs, T/F, open-ended)",
//       "Flask backend APIs for quiz creation and evaluation",
//       "Responsive Next.js frontend with React and Tailwind CSS",
//       "Supports interactive quizzes and real-time evaluation",
//     ],
//     tags: ["RAG", "LLMs", "Next.js", "ChromaDB"],
//     repo: "https://github.com/Raditya0902/RAG-driven-project",
//     demo: "",
//   },
//   {
//     title: "Street View Semantic Segmentation",
//     description:
//       "Implemented a deep learning-based semantic segmentation system for urban street scenes using state-of-the-art architectures, focusing on accurate pixel-level classification of road environments.",
//     bullets: [
//       "Trained DeepLabV3+ architecture for multi-class semantic segmentation",
//       "Applied ResNet backbone and advanced data augmentation techniques",
//       "Evaluated using Mean IoU and per-class accuracy metrics",
//       "Use-case aligned with autonomous driving and smart city perception systems",
//       "Well-documented training, evaluation, and inference pipelines",
//     ],
//     tags: ["Computer Vision", "Semantic Segmentation", "Deep Learning"],
//     repo: "https://github.com/Raditya0902/Street-View-Semantic-Segmentation",
//     demo: "",
//   },
// ];

// export default function Portfolio() {
//   /*
//   README & Repo Structure (embedded here for easy editing):

//   Repo structure (recommended):
//   /portfolio-site (root)
//   ├─ /public                 # static assets (resume.pdf, images)
//   ├─ /src
//   │  ├─ /components         # shadcn/ui wrappers & shared components
//   │  ├─ /data               # project data (this React file reads from here in next iteration)
//   │  ├─ /pages              # Next.js pages or single index.jsx
//   │  └─ /styles             # tailwind config + global styles
//   ├─ .github/workflows      # GitHub Actions for CI/CD
//   ├─ Dockerfile
//   ├─ docker-compose.yml
//   ├─ next.config.js (or vite config)
//   ├─ tailwind.config.js
//   └─ README.md

//   README (short version):
//   1. Install & run locally
//      - yarn install
//      - yarn dev
//   2. Build & test
//      - yarn build
//      - yarn test
//   3. Deployment (Vercel recommended for Next.js / Netlify for static builds)

//   Deployment checklist (Vercel):
//   - Connect GitHub repo
//   - Set environment variables (if any) in Vercel dashboard
//   - Add resume.pdf to /public and link it to header
//   - Configure custom domain (optional)
//   - Enable analytics or use Google Analytics / Plausible via env vars

//   GitHub Actions (example):
//   - on: [push]
//     jobs:
//       build:
//         runs-on: ubuntu-latest
//         steps:
//           - uses: actions/checkout@v3
//           - uses: pnpm/action-setup@v2
//           - run: pnpm install
//           - run: pnpm build

//   SEO & Accessibility notes:
//   - Add meta tags for title, description, open graph images
//   - Use semantic HTML and alt tags for images
//   - Ensure color contrast and keyboard accessibility for forms

//   How I updated this canvas for you:
//   - Replaced the example projects array with detailed, resume-ready project templates including bullets, tags, repo and demo placeholders.
//   - Embedded a README checklist and repo structure (edit these or extract into a standalone README.md in your repo).

//   Next steps (I already applied a best-effort update using the details I have):
//   - Replace the placeholder repo/demo URLs with your real links (either in the repo or tell me and I will update the canvas).
//   - If you want, I can extract the embedded README into a separate textdoc file and create a ready-to-paste README.md content.
//   */

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
//

//       <main className="max-w-6xl mx-auto px-6 pb-24">
//

//       </main>
//     </div>
//   );
// }

import Layout from "@/src/components/Layout";
import HeroClient from "@/src/components/HeroClient";
import ProjectsSection from "@/src/components/ProjectsSection";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import About from "@/src/components/About";
import ExperienceSection from "@/src/components/ExperienceSection";

export default function Page() {
  return (
    <Layout>
      <HeroClient />
      <ProjectsSection />
      <About />
      <ExperienceSection />
      <Skills />
      <Contact />
    </Layout>
  );
}
