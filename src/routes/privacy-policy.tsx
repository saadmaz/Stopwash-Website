import { createFileRoute } from "@tanstack/react-router";
import { contact, pageHead } from "@/data/site";
import { LegalPage } from "@/components/site/LegalPage";

// Template wording: have it reviewed by a qualified legal adviser before launch.
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
          body: <p>We use it to reply to your enquiry, assess franchise enquiries, arrange follow-up conversations and improve our service. We do not sell your personal information.</p>,
        },
        {
          heading: "Storage and security",
          body: <p>Messages and applications sent through our forms arrive by email at hello@stopwash.lk. They are read only by authorised STOPWASH team members who need them to respond to you, and are not published or shared.</p>,
        },
        {
          heading: "Retention",
          body: <p>We keep enquiry information only for as long as it is needed for the purpose for which it was collected, or as required by law. We then delete it.</p>,
        },
        {
          heading: "Your choices",
          body: (
            <p>
              You can ask us to access, correct or delete the information you have shared by emailing <a href={`mailto:${contact.customerEmail}`}>{contact.customerEmail}</a>.
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
