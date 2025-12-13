import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const postData = {
  'production-ready-ml-app': {
    title: 'How I Built a Production-Ready ML App',
    excerpt: 'Architecture, datasets, monitoring, and performance tuning for real-world ML.',
    relatedProject: '/projects/customer-churn-prediction'
  },
  'jwt-security-flaws-explained': {
    title: 'JWT Security Flaws Explained',
    excerpt: 'Common pitfalls, HS256 misconfig, signature checks, and guardrails.',
    relatedProject: '/projects/jwt-auth-vulnerability'
  },
  'customer-churn-end-to-end': {
    title: 'End-to-End Customer Churn Prediction',
    excerpt: 'From data ingest to calibrated probabilities and interpretable drivers.',
    relatedProject: '/projects/customer-churn-prediction'
  }
};

export default function Post() {
  const { slug } = useParams();
  const data = postData[slug];

  useEffect(() => {
    if (!data) return;
    document.title = `${data.title} – Blog | Mayank Sharma`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.excerpt);
    const ogTitle = { property: 'og:title', content: `${data.title} – Blog` };
    const ogDesc = { property: 'og:description', content: data.excerpt };
    const twitterTitle = { name: 'twitter:title', content: `${data.title} – Blog` };
    const twitterDesc = { name: 'twitter:description', content: data.excerpt };
    [ogTitle, ogDesc, twitterTitle, twitterDesc].forEach(attrs => {
      const el = document.querySelector(`meta[${attrs.property ? 'property' : 'name'}='${attrs.property || attrs.name}']`);
      if (el) el.setAttribute('content', attrs.content);
    });

    // Author schema
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      author: {
        '@type': 'Person',
        name: 'Mayank Sharma',
        affiliation: 'IIT Jodhpur'
      },
      mainEntityOfPage: `https://mayyanks.app/blog/${slug}`
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [slug, data]);

  if (!data) return <main className="container" style={{ padding: '2rem' }}><h1>Post Not Found</h1></main>;

  return (
    <main className="container" style={{ padding: '2rem' }}>
      <h1>{data.title}</h1>
      <p>{data.excerpt}</p>
      <hr />
      <p>
        Related project: <Link to={data.relatedProject}>View project details</Link>
      </p>
      <p>
        More posts: <Link to="/blog">Blog index</Link>
      </p>
    </main>
  );
}
