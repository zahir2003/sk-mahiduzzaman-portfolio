import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sk-mahiduzzaman.vercel.app"),
  title: "Sk Mahiduzzaman | AI / ML Engineer",
  description: "Portfolio of Sk Mahiduzzaman — AI/ML Engineer focused on Machine Learning, Deep Learning, NLP, RAG, LLMs and MLOps.",
  keywords: ["Sk Mahiduzzaman", "AI ML Engineer", "Machine Learning Engineer", "Deep Learning", "NLP", "RAG", "LLM", "MLOps", "LangChain", "PyTorch", "TensorFlow"],
  authors: [{ name: "Sk Mahiduzzaman" }],
  creator: "Sk Mahiduzzaman",
  alternates: { canonical: "https://sk-mahiduzzaman.vercel.app" },
  openGraph: {
    title: "Sk Mahiduzzaman | AI / ML Engineer",
    description: "AI/ML portfolio featuring deep learning, multimodal NLP, recommendation systems and MLOps projects.",
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
    knowsAbout: ["Machine Learning", "Deep Learning", "Natural Language Processing", "RAG", "Large Language Models", "MLOps"],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body><script dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.theme = localStorage.getItem("theme") || "dark"` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        {children}
      </body>
    </html>
  );
}
