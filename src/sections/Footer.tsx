import symbol from "../assets/symbol.png";

export default function Footer() {
   return (
      <section id="footer" className="py-2 bg-grey-dark">
         <div className="flex flex-col justify-center items-center">
            <img src={symbol} alt="" className="w-36 h-auto"/>

            <p className="pt-4 text-xs text-white/50">
               FAQS | ADVERTISING RATES | TERMS OF USE | PRIVACY POLICY
            </p>

            <hr className="mt-10 mb-6 md:mb-8 border-grey-light" />

            <p className="text-white/30 text-xs">© Copyrigth 2025 The Lexora of Singapore. All rights reserved</p>
            <p className="text-white/30 text-xs">Latest update 26 June 2025</p> 

         </div>
      </section>
   )
}
