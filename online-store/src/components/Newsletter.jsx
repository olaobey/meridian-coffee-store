import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="newsletter" aria-label="Newsletter signup">
      <div className="wrap newsletter__row">
        <div className="newsletter__copy">
          <p className="eyebrow newsletter__eyebrow">The Slow Pour</p>
          <h2 className="newsletter__title">Brewing notes, every other Sunday.</h2>
          <p className="newsletter__sub">
            Gear breakdowns, ratio experiments, and the occasional cafe recommendation.
            No spam, unsubscribe in one click.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          {submitted ? (
            <p className="newsletter__success">
              You're on the list &mdash; look out for the next issue.
            </p>
          ) : (
            <>
              <label className="visually-hidden" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
