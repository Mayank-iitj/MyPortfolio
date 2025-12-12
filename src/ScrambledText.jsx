import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import './ScrambledText.css';

const SCRAMBLE_SET = '*#$+<>/|?%&';

function randomChar(chars) {
  const set = chars && chars.length ? chars : SCRAMBLE_SET;
  return set[Math.floor(Math.random() * set.length)] || '*';
}

const ScrambledText = ({
  radius = 120,
  duration = 1.0,
  speed = 0.5,
  scrambleChars = SCRAMBLE_SET,
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef(null);
  const charSpansRef = useRef([]);

  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) return;

    const textEl = rootEl.querySelector('p');
    if (!textEl) return;

    const text = textEl.textContent || '';
    textEl.textContent = '';

    const spans = text.split('').map((ch, idx) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.dataset.original = ch;
      span.textContent = ch;
      span.style.setProperty('--char-index', idx);
      textEl.appendChild(span);
      return span;
    });

    charSpansRef.current = spans;

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const dx = clientX - (rect.left + rect.width / 2);
        const dy = clientY - (rect.top + rect.height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius && span.dataset.animating !== '1') {
          span.dataset.animating = '1';
          const strength = 1 - dist / radius;
          const scrambleDuration = Math.max(0.25, duration * strength);
          const scrambleSpeed = Math.max(0.1, speed * strength);
          const start = performance.now();

          const tick = () => {
            const now = performance.now();
            const elapsed = (now - start) / 1000;
            if (elapsed < scrambleDuration) {
              span.textContent = randomChar(scrambleChars);
              span._raf = requestAnimationFrame(tick);
            } else {
              span.textContent = span.dataset.original || '';
              span.dataset.animating = '0';
            }
          };

          span._raf = requestAnimationFrame(tick);
        }
      });
    };

    rootEl.addEventListener('pointermove', handleMove);

    return () => {
      rootEl.removeEventListener('pointermove', handleMove);
      spans.forEach((span) => {
        if (span._raf) cancelAnimationFrame(span._raf);
      });
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p aria-label={typeof children === 'string' ? children : undefined}>{children}</p>
    </div>
  );
};

export default ScrambledText;
