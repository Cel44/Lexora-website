import { RxDash } from "react-icons/rx";
import office from "../assets/office.jpg";
import { RiBriefcase4Fill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import handImage from "../assets/hand_image.png";
import phoneNews from "../assets/Phone_news.jpg";
import { MdGavel } from "react-icons/md";
import { GiGreekTemple } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";

export default function Career() {
   return (
      <section id="career" className="w-full md:pt-40 bg-grey-light">
         {/* Overall banner */}
         <div className="relative isolate overflow-visible">

         {/* CHANGED: Background has its own fixed height */}
         <div
            style={{
               backgroundImage: `url(${office})`,
               backgroundColor: "gray",
               backgroundBlendMode: "luminosity",
            }}
            className="absolute inset-x-0 sm:top-0 md:bottom-0 z-0 h-50 bg-cover bg-center bg-no-repeat md:h-40"
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
         {/* HAND IMAGE*/}
         
         <div className="relative">
            <div className="pointer-events-none absolute right-[4%] -top-20 z-10 hidden h-60 items-end md:flex md:justify-center">
               <img
                  src={handImage}
                  alt=""
                  className="absolute w-auto max-w-none object-contain object-bottom grayscale
                  h-60
                  md: md:right-30
                  lg:h-65"
               />

               <MdGavel className="absolute h-10 w-10 p-2 bg-white rounded-full border-4 solid border-amber-light text-maroon-light" />
               <GiGreekTemple />
               <CgOrganisation />

            </div>
         </div>

        

         {/* LEFT: Suitcase and text */}
         <div className="relative z-20 flex min-h-75 items-center md:min-h-105">
            <div className="flex w-full items-center gap-6 px-6 py-10 md:w-[52%] md:justify-center md:gap-8 md:px-8 absolute md:top-0">
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