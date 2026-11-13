import { createFileRoute } from "@tanstack/react-router";
import { contact, pageHead } from "@/data/site";
import { LegalPage } from "@/components/site/LegalPage";

// Template wording — have it reviewed by a qualified legal adviser before launch.
export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | STOPWASH",
      description: "How STOPWASH PVT LTD collects, uses and protects personal information submitted through stopwash.lk.",
      path: "/privacy-policy",
    }),
  component: () => (
    <LegalPage
      label="Privacy policy"
      title="Your details. Handled with care."
      updated="13 November 2026"
      intro={<p>This policy explains how STOPWASH PVT LTD (“STOPWASH”, “we”, “us”) handles personal information you share with us through this website.</p>}
      sections={[
        {
          heading: "What we collect",
          body: (
            <>
              <p>We only collect information you choose to give us through our forms:</p>
              <ul>
                <li>Contact form: name, email address, phone number (optional), enquiry type and message.</li>
                <li>Franchise enquiry form: name, contact details, preferred territory, occupation, operating experience, indicative investment range, unit interest, site status, your answers about STOPWASH and your preferred time to speak.</li>
              </ul>
              <p>We do not ask for payment details on this website.</p>
            </>
          ),
        },
        {
          heading: "How we use it",
          body: <p>To reply to your enquiry, assess franchise enquiries, arrange follow-up conversations and improve our service. We do not sell your personal information.</p>,
        },
        {
          heading: "Storage and security",
          body: <p>Submissions are stored in a secured database that is not publicly readable. Access is restricted to authorised STOPWASH team members who need it to respond to you.</p>,
        },
        {
          heading: "Retention",
          body: <p>We keep enquiry information only as long as needed for the purpose it was collected, or as required by law, and then delete it.</p>,
        },
        {
          heading: "Your choices",
          body: (
            <p>
              You can ask us to access, correct or delete the information you have shared by emailing <a href={`mailto:${contact.generalEmail}`}>{contact.generalEmail}</a>.
            </p>
          ),
        },
        {
          heading: "Third-party services",
          body: <p>This site loads fonts from Google Fonts and links to Google Maps for directions. Those services have their own privacy policies.</p>,
        },
        {
          heading: "Changes",
          body: <p>We may update this policy as the website and our services evolve. The date at the top shows when it last changed.</p>,
        },
      ]}
    />
  ),
});
