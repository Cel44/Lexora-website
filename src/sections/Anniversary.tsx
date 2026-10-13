import MembersImage from "../assets/members_colored.png";
import { RiArrowRightSFill } from "react-icons/ri";

export default function AnniversaryPage() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center">

      {/* BACKGROUND */}
      <div
        style={{ backgroundImage: `url(${MembersImage})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale contrast-50"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text content */}
      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-4 text-white md:gap-8">

        {/* Celebrating, 60TH, and Anniversary wrapper*/}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-6">

            {/* CELEBRATING */}
            <p className="z-10 font-heading text-[clamp(1.25rem,8vw,10rem)] md:text-[clamp(1.25rem,4vw,5rem)]">
               CELEBRATING
            </p>

            {/* 60TH and banner wrapper */}
            <div className="relative isolate flex items-center justify-center py-2">

               {/* Banner / Shape behind 60TH */}
               <div
               className="absolute inset-y-2 left-1/2 -z-10 -translate-x-1/2 -skew-x-30 bg-maroon-light/70
                  h-[min(15vh,6rem)] w-[min(75vw,20rem)]
                  
                  md:inset-y-8
                  md:h-[min(10vh,9rem)] md:w-[70vw]

                  lg:inset-y-6
                  lg:h-[min(15vh,10rem)] lg:w-[min(60vw,50rem)]
                  "
               />

               {/* 60 — CHANGED */}
               <span className="relative z-10 font-heading leading-none text-[clamp(5rem,25vw,15rem)] md:text-[clamp(6rem,10vw,20rem)]">
                  60
               </span>

               {/* TH — CHANGED */}
               <span className="absolute right-0 top-0 z-10
                  -translate-y-1/3 translate-x-full font-heading
                  text-[clamp(1.25rem,3vw,10rem)]">
                  TH
               </span>
            </div>

            {/* ANNIVERSARY — CHANGED */}
            <p className="z-10 font-heading text-[clamp(1.25rem,8vw,10rem)] md:text-[clamp(1.25rem,4vw,5rem)]">
            ANNIVERSARY
            </p>
      
      </div>

      {/* PLAY VIDEO button */}
      <button className="mt-8 flex flex-col items-center gap-2 text-white transition-opacity hover:opacity-70">

         {/* Play symbol — CHANGED */}
         <div className="flex h-[clamp(2.5rem,5vw,3.5rem)] w-[clamp(2.5rem,5vw,3.5rem)] items-center justify-center rounded-full bg-amber-dark text-white">
            <RiArrowRightSFill className="text-[clamp(2rem,4vw,2.5rem)]" />
         </div>

         {/* PLAY VIDEO label — CHANGED */}
         <span className="font-body text-[clamp(0.625rem,1.2vw,0.875rem)] tracking-widest">
            PLAY VIDEO
         </span>
      </button>

      </div>

    </section>
  );
}