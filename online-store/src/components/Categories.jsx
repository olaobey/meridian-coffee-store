import './Categories.css';

const categories = [
  {
    name: 'Brewers',
    detail: 'Ceramic & glass drippers, carafes',
    icon: (
      <path d="M8 8h24l-5 20a5 5 0 0 1-4.9 4H17.9a5 5 0 0 1-4.9-4Z" />
    ),
  },
  {
    name: 'Grinders',
    detail: 'Conical burr, hand & electric',
    icon: (
      <>
        <circle cx="20" cy="16" r="9" />
        <path d="M13 25h14v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4Z" />
      </>
    ),
  },
  {
    name: 'Scales & Timers',
    detail: 'Gram precision, built-in clocks',
    icon: (
      <>
        <rect x="7" y="20" width="26" height="12" rx="3" />
        <path d="M13 20l7-11 7 11" />
      </>
    ),
  },
  {
    name: 'Filters & Storage',
    detail: 'Papers, canisters, care kits',
    icon: (
      <>
        <path d="M11 10h18l-9 20Z" />
        <path d="M20 10V6" />
      </>
    ),
  },
];

function Categories() {
  return (
    <section className="categories" aria-label="Shop by category">
      <div className="wrap">
        <div className="categories__head">
          <p className="eyebrow categories__eyebrow">Shop by category</p>
          <h2 className="categories__title">Four ways to slow down your morning.</h2>
        </div>

        <div className="categories__grid">
          {categories.map((cat) => (
            <a className="category-card" href="#featured" key={cat.name}>
              <svg
                className="category-card__icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {cat.icon}
              </svg>
              <h3>{cat.name}</h3>
              <p>{cat.detail}</p>
              <span className="category-card__link">Browse &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
