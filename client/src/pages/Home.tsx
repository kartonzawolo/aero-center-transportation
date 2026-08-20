/**
 * Quiet Arrival design: a discreet, booking-first concierge landing page.
 * Keep the experience composed, dark, mobile-first, and approval-safe; never imply Hyatt endorsement.
 */
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Printer,
  ShieldCheck,
} from "lucide-react";

const BOOKING_URL = "https://kingandcarter.com/";
const MAIN_SITE_URL = "https://kingandcarter.com/";

const services = [
  {
    number: "01",
    title: "Airport Transfers",
    description:
      "Guest arrivals and departures at Hartsfield–Jackson, coordinated around your flight.",
  },
  {
    number: "02",
    title: "Executive Transportation",
    description:
      "Discreet, driver-led transportation for meetings, dining, events, and business travel.",
  },
  {
    number: "03",
    title: "Hourly Chauffeur",
    description:
      "A dedicated chauffeur and vehicle held to your schedule, available by the hour.",
  },
  {
    number: "04",
    title: "Group Transportation",
    description:
      "Executive Sprinter and coordinated group movement, arranged upon request.",
  },
];

export default function Home() {
  const [qrImage, setQrImage] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = window.location.href;
    setPageUrl(url);

    QRCode.toDataURL(url, {
      width: 680,
      margin: 2,
      errorCorrectionLevel: "M",
      color: {
        dark: "#11110f",
        light: "#f4eee3",
      },
    })
      .then(setQrImage)
      .catch(() => setQrImage(""));
  }, []);

  const copyPageLink = async () => {
    if (!pageUrl || !navigator.clipboard) return;
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const downloadQr = () => {
    if (!qrImage) return;
    const download = document.createElement("a");
    download.href = qrImage;
    download.download = "hyatt-regency-atlanta-king-carter-qr.png";
    download.click();
  };

  return (
    <div className="arrival-page">
      <div className="page-grain" aria-hidden="true" />
      <div className="arrival-spine" aria-hidden="true" />
      <img
        className="arrival-contours"
        src="/manus-storage/arrival-contour_f71a77e4.png"
        alt=""
        aria-hidden="true"
      />

      <header className="site-header">
        <a className="brand" href={MAIN_SITE_URL} target="_blank" rel="noreferrer">
          <img
            className="brand-seal"
            src="/manus-storage/kc-monogram_2a8b8c87.png"
            alt="King & Carter"
          />
          <span className="brand-wordmark">KING &amp; CARTER</span>
        </a>
        <a className="header-link" href="#services">
          Services <ArrowDown size={13} strokeWidth={1.65} />
        </a>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow-line">
              <span className="eyebrow-mark" />
              <p className="eyebrow">HYATT REGENCY ATLANTA</p>
            </div>

            <p className="hero-kicker">Private transportation</p>
            <h1 id="hero-title">
              Your Atlanta journey,
              <em> thoughtfully arranged.</em>
            </h1>
            <p className="hero-intro">
              Private chauffeur and executive transportation provided by King &amp;
              Carter.
            </p>

            <div className="hero-actions">
              <a
                className="booking-button"
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
              >
                <span>Book transportation</span>
                <ArrowUpRight size={19} strokeWidth={1.75} aria-hidden="true" />
              </a>
              <p className="handoff-note">
                Reservation handoff opens in the King &amp; Carter experience.
              </p>
            </div>
          </div>

          <aside className="journey-panel" aria-label="Booking journey">
            <span className="journey-label">KC / A simpler arrival</span>
            <ol>
              <li>
                <span>01</span>
                <p>Open this page</p>
              </li>
              <li>
                <span>02</span>
                <p>Share your journey details</p>
              </li>
              <li>
                <span>03</span>
                <p>Receive confirmation</p>
              </li>
            </ol>
          </aside>
        </section>

        <section id="services" className="services-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-label">Designed around your day</p>
            <h2 id="services-title">A more considered way to move.</h2>
          </div>
          <div className="services-ledger">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ArrowUpRight className="service-arrow" size={17} strokeWidth={1.5} aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="service-note">
            <img src="/manus-storage/kc-monogram_2a8b8c87.png" alt="" aria-hidden="true" />
            <p>
              Premium vehicles, executive protection, meet-and-greet services, and
              special transportation requests are available through King &amp; Carter
              upon request.
            </p>
          </div>
        </section>

        <section className="access-section" aria-labelledby="access-title">
          <div className="access-image-wrap">
            <img
              src="/manus-storage/chauffeur-doorway_c5c814aa.png"
              alt="A luxury SUV waiting at a covered city entrance"
              className="access-image"
            />
            <div className="image-caption">
              <span>PORTE-COCHÈRE ARRIVAL</span>
              <span>ATLANTA</span>
            </div>
          </div>
          <div className="access-copy">
            <p className="section-label">Hotel guest access</p>
            <h2 id="access-title">Details handled before they need attention.</h2>
            <p>
              Hotel guest rate access may be reflected in the booking process when
              available. The focus here is a seamless route to your reservation.
            </p>
            <div className="access-details">
              <span><Check size={15} strokeWidth={1.8} /> Discreet, professional chauffeurs</span>
              <span><Check size={15} strokeWidth={1.8} /> Luxury vehicles, meticulously presented</span>
            </div>
          </div>
        </section>

        <section className="qr-section" aria-labelledby="qr-title">
          <img
            className="satin-detail"
            src="/manus-storage/black-satin-detail_c20dcb25.png"
            alt=""
            aria-hidden="true"
          />
          <div className="qr-copy">
            <p className="section-label">For hotel materials</p>
            <h2 id="qr-title">A direct route to booking.</h2>
            <p>
              Share this link with a guest, or use the scannable card for concierge,
              guest-services, and printed transportation materials.
            </p>
            <div className="qr-actions no-print">
              <button className="text-action" onClick={copyPageLink} type="button">
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Link copied" : "Copy page link"}
              </button>
              <button className="text-action" onClick={downloadQr} type="button" disabled={!qrImage}>
                <ArrowDown size={15} /> Download QR
              </button>
              <button className="text-action" onClick={() => window.print()} type="button">
                <Printer size={15} /> Print card
              </button>
            </div>
            <p className="qr-staging-note no-print">
              The code reflects this page’s current URL and will remain destination-aware when the approved public URL is used.
            </p>
          </div>

          <div id="qr-card" className="qr-card">
            <div className="qr-card-topline">
              <img src="/manus-storage/kc-monogram_2a8b8c87.png" alt="" aria-hidden="true" />
              <span>HYATT REGENCY ATLANTA</span>
            </div>
            <div className="qr-card-body">
              <h3>Need<br />transportation?</h3>
              <p>Private transportation for Hyatt Regency Atlanta guests.</p>
              <div className="qr-frame" aria-label="QR code linking to this transportation page">
                {qrImage ? <img src={qrImage} alt="QR code for Hyatt Regency Atlanta transportation" /> : <span>Preparing QR</span>}
              </div>
              <p className="scan-label">Scan to book</p>
            </div>
            <div className="qr-card-footer">Powered by King &amp; Carter</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-rule" />
        <div className="footer-content">
          <div>
            <p className="footer-disclosure">
              Transportation services are provided and operated by King &amp; Carter.
            </p>
            <p className="footer-location">
              <MapPin size={14} aria-hidden="true" /> Atlanta, Georgia
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:info@kingandcarter.com"><Mail size={14} aria-hidden="true" /> info@kingandcarter.com</a>
            <a href={MAIN_SITE_URL} target="_blank" rel="noreferrer">Visit King &amp; Carter <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
        <p className="staging-disclosure">
          Staging preview for Hyatt Regency Atlanta review. Booking destination should be replaced with the approved reservation URL before public release.
        </p>
      </footer>
    </div>
  );
}
