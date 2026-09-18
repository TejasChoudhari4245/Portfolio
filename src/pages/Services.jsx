import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { techStack } from '../data/techStack';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <section className="services-hero bg-dark text-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">IT Services</h1>
              <p className="lead mb-4">
                What I take on for clients: the website, the server it runs on, and the reporting
                that tells you whether it is earning its keep.
              </p>
              <Link to="/#contact" className="btn btn-warning btn-lg">
                Get in Touch
              </Link>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="IT Services"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="services">
        <section className="py-5 bg-dark text-dark rounded-4">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold">What I do</h2>
            <div className="row g-4">
              {services.map(({ icon, title, description }, index) => (
                <div className={`col-md-4${index > 2 ? ' mt-4' : ''}`} key={title}>
                  <div className="card h-100 border-0 shadow-sm" data-reveal>
                    <div className="card-body p-4">
                      <div className="icon-box bg-warning mb-4">
                        <i className={`bi ${icon} fs-3`} />
                      </div>
                      <h3 className="h4 mb-3">{title}</h3>
                      <p className="mb-0">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section
        className="py-5 bg-dark text-light rounded-3 mx-auto"
        style={{ width: '95%', maxWidth: '1400px' }}
      >
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Technology Stack</h2>
          {techStack.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-warning mb-3">{category}</h3>
              <div className="row g-4 mb-5">
                {items.map(({ icon, name }) => (
                  <div className="col-6 col-md-3" key={name}>
                    <div className="tech-item p-3" data-reveal>
                      <i className={`bi ${icon} fs-1 text-warning`} />
                      <h4 className="mt-3">{name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 text-dark">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold">Have something to build?</h2>
          <p className="lead mb-4">
            Tell me what you need and what it has to do. If I am not the right person for it, I
            will say so.
          </p>
          <Link to="/#contact" className="btn btn-dark btn-lg">
            Contact Me
          </Link>
        </div>
      </section>

      <Footer dark />
    </>
  );
}
