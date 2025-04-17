import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";

function RootComponent() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <header className="bg-backgroundAll border-b-line fixed z-20 w-full border-b px-3.5 py-2 text-white">
        <Header toggleAside={() => setIsAsideOpen(!isAsideOpen)} />
      </header>
      <div className="md:flex">
        {isAsideOpen && (
          <aside
            className={`bg-backgroundAll border-r-line absolute z-10 w-72 border-r transition-transform duration-300 md:relative ${
              isAsideOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Aside />
          </aside>
        )}
        <main className="flex-1 px-3.5">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
