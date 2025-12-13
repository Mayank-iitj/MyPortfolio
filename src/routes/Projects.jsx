import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { slug: 'jwt-auth-vulnerability', title: 'JWT Authentication Vulnerability Analysis' },
  { slug: 'gscc-compatibility-checker', title: 'GSCC (Game System Compatibility Checker)' },
  { slug: 'customer-churn-prediction', title: 'Customer Churn Prediction' },
  { slug: 'named-entity-linking', title: 'Named Entity Linking (NEL)' },
  { slug: 'msgpt-llm-frontend', title: 'msGPT' }
];

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects – AI Engineer Portfolio | Mayank Sharma';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'AI Engineer portfolio projects: JWT security, NLP NEL, churn prediction, GSCC, and msGPT.');
    const ogTitle = { property: 'og:title', content: 'Projects – Mayank Sharma' };
    const ogDesc = { property: 'og:description', content: 'Explore AI engineering projects: security, NLP, and ML apps.' };
    const twitterTitle = { name: 'twitter:title', content: 'Projects – Mayank Sharma' };
    const twitterDesc = { name: 'twitter:description', content: 'AI engineering projects: security, NLP, ML apps.' };
    [ogTitle, ogDesc, twitterTitle, twitterDesc].forEach(attrs => {
      const el = document.querySelector(`meta[${attrs.property ? 'property' : 'name'}='${attrs.property || attrs.name}']`);
      if (el) el.setAttribute('content', attrs.content);
    });
  }, []);

  return (
    <main className="container" style={{ padding: '2rem' }}>
      <h1>Projects – AI Engineer Portfolio</h1>
      <p>Deep-dives into production-grade AI, NLP, and security builds with datasets, architectures, metrics, and demos.</p>
      <ul>
        {projects.map(p => (
          <li key={p.slug}>
            <Link to={`/projects/${p.slug}`} aria-label={`Open project ${p.title}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
