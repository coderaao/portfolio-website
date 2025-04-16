import arrowLeftIcon from "../assets/images/icon-of-arrow-left.svg";
import arrowRightIcon from "../assets/images/icon-of-arrow-right.svg";
import reloadIcon from "../assets/images/icon-of-reload.svg";

export function Aside() {
  return (
    <>
      <div className="w-full h-dvh pt-12 flex flex-col gap-y-3.5">
        <div className="flex items-center gap-x-3.5 py-2 px-3.5 border-b border-b-line">
          <button className="p-1 cursor-pointer hover:bg-hover1 transition-colors duration-300">
            <img
              src={arrowLeftIcon}
              alt="Icon of Arrow"
              width={20}
              height={20}
            />
          </button>
          <button className="p-1 cursor-pointer hover:bg-hover1 transition-colors duration-300">
            <img
              src={arrowRightIcon}
              alt="Icon of Arrow"
              width={20}
              height={20}
            />
          </button>
          <button className="p-1 cursor-pointer rounded-full hover:bg-hover1 transition-colors duration-300">
            <img src={reloadIcon} alt="Icon of Arrow" width={20} height={20} />
          </button>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
