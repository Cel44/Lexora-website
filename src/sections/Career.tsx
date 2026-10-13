import { RxDash } from "react-icons/rx";
import office from "../assets/office.jpg";
import { RiBriefcase4Fill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import handImage from "../assets/hand_image.png";

export default function Career() {
   return (
      <section id="career" className="w-full">
         {/* Overall banner */}
         <div
            style={{ backgroundImage: `url(${office})`, backgroundColor: 'gray',
            backgroundBlendMode: 'luminosity' }}
            className="relative isolate min-h-75 overflow-hidden bg-cover bg-center bg-no-repeat"
         >
            {/* Dark/light overlay over office image */}
            <div className="absolute inset-0 z-0 bg-white/40" />

            {/* RIGHT: Red diagonal shape */}
            <div
               className="absolute inset-y-0 right-0 z-0 w-[48%] bg-maroon-light
               [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]"
            />

         {/* RIGHT: Hand image */}
         <div className="absolute inset-y-0 right-[8%] z-10 hidden items-end md:flex">
            <img
               src={handImage}
               alt=""
               className="h-[340px] w-auto object-contain object-bottom"
            />
         </div>

         {/* LEFT: Suitcase and text */}
         <div className="relative z-20 flex min-h-[300px] items-center">
            <div className="flex items-center gap-6 px-6 py-10 md:gap-8 md:px-12">
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

         {/* MOBILE: Phone image placeholder */}
         <div className="relative z-20 flex justify-center pb-8 md:hidden">
            <div className="flex h-[220px] w-[120px] items-center justify-center rounded-[24px] border-4 border-neutral-700 bg-neutral-100 shadow-lg">
               {/* Replace this placeholder with your phone image later */}
               <span className="px-2 text-center text-sm text-neutral-500">
               Phone image
               </span>
            </div>
         </div>
         </div>
      </section>
   );
}