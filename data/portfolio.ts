export const profile = {
  name: "Sk Mahiduzzaman",
  role: "AI / ML Engineer",
  headline: "Building intelligent systems that turn data into useful products.",
  location: "West Bengal, India",
  email: "mohiduz03@gmail.com",
  phone: "8101068527",
  linkedin: "https://www.linkedin.com/in/sk-mahiduzzaman",
  github: "https://github.com/zahir2003",
  resume: "/Sk-Mahiduzzaman-Resume.pdf",
  summary:
    "B.Tech CSE (AI & ML) student focused on Machine Learning, Deep Learning, NLP, RAG, LLM applications and MLOps. I enjoy taking ideas from experiments to reproducible, deployable systems.",
};

export const experience = [
  {
    period: "Jun 2025 — Sep 2025",
    role: "Research Intern — Malware Detection & Mitigation",
    company: "University College Cork (UCC), Ireland",
    points: [
      "Built CNN-based classification workflows for DICOM medical images.",
      "Developed automated restoration workflows for corrupted medical images.",
      "Simulated malware-infected images for threat-detection experiments.",
      "Applied Explainable AI (XAI) techniques to interpret predictions and improve transparency.",
    ],
  },
];

export const projects = [
  {
    number: "01",
    title: "Multimodal Indic Language Identification",
    category: "Deep Learning · Speech + Text",
    description:
      "A multimodal language-identification system for 12 Indian languages using speech and text data, with Transformer-based models and comparative evaluation.",
    tech: ["Wav2Vec2", "HuBERT", "WavLM", "mBERT", "XLM-R", "PyTorch"],
    github: "https://github.com/zahir2003/Indian-Language-Finder",
  },
  {
    number: "02",
    title: "Automated MLOps Pipeline",
    category: "MLOps · Cloud · CI/CD",
    description:
      "A reproducible machine-learning lifecycle using DVC for data versioning, Docker for consistent environments, AWS for deployment and automated CI/CD workflows.",
    tech: ["DVC", "Docker", "AWS", "CI/CD", "Python"],
    github: "https://github.com/zahir2003/Capstone-Project",
  },
  {
    number: "03",
    title: "Book Recommender System",
    category: "Machine Learning · Recommendation",
    description:
      "A content-based recommendation model using TF-IDF vectorization and cosine similarity, with efficient sparse-matrix operations and a Python recommendation interface.",
    tech: ["Python", "TF-IDF", "Cosine Similarity", "Sparse Matrices"],
    github: "https://github.com/zahir2003/Book-Recommender-System",
  },
];

export const skills = {
  "AI / ML": ["Machine Learning", "Deep Learning", "NLP", "RAG", "LLMs"],
  "Frameworks": ["TensorFlow", "PyTorch", "LangChain 0.3", "Hugging Face"],
  "Data": ["MySQL", "MongoDB"],
  "Engineering": ["Python", "C", "Git", "GitHub", "Docker", "DVC", "AWS"],
};

export const education = [
  { period: "2022 — 2026", title: "B.Tech in Computer Science & Engineering (AI & ML)", place: "Adamas University", result: "CGPA: 8.28" },
  { period: "2022", title: "Higher Secondary (10+2)", place: "P.P.D. High School", result: "92.60%" },
  { period: "2020", title: "Secondary (10th)", place: "P.P.D. High School", result: "73.86%" },
];
