import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useNavbarScroll } from '../hooks/useNavbarScroll';

// In-page anchors only exist on the home page, so from any other route they
// need to point back at "/" first.
const sectionLinks = [
  { hash: '#about', label: 'About' },
  { hash: '#contact', label: 'Contact' },
  { hash: '#projects', label: 'Projects' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useNavbarScroll();
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  const close = () => setOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(250, 250, 248, 0.90)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={close}>
          {'<\\>'}TEJAS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${open ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                to="/"
                onClick={close}
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                to="/services"
                onClick={close}
              >
                Services
              </NavLink>
            </li>
            {sectionLinks.map(({ hash, label }) => (
              <li className="nav-item" key={hash}>
                <a className="nav-link" href={onHome ? hash : `/${hash}`} onClick={close}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
