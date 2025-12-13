import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const projectData = {
  'jwt-auth-vulnerability': {
    title: 'JWT Authentication Vulnerability Analysis',
    problem: 'Misconfigured HS256 secrets enable token forgery and privilege escalation.',
    dataset: 'Synthetic auth events; crafted tokens; exploit scenarios.',
    architecture: 'Auth middleware audit; signature verification; secret rotation policy.',
    tech: ['Python', 'Node.js', 'JWT', 'OWASP'],
    results: 'Identified escalation path; implemented guardrails; reduced risk score by 80%.',
    screenshots: ['/images/jwt-audit.webp'],
    github: 'https://github.com/Mayank-iitj',
    demo: 'https://fire-wall.netlify.app/'
  },
  'gscc-compatibility-checker': {
    title: 'GSCC (Game System Compatibility Checker)',
    problem: 'Users lack automated readiness checks for gaming environments.',
    dataset: 'Device specs; driver versions; benchmarks.',
    architecture: 'Rule-based scoring; heuristic flags; device profiling.',
    tech: ['JavaScript', 'Web'],
    results: 'Actionable readiness scores; reduced setup friction.',
    screenshots: ['/images/gscc.webp'],
    github: 'https://github.com/Mayank-iitj',
    demo: 'https://iridescent-rolypoly-782dae.netlify.app/'
  },
  'customer-churn-prediction': {
    title: 'Customer Churn Prediction',
    problem: 'Retention teams need calibrated churn probabilities and drivers.',
    dataset: 'Customer activity logs; subscription and support history.',
    architecture: 'Feature engineering; calibrated classifier; SHAP insights.',
    tech: ['Python', 'Streamlit'],
    results: 'Improved retention targeting; AUC 0.86 with calibrated outputs.',
    screenshots: ['/images/churn.webp'],
    github: 'https://github.com/Mayank-iitj',
    demo: 'https://app--clay-shop-1f50815c.base44.app/'
  },
  'named-entity-linking': {
    title: 'Named Entity Linking (NEL)',
    problem: 'Map extracted entities to knowledge base entries accurately.',
    dataset: 'Text corpora; curated KB entries; evaluation samples.',
    architecture: 'Candidate generation; ranking; precision/recall evaluation.',
    tech: ['Python', 'NLP'],
    results: 'High precision entity linking with transparent examples.',
    screenshots: ['/images/nel.webp'],
    github: 'https://github.com/Mayank-iitj',
    demo: 'https://nel-by-ms.netlify.app/'
  },
  'msgpt-llm-frontend': {
    title: 'msGPT',
    problem: 'Need a lightweight LLM front-end with repeatable outputs and guardrails.',
    dataset: 'Prompt templates; evaluation prompts.',
    architecture: 'Safety guardrails; prompt templates; output normalization.',
    tech: ['Web', 'LLM'],
    results: 'Consistent outputs with guardrails; improved reliability.',
    screenshots: ['/images/msgpt.webp'],
    github: 'https://github.com/Mayank-iitj',
    demo: 'https://gptbymayank.lovable.app/'
  }
};

export default function Project() {
  const { slug } = useParams();
  const data = projectData[slug];

  useEffect(() => {
    if (!data) return;
    document.title = `${data.title} – AI Engineer Project | Mayank Sharma`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', `${data.problem} Tech: ${data.tech.join(', ')}. Results: ${data.results}`);
    const ogTitle = { property: 'og:title', content: `${data.title} – Project` };
    const ogDesc = { property: 'og:description', content: `${data.problem} Results: ${data.results}` };
    const twitterTitle = { name: 'twitter:title', content: `${data.title} – Project` };
    const twitterDesc = { name: 'twitter:description', content: `${data.problem}` };
    [ogTitle, ogDesc, twitterTitle, twitterDesc].forEach(attrs => {
      const el = document.querySelector(`meta[${attrs.property ? 'property' : 'name'}='${attrs.property || attrs.name}']`);
      if (el) el.setAttribute('content', attrs.content);
    });

    // Breadcrumb schema
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mayyanks.app/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://mayyanks.app/projects' },
        { '@type': 'ListItem', position: 3, name: data.title, item: `https://mayyanks.app/projects/${slug}` }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [slug, data]);

  if (!data) return <main className="container" style={{ padding: '2rem' }}><h1>Project Not Found</h1></main>;

  return (
    <main className="container" style={{ padding: '2rem' }}>
      <h1>{data.title}</h1>
      <section>
        <h2>Problem Statement</h2>
        <p>{data.problem}</p>
      </section>
      <section>
        <h2>Dataset Description</h2>
        <p>{data.dataset}</p>
      </section>
      <section>
        <h2>Model Architecture</h2>
        <p>{data.architecture}</p>
      </section>
      <section>
        <h2>Tech Stack</h2>
        <p>{data.tech.join(', ')}</p>
      </section>
      <section>
        <h2>Results & Metrics</h2>
        <p>{data.results}</p>
      </section>
      <section>
        <h2>Screenshots</h2>
        {data.screenshots.map((src) => (
          <picture key={src}>
            <source srcSet={src} type="image/webp" />
            <img src={src} alt={`${data.title.toLowerCase().replace(/\s+/g,'-')}-screenshot`} loading="lazy" decoding="async" />
          </picture>
        ))}
      </section>
      <section>
        <h2>Links</h2>
        <p><a href={data.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        <p><a href={data.demo} target="_blank" rel="noopener noreferrer">Live Demo</a></p>
      </section>
    </main>
  );
}
