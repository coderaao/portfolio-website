import { Link } from "@tanstack/react-router";
import githubIcon from "../assets/images/icon-of-github-from-navigate.svg";
import menuIcon from "../assets/images/icon-of-menu-from-header.svg";

export function Header({ toggleAside }: { toggleAside: () => void }) {
  return (
    <>
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-x-3.5">
          <button className="cursor-pointer p-1" onClick={toggleAside}>
            <img src={menuIcon} alt="Icon of Menu" width={24} height={24} />
          </button>
          <Link
            to="/"
            className="tracking-minusOne text-[22px] leading-7 font-medium"
          >
            AZIZBEK<span className="text-customGreen">.UZ</span>
          </Link>
        </div>
        <nav className="flex items-center gap-x-3.5">
          <ul className="hidden items-center gap-x-6 text-base md:flex">
            <li>
              <Link
                to="/"
                className="[&.active]:border-customGreen hover:border-customGreen2 border-b-2 border-transparent pb-3 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="[&.active]:border-customGreen hover:border-customGreen2 border-b-2 border-transparent pb-3 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="[&.active]:border-customGreen hover:border-customGreen2 border-b-2 border-transparent pb-3 transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="[&.active]:border-customGreen hover:border-customGreen2 border-b-2 border-transparent pb-3 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            href="https://github.com/programmingWithAzizbek"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-hover1 rounded-full p-1 transition-colors duration-300"
          >
            <img src={githubIcon} alt="Icon of GitHub" width={24} height={24} />
          </a>
        </nav>
      </div>
    </>
  );
}
