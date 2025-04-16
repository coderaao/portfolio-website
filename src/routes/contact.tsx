import { createFileRoute } from "@tanstack/react-router";

function Contact() {
  return (
    <>
      <div className="mt-12">Hello from Contact!</div>
    </>
  );
}

export const Route = createFileRoute("/contact")({
  component: Contact,
});
