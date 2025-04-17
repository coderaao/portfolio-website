import { createFileRoute } from "@tanstack/react-router";

function About() {
  return (
    <>
      <div className="pt-12 text-white">Hello from About!</div>
    </>
  );
}

export const Route = createFileRoute("/about")({
  component: About,
});
