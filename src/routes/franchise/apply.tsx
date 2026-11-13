import { createFileRoute, redirect } from "@tanstack/react-router";

/** The application form now lives on the franchise page; keep old links working. */
export const Route = createFileRoute("/franchise/apply")({
  beforeLoad: () => {
    throw redirect({ to: "/franchise", hash: "apply", statusCode: 301 });
  },
});
