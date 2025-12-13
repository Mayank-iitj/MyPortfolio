import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { slug: 'production-ready-ml-app', title: 'How I Built a Production-Ready ML App' },
  { slug: 'jwt-security-flaws-explained', title: 'JWT Security Flaws Explained' },
  { slug: 'customer-churn-end-to-end', title: 'End-to-End Customer Churn Prediction' },
];

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog – AI Engineering Insights | Mayank Sharma';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'AI engineering blog: production ML apps, JWT security, churn prediction with datasets, architecture, and metrics.');
    const ogTitle = { property: 'og:title', content: 'Blog – Mayank Sharma' };
    const ogDesc = { property: 'og:description', content: 'AI engineering insights: production ML, security, churn.' };
    const twitterTitle = { name: 'twitter:title', content: 'Blog – Mayank Sharma' };
    const twitterDesc = { name: 'twitter:description', content: 'ML apps, JWT security, churn prediction guides.' };
    [ogTitle, ogDesc, twitterTitle, twitterDesc].forEach(attrs => {
      const el = document.querySelector(`meta[${attrs.property ? 'property' : 'name'}='${attrs.property || attrs.name}']`);
      if (el) el.setAttribute('content', attrs.content);
    });
  }, []);

  return (
    <main className="container" style={{ padding: '2rem' }}>
      <h1>Blog – AI Engineering Insights</h1>
      <p>Essays and technical guides on deploying reliable ML systems, hardening security, and delivering interpretable results.</p>
      <ul>
        {posts.map(p => (
          <li key={p.slug}>
            <Link to={`/blog/${p.slug}`} aria-label={`Read blog post ${p.title}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
