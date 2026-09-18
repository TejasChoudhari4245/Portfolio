import { useEffect, useState } from 'react';

// Types `text` out one character at a time. Returns the full string straight
// away when the visitor prefers reduced motion.
export function useTypewriter(text, { speed = 50, delay = 500 } = {}) {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(text);
      return undefined;
    }

    setTyped('');
    let index = 0;
    let timer;

    const tick = () => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index < text.length) timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return typed;
}
