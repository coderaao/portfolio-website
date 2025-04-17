import { Link } from "@tanstack/react-router";
import arrowLeftIcon from "../assets/images/icon-of-arrow-left.svg";
import arrowRightIcon from "../assets/images/icon-of-arrow-right.svg";
import reloadIcon from "../assets/images/icon-of-reload.svg";
import imagePerson from "../assets/images/image-of-person.png";
import mailIcon from "../assets/images/icon-of-mail.svg";
import github2Icon from "../assets/images/icon-of-github-from-aside.svg";
import telegramIcon from "../assets/images/icon-of-telegram.svg";
import phoneIcon from "../assets/images/icon-of-phone-number.svg";

export function Aside() {
  return (
    <>
      <div className="flex min-h-dvh w-full flex-col gap-y-3.5 pt-12 text-white">
        <div className="border-b-line flex items-center gap-x-3.5 border-b px-3.5 py-2">
          <button className="hover:bg-hover1 cursor-pointer p-1 transition-colors duration-300">
            <img
              src={arrowLeftIcon}
              alt="Icon of Arrow"
              width="20px"
              height="20px"
            />
          </button>
          <button className="hover:bg-hover1 cursor-pointer p-1 transition-colors duration-300">
            <img
              src={arrowRightIcon}
              alt="Icon of Arrow"
              width="20px"
              height="20px"
            />
          </button>
          <button className="hover:bg-hover1 cursor-pointer rounded-full p-1 transition-colors duration-300">
            <img
              src={reloadIcon}
              alt="Icon of Arrow"
              width="20px"
              height="20px"
            />
          </button>
        </div>
        <ul className="flex items-center gap-x-5 pb-3.5 pl-3.5 text-base md:hidden">
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
        <div className="border-b-line gap-x-3.5 border-b px-3.5 pb-3.5">
          <img
            src={imagePerson}
            alt="Image of Person"
            className="h-pers min-w-pers rounded-lg"
          />
          <strong className="my-2 inline-block text-lg font-medium">
            Azizbek A.
          </strong>
          <div className="flex flex-wrap gap-2.5">
            <span className="bg-hover1 rounded-lg px-2 py-1.5 text-xs">
              Web developer
            </span>
            <span className="bg-hover1 rounded-lg px-2 py-1.5 text-xs">
              Computer engineer
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-3.5 px-3.5 pb-3.5 md:pb-0">
          <div className="flex gap-x-2.5">
            <button className="mailGradientBtn rounded-md p-3">
              <img src={mailIcon} alt="Icon of Mail" />
            </button>
            <div className="flex flex-col">
              <strong className="inline-block text-base font-medium">
                E-pochta
              </strong>
              <a href="mailto:akbarovazizbek5560@gmail.com">click here</a>
            </div>
          </div>
          <div className="flex gap-x-2.5">
            <button className="bg-customGray rounded-md p-3">
              <img src={github2Icon} alt="Icon of Github" />
            </button>
            <div className="flex flex-col">
              <strong className="inline-block text-base font-medium">
                Github
              </strong>
              <a
                href="http://github.com/coderaao"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>
            </div>
          </div>
          <div className="flex gap-x-2.5">
            <button className="bg-customBlue rounded-md p-3">
              <img src={telegramIcon} alt="Icon of Telegram" />
            </button>
            <div className="flex flex-col">
              <strong className="inline-block text-base font-medium">
                Telegram
              </strong>
              <a
                href="http://t.me/@azizbek_5560"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>
            </div>
          </div>
          <div className="flex gap-x-2.5">
            <button className="bg-customGreen3 rounded-md p-3">
              <img src={phoneIcon} alt="Icon of Phone" />
            </button>
            <div className="flex flex-col">
              <strong className="inline-block text-base font-medium">
                Telefon raqam
              </strong>
              <a href="tel:+998958715560">click here</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
