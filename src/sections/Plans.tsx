import roadTo2027 from "../assets/Road_to_2027.png";
import { LuDot } from "react-icons/lu";
import tornEdge from "../assets/torn-edge.png";

export default function Plans() {
   return(
      <section id="plans" className="min-h-screen relative -mt-5 md:-mt-10 lg:-mt-13 m-6 md:m-12">

      {/* TORN PAPER EDGE */}
         <img
         src={tornEdge}
         alt=""
         aria-hidden="true"
         className="pointer-events-none absolute top-0 left-0 scale-300 md:scale-200 rotate-6 brightness-200 mb-5 md:mb-0"
         />

         <div>
            {/* Road and Celebrating wrapper */}
            <div className="">
               <h2 className="font-heading uppercase text-base font-medium text-maroon-light underline">
                  Road to 2027
               </h2>

               <h2 className="pr-5 pt-3 font-heading text-xl uppercase md:w-40vw md:text-4xl lg:text-5xl">
                  Celebrating a legacy, <span className="block mt-0 md:mt-4"> journeying to the future</span>
               </h2>
            </div>

            <hr className="mt-10 mb-6 md:mb-8 border-grey-dark/80" />

            <div className="grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-2">
               {/* YEARS */}
               <div className="order-1 font-heading text-amber-light flex justify-end gap-1 w-full text-[10vw] md:text-5xl font-medium">
                  <p className="hover:text-amber-dark">2025</p>
                  <LuDot />
                  <p className="hover:text-amber-dark">2026</p>
                  <LuDot />
                  <p className="hover:text-amber-dark">2027</p>
               </div>

               {/* PICTURE */}
               <img
                  src={roadTo2027}
                  alt="Description"
                  className="mb-4 order-2 w-full object-cover md:col-start-1 md:row-start-1 md:row-span-2"
               />

               {/* HEADING AND SUBTITLE */}
               <div className="order-3 flex flex-col gap-4 md:col-start-2 md:row-start-2 md:self-end">
                  {/* HEADING */}
                  <h3 className="text-base font-bold md:col-start-2">
                     A new beginning - Laying the groundwork for our future
                  </h3>

                  {/* SUBTITLE */}
                  <p className="md:mb-3 font-body font-medium text-black/60 text-[12px] md:text-s leading-5 md:leading-6">
                     As we embark on our journey towards LawSoc's 60th anniversary, 2025 marks the beginning of our refreshed digital presence. This year, we're reimagining how we connect with members -- through new digital tools, enhanced services, and stories from the legal community.
                  </p>
               </div>

            </div>
         </div>
      </section>
   )
}
