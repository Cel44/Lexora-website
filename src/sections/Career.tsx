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
      <section id="career" className="w-full pt-20 md:pt-5 lg:pt-25 bg-grey-light">

         {/* Overall wrapper -- Desktop layout */}
         <div className="hidden md:block relative isolate overflow-visible">

            {/* Background has its own fixed height */}
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

               {/* RED DIAGONAL SHAPE */}
               <div
                  className="absolute inset-y-0 right-0 hidden w-[48%] bg-[#AE2249]/90 md:block"
                  style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
                  }}
               />
               
            </div>

            {/* HAND IMAGE*/}
            <div className="relative">
               <div className="pointer-events-none absolute right-[4%] -top-20 z-10 h-60 items-end md:flex md:justify-center">
                  <img
                     src={handImage}
                     alt=""
                     className="absolute w-auto max-w-none object-contain object-bottom grayscale
                     h-60
                     md:right-15
                     lg:h-65 lg:right-30"
                  />

                  <MdGavel className="absolute h-10 w-10 p-2 bg-white rounded-full border-4 solid border-amber-light text-maroon-light
                     md:right-60 md:bottom-15
                     lg:right-80 lg:bottom-15" />
                  <GiGreekTemple className="absolute h-10 w-10 p-2 bg-white rounded-full border-4 solid border-amber-light text-maroon-light
                     md:right-10 md:bottom-35
                     lg:right-30 lg:bottom-35"/>
                  <CgOrganisation className="absolute h-10 w-10 p-2 bg-white rounded-full border-4 solid border-amber-light text-maroon-light
                     md:right-50 md:bottom-55
                     lg:right-70 lg:bottom-55"/>

               </div>
            </div>

            {/* LEFT: Suitcase and text */}
            <div className="relative z-20 flex items-center md:min-h-105">
               <div className="flex w-full items-center m-2 p-6 gap-6 md:w-[52%] md:justify-center md:gap-8 md:px-8 absolute md:top-0">
                  <RiBriefcase4Fill className="shrink-0 text-3xl text-amber-dark" />

                  <div className="">
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

         </div>

         {/* MOBILE LAYOUT */}
         <div
            style={{
               backgroundImage: `url(${office})`,
               backgroundColor: "gray",
               backgroundBlendMode: "luminosity",
            }}
            className="relative block min-h-[80vh] w-full bg-cover bg-center bg-no-repeat md:hidden"
         >

         {/* White overlay over background image */}
         <div className="absolute inset-0 bg-white/40" />

         {/* Text */}
         <div className="relative z-20 flex items-center">
            <div className="m-2 flex w-full flex-col gap-4 px-16 py-10">
               <RiBriefcase4Fill className="shrink-0 text-3xl text-amber-dark" />

               <div>
                  <h2 className="font-heading text-xl font-normal">
                     Support for your career growth
                  </h2>

                  <p className="font-medium text-black/80">
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

         {/* HAND + RED OVERLAY AREA */}
         <div className="relative mt-4 flex w-full items-end justify-center">
            
            {/* Red overlay at the bottom */}
            <div className="absolute bottom-0 left-0 h-45 w-full bg-[#AE2249]/90"/>

            {/* HAND and ICONS */}
            {/* HAND ANCHOR */}
            <div className="relative z-10 h-80 w-fit">

               {/* Hand image */}
               <img
                  src={handImage}
                  alt="an image of a hand holding a phone"
                  className="block h-full w-auto max-w-none object-contain object-bottom grayscale"
               />

               {/* Gavel */}
               <MdGavel
                  className="absolute bottom-[50%] left-[-20%] h-10 w-10 rounded-full border-4 border-amber-light bg-white p-2 text-maroon-light"
               />

               {/* Temple */}
               <GiGreekTemple
                  className="absolute bottom-[75%] right-[15%] h-10 w-10 rounded-full border-4 border-amber-light bg-white p-2 text-maroon-light"
               />

               {/* Organisation */}
               <CgOrganisation
                  className="absolute bottom-[85%] left-[-5%] h-10 w-10 rounded-full border-4 border-amber-light bg-white p-2 text-maroon-light"
               />

            </div>
         </div>
         </div>
         {/* END: MOBILE LAYOUT */}
      </section>
   );
}