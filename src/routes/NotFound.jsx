import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found | Mayank Sharma';
  }, []);

  return (
    <main className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block', padding: '0.75rem 1.5rem' }}>
        Go Back Home
      </Link>
    </main>
  );
}
