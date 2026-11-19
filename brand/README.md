# STOPWASH brand files

The STOPWASH logo from the Figma file (Stopwash → Foundations), recoloured to the brand palette and redrawn as clean vectors. Every PNG is rendered from the SVGs, so any size can be regenerated sharply.

## Colours

| Name  | Hex       | Use                                                    |
| ----- | --------- | ------------------------------------------------------ |
| Lime  | `#B2E04C` | The signature. Logo on dark backgrounds, and as a fill |
| Ink   | `#050A12` | Logo on light or lime backgrounds; dark backgrounds    |
| Navy  | `#0B1728` | Alternative dark background                            |
| Paper | `#F5F6F2` | Light background                                       |
| White | `#FFFFFF` | Logo on photos or navy, when lime would clash          |

> Rule from Foundations: lime is a fill with ink on it, never lime text on white. On light backgrounds use the **ink** logo.

## What's inside

| Folder                | Files                                                                                        | Use for                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `logo/svg/`           | `stopwash-logo-*`, `stopwash-logo-stacked-*`, `stopwash-mark-*` in `lime`, `ink`, `white`    | Website, print, anything that scales                                                          |
| `logo/png/`           | The same, transparent, at three widths each                                                  | Documents, slides, email signatures                                                           |
| `logo/on-background/` | Logo on ink, navy, lime and paper (SVG + PNG)                                                | Quick use where a solid background is needed                                                  |
| `social/profile/`     | Profile pictures in ink, lime and navy at 1080, 800 and 400 px (+ SVG)                       | Instagram, Facebook, TikTok, WhatsApp Business, LinkedIn, X, YouTube, Google Business Profile |
| `social/covers/`      | Facebook, LinkedIn, X, YouTube, WhatsApp Business covers and the 1200×630 link-preview image | Channel banners and link previews                                                             |

Profile pictures keep the mark well inside the circle that every platform crops to. Use the **ink** one as the default; the **lime** one stands out in busy feeds.

## Where the logo is used

| Place                          | File                                                                                                                                            |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Site header and footer         | `src/components/site/Logo.tsx` (inline SVG, colour from `currentColor`)                                                                         |
| Favicons and home-screen icons | `public/favicon.*`, `public/apple-touch-icon.png`, `public/android-chrome-*.png`, `public/maskable-icon-512x512.png`, `public/site.webmanifest` |
| Figma                          | Stopwash › Design System › Website kit › `Site/Logo` (Type: Horizontal or Mark; Tone: Ink, Lime, White)                                         |
| OS                             | `saadmaz/Stopwash-OS`: `apps/web/src/app/Logo.tsx` and `apps/web/public/`                                                                       |
| Maintenance page               | `saadmaz/Stopwash-Maintenance`: inlined in `src/index.js`                                                                                       |

When the logo changes, update the SVGs here first, then the places above.
