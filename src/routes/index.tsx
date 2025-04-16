import { createFileRoute, Link } from "@tanstack/react-router";
import { TypeAnimation } from "react-type-animation";

function Index() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="text-white max-w-w1 w-full text-center flex flex-col items-center gap-y-4">
        <h1 className="font-bold text-4xl">
          Hello, I'm{" "}
          <TypeAnimation
            sequence={["Azizbek Akbarov", 1000]}
            speed={30}
            style={{ fontSize: "36px", color: "#39965f" }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-lg text-textP1">
          A results-driven web developer focused on creating and managing
          websites and web applications to achieve collective success.
        </p>
        <Link
          to="/projects"
          className="bg-customGreen py-2 px-11 rounded-lg text-lg"
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
