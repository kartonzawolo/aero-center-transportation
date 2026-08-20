/**
 * Reference-led layout: a centered King & Carter executive transportation card.
 * Preserve the supplied image's formal hierarchy, gold rules, service icons, and QR-first mobile handoff.
 */
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  Globe2,
  Mail,
  Phone,
  Plane,
  UsersRound,
} from "lucide-react";

const BOOKING_URL = "https://kingandcarter.com/";
const MAIN_SITE_URL = "https://kingandcarter.com/";
const PHONE_DISPLAY = "770 766 0383";
const PHONE_LINK = "tel:+17707660383";
const CONTACT_EMAIL = "reservations@kingandcarter.com";

const services = [
  {
    title: "Airport\nTransfer",
    copy: "Seamless airport transfers to and from ATL.",
    icon: Plane,
  },
  {
    title: "Executive\nTransportation",
    copy: "Transportation for business, meetings, and special occasions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Hourly\nChauffeur",
    copy: "Dedicated chauffeur and vehicle by the hour.",
    icon: Clock3,
  },
  {
    title: "Group\nTransportation",
    copy: "Executive Sprinter and group transportation available.",
    icon: UsersRound,
  },
];

const BrandLockup = ({ className = "" }: { className?: string }) => (
  <img
    className={`brand-lockup ${className}`}
    src="/manus-storage/king-carter-premiere-logo_7b3eb6f4.jpg"
    alt="King + Carter Premiere"
  />
);

export default function Home() {
  const [qrImage, setQrImage] = useState("");

  useEffect(() => {
    QRCode.toDataURL(window.location.href, {
      width: 760,
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#080808", light: "#ffffff" },
    })
      .then(setQrImage)
      .catch(() => setQrImage(""));
  }, []);

  return (
    <div className="reference-page">
      <div className="city-shade" aria-hidden="true" />
      <main className="reference-shell">
        <section className="reference-hero" aria-labelledby="page-title">
          <a href={MAIN_SITE_URL} target="_blank" rel="noreferrer" className="hero-brand">
            <BrandLockup />
          </a>

          <div className="hotel-title">
            <p>Aero Center</p>
            <div className="hotel-location">
              <span />
              <b>Atlanta</b>
              <span />
            </div>
          </div>

          <h1 id="page-title">Your Atlanta journey, thoughtfully arranged.</h1>
          <a className="reference-book-button" href={BOOKING_URL} target="_blank" rel="noreferrer">
            <span>Book transportation</span>
            <ArrowUpRight size={20} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <p className="booking-note">Reservations open in the King &amp; Carter booking experience.</p>
        </section>

        <div className="gold-rule section-rule" aria-hidden="true"><i /></div>

        <section className="service-grid" aria-label="Transportation services">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="reference-service" key={service.title}>
                <Icon className="service-icon" size={45} strokeWidth={1.35} aria-hidden="true" />
                <h2>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
                <p>{service.copy}</p>
              </article>
            );
          })}
        </section>

        <section className="reference-qr-section" aria-label="Scan to book transportation">
          <div className="qr-card-reference">
            <div className="qr-code-wrap">
              {qrImage ? (
                <img src={qrImage} alt="QR code to book King & Carter transportation" />
              ) : (
                <span>Preparing<br />QR</span>
              )}
            </div>
            <p>Scan to book</p>
          </div>
          <p className="qr-supporting-copy">
            Private chauffeur and executive transportation provided by King &amp; Carter.
          </p>
        </section>
      </main>

      <footer className="reference-footer">
        <div className="footer-inner">
          <BrandLockup className="footer-lockup" />
          <div className="footer-contact">
            <a href={PHONE_LINK}><Phone size={16} aria-hidden="true" /> {PHONE_DISPLAY}</a>
            <a href={`mailto:${CONTACT_EMAIL}`}><Mail size={16} aria-hidden="true" /> {CONTACT_EMAIL}</a>
          </div>
          <a className="footer-web" href={MAIN_SITE_URL} target="_blank" rel="noreferrer">
            <Globe2 size={17} aria-hidden="true" /> kingandcarter.com
          </a>
        </div>
        <p className="reference-disclosure">Transportation services are provided and operated by King &amp; Carter. Staging preview for Aero Center review.</p>
      </footer>
    </div>
  );
}
