import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RxDash } from "react-icons/rx";

type NewsArticle = {
id: string;
webTitle: string;
webUrl: string;
webPublicationDate: string;
pillarName: string;
fields?: {
   thumbnail?: string;
   trailText?: string;
   standfirst?: string;
};
};

type GuardianResponse = {
response: {
   results: NewsArticle[];
};
};

export default function NewsCarousel() {
   const [articles, setArticles] = useState<NewsArticle[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
   const carouselRef = useRef<HTMLDivElement>(null);

   // Mouse Drag Scroll
   const isDragging = useRef(false);
   const startX = useRef(0);
   const scrollStart = useRef(0);

   // Fetch news when this component first appears.
   useEffect(() => {
      async function fetchNews() {
         try {
         setLoading(true);
         setError("");

         const apiKey = import.meta.env.VITE_GUARDIAN_API_KEY;

         if (!apiKey) {
            throw new Error("Guardian API key is missing.");
         }

         const params = new URLSearchParams({
            "api-key": apiKey,
            "page-size": "9",
            "order-by": "newest",
            "show-fields": "thumbnail,trailText,standfirst",
         });

         const response = await fetch(
            `https://content.guardianapis.com/search?${params}`
         );

         if (!response.ok) {
            throw new Error("Could not fetch news articles.");
         }

         const data: GuardianResponse = await response.json();
         console.log("Guardian API response:", data);

            // DEBUG: See only the article results
            console.log("Fetched articles:", data.response.results);

         // Keep articles that have a title and a valid article link.
         const validArticles = data.response.results.filter(
            (article) => article.webTitle && article.webUrl
         );

         if (validArticles.length === 0) {
            throw new Error("No news articles were found.");
         }

         setArticles(validArticles);
         } catch (err) {
         setError(
            err instanceof Error
               ? err.message
               : "Something went wrong while loading news."
         );
         } finally {
         setLoading(false);
         }
      }

      fetchNews();
   }, []);

   // Scroll one card at a time when an arrow is clicked.
   function scrollCarousel(direction: "left" | "right") {
      const carousel = carouselRef.current;

      if (!carousel) return;

      const firstCard = carousel.querySelector<HTMLElement>("[data-news-card]");

      if (!firstCard) return;

      const gap = Number.parseFloat(
         getComputedStyle(carousel).columnGap || "0"
      );

      const distance = firstCard.offsetWidth + gap;

      carousel.scrollBy({
         left: direction === "right" ? distance : -distance,
         behavior: "smooth",
      });
   }

   // Mouse Drag Scroll
   function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
      if (!carouselRef.current) return;
    
      isDragging.current = true;
      startX.current = e.clientX;
      scrollStart.current = carouselRef.current.scrollLeft;
      e.preventDefault();
    }
    
    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      if (!isDragging.current || !carouselRef.current) return;
    
      e.preventDefault();
      const distance = e.clientX - startX.current;
      carouselRef.current.scrollLeft = scrollStart.current - distance;
    }
    
    function handleMouseUp() {
      isDragging.current = false;
    }

   // Loading state
   if (loading) {
      return (
         <section className="px-6 py-12 text-center" aria-live="polite">
         <p>Loading latest news...</p>
         </section>
      );
   }

   // Error state
   if (error) {
      return (
         <section className="px-6 py-12 text-center" role="alert">
         <p>We couldn't load the latest news right now.</p>
         <p className="mt-2 text-sm text-gray-500">{error}</p>
         </section>
      );
   }

   return (
      <section className="">

         {/* Carousel with arrows on both sides (Left Arrow - Carousel - Right Arrow)*/}
         <div className="flex items-center gap-3 md:gap-5">

         {/* LEFT ARROW */}
         <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label="Scroll to previous articles"
            className="shrink-0 border border-grey-dark p-2
               transition hover:bg-grey-dark hover:text-white md:p-3"
         >
            ←
         </button>

         {/* HORIZONTAL CAROUSEL */}
         <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex min-w-0 flex-1 snap-x snap-mandatory
               gap-5 overflow-x-auto scroll-smooth pb-4
               cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
         >
            {articles.map((article) => {
               const excerpt =
               article.fields?.trailText ||
               article.fields?.standfirst ||
               "Read the article to learn more.";

               const formattedDate = new Date(
               article.webPublicationDate
               ).toLocaleDateString("en-GB", {
               month: "short",
               year: "numeric",
               timeZone: "UTC",
               });

               return (
               <article
                  key={article.id}
                  data-news-card
                  className="min-w-0 flex-[0_0_90%] snap-start
                     flex flex-col
                     md:flex-[0_0_calc((100%-2.5rem)/2)]
                     lg:flex-[0_0_calc((100%-2.5rem)/3)]"
               >
                  {/* Thumbnail */}
                  <div className="aspect-video overflow-hidden bg-amber-light">
                     {article.fields?.thumbnail ? (
                     <img
                        src={article.fields.thumbnail}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                     />
                     ) : (
                     <div className="flex h-full items-center justify-center text-grey-dark">
                        Lexora News
                     </div>
                     )}
                  </div>

                  {/* Article content */}
                  <div className="flex flex-1 flex-col pt-6">
                     <h3 className="mb-3 line-clamp-2 font-heading text-xl uppercase">
                     {article.webTitle}
                     </h3>

                     <p className="mb-3 text-sm font-bold capitalize text-black">
                     {article.pillarName} | {formattedDate}
                     </p>

                     <p className="mb-5 line-clamp-3 text-sm leading-relaxed">
                     {excerpt.replace(/<[^>]*>/g, "")}
                     </p>

                     {/* Link stays at the bottom */}
                     <div className="group mt-auto flex items-center gap-2">
                     <a
                        href={article.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-semibold uppercase text-amber-dark group-hover:opacity-70"
                     >
                        More Detail
                     </a>

                     <div className="flex shrink-0 items-center gap-0 text-amber-dark group-hover:opacity-70">
                        <RxDash className="h-4 w-3" />
                        <RxDash className="-ml-2 h-6 w-4" />
                        <BsArrowRight className="-ml-1 h-5 w-5" />
                     </div>
                     </div>
                  </div>
               </article>
               );
            })}
         </div>

         {/* RIGHT ARROW */}
         <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label="Scroll to next articles"
            className="shrink-0 border border-grey-dark p-2
               transition hover:bg-grey-dark hover:text-white md:p-3 md:pb-0"
         >
            →
         </button>

         </div>
      </section>
   );
}