# Hyatt Regency Atlanta × King & Carter — Staging Design Direction

## Three Directions Considered

### Theme Name: Quiet Arrival
**Very Brief Intro:** A restrained hospitality portal shaped by black lacquer, warm ivory, thin brass rules, and editorial pacing. It communicates discretion and ease rather than spectacle.

**Probability:** 0.03

### Theme Name: Atlanta After Dark
**Very Brief Intro:** A cinematic nocturnal luxury direction with deep charcoal, reflective chrome, and sharper movement. It would make travel feel energetic and city-led.

**Probability:** 0.07

### Theme Name: Heritage Desk
**Very Brief Intro:** An understated executive-service direction inspired by a well-appointed hotel concierge desk, using paper-like warmth, formal typography, and reserved information hierarchy.

**Probability:** 0.01

## Chosen Direction: Quiet Arrival

### Design Movement
**Quiet luxury hospitality with editorial restraint.** The page borrows the calm confidence of private club stationery and modern five-star concierge materials. It aligns with King & Carter’s public language of “premium service, delivered with intention” and “true luxury is not loud,” while keeping Hyatt identification respectfully subordinate and approval-safe.

### Core Principles
1. **Booking first:** The primary call to action remains unmistakable and reaches the booking handoff with one decisive tap.
2. **Quiet hierarchy:** Purposeful typography, thin dividers, and generous negative space replace promotional clutter.
3. **Guest confidence:** Every line communicates the transport need, the service scope, and the operating company without ambiguous partnership claims.
4. **Mobile elegance:** Content is deliberately paced as a vertical concierge experience; nothing essential relies on a desktop layout or imagery.

### Color Philosophy
The background is a near-black graphite, not a pure flat black, to keep the interface soft and dimensional on OLED and LCD screens. Warm ivory carries core copy for a composed, hospitable contrast, while **Champagne Line** is the signature metal-inspired accent used sparingly for rules, indicators, and the primary action. The page never borrows Hyatt’s proprietary visual identifiers or logo.

### Layout Paradigm
The composition behaves as a **single-column concierge card** that is subtly offset within a wide dark field on larger displays. It begins with a compact hotel identifier, flows into a large service promise and direct booking action, then moves through a numbered service ledger. On mobile, each segment takes a distinct, readable “arrival” moment rather than collapsing into an over-dense grid.

### Signature Elements
1. A vertical **arrival line** in Champagne Line that continues down the page to connect the service story.
2. A restrained **KC monogram seal** that gives the brand presence without relying on unapproved hotel artwork.
3. **Service index numerals** (01–04) separated by hairline rules, reinforcing a concierge ledger rather than generic feature cards.

### Interaction Philosophy
Motion should confirm care, not seek attention. The booking action darkens and shifts by a few pixels on press, service rows gently illuminate on hover or keyboard focus, and mobile interfaces maintain large, easy targets. The primary booking route is kept configurable in one obvious constant until the approved reservation URL is supplied.

### Animation
The initial reveal uses a short sequential fade-and-rise: identifier, headline, action, then the service ledger at 50–70 ms intervals. All transitions use a confident ease-out and remain under 280 ms. The arrival line may softly brighten during entry. Motion is disabled for reduced-motion preferences; no continuous or ornamental animation is used.

### Typography System
**Cormorant Garamond** is used for the high-contrast, hospitality-forward headline and hotel identification. **Manrope** carries labels, body text, and actions in crisp uppercase with generous letterspacing. Headline size is fluid, but control labels remain compact and legible; there is no use of Inter.

### Brand Essence
**A friction-light private transportation handoff for Hyatt Regency Atlanta guests who expect a quieter, more intentional way to move.**

Personality: **composed, discreet, attentive.**

### Brand Voice
Headlines are declarative and calm. CTAs are direct without sounding transactional; microcopy is specific, assured, and avoids claims of affiliation.

> “Your Atlanta journey, thoughtfully arranged.”

> “Book transportation — one purposeful step from arrival to confirmation.”

### Wordmark & Logo
Use a compact **KC ligature seal** with subtly interlocked initials inside a fine-line square. The adjacent wordmark is rendered as intentionally spaced “KING & CARTER,” not a generic default wordmark. The hotel name appears only as elegant text, with no Hyatt logo or co-branded lockup.

### Signature Brand Color
**Champagne Line — `#C6A66A`**. A restrained, ownable warm-metal accent that marks gestures of care: booking, structure, and wayfinding.

## Approval-Safe Content Notes

The page uses “Private chauffeur and executive transportation provided by King & Carter” and the required disclosure, “Transportation services are provided and operated by King & Carter.” It deliberately avoids the terms “exclusive,” “official,” “partner,” “preferred provider,” and any claim that could imply Hyatt endorsement. Preferred-rate architecture is represented by a quiet “guest rate access” note rather than a published rate table, allowing the approved booking flow or future page content to apply rates later.

## Implementation Assumptions

1. The approved external booking URL has not yet been supplied. The staging CTA will point to an easily replaceable configurable placeholder (`https://kingandcarter.com/#booking`) and clearly show a non-blocking staging notice after activation; it must be replaced before public use.
2. The QR code will point to the current staging-page URL during review. A production QR should be regenerated once the public Hyatt-specific page URL is confirmed.
3. Contact details are limited to the public King & Carter website and `info@kingandcarter.com`, sourced from the existing King & Carter public site.

## Style Decisions

1. **Accepted:** Champagne Line is a continuous arrival spine running through the page, with each major section explicitly connected to the same compositional thread.
2. **Accepted:** The service ledger uses guest-centered, operational phrasing rather than brochure-style luxury language while retaining the user-specified service categories.
3. **Accepted:** The KC seal recurs as a small stationer’s mark in the service note and printed QR card, keeping it ritualistic rather than loud.
4. **Accepted:** QR sharing, download, and printing remain useful staff utilities but are visually de-emphasized beneath the singular booking handoff.
5. **Accepted:** The vehicle section caption emphasizes a hotel-arrival moment and will retain an intentionally dark, architectural crop rather than overt vehicle glamour.

## Reference Layout Override

The user-supplied King & Carter Executive Transportation image is now the **ground-truth visual specification** for this staging revision. Its centered single-column hierarchy, black-and-gold palette, formal King & Carter lockup, Hyatt Regency Atlanta title treatment, gold booking button, icon-led four-service row, centered QR card, and three-part contact footer override the prior asymmetric Quiet Arrival composition. The revised page preserves the existing approval-safe wording, working reservation handoff, and mobile responsiveness while following this reference with deliberate fidelity.
