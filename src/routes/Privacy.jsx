import React, { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy – Mayank Sharma';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Privacy policy for mayyanks.app covering analytics, cookies, and data usage.');
  }, []);

  return (
    <main className="container" style={{ padding: '2rem' }}>
      <h1>Privacy Policy</h1>
      <p>This site uses Google Analytics (GA4) and Microsoft Clarity to understand usage and improve performance. No personally identifiable information is collected without consent.</p>
      <h2>Data Collected</h2>
      <p>Aggregate usage metrics such as page views, session duration, device type, and click interactions.</p>
      <h2>Cookies</h2>
      <p>Analytics cookies may be set to track page performance and navigation. You can block cookies in your browser settings.</p>
      <h2>Contact</h2>
      <p>For privacy-related queries, email <a href="mailto:mayyanks@gmail.com">mayyanks@gmail.com</a>.</p>
    </main>
  );
}
