# ADR-0002: Enquiries delivered by email, with no database

| Status   | Date       |
| -------- | ---------- |
| Accepted | 2026-11-15 |

## Decision

Validate the Contact and Franchise forms in the browser and open a pre-filled email to hello@stopwash.lk. The site stores no submissions.

## Alternatives considered

Storing enquiries in Supabase (the original implementation); a third-party form service.

## Rationale

Enquiry volume does not justify a database, and keeping no personal data removes a privacy and security surface. The team already works from the shared inbox.
