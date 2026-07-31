import { useEffect, useRef } from "react";
import "./App.css";

const APP_STORE_URL = "https://apps.apple.com/";
const PLAY_STORE_URL = "https://play.google.com/store/apps";
const SUPPORT_EMAIL = "support@mawahib.io";

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

function StoreButtons({ className = "" }) {
  return (
    <div className={`store-buttons ${className}`}>
      <a
        className="btn btn-primary"
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
      >
        <AppleIcon />
        <span>
          <small>Download on the</small>
          App Store
        </span>
      </a>
      <a
        className="btn btn-secondary"
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
      >
        <PlayIcon />
        <span>
          <small>Get it on</small>
          Google Play
        </span>
      </a>
    </div>
  );
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleSectionNav(event, id) {
  event.preventDefault();
  scrollToSection(id);
}

function App() {
  const pageRef = useReveal();

  useEffect(() => {
    if (window.location.hash) {
      const { pathname, search } = window.location;
      window.history.replaceState(null, "", `${pathname}${search}`);
    }
  }, []);

  return (
    <div className="page" ref={pageRef}>
      <header className="nav">
        <a
          className="nav-brand"
          href="/"
          aria-label="Mawahib home"
          onClick={(event) => handleSectionNav(event, "top")}
        >
          <img src="/assets/logo-mark.svg" alt="" className="nav-mark" />
          <span>Mawahib</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#product" onClick={(event) => handleSectionNav(event, "product")}>
            Product
          </a>
          <a
            href="#audiences"
            onClick={(event) => handleSectionNav(event, "audiences")}
          >
            Who it’s for
          </a>
          <a href="#how" onClick={(event) => handleSectionNav(event, "how")}>
            How it works
          </a>
          <a href="#contact" onClick={(event) => handleSectionNav(event, "contact")}>
            Contact
          </a>
        </nav>
        <a
          className="nav-cta"
          href="#download"
          onClick={(event) => handleSectionNav(event, "download")}
        >
          Get the app
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <div className="hero-wash" />
            <div className="hero-mesh" />
            <div className="hero-orb hero-orb-a" />
            <div className="hero-orb hero-orb-b" />
            <div className="hero-orb hero-orb-c" />
            <div className="hero-orb hero-orb-d" />
            <div className="hero-shine" />
            <div className="hero-fade" />
          </div>
          <div className="hero-content">
            <div className="hero-brand" data-reveal>
              <img src="/assets/logo-mark.svg" alt="" className="hero-mark" />
              <h1>Mawahib</h1>
            </div>
            <p className="hero-tagline" data-reveal>
              Where Talent Meets Hard Work
            </p>
            <p className="hero-support" data-reveal>
              Discover creatives. Showcase your work. Book the next opportunity
              across the MENA region.
            </p>
            <div data-reveal>
              <StoreButtons />
            </div>
          </div>
        </section>

        <section className="section product" id="product">
          <div className="section-inner">
            <p className="eyebrow" data-reveal>
              What Mawahib does
            </p>
            <h2 data-reveal>
              One place to discover talent, hire creatives, and grow your craft.
            </h2>
            <p className="lead" data-reveal>
              Mawahib connects performers, designers, photographers, freelancers,
              and other creatives with businesses and organizers across the GCC —
              cutting out the usual agency maze and word-of-mouth scramble.
            </p>
            <ul className="feature-row" data-reveal>
              <li>
                <strong>Discover</strong>
                <span>Browse verified talent, services, and open roles nearby.</span>
              </li>
              <li>
                <strong>Showcase</strong>
                <span>Build a portfolio that helps clients find your work.</span>
              </li>
              <li>
                <strong>Connect</strong>
                <span>Message, book, and manage jobs from one app.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="section audiences" id="audiences">
          <div className="section-inner">
            <div className="audiences-grid">
              <article data-reveal>
                <p className="eyebrow">For talent</p>
                <h2>Get discovered. Stay booked.</h2>
                <p>
                  Share your work, list your services, and match with jobs that
                  fit your skills — from events and studios to brands looking for
                  local creatives.
                </p>
              </article>
              <article data-reveal>
                <p className="eyebrow">For businesses</p>
                <h2>Find the right creative, faster.</h2>
                <p>
                  Post roles, explore portfolios, and hire verified talent for
                  productions, events, and campaigns — without relying only on
                  agencies or referrals.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section how" id="how">
          <div className="section-inner">
            <p className="eyebrow" data-reveal>
              How it works
            </p>
            <h2 data-reveal>Simple from first open to first booking.</h2>
            <ol className="steps">
              <li data-reveal>
                <span className="step-num">01</span>
                <div>
                  <h3>Create your profile</h3>
                  <p>Join as talent or a business and set up in minutes.</p>
                </div>
              </li>
              <li data-reveal>
                <span className="step-num">02</span>
                <div>
                  <h3>Explore or post</h3>
                  <p>Browse creatives and gigs, or publish a job and services.</p>
                </div>
              </li>
              <li data-reveal>
                <span className="step-num">03</span>
                <div>
                  <h3>Connect and hire</h3>
                  <p>Message, agree terms, and keep the work moving in-app.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-inner contact-inner" data-reveal>
            <p className="eyebrow">Get in touch</p>
            <h2>Questions, partnerships, or press?</h2>
            <p className="lead">
              Reach out for product inquiries, talent partnerships, business
              collaborations, or anything else — we’d love to hear from you.
            </p>
            <a
              className="contact-link"
              href={`mailto:${SUPPORT_EMAIL}?subject=Mawahib inquiry`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-label">Write to us</span>
              <span className="contact-link-email">
                {SUPPORT_EMAIL}
                <span className="contact-link-arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </a>
          </div>
        </section>

        <section className="section download" id="download">
          <div className="section-inner download-inner" data-reveal>
            <img src="/assets/emblem.svg" alt="" className="download-emblem" />
            <h2>Get Mawahib on your phone</h2>
            <p>
              The app is coming soon to the App Store and Google Play. Tap below
              to head to the stores — we’ll be there.
            </p>
            <StoreButtons />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/assets/logo-mark.svg" alt="" />
            <span>Mawahib</span>
          </div>
          <div className="footer-links">
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              App Store
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              Google Play
            </a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Mawahib. Where Talent Meets Hard Work.
          </p>
        </div>
      </footer>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1 1-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2-.1 1.7-.8 3.1-.8s1.9.8 3.1.7c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.6s-2.5-1-2.7-3.9zM13.7 5.2c.7-.8 1.1-1.9 1-3.1-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.5 2.9-1.4z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden="true">
      <path d="M1.1 1.3c-.2.4-.2.9-.2 1.6v16.2c0 .7 0 1.2.2 1.6l.1.1 9.1-9.1v-.2L1.2 1.2l-.1.1zM14.2 14.5l-2.7-2.7-2.1 2.1 5.6 3.2c.3-.2.5-.4.6-.7l-1.4-1.9zM15.4 8.8l-.1-.1-5.5-3.1-2.1 2.1 2.7 2.7 5-1.6zM11.5 11l2.7-2.7 2.8 1.6c.4.2.6.5.6 1s-.2.9-.6 1.1l-2.8 1.6L11.5 11z" />
    </svg>
  );
}

export default App;
