import { describe, expect, it } from "vitest";
import { contactEmailLink, franchiseEmailLink } from "@/lib/enquiries.email";

const parse = (href: string) => {
  const url = new URL(href);
  return {
    to: url.pathname,
    subject: url.searchParams.get("subject"),
    body: url.searchParams.get("body") ?? "",
  };
};

describe("enquiry emails", () => {
  it("addresses a contact message to hello@stopwash.lk with every field written out", () => {
    const mail = parse(
      contactEmailLink({
        name: "Nimal Perera",
        email: "nimal@example.com",
        phone: "077 123 4567",
        enquiryType: "Brand & dealer partnership",
        message: "We would like to discuss pre-delivery detailing.",
        startedAt: 0,
      }),
    );
    expect(mail.to).toBe("hello@stopwash.lk");
    expect(mail.subject).toBe("Brand & dealer partnership: Nimal Perera");
    expect(mail.body).toContain("Email: nimal@example.com");
    expect(mail.body).toContain("Phone: 077 123 4567");
    expect(mail.body).toContain("We would like to discuss pre-delivery detailing.");
  });

  it("leaves out optional fields that were not filled in", () => {
    const mail = parse(
      contactEmailLink({
        name: "Ann",
        email: "ann@example.com",
        phone: "",
        enquiryType: "General enquiry",
        message: "Hello there, a question.",
        startedAt: 0,
      }),
    );
    expect(mail.body).not.toContain("Phone");
  });

  it("writes a franchise application to the franchise address with territory in the subject", () => {
    const mail = parse(
      franchiseEmailLink({
        fullName: "Kasun Silva",
        email: "kasun@example.com",
        phone: "0771234567",
        territory: "Kandy",
        whyStopwash: "I run two service stations and want a stronger brand.",
        startedAt: 0,
      }),
    );
    expect(mail.to).toBe("hello@stopwash.lk");
    expect(mail.subject).toBe("Franchise application: Kasun Silva, Kandy");
    expect(mail.body).toContain("City or territory: Kandy");
    expect(mail.body).not.toContain("Investment range");
  });
});
