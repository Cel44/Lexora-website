import statue from "../assets/statue.png";
import symbol from "../assets/symbol.png";
import marinabay from "../assets/marina_bay_colored.jpg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import { RxDash } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";

type HeroProps = {
  onOpenNav: () => void;
};

export default function Hero({ onOpenNav }: HeroProps) {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="relative z-0 min-h-screen">
      <div className="relative flex min-h-screen flex-row-reverse">

        {/* NAVIGATION BAR */}
        <div className="z-20 flex min-h-screen flex-col items-center justify-between bg-grey-dark p-6">
          <button
            type="button"
            onClick={onOpenNav}
            aria-label="Open navigation menu"
            className="p-2"
          >
            <HiOutlineMenuAlt1 className="h-7 w-7 text-white" />
          </button>

          <button
            type="button"
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
            className="flex flex-col items-center justify-center gap-1.5"
          >
            <p className="text-[10px] uppercase text-white/80">Scroll</p>
            <p className="-mt-3 text-[10px] uppercase text-white/80">Down</p>
            <FaCaretDown className="h-5 w-5 rounded-full bg-[#72685C] p-1 text-white" />
          </button>
        </div>

        {/* HERO CONTENT WRAPPER */}
        <div className="relative min-h-screen min-w-0 flex-1 overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div
            style={{
               backgroundImage: `url(${marinabay})`,
               backgroundPosition: "42% 10%", // "x axis, y axis"
               backgroundSize: "380% 120%", // "width, height"
            }}
            className="absolute inset-0 bg-no-repeat grayscale blur-[1px] brightness-150"
            />

          {/* DARK OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-white/30" />

          {/* CONTENT ABOVE BACKGROUND */}
          <div className="relative z-10 min-h-screen">
               
               {/* Symbol and contacts */}
               <div className="p-8 pb-0">
                  <img
                     src={symbol}   
                     alt="Lexora Symbol"
                     className="h-auto w-36"
                  />
               </div>

               {/* MAIN CONTENT */}
               <div className="flex flex-col md:min-h-[calc(100vh-10rem)] md:flex-row">

                  {/* STATUE IMAGE */}
                  <div className="relative order-2 min-h-[50vh]
                  md:order-1 md:min-h-0 md:w-[55%]
                  lg:order-1 lg:min-h-0 lg:w-[55%]">
                     {/* DECORATIVE RIBBON */}
                     <svg
                        viewBox="0 0 250 500"
                        className="pointer-events-none absolute
                        left-[-13vw] z-0 h-[40vh] w-auto
                        md:bottom-[14vh] md:left-5 md:h-[65vh] md:-translate-x-18
                        lg:bottom-[-4vh] lg:left-0 lg:h-[80vh] lg:-translate-x-8 lg:-ml-6"
                        fill="none"
                        aria-hidden="true"
                     >
                        {/* TOP PATH — CHANGED */}
                        <path
                        d="M -10 40 L 285 235"
                        stroke="#81213C"
                        strokeWidth={100}
                        strokeLinecap="square"
                        opacity={0.9}
                        className="md:[stroke-80px]"
                        />

                        {/* BOTTOM PATH — CHANGED */}
                        <path
                        d="M 255 210 L 35 470"
                        stroke="#AE2249"
                        strokeWidth={100}
                        strokeLinecap="square"
                        opacity={0.9}
                        className="md:[stroke-80px]"
                        />
                     </svg>

                     {/* STATUE */}
                     <img
                        src={statue}
                        alt="Statue"
                        className="absolute bottom-0 -left-3 z-20 h-[60vh] w-auto max-w-full object-contain object-bottom
                        md:left-0 md:h-[85vh] md:max-w-none
                        lg:-bottom-20 lg:left-10 lg:h-screen lg:max-w-none"/>
                  </div>

                  {/* HEADING, DESCRIPTION, LINK */}
                  <div className="order-1 flex flex-col items-start gap-8 p-8 pr-4
                  md:order-2 md:w-[40%] md:justify-center md:pl-8 md:pr-10">

                     <h1 className="font-heading text-3xl font-semibold leading-normal md:text-4xl lg:text-4xl">
                        BECOME AN
                        <span className="block pl-3">
                        <span className="text-maroon-light">AFFILIATE</span> OF THE
                        </span>
                        LEXORA
                     </h1>

                     <p className="max-w-xl line-clamp-3 text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                     </p>

                     {/* FIND LAWYER */}
                     <div className="mb-4 md:mb-0 flex items-center gap-2">
                        <a
                           href="#"
                           className="font-semibold uppercase text-amber-dark hover:underline"
                        >
                           Find Lawyer
                        </a>

                        <div
                        className="flex items-center gap-0 font-black text-amber-dark"
                        aria-hidden="true"
                        >
                           <RxDash className="h-4 w-3" />
                           <RxDash className="-ml-2 h-6 w-4" />
                           <BsArrowRight className="-ml-1 h-5 w-5" />
                        </div>
                     </div>
                  </div>
               </div>

            </div>
        </div>
      </div>
    </section>
  );
}