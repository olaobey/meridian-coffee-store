import './Footer.css';

const columns = [
  {
    title: 'Shop',
    links: ['Brewers', 'Grinders', 'Scales & Timers', 'Filters & Storage'],
  },
  {
    title: 'Learn',
    links: ['Brew guide', 'The Slow Pour journal', 'Care & maintenance', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About Meridian', 'Wholesale', 'Sustainability', 'Contact'],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__brand">
          <a className="footer__mark" href="#top">
            <span className="footer__mark-dot" aria-hidden="true" />
            Meridian
          </a>
          <p>Coffee equipment for the patient cup.</p>
        </div>

        {columns.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#featured">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap footer__bottom">
        <p>&copy; {new Date().getFullYear()} Meridian Coffee Supply. All rights reserved.</p>
        <div className="footer__socials">
          <a href="#top" aria-label="Instagram">IG</a>
          <a href="#top" aria-label="Twitter / X">X</a>
          <a href="#top" aria-label="Pinterest">PIN</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
