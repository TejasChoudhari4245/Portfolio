import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwplvkg';

const EMPTY = { name: '', email: '', message: '' };

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  // One handler, one request. The old static site bound three separate submit
  // listeners to this form, so a single click fired two Formspree posts.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: 'sending', message: 'Sending…' });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      });

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);

      setValues(EMPTY);
      setStatus({ state: 'sent', message: 'Got it. I will get back to you shortly.' });
    } catch (error) {
      console.error('Contact form failed:', error);
      setStatus({
        state: 'error',
        message: 'Something went wrong. Please email me directly instead.',
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="text-light">Contact</h2>
        <p className="contact-subtitle text-light">
          Email or call. I usually reply the same day.
        </p>
        <div className="contact">
          <div className="contact-methods">
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="text-light">
                  Your Name
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="text-light">
                  Your Email
                </label>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={values.message}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="message" className="text-light">
                  Your Message
                </label>
              </div>
              <button type="submit" className="submit-btn" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {status.message && (
                <p
                  className={`mt-3 ${status.state === 'error' ? 'text-danger' : 'text-warning'}`}
                  role="status"
                >
                  {status.message}
                </p>
              )}
            </form>

            <div className="direct-contact" id="direct-contact">
              <div className="contact-option" data-reveal>
                <i className="bi bi-envelope-fill text-light" />
                <div>
                  <h3 className="text-light">Email</h3>
                  <a href="mailto:tejaschoudhari4245@gmail.com" className="text-light">
                    tejaschoudhari4245@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-option" data-reveal>
                <i className="bi bi-telephone-fill text-light" />
                <div>
                  <h3 className="text-light">Phone</h3>
                  <a href="tel:+918605434245" className="text-light">
                    +91 8605434245
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
