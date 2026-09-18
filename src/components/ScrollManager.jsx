import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router does not restore scroll position or jump to #hash targets on
// its own, so cross-page links like /#contact need handling here.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    // Wait a frame so the destination section has rendered before scrolling.
    const frame = requestAnimationFrame(() => {
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
