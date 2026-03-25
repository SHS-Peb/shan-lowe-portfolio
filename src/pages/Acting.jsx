import { motion } from "framer-motion";
import { useState } from "react";
import profileModeling from "../assets/imgs/modelingProfile.jpg";

import beach1 from "../assets/imgs/modelling/beach_1.png";
import beach2 from "../assets/imgs/modelling/beach_2.png";
import beach3 from "../assets/imgs/modelling/beach_3.png";
import beach4 from "../assets/imgs/modelling/beach_4.png";

import chou1 from "../assets/imgs/modelling/ChouChou_1.png";
import chou2 from "../assets/imgs/modelling/ChouChou_2.png";
import chou3 from "../assets/imgs/modelling/ChouCou_3.png";

import port1 from "../assets/imgs/modelling/port_1.jpg";
import port2 from "../assets/imgs/modelling/port_2.jpg";
import port3 from "../assets/imgs/modelling/port_3.jpg";
import port4 from "../assets/imgs/modelling/port_4.jpg";
import port5 from "../assets/imgs/modelling/port_5.jpg";
import port6 from "../assets/imgs/modelling/port_6.jpg";
import port7 from "../assets/imgs/modelling/port_7.jpg";
import port8 from "../assets/imgs/modelling/port_8.jpg";
import port9 from "../assets/imgs/modelling/port_9.jpg";
import port10 from "../assets/imgs/modelling/port_10.jpg";
import port11 from "../assets/imgs/modelling/port_11.jpg";

import soul1 from "../assets/imgs/modelling/soul_1.jpg";
import soul2 from "../assets/imgs/modelling/soul_2.jpg";
import soul3 from "../assets/imgs/modelling/soul_3.jpg";
import soul4 from "../assets/imgs/modelling/soul_4.jpg";

const portfolioImages = [

  { id: 8, src: port1 },
  { id: 9, src: port2 },
  { id: 10, src: port3 },
  { id: 11, src: port4 },
  { id: 12, src: port5 },
  { id: 13, src: port6 },
  { id: 14, src: port7 },
  { id: 15, src: port8 },
  { id: 16, src: port9 },
  { id: 17, src: port10 },
  { id: 18, src: port11 },

  { id: 19, src: soul1 },
  { id: 20, src: soul2 },
  { id: 21, src: soul3 },
  { id: 22, src: soul4 },

  { id: 1, src: beach1 },
  { id: 2, src: beach2 },
  { id: 3, src: beach3 },
  { id: 4, src: beach4 },

  { id: 5, src: chou1 },
  { id: 6, src: chou2 },
  { id: 7, src: chou3 },
];

export default function Acting() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="w-full bg-[#6b5b50]">
      <section className="max-w-6xl mx-auto flex flex-col items-center justify-start pt-32 md:pt-20 px-6">
        <div className="w-full space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center mb-12"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white border border-[#eadccf]/40 shadow-[0_10px_40px_rgba(0,0,0,0.18)] flex items-center justify-center relative z-10">
              <img
                src={port5}
                alt="Profile pic"
                className="w-full h-full object-cover object-[center_30%] cursor-pointer"
                onClick={() => setActiveImage(profileModeling)}
              />
            </div>

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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {portfolioImages.map((image) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#f4f0ea] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="aspect-[4/5] w-full bg-[#ece7df]">
                  <img
                    src={image.src}
                    alt={`Portfolio ${image.id}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setActiveImage(image.src)}
                  />
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