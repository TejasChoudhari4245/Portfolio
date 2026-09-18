import { useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const HERO_TITLE = 'Hello, my name is Tejas Choudhari';

export default function Hero() {
  const heroRef = useRef(null);
  const typed = useTypewriter(HERO_TITLE);

  const handleMouseMove = (event) => {
    const hero = heroRef.current;
    if (!hero) return;
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    hero.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${y * -2}deg)`;
  };

  const handleMouseLeave = () => {
    const hero = heroRef.current;
    if (hero) hero.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-text">
        <h6 className="name">
          <span />
          {'<\\>'}Founder & Developer
        </h6>
        {/* The typed text is animated; the full string stays available to
            screen readers and to anyone with reduced motion turned on. */}
        <h1 className="hero-title" aria-label={HERO_TITLE}>
          <span aria-hidden="true">{typed}</span>
        </h1>
        <p className="hero-description">
          I'm building Sasyavrishti, an AI crop intelligence platform for Indian farmers, and I
          take freelance web work in Pune alongside it. React and Django front to back, deployed
          on servers I run myself. Two client sites I built and ran SEO for have brought in 97
          leads.
        </p>
        <div className="hero-buttons">
          <a href="#projects">
            <button className="btn bg-dark text-light">Projects</button>
          </a>
          <a
            href="https://www.linkedin.com/in/tejaschaudhari4245/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-outline-light">LinkedIn</button>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/my_image.jpeg" alt="Tejas Choudhari" className="profile-img" />
      </div>
    </div>
  );
}
