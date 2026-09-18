const socials = [
  {
    href: 'https://www.instagram.com/_tejas_chaudhari_4245_/',
    icon: 'bi-instagram',
    label: 'Instagram',
  },
  { href: 'https://www.linkedin.com/in/228a272b3', icon: 'bi-linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/TejasChoudhari4245', icon: 'bi-github', label: 'GitHub' },
  { href: 'mailto:tejaschoudhari4245@gmail.com', icon: 'bi-envelope', label: 'Email' },
];

export default function Footer({ dark = false }) {
  return (
    <div className={`d-flex justify-content-center mt-4${dark ? ' bg-dark py-4' : ''}`}>
      <div className="text-center">
        {socials.map(({ href, icon, label }, index) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className={index < socials.length - 1 ? 'me-3 social-icon' : 'social-icon'}
            aria-label={label}
          >
            <i className={`bi ${icon} fs-3 text-light`} />
          </a>
        ))}
        <br />
        <p className="text-center mt-3 text-light">
          Tejas Choudhari {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
