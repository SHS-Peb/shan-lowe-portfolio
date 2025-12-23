import { motion } from "framer-motion";
import BubbleGrid from "../../components/BubbleGrid";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center relative overflow-hidden">

      {/* Text block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-left mb-10">
        <h1
          className="text-6xl text-ink font-amoresa drop-shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
          ShannonLowe
        </h1>

        <p className="opacity-80 mt-2 custom-font drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)]">
          Sydney, Australia • She/Her</p>
      </motion.div>

      {/* Bubble Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="relative z-10"
      >
        <BubbleGrid />
      </motion.div>

    </section>
  );
}
