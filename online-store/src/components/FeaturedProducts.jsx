import './FeaturedProducts.css';

const products = [
  {
    name: 'Kessel Gooseneck Kettle',
    category: 'Brewers',
    spec: '0.9L · variable temp',
    price: 129,
    tone: 'brass',
  },
  {
    name: 'Strata Ceramic Dripper',
    category: 'Brewers',
    spec: '1&ndash;4 cup',
    price: 58,
    tone: 'verdigris',
  },
  {
    name: 'Verge Conical Burr Grinder',
    category: 'Grinders',
    spec: '40 settings',
    price: 249,
    tone: 'ink',
    badge: 'Best seller',
  },
  {
    name: 'Balance Precision Scale',
    category: 'Scales & Timers',
    spec: '0.1g · built-in timer',
    price: 79,
    tone: 'brass',
  },
  {
    name: 'Linen Pour-Over Filters',
    category: 'Filters',
    spec: '100 ct · unbleached',
    price: 14,
    tone: 'verdigris',
  },
  {
    name: 'Cairn Coffee Canister',
    category: 'Storage',
    spec: '500g · CO2 valve',
    price: 42,
    tone: 'ink',
  },
];

function ProductGlyph({ tone }) {
  return (
    <svg viewBox="0 0 120 120" className={`product-glyph product-glyph--${tone}`} aria-hidden="true">
      <circle cx="60" cy="60" r="46" />
      <path d="M40 58 h40 l-6 24a8 8 0 0 1-7.7 6h-12.6a8 8 0 0 1-7.7-6Z" fill="none" strokeWidth="3" />
      <path d="M78 60c10 1 12 9 4 14" fill="none" strokeWidth="3" />
    </svg>
  );
}

function FeaturedProducts() {
  return (
    <section id="featured" className="products" aria-label="Featured products">
      <div className="wrap">
        <div className="products__head">
          <div>
            <p className="eyebrow products__eyebrow">Featured gear</p>
            <h2 className="products__title">Built to hold a number.</h2>
          </div>
          <p className="products__note">
            Every product ships with a spec sheet &mdash; no guessing what you're brewing with.
          </p>
        </div>

        <div className="products__grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              {product.badge && <span className="product-card__badge">{product.badge}</span>}
              <div className="product-card__art">
                <ProductGlyph tone={product.tone} />
              </div>
              <p className="product-card__category mono">{product.category}</p>
              <h3 className="product-card__name">{product.name}</h3>
              <p
                className="product-card__spec mono"
                dangerouslySetInnerHTML={{ __html: product.spec }}
              />
              <div className="product-card__footer">
                <span className="product-card__price mono">${product.price}</span>
                <button className="btn btn-dark-outline product-card__add" type="button">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
