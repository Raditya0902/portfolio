export const projects = [
  {
    title: "Real-Time Graph Analytics Pipeline(Kafka, Neo4j, Kubernetes)",
    description:
      "Designed and deployed a real-time graph analytics pipeline on Kubernetes for continuous ingestion and analysis of NYC taxi trip data. Built both batch and streaming workflows, scaling ingestion from ~1.5K relationships to ~150 messages/sec with sub-200ms latency.",
    bullets: [
      "Streaming ingestion using Apache Kafka and Kafka Connect",
      "Graph storage and analytics using Neo4j with Graph Data Science (GDS) plugin",
      "Implemented PageRank and BFS for influence analysis and pathfinding",
      "Optimized Kubernetes deployments by resolving OOM errors and connector misconfigurations",
      "Production-ready manifests using Helm, Docker, and fine-tuned Cypher mappings",
    ],
    tags: ["Kafka", "Neo4j", "Graph Analytics", "Kubernetes"],
    repo: "https://github.com/Raditya0902/Real-Time-Graph-Analytics-Pipeline",
    demo: "",
  },
  {
    title: "PhishGuard AI — Phishing Detection System",
    description:
      "Built a phishing detection system combining classical ML models and LLM-based semantic analysis to identify sophisticated phishing attacks beyond surface-level URL features.",
    bullets: [
      "Trained ML models (XGBoost, Random Forest) using URL and HTML content features",
      "Developed an LLM-driven pipeline using LangChain and OpenAI SDK for semantic HTML analysis",
      "Automated feature extraction with Playwright and integrated VirusTotal API for threat intelligence",
      "LLM-based approach improved detection of semantically complex phishing attempts",
      "Exposed detection via Flask APIs and browser extension integration",
    ],
    tags: ["Security", "Machine Learning", "LLMs", "Flask"],
    repo: "https://github.com/cse543-project/ai-based-phishing-detection",
    demo: "",
  },
  {
    title: "RAG-Driven Quiz Bot",
    description:
      "Developed an AI-powered quiz generation platform using Retrieval-Augmented Generation (RAG) to create context-aware questions from domain-specific documents.",
    bullets: [
      "Implemented RAG pipeline using LangChain, Ollama LLM, and ChromaDB",
      "Document chunking, embeddings, retrieval, and multi-format question generation (MCQs, T/F, open-ended)",
      "Flask backend APIs for quiz creation and evaluation",
      "Responsive Next.js frontend with React and Tailwind CSS",
      "Supports interactive quizzes and real-time evaluation",
    ],
    tags: ["RAG", "LLMs", "Next.js", "ChromaDB"],
    repo: "https://github.com/Raditya0902/RAG-driven-project",
    demo: "",
  },
  {
    title: "Street View Semantic Segmentation",
    description:
      "Implemented a deep learning-based semantic segmentation system for urban street scenes using state-of-the-art architectures, focusing on accurate pixel-level classification of road environments.",
    bullets: [
      "Trained DeepLabV3+ architecture for multi-class semantic segmentation",
      "Applied ResNet backbone and advanced data augmentation techniques",
      "Evaluated using Mean IoU and per-class accuracy metrics",
      "Use-case aligned with autonomous driving and smart city perception systems",
      "Well-documented training, evaluation, and inference pipelines",
    ],
    tags: ["Computer Vision", "Semantic Segmentation", "Deep Learning"],
    repo: "https://github.com/Raditya0902/Street-View-Semantic-Segmentation",
    demo: "",
  },
];
