import { createFileRoute } from "@tanstack/react-router";
import { contact, pageHead } from "@/data/site";
import { LegalPage } from "@/components/site/LegalPage";

// Template wording: have it reviewed by a qualified legal adviser before launch.
export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms and Conditions | STOPWASH",
      description: "Terms and conditions for using the STOPWASH website, stopwash.lk.",
      path: "/terms",
    }),
  component: () => (
    <LegalPage
      label="Terms and conditions"
      title="The rules of the road."
      updated="13 November 2026"
      intro={<p>These terms apply to your use of stopwash.lk, operated by STOPWASH PVT LTD. By using the site you agree to them.</p>}
      sections={[
        {
          heading: "About the information on this site",
          body: <p>We aim to keep information accurate and current. Service names, availability, opening hours and inclusions may change and should be confirmed with the outlet. Nothing on this site is an offer of a specific price or service level.</p>,
        },
        {
          heading: "Franchise information",
          body: <p>Franchise content on this site is general information only. It is not an offer to sell a franchise, investment advice or a promise of any financial outcome. Any franchise relationship is subject to a separate written agreement.</p>,
        },
        {
          heading: "Enquiries",
          body: <p>When you submit a form, you confirm that the information you provide is accurate and that you are entitled to share it. Submitting an enquiry does not create any obligation for either party.</p>,
        },
        {
          heading: "Intellectual property",
          body: <p>The STOPWASH name, logo, design, text and imagery on this site belong to STOPWASH PVT LTD or its licensors and may not be used without permission.</p>,
        },
        {
          heading: "Acceptable use",
          body: <p>Do not misuse the site. This includes attempting to disrupt it, gaining unauthorised access and submitting spam or automated enquiries.</p>,
        },
        {
          heading: "Liability",
          body: <p>To the extent permitted by law, STOPWASH is not liable for loss arising from use of this website or reliance on its content.</p>,
        },
        {
          heading: "Governing law",
          body: <p>These terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka.</p>,
        },
        {
          heading: "Contact",
          body: <p>Questions about these terms: <a href={`mailto:${contact.generalEmail}`}>{contact.generalEmail}</a>.</p>,
        },
      ]}
    />
  ),
});
