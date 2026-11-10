export const profile = {
  name: "Sk Mahiduzzaman",
  role: "AI / ML Engineer",
  headline: "Building practical AI systems across machine learning, multimodal NLP and MLOps.",
  location: "West Bengal, India",
  email: "mohiduz03@gmail.com",
  phone: "8101068527",
  linkedin: "https://www.linkedin.com/in/sk-mahiduzzaman",
  github: "https://github.com/zahir2003",
  resume: "/Sk-Mahiduzzaman-Resume.pdf",
  summary:
    "I am a Computer Science and Engineering graduate in AI & ML from Adamas University (2026, CGPA 8.28). My work spans machine learning, deep learning, NLP, generative AI and MLOps. I enjoy building reproducible models and turning research ideas into practical, deployable applications.",
};

export const experience = [
  {
    period: "Jun 2025 — Sep 2025",
    role: "AI/ML Research Intern — DICOM Malware Detection and Mitigation",
    company: "University College Cork (UCC), Ireland · Remote",
    points: [
      "Engineered a lightweight TensorFlow CNN to detect synthetic LSB-based malware in DICOM medical images.",
      "Developed a four-channel forensic feature extraction pipeline using LSB planes, horizontal and vertical transitions, and local residual analysis for pixel-level anomaly detection.",
      "Implemented Grad-CAM-based Explainable AI (XAI) to visualize suspicious image regions and interpret CNN predictions.",
    ],
  },
];

export const projects = [
  {
    number: "01",
    title: "Multimodal Indic Language Identification System",
    category: "Deep Learning · Speech + Text",
    description:
      "Built a multimodal deep learning system to identify 12 Indian languages from speech and text. Fine-tuned and evaluated XLS-R, Wav2Vec2, HuBERT, WavLM, mBERT and XLM-R with audio preprocessing and data augmentation. Multimodal feature fusion achieved 99.94% accuracy (0.0047 loss), outperforming the text-only and speech-only baselines.",
    tech: ["XLS-R", "Wav2Vec2", "HuBERT", "WavLM", "mBERT", "XLM-R", "PyTorch"],
    github: "https://github.com/zahir2003/Indian-Language-Finder",
    highlight: "99.94% accuracy",
  },
  {
    number: "02",
    title: "Automated MLOps Pipeline",
    category: "MLOps · Cloud · CI/CD",
    description:
      "Engineered a reproducible machine-learning pipeline with DVC for data versioning, preprocessing, model training and artifact tracking. Containerized and deployed the application using Docker and AWS S3/EKS, with Flask-based model serving. Automated workflows using Makefile and GitHub Actions, integrating Pytest and logging.",
    tech: ["DVC", "Docker", "AWS S3", "AWS EKS", "Flask", "GitHub Actions", "Pytest"],
    github: "https://github.com/zahir2003/Capstone-Project",
  },
  {
    number: "03",
    title: "Book Recommender System",
    category: "Machine Learning · Recommendation",
    description:
      "Developed a book recommendation system using popularity-based and collaborative filtering to suggest books based on user preferences. Applied data preprocessing and model serialization with Pandas, NumPy, Scikit-learn and Pickle, and built a Flask application showing book covers, authors and ratings.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Pickle", "Flask"],
    github: "https://github.com/zahir2003/Book-Recommender-System",
  },
];

export const skills = {
  "Programming Languages": ["Python", "C"],
  "Data Analysis & Machine Learning": ["Pandas", "NumPy", "Scikit-learn", "Power BI", "Feature Engineering"],
  "Deep Learning & GenAI": ["NLP", "PyTorch", "TensorFlow", "Hugging Face Transformers", "LangChain", "RAG", "LLMs", "Fine-tuning"],
  "MLOps & Infrastructure": ["Docker", "Linux (Bash)", "DVC", "Git", "GitHub", "FastAPI"],
  "Databases & Cloud": ["MySQL", "MongoDB", "FAISS", "AWS (EC2, S3)"],
};

export const education = [
  { period: "2022 — 2026", title: "B.Tech in Computer Science and Engineering (AI & ML)", place: "Adamas University", result: "CGPA: 8.28" },
  { period: "2022", title: "Higher Secondary (10+2)", place: "P.P.D. High School", result: "92.60%" },
  { period: "2020", title: "Secondary (10th)", place: "P.P.D. High School", result: "73.86%" },
];

export const languages = ["English", "Hindi", "Bengali"];
