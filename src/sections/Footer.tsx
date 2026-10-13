import symbol from "../assets/symbol.png";

export default function Footer() {
  return (
    <section id="footer" className="bg-grey-dark pt-10">
      <div className="flex flex-col items-center justify-center">
        <img src={symbol} alt="" className="h-auto w-36" />

        <p className="pt-4 text-xs text-white/50 text-center px-4">
          FAQS | ADVERTISING RATES | TERMS OF USE | PRIVACY POLICY
        </p>

        {/* Line between FAQ links and copyright */}
        <hr className="mt-10 w-full border-grey-light/40" />

        <div className="flex w-full flex-col items-center gap-2 p-6 md:flex-row md:justify-between">
          <p className="text-xs text-white/30">
            © Copyright 2025 The Lexora of Singapore. All rights reserved
          </p>

          <p className="text-xs text-white/30">
            Latest update 26 June 2025
          </p>
        </div>
      </div>
    </section>
  );
}