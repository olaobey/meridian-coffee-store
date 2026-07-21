import './Testimonials.css';

const testimonials = [
  {
    quote:
      "I've owned three kettles that promised temperature control. The Kessel is the first one that actually holds 92°C through the whole pour.",
    name: 'Priya N.',
    role: 'Home barista, Austin',
  },
  {
    quote:
      'The Verge grinder changed how consistent my mornings are. Same setting, same grind, every single day &mdash; no more guessing.',
    name: 'Daniel O.',
    role: 'Third Wave enthusiast, Lagos',
  },
  {
    quote:
      "Meridian's spec sheets are the reason I trust this store. I know exactly what ratio and bloom time to start with before it even ships.",
    name: 'Marta K.',
    role: 'Cafe owner, Lisbon',
  },
];

function Stars() {
  return (
    <div className="testimonial__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="var(--brass)">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7Z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials" aria-label="Customer testimonials">
      <div className="wrap">
        <p className="eyebrow testimonials__eyebrow">From the community</p>
        <h2 className="testimonials__title">Trusted by patient brewers.</h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <Stars />
              <blockquote dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }} />
              <figcaption>
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
