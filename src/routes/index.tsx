import { createFileRoute, Link } from "@tanstack/react-router";
import { TypeAnimation } from "react-type-animation";

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-w1 flex w-full flex-col items-center gap-y-4 text-center text-white">
        <h1 className="text-4xl font-bold">
          Hello, I'm{" "}
          <TypeAnimation
            sequence={["Azizbek Akbarov", 1000]}
            speed={30}
            style={{ fontSize: "36px", color: "#39965f" }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-textP1 text-lg">
          A results-driven web developer focused on creating and managing
          websites and web applications to achieve collective success.
        </p>
        <Link
          to="/projects"
          className="bg-customGreen rounded-lg px-11 py-2 text-lg"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});
