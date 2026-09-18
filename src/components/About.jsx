import { techArsenal, highlights } from '../data/techStack';

export default function About() {
  return (
    <div className="about">
      <section id="about" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="fw-bold mb-4">
                <span className="section-title">About Me</span>
              </h2>

              <div className="about-content">
                <p className="lead mb-4 text-light">
                  I'm <span className="text-warning fw-bold">Tejas Choudhari</span>. I build web
                  products and the <span className="text-warning fw-bold">data tooling</span> that
                  tells you whether they are working.
                </p>

                <div className="about-text mb-5">
                  <p className="mb-4 text-light">
                    <i className="bi bi-code-slash me-2 text-warning" />
                    I'm doing an MBA in Business Analytics at MIT ADT in Pune. Most of what I know
                    came from shipping: client websites since 2023, a Looker Studio dashboard that
                    WAY.CZ management still runs its reporting on, and Sasyavrishti, the crop
                    intelligence platform I founded.
                  </p>
                  <p className="mb-4 text-light">
                    <i className="bi bi-cpu me-2 text-warning" />
                    I work end to end. I'll design the pages, write the API, set up{' '}
                    <span className="text-warning">Postgres</span>, and put it live on an Ubuntu box
                    with Nginx and Gunicorn. When a client needs traffic rather than a redesign, I
                    do the SEO too. I'd rather write boring code that stays up than clever code
                    somebody has to decipher later.
                  </p>
                </div>

                <div className="tech-showcase mb-5">
                  <h4 className="text-warning mb-4">What I use</h4>
                  {techArsenal.map(({ icon, category, badges }) => (
                    <div className="tech-category mb-4" key={category}>
                      <h5 className="text-light mb-3">
                        <i className={`bi ${icon} me-2 text-warning`} />
                        {category}
                      </h5>
                      <div className="tech-badges">
                        {badges.map((badge) => (
                          <span className="tech-badge" key={badge}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="highlights-section mb-5">
                  <h4 className="text-warning mb-4">How I work</h4>
                  <div className="row g-4">
                    {highlights.map(({ icon, title, description }) => (
                      <div className="col-md-4" key={title}>
                        <div className="highlight-card">
                          <i className={`bi ${icon} fs-2 text-warning mb-3`} />
                          <h5 className="text-light">{title}</h5>
                          <p className="text-light">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="resume-section">
                  <a href="/Tejas-Choudhari-Resume.pdf" download="Tejas-Choudhari-Resume.pdf">
                    <button className="btn btn-warning resume-btn" type="button">
                      <i className="bi bi-file-earmark-pdf me-2" /> Download Resume
                    </button>
                  </a>
                  <small className="d-block mt-2 text-light">
                    <i className="bi bi-file-pdf me-1" /> PDF Format
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
