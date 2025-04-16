import { Link } from "@tanstack/react-router";
import githubIcon from "../assets/images/icon-of-github-from-navigate.svg";
import menuIcon from "../assets/images/icon-of-menu-from-header.svg";

export function Header({ toggleAside }: { toggleAside: () => void }) {
  return (
    <>
      <div className="flex justify-between items-center text-white">
        <div className="flex items-center gap-x-3.5">
          <button className="p-1 cursor-pointer" onClick={toggleAside}>
            <img src={menuIcon} alt="Icon of Menu" width={24} height={24} />
          </button>
          <Link
            to="/"
            className="text-[22px] leading-7 font-medium tracking-minusOne"
          >
            AZIZBEK<span className="text-customGreen">.UZ</span>
          </Link>
        </div>
        <nav className="flex items-center gap-x-3.5">
          <ul className="hidden md:flex items-center gap-x-6 text-base">
            <li>
              <Link
                to="/"
                className="pb-3 border-b-2 border-transparent [&.active]:border-customGreen hover:border-customGreen2 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="pb-3 border-b-2 border-transparent [&.active]:border-customGreen hover:border-customGreen2 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="pb-3 border-b-2 border-transparent [&.active]:border-customGreen hover:border-customGreen2 transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="pb-3 border-b-2 border-transparent [&.active]:border-customGreen hover:border-customGreen2 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            href="https://github.com/programmingWithAzizbek"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-hover1 transition-colors duration-300"
          >
            <img src={githubIcon} alt="Icon of GitHub" width={24} height={24} />
          </a>
        </nav>
      </div>
    </>
  );
}
