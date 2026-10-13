import { RxDash } from "react-icons/rx";
import office from "../assets/office.jpg";
import { RiBriefcase4Fill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import handImage from "../assets/hand_image.png";
import { MdGavel } from "react-icons/md";
import { GiGreekTemple } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";

export default function Career() {
  return (
    <section
      id="career"
      className="w-full bg-grey-light pt-20 md:pt-5 lg:pt-25"
    >
      {/* OVERALL BANNER */}
      <div className="relative isolate overflow-hidden md:overflow-visible">

        {/* DESKTOP LAYOUT  */}
        <div className="relative hidden md:block md:min-h-105">

          {/* Background image */}
          <div
            style={{
              backgroundImage: `url(${office})`,
              backgroundColor: "gray",
              backgroundBlendMode: "luminosity",
            }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          >
            <div className="absolute inset-0 bg-white/40" />

            {/* Red diagonal shape */}
            <div
              className="absolute inset-y-0 right-0 w-[48%] bg-[#AE2249]/90"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
              }}
            />
          </div>

          {/* Desktop hand and symbols */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[48%]">
            <img
              src={handImage}
              alt=""
              className="absolute bottom-0 right-15 h-60 w-auto max-w-none object-contain object-bottom grayscale lg:right-30 lg:h-65"
            />

            <MdGavel
              className="absolute bottom-15 right-60 h-10 w-10 rounded-full border-4 border-amber-light bg-white p-2 text-maroon-light lg:right-80"
            />

            <GiGreekTemple
              className="absolute bottom-35 right-10 h-10 w-10 rounded-full border-4 border-amber-light bg-white p-2 text-maroon-light lg:right-30"
            />

            <CgOrganisation
              className="absolute bottom-55 right-50 h-10 w-10 rounded-full border-4 border-amber-light bg-white p-2 text-maroon-light lg:right-70"
            />
          </div>

          {/* Desktop text */}
          <div className="relative z-20 flex min-h-[420px] w-[52%] items-center justify-center gap-8 px-8">
            <RiBriefcase4Fill className="shrink-0 text-3xl text-amber-dark" />

            <div>
              <h2 className="font-heading text-xl font-normal">
                Support for your career growth
              </h2>

              <p className="mt-1 text-black/80">
                A guidance on career and work related issues
              </p>

              {/* Find Career link */}
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

        {/* MOBILE LAYOUT */}
        <div className="md:hidden">

          {/* Mobile text area */}
          <div
            style={{
              backgroundImage: `url(${office})`,
              backgroundColor: "gray",
              backgroundBlendMode: "luminosity",
            }}
            className="relative flex min-h-[190px] items-center bg-cover bg-center bg-no-repeat p-6"
          >
            {/* Light overlay */}
            <div className="absolute inset-0 bg-white/60" />

            {/* Text and suitcase */}
            <div className="relative z-10 flex items-start gap-4">
              <RiBriefcase4Fill className="mt-1 shrink-0 text-3xl text-amber-dark" />

              <div>
                <h2 className="font-heading text-xl font-normal">
                  Support for your career growth
                </h2>

                <p className="mt-2 text-black/80">
                  A guidance on career and work related issues
                </p>

                {/* Find Career link */}
                <div className="group mt-3 flex items-center gap-2">
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

          {/* Mobile red shape + hand + symbols */}
          <div className="relative flex h-[300px] w-full items-end justify-center overflow-hidden bg-[#AE2249]/90">

            {/* Diagonal top edge on red background */}
            <div
              className="absolute inset-0 bg-[#AE2249]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />

            {/* Mobile hand image */}
            <img
              src={handImage}
              alt=""
              className="relative z-10 h-[270px] w-auto max-w-none object-contain object-bottom grayscale"
            />

            {/* Mobile decorative symbols */}
            <MdGavel
              className="absolute bottom-12 left-[12%] z-20 h-10 w-10 rounded-full border-4 border-amber-light bg-white p-2 text-maroon-light"
            />

            <GiGreekTemple
              className="absolute bottom-28 right-[12%] z-20 h-10 w-10 rounded-full border-4 border-amber-light bg-white p-2 text-maroon-light"
            />

            <CgOrganisation
              className="absolute bottom-48 left-[38%] z-20 h-10 w-10 rounded-full border-4 border-amber-light bg-white p-2 text-maroon-light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}