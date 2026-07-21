import './Hero.css';

const specs = [
  { label: 'water temp', value: '92°C' },
  { label: 'ratio', value: '1:16' },
  { label: 'bloom', value: '0:30' },
  { label: 'total pour', value: '3:00' },
];

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__row">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">Slow-brew equipment, precision made</p>
          <h1 className="hero__title">
            Coffee,
            <br />
            measured to
            <br />
            the second.
          </h1>
          <p className="hero__sub">
            Meridian designs pour-over brewers, grinders, and scales for people who
            treat a morning cup like it deserves the attention. Every piece is built
            to hold a number &mdash; a temperature, a ratio, a time &mdash; exactly where you set it.
          </p>

          <div className="hero__ctas">
            <a className="btn btn-primary" href="#featured">Shop brewers</a>
            <a className="btn btn-outline" href="#newsletter">Read the brew guide</a>
          </div>

          <dl className="hero__specs">
            {specs.map((spec) => (
              <div className="hero__spec" key={spec.label}>
                <dt>{spec.label}</dt>
                <dd className="mono">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__art" aria-hidden="true">
          <svg viewBox="0 0 360 420" className="pour-svg">
            <defs>
              <linearGradient id="streamGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--brass-light)" />
                <stop offset="100%" stopColor="var(--verdigris-light)" />
              </linearGradient>
            </defs>

            {/* kettle */}
            <g>
              <path d="M60 70 h100 a18 18 0 0 1 18 18 v46 a34 34 0 0 1 -34 34 H90
                       a34 34 0 0 1 -34 -34 V88 a18 18 0 0 1 18 -18 Z"
                fill="var(--ink-soft)" stroke="var(--line-on-ink)" strokeWidth="1.5" />
              <path d="M178 96 q40 4 46 34" fill="none" stroke="var(--brass)" strokeWidth="9"
                strokeLinecap="round" />
              <rect x="66" y="52" width="88" height="18" rx="9" fill="var(--ink-soft)"
                stroke="var(--line-on-ink)" strokeWidth="1.5" />
            </g>

            {/* pour stream, animated */}
            <path
              className="pour-stream"
              d="M222 128 C 224 190, 196 210, 190 250"
              fill="none"
              stroke="url(#streamGrad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle className="pour-drip" cx="190" cy="250" r="3.5" fill="var(--verdigris-light)" />

            {/* dripper + carafe */}
            <path d="M140 258 h110 l-22 60 a14 14 0 0 1 -13 9 h-40 a14 14 0 0 1 -13 -9 Z"
              fill="none" stroke="var(--brass)" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M150 327 h90 v46 a20 20 0 0 1 -20 20 h-50 a20 20 0 0 1 -20 -20 Z"
              fill="var(--ink-soft)" stroke="var(--line-on-ink)" strokeWidth="1.5" />
            <path d="M150 350 h90" stroke="var(--verdigris)" strokeWidth="1.5" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
