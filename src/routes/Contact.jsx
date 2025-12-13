import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact – Mayank Sharma | AI Engineer';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Contact Mayank Sharma, AI Engineer & Data Scientist (IIT Jodhpur) for collaborations and projects.');
    const ogTitle = { property: 'og:title', content: 'Contact – Mayank Sharma' };
    const ogDesc = { property: 'og:description', content: 'Reach out for AI engineering collaborations and consulting.' };
    const twitterCard = { name: 'twitter:card', content: 'summary' };
    [ogTitle, ogDesc, twitterCard].forEach(attrs => {
      const el = document.querySelector(`meta[${attrs.property ? 'property' : 'name'}='${attrs.property || attrs.name}']`);
      if (el) el.setAttribute('content', attrs.content);
    });
  }, []);

  return (
    <main className="container" style={{ padding: '2rem' }}>
      <h1>Contact</h1>
      <p>For collaborations, research partnerships, or engineering roles, send an email or message on LinkedIn.</p>
      <ul>
        <li>Email: <a href="mailto:mayyanks@gmail.com">mayyanks@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/mayankiitj" target="_blank" rel="noopener noreferrer">/in/mayankiitj</a></li>
        <li>GitHub: <a href="https://github.com/mayank-iitj" target="_blank" rel="noopener noreferrer">mayank-iitj</a></li>
      </ul>
    </main>
  );
}
