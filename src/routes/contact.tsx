import { createFileRoute } from "@tanstack/react-router";

function Contact() {
  return (
    <>
      <div className="pt-12 text-white">Hello from Contact!</div>
    </>
  );
}

export const Route = createFileRoute("/contact")({
  component: Contact,
});
