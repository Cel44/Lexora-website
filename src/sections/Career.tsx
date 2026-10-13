import { RxDash } from "react-icons/rx";
import office from "../assets/office.jpg";
import { RiBriefcase4Fill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import handImage from "../assets/hand_image.png";
import phoneNews from "../assets/Phone_news.jpg";

export default function Career() {
  return (
    <section id="career" className="w-full bg-grey-light">
      {/* Overall banner */}
      <div className="relative isolate overflow-visible">

        {/* CHANGED: Background has its own fixed height */}
        <div
          style={{
            backgroundImage: `url(${office})`,
            backgroundColor: "gray",
            backgroundBlendMode: "luminosity",
          }}
          className="absolute inset-x-0 bottom-0 z-0 h-50 bg-cover bg-center bg-no-repeat md:h-40"
        >
          {/* Overlay over office image */}
          <div className="absolute inset-0 bg-white/40" />

          {/* RED DIAGONAL SHAPE: matches background height */}
          <div
            className="absolute inset-y-0 right-0 hidden w-[48%] bg-[#AE2249]/90 md:block"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
            }}
          />
        </div>

        {/* CHANGED: Hand floats independently over the red shape */}
        <div className="pointer-events-none absolute right-[4%] bottom-0 z-10 hidden h-105 items-end md:flex">
          <img
            src={handImage}
            alt=""
            className="h-80 w-auto max-w-none object-contain object-bottom lg:h-96"
          />
        </div>

        {/* LEFT: Suitcase and text */}
        {/* CHANGED: This reserves space for the background */}
        <div className="relative z-20 flex min-h-[300px] items-center md:min-h-[420px]">
          <div className="flex w-full items-center gap-6 px-6 py-10 md:w-[52%] md:justify-center md:gap-8 md:px-8">
            <RiBriefcase4Fill className="shrink-0 text-3xl text-amber-dark" />

            <div>
              <h2 className="font-heading text-xl font-normal">
                Support for your career growth
              </h2>

              <p className="mt-1 text-black/80">
                A guidance on career and work related issues
              </p>

              {/* FIND CAREER */}
              <div className="group mt-2 flex items-center gap-2">
                <a
                  href="#"
                  className="font-semibold uppercase text-amber-dark group-hover:text-black/90"
                >
                  Find Career
                </a>

                <div
                  className="flex items-center gap-0 font-black text-amber-dark group-hover:text-black/90"
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

        {/* MOBILE: Phone sits below the banner background */}
        <div className="relative z-20 flex justify-center pb-8 md:hidden">
          <div className="flex h-55 w-30 items-center justify-center rounded-3xl border-4 border-neutral-700 bg-neutral-100 shadow-lg">
            <img
              src={phoneNews}
              alt="News displayed on a phone"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}