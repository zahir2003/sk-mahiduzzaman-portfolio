 "use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolio";

const roles = [
  "AI / ML Engineer",
  "GenAI Builder",
  "NLP Engineer",
  "MLOps Enthusiast",
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function DynamicHero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = roles[roleIndex];
    const delay = deleting ? 45 : 85;

    const timer = window.setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, typed.length + 1);
        setTyped(next);
        if (next === current) window.setTimeout(() => setDeleting(true), 850);
      } else {
        const next = current.slice(0, Math.max(0, typed.length - 1));
        setTyped(next);
        if (!next) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, typed.length === 0 && !deleting ? 260 : delay);

    return () => window.clearTimeout(timer);
  }, [typed, deleting, roleIndex]);

  useEffect(() => {
    const node = visualRef.current;
    if (!node) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      node.style.setProperty("--mx", `${x}`);
      node.style.setProperty("--my", `${y}`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-status">
            <span className="pulse-dot" /> OPEN TO AI / ML OPPORTUNITIES
          </p>

          <div className="hero-name">
            <span className="name-sk">Sk</span>
            <span> Mahiduzzaman</span>
            <span className="accent">.</span>
          </div>

          <p className="hero-role">
            <span className="dynamic-role">{typed}</span>
            <span className="typing-cursor" aria-hidden="true">|</span>
            <span className="role-separator">·</span>
            <span>GenAI</span>
            <span>·</span>
            <span>MLOps</span>
          </p>

          <p className="hero-text">{profile.headline}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <Arrow />
            </a>
            <a className="button button-ghost" href="#contact">
              Let&apos;s connect <Arrow />
            </a>
          </div>

          <div className="hero-meta">
            <span>{profile.location}</span>
            <span>●</span>
            <span>Available for opportunities</span>
          </div>

          <div className="hero-mini-grid" aria-hidden="true">
            <span>PYTHON</span>
            <span>PYTORCH</span>
            <span>LANGCHAIN</span>
            <span>DOCKER</span>
          </div>
        </div>

        <div ref={visualRef} className="hero-visual dynamic-visual" aria-label="Profile portrait">
          <div className="ambient ambient-cyan" />
          <div className="ambient ambient-lime" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="depth-card" />

          <div className="portrait-card">
            <div className="portrait-glow" />
            <Image
              src="/profile.png"
              alt="Portrait of Sk Mahiduzzaman"
              fill
              priority
              sizes="(max-width: 900px) 80vw, 42vw"
              className="portrait"
            />
            <div className="portrait-scan" />
            <div className="portrait-label">
              <span>01 / PROFILE</span>
              <span>AI / ML</span>
            </div>
          </div>

          <div className="floating-chip chip-top">PYTORCH</div>
          <div className="floating-chip chip-bottom">RAG + LLM</div>
          <div className="floating-orb" />
          <div className="coordinate">22°34&apos;N<br />88°22&apos;E</div>
        </div>
      </div>

      <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
    </section>
  );
}
