# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- "Brand & dealer partnership" enquiry type on the Contact form; the B2B tile links straight to it.
- Homepage "Our outlets" section above the closing call to action, showing each open outlet as a card with address, phone, opening hours, directions and the map.
- Homepage "Why STOPWASH" section on white: the statement centred in large capitals above an arc of real STOPWASH-ED customer photos that runs from the bottom-left to the bottom-right corner, each card tilted along the curve, drifting slowly sideways. It fits one screen on laptops, monitors and phones, moves only while the section is on screen, and stays still for visitors who prefer reduced motion.
- "Why the name?" is now a compact navy band on the homepage: the STOPWATCH to STOPWASH wordmark beside a short explanation and a link to the story.
- Katubedda outlet details: 239 Model Town Rd, Moratuwa 10400, open every day 9:00 am to 9:00 pm, with the official Google Maps embed and directions to the exact pin.
- Local business structured data now includes the street address, map pin and opening hours.
- New link preview image for social sharing, cropped from the homepage photograph.
- New homepage hero photograph and headline: "Giving you back the gift of time".
- Franchise page hero photograph of the STOPWASH kiosk.
- Image folders for photos, location photos and brand files, with a guide in `src/assets/README.md`.

### Changed

- Homepage franchise card is now aligned to the navigation width, with larger type and rewritten copy ("One outlet proves the idea. A network changes the category."), a "Become a franchisee" button and a link straight to the franchise FAQ.
- Homepage Services section now presents the two STOPWASH formats, the supermarket model ("Clean while you shop.") and the B2B model, STOPWASH as official detailing partner to vehicle brands and dealerships ("The detailing partner behind the brands."), as full-height photo tiles that fit one screen, with a link to all services. The six individual service cards moved off the homepage.
- Homepage order: Services now follows "Why the name?", ahead of "What we are building".
- Location cards: the map now fills the full height of the card.
- Services, Locations, Our Story, Our Vision, Our Standard, Blog and Contact open with a full-screen landing hero, matching Home and Franchise. Pages without a photograph show a branded backdrop until one is supplied.
- Navigation bar is transparent over every landing hero until the visitor scrolls.
- Contact, Locations and Blog heroes are shorter (about 70% of the screen) so the form, map and posts are reached sooner.
- Homepage hero: one-line introduction, and the second button now leads to Services.
- Browser title now reads "Giving You Back the Gift of Time".
- Location status badge reads "Open" instead of "Open now".
- Homepage hero fills the full screen, with the text aligned further left.
- Hero photos show uncropped on wide screens and start below the navigation bar.
- Navigation: "Franchise" moved out of the menu into the primary button, now labelled "Become a franchisee".
- Franchise "At a glance" facts moved from the hero into a strip directly below it.

### Removed

- Round "scroll down" arrow at the bottom of the page heroes.
- "Our first outlet" section from the homepage (replaced by "Our outlets").
- "The STOPWASH difference" section (Motion, Precision, Repeatability) from the homepage.
- Gmail address from the footer, Contact, Privacy Policy and Terms; hello@stopwash.lk is the single contact address.
- "General enquiries" card on the Contact page (it duplicated hello@stopwash.lk).
- "Now open in Katubedda" tag from the homepage hero.

## [1.0.0] - 2026-11-15

First production release of [stopwash.lk](https://stopwash.lk).

### Added

- Home page with hero, brand story, services preview, how-it-works and franchise call to action.
- About pages: Our Story, Our Vision and The STOPWASH Standard.
- Services page with the full service catalogue.
- Locations page with directions, click-to-call and map support; Katubedda outlet listed.
- Franchise page with programme overview, partner criteria, journey, FAQ and application form.
- Contact page with an enquiry form.
- Blog with Markdown posts, tags, reading time, drafts and an RSS feed.
- Privacy Policy and Terms and Conditions pages.
- Server-side rendering with per-page SEO metadata, Open Graph images, `sitemap.xml`, `robots.txt` and structured data.
- Enquiry storage in Supabase with insert-only row-level security, schema validation and spam protection.
- Branded 404 and error pages.
- Continuous integration: type check, tests and production build on every push and pull request.
- Project documentation, contribution guidelines, security policy and issue templates.

### Changed

- Brand lime softened from `#B6FF00` to `#B2E04C` for a calmer, more comfortable look.

[Unreleased]: https://github.com/saadmaz/Stopwash-Website/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/saadmaz/Stopwash-Website/releases/tag/v1.0.0
