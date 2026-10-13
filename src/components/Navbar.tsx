import { Search, X } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import scales from "../assets/scales.png";

type NavbarProps = {
onClose: () => void;
};

export default function Navbar({ onClose }: NavbarProps) {
return (
   <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/20" />

      <nav className="absolute right-0 top-0 h-full w-full md:w-[80vw] overflow-hidden bg-grey-dark text-grey-light lg:p-10 lg:pr-25">

         {/* background image layer behind the menu */}
         <div>
            <img
               src={scales}
               alt="Background Image"
               className="pointer-events-none absolute h-[70vh] right-0 bottom-0 opacity-60"
            />
         </div>

         {/* overall content wrapper for the menu layout */}
         <div className="relative z-10 mx-auto flex h-full flex-col px-6 py-5">
            {/* top row*/}
            <div className="flex justify-between md:justify-end gap-4 font-medium ">
               {/* social media | contact    X */}
               <div className="flex items-center gap-4">
                  <FaFacebookF className="h-3 w-3" />
                  <FaInstagram className="h-3 w-3" />
                  <FaLinkedinIn className="h-3 w-3" />
                  <span className="mx-2 text-lg md:text-xl text-white/80">|</span>
                  <span className="text-xs md:text-lg lg:text-sm uppercase">Contact us</span>
               </div>
               
               {/* button for mobile nav menu, for desktop nav menu, see bottom code */}
               <button type="button" onClick={onClose} aria-label="Close navigation menu" className="block lg:hidden">
                  <X className="h-8 w-8" />
               </button>
            </div>

            {/* search bar row at the top of the overlay */}
            <div className="mt-10 lg:mt-8 flex w-full items-center gap-3 border-b border-white/40 pb-3 text-md text-white/50">
               <Search className="h-4 w-4" />
               <span>Search here</span>
            </div>

            {/* main content area with left nav links and right info links */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3">
               {/* left menu list for the main site sections */}
               <ul className="flex flex-col space-y-3.5 lg:spave-y-4">
                  {[
                     "About us", 
                     "Lawyers", 
                     "Public", 
                     "Admissions",
                     "Media",
                     "CPD",
                     "Member login",
                     "Membership",
                     "Careers",
                     "Advertise",
                  ].map((item, index) => (
                        <a href={`#${item.toLowerCase()}`}
                           onClick = {onClose}
                           key={index}
                           // adjust navigation style here
                           className=" text-2xl lg:text-2xl text-white font-normal hover:text-amber-dark hover:underline transition-colors duration-100 uppercase font-heading"
                        >
                           {item}
                        </a>
                  ))}
               </ul>

               {/* right column for extra section links / detail menu */}
               <div className=" hidden lg:block text-xs/8 font-body font-light text-white/85">
                  <p>What We Do</p>
                  <p>Council 2025</p>
                  <p>Executive Committee 2025</p>
                  <p>Presidents &amp; Honorary Members</p>
                  <p>Award Recipients</p>
                  <p>Secretariat 2025</p>
                  <p>Standing Committees 2025</p>
                  <p>Practice Areas</p>
                  <p>Support Schemes</p>
                  <p>Membership Privileges</p>
               </div>

            </div>
         </div>
      </nav>

      <button type="button" onClick={onClose} aria-label="Close navigation menu" className="hidden lg:block absolute right-5 top-14 text-white">
         <X className="h-8 w-8" />
      </button>
   </div>
);
}
