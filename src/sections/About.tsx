import firmClosureDates from "../assets/firm_closure_dates.jpg";
import proBonoServices from "../assets/pro_bono_services.jpg";
import memberLibrary from "../assets/members_library.jpg";
import specialistDirectory from "../assets/specialists_directory.jpg";
import { RxDash } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import tornEdge from "../assets/torn-edge.png";

const functions = [
   {
      number: "01",
      title: "Firm Closure Dates",
      image: firmClosureDates,
      detail: "Lorem ipsum Lorem ipsum",
   },
   {
      number: "02",
      title: "Pro Bono Services",
      image: proBonoServices,
      detail: "Lorem ipsum Lorem ipsum",
   },
   {
      number: "03",
      title: "Members' Library",
      image: memberLibrary,
      detail: "Lorem ipsum Lorem ipsum",
   },
   {
      number: "04",
      title: "Specialist Directory",
      image: specialistDirectory,
      detail: "Lorem ipsum Lorem ipsum",
   },
];

export default function AboutPage() {
   return (
      <section className="min-h-screen -mt-5 md:-mt-10">

         {/* TORN PAPER EDGE */}
         <img
         src={tornEdge}
         alt=""
         aria-hidden="true"
         className="pointer-events-none z-30 scale-300 md:scale-200 rotate-6 brightness-200 mb-5 md:mb-0"
         />

         {/* About Text */}

         <div className="px-10 pb-16 md:px-32 md:py-24">

         {/* quotation mark, heading */}
            <div className="relative flex items-center gap-4">
               <span className="font-heading text-5xl md:text-6xl">
                  “
               </span>

               <h1 className="font-heading font-400 text-lg text-maroon-light leading-tight md:text-2xl underline absolute top-0 left-10">
                     What We Do
               </h1>
            </div>

         {/* Subtitle */}

         <div className=" ml-10 mr-4">
            <h2 className="mb-5 font-heading text-lg md:text-5xl font-normal md:font-medium uppercase">
               We carry our various statutory functions
            </h2>

            {/* Description + Read More */}
            <div className="relative max-w-4xl">
               <p className="line-clamp-5 text-sm font-normal leading-6 md:line-clamp-3 md:text-lg md:leading-7">
                  The mission of the Lexora is to serve its members and the public by
                  sustaining an independent bar which upholds the rule of law and ensures
                  access to justice. As part of its mission in ensuring access to justice
                  for the needy, the Lexora has established Pro Bono SG to provide legal
                  assistance to members in need.
               </p>

               {/* Read More — CHANGED */}
               <span className="absolute bottom-0 right-0 cursor-pointer bg-white pl-1 text-sm font-semibold text-amber-dark transition-colors hover:text-grey-dark md:text-lg">
                  Read more
               </span>
            </div>
         </div>
         
         </div>

         {/* ===================== ABOUT GRID ===================== */}

         <div className="mt-4 md:mt-0 grid grid-cols-2 md:grid-cols-4">

         {functions.map((item) => (
            <article key={item.number} className="group grid grid-cols-1">

               {/* IMAGE CELL */}
               <div className="relative aspect-square overflow-hidden border border-solid border-grey-dark/40">

                  <img
                     src={item.image}
                     alt={item.title}
                     className="absolute h-full w-full object-cover grayscale saturation-90 contrast-60"
                  />

                  {/* GREY OVERLAY */}
                  <div className="absolute inset-0 bg-gray-200/50 transition-colors duration-300 group-hover:bg-black/50" />

                  {/* gradient overlay */}
                  <div
                     className="block md:hidden absolute inset-0"
                     style={{
                        background: `
                           linear-gradient(
                              340deg,
                              rgba(170, 20, 35, 0.3) 5%,
                              rgba(139, 26, 26, 0.02) 30%,
                              transparent 70%
                           )
                        `,
                     }}
                     />

                  {/* Number and title over the image */}
                  <div className="absolute z-10 flex flex-col hover:text-white p-4 md:p-8 lg:p-12">
                     <p className="text-4xl md:text-xl lg:text-lg">
                        {item.number}
                     </p>

                     <h3 className="mt-2 lg:mt-10 mr-15 font-heading text-lg md:text-sm lg:text-2xl">
                        {item.title}
                     </h3>

                     <p className="hidden group-hover:block line-clamp-2 text-sm md:text-xs lg:text-base mt-2 md:mb-4">
                        {item.detail}
                     </p>
                  </div>
               </div>

               {/* ARROW CELL */}
               <div className="p-4 flex items-center gap-2 border border-grey-light transition-colors duration-300 group-hover:bg-amber-dark">
                  <span className="hidden group-hover:block font-body font-semibold md:text-xs text-white">
                     More Detail
                  </span>
                  
                  <div className="text-xl text-amber-dark transition-colors duration-300 group-hover:text-white md:text-xl lg:text-3xl flex items-center"
                     aria-hidden="true">
                  <RxDash className="h-4 w-3" />
                  <RxDash className="h-6 w-4  -ml-2" />
                  <BsArrowRight className="h-5 w-5 -ml-1" />
                  </div>
                  
               </div>

            </article>
         ))}

         </div>

      </section>
   );
}