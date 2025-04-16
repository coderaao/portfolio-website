import { createFileRoute } from "@tanstack/react-router";

function About() {
  return (
    <>
      <div className="mt-12">Hello from About!</div>
    </>
  );
}

export const Route = createFileRoute("/about")({
  component: About,
});
