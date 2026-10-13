import { BsArrowRight } from "react-icons/bs";
import { RxDash } from "react-icons/rx";

const supports = [
   {
      type: "Lawyer",
      description: "Feedback on Law Reforms",
   },
   {
      type: "Public",
      description: "Alternative Dispute Resolution Shcemes",
   },
   {
      type: "Lawyer",
      description: "Member's Support Schemes",
   },
   {
      type: "Lawyer",
      description: "Future Lawyering Research Portal",
   }
]

export default function Support() {
   return (
      <section id="Support" className="min-h-screen mt-20 m-6 md:m-12">
         <div>
            {/* Top */}
            <div className="font-heading uppercase flex flex-col gap-4 mr-10 md:flex-row md:justify-between md:mr-0">
               <h2 className="underline text-maroon-light font-medium">Legal Support</h2>
               <h3 className="text-2xl font-normal">Guiding you through every steps</h3>
            </div>

            {/* BOXES */}
            <div className="flex flex-col mt-6 md:mx-24 md:mt-10">
               {supports.map((item) => (
                  <article key={item.description} className="w-full py-2">

                     {/* Support wrapper */}
                     <div className="grid w-full grid-cols-[60px_minmax(0,1fr)] gap-3 md:grid-cols-[60px_minmax(0,1fr)]">
                        {/* TYPE */}
                        <p className="flex w-full items-center justify-center bg-grey-dark px-2 py-3 font-heading text-xs font-normal text-white capitalize">
                           {item.type}
                        </p>
                        
                        {/* DESCRIPTION + ARROW */}
                        <div className="group flex min-w-0 w-full items-center justify-between gap-2 bg-grey-light  px-3 py-2 hover:bg-amber-dark">
                           <div className="hover:text-white">
                              <p className="min-w-0 flex-1 line-clamp-1 font-body text-sm font-medium text-black/60 md:text-xs group-hover:text-white ">
                                 {item.description}
                              </p>
                           </div>
                           
                     
                           {/* ARROW */}
                           <div className="group-hover:text-white hidden shrink-0 items-center gap-0 text-amber-dark md:flex">
                              <RxDash className="h-4 w-3" />
                              <RxDash className="-ml-2 h-6 w-4" />
                              <BsArrowRight className="-ml-1 h-5 w-5" />
                           </div>
                        </div>
                     </div>

                  </article>
               ))}
               </div>

               {/* EXPLORE MORE */}
               <div className="mt-10 mb-0 flex items-center justify-center gap-2 text-amber-dark font-semibold">
                  <a href="" className="uppercase">explore more support</a>

                  <div className="flex shrink-0 items-center gap-0">
                     <RxDash className="h-4 w-3" />
                     <RxDash className="-ml-2 h-6 w-4" />
                     <BsArrowRight className="-ml-1 h-5 w-5" />
                  </div>
               </div>
         </div>

      </section>
  )
}
