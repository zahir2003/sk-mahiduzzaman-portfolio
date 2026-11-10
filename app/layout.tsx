import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sk-mahiduzzaman.vercel.app"),
  title: "Sk Mahiduzzaman | AI / ML Engineer",
  description: "Portfolio of Sk Mahiduzzaman, AI/ML Engineer and 2026 Computer Science graduate, featuring multimodal language identification, deep learning research and MLOps projects.",
  keywords: ["Sk Mahiduzzaman", "AI ML Engineer", "Machine Learning Engineer", "Deep Learning", "NLP", "RAG", "LLM", "MLOps", "LangChain", "PyTorch", "TensorFlow"],
  authors: [{ name: "Sk Mahiduzzaman" }],
  creator: "Sk Mahiduzzaman",
  alternates: { canonical: "https://sk-mahiduzzaman.vercel.app" },
  openGraph: {
    title: "Sk Mahiduzzaman | AI / ML Engineer",
    description: "AI/ML portfolio featuring multimodal Indic language identification, DICOM malware detection research, and automated MLOps projects.",
    url: "https://sk-mahiduzzaman.vercel.app",
    siteName: "Sk Mahiduzzaman",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sk Mahiduzzaman",
    jobTitle: "AI / ML Engineer",
    url: "https://sk-mahiduzzaman.vercel.app",
    sameAs: ["https://www.linkedin.com/in/sk-mahiduzzaman", "https://github.com/zahir2003"],
    knowsAbout: ["Machine Learning", "Deep Learning", "Natural Language Processing", "RAG", "Large Language Models", "MLOps", "Computer Vision", "Explainable AI", "DICOM Malware Detection"],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        {children}
      </body>
    </html>
  );
}
