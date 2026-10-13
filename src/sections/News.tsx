
import tornEdge from "../assets/torn-edge.png";
import NewsCarousel from "../components/NewsCarousel";

export default function News() {
   return (
      <section id="news" className="-mt-55 md:-mt-90 relative min-h-screen bg-grey-light">
         
         <img
            src={tornEdge}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 left-0 scale-300 rotate-6 brightness-200 mb-15 md:mb-15 md:scale-200 md:-top-15"
         />
         
         {/* Content */}
         <div className="pt-20 lg:pt-35 flex flex-col items-center justify-center">
            <h2 className="font-heading font-medium text-maroon-light underline uppercase">
               Media & Press
            </h2>

            {/* Cards */}
            <div className="mt-12 w-full px-6">
               <NewsCarousel />
            </div>
         </div>
      </section>
   )
}
