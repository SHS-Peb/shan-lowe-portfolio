import { motion } from "framer-motion";
import { useState } from "react";
import profileModeling from "../assets/imgs/modelingProfile.jpg";


const portfolioImages = [
  { id: 1, label: "Editorial Portrait" },
  { id: 2, label: "Studio Shot" },
  { id: 3, label: "Character Look" },
  { id: 4, label: "Campaign Image" },
  { id: 5, label: "Runway / Fashion" },
  { id: 6, label: "Cinematic Headshot" },
  { id: 7, label: "Beauty Close-up" },
  { id: 8, label: "Lifestyle Shot" },
  { id: 9, label: "Performance Still" },
];

export default function Acting() {
  const [activeImage, setActiveImage] = useState(null);
  return (
    <div className="w-full bg-[#6b5b50]">
      <section className="max-w-6xl mx-auto flex flex-col items-center justify-start pt-32 md:pt-20 px-6">
        <div className="w-full space-y-16">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center mb-12"
          >
            {/* Headshot */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white border border-[#eadccf]/40 shadow-[0_10px_40px_rgba(0,0,0,0.18)] flex items-center justify-center relative z-10">
              <img
                src={profileModeling}
                alt="Profile pic"
                className="w-full h-full object-cover object-top cursor-pointer"
                onClick={() => setActiveImage(profileModeling)}
              />
            </div>

            {/* Intro copy */}
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-5xl font-perandory text-[#fff8f2] mb-2 md:text-6xl">
                Shannon Lowe
              </h1>

              <p className="text-xs uppercase tracking-[0.35em] text-[#e4d3bf]">
                Actress • Model
              </p>

              <p className="font-serif text-base leading-8 text-[#f5ede6]/85 md:text-lg max-w-2xl">
                Trained in Meisner under Billy Milionis at Actors Pulse Sydney,
                with runway and modelling training under Country Girl
                Management.
              </p>
            </div>
          </motion.div>

          {/* Gallery intro */}
          <div className="mb-8 mt-16 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#d7c4a3]">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-light text-[#f6efe6] md:text-4xl">
                Selected Work
              </h2>
            </div>

            <p className="hidden max-w-md text-right text-sm leading-7 text-[#f3ede4]/60 md:block">
              A curated collection of portraits, performance imagery, and visual
              work.
            </p>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {portfolioImages.map((image) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#f4f0ea] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="aspect-[4/5] w-full bg-[#ece7df]">
                  <div className="flex h-full w-full items-center justify-center text-sm tracking-[0.08em] text-[#7a7168]">
                    {image.label}
                  </div>
                </div>

                <div className="border-t border-black/5 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#6e645c]">
                    Portfolio Image
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-6"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Enlarged view"
                className="w-full max-h-[85vh] object-contain rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />

              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-4 -right-4 bg-white text-[#6b5b50] rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-105 transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}