'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, BookOpen, Award, Building2, TrendingUp, Globe } from 'lucide-react';
import { siteConfig } from '@/config/site';

const parseStat = (str: string) => {
  const match = str.replace(/\s+/g, '').match(/(\d+)(.*)/);
  if (match) {
    return { value: parseInt(match[1], 10), suffix: match[2].trim() };
  }
  return { value: 0, suffix: "" };
};

const stats = [
  { icon: Users, ...parseStat(siteConfig.stats.activeStudents), label: "Étudiants actifs", color: "#1a6b3c" },
  { icon: BookOpen, ...parseStat(siteConfig.stats.programsCount), label: "Filières médicales", color: "#27ae60" },
  { icon: Award, ...parseStat(siteConfig.stats.departmentsCount), label: "Départements", color: "#d4a017" },
  { icon: Building2, ...parseStat(siteConfig.stats.yearsExperience), label: "Années d'expérience", color: "#8e44ad" },
  { icon: TrendingUp, ...parseStat(siteConfig.stats.academicSemesters), label: "Semestres académiques", color: "#e67e22" },
  { icon: Globe, ...parseStat(siteConfig.stats.qualityEngagement), label: "Engagement qualité", color: "#16a085" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatItem({ icon: Icon, value, suffix, label, color, animate }: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
  animate: boolean;
}) {
  const count = useCountUp(value, 2000, animate);

  return (
    <div className="stat-item">
      <div className="stat-icon" style={{ background: `${color}18`, color }}>
        <Icon size={28} />
      </div>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>

      <style jsx>{`
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 32px 20px;
          position: relative;
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-4px);
        }

        .stat-item::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: var(--color-gray-light);
        }

        .stat-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .stat-item:hover .stat-icon {
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--color-dark);
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--color-gray);
          font-weight: 500;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}

export default function StatsBar() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="stats-section" aria-label="Chiffres clés de l'I3SN" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} animate={animate} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          background: var(--color-white);
          padding: 0;
          border-bottom: 1px solid var(--color-gray-light);
          box-shadow: var(--shadow-md);
          position: relative;
          z-index: 10;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }

        @media (max-width: 1100px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
