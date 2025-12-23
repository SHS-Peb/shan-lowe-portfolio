// src/pages/Contact.jsx
import { motion } from "framer-motion";
import contactProfile from "../assets/imgs/contactProfile.jpg";


export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent("Portfolio Enquiry");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);

    window.location.href = `mailto:shannon.au.lowe@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  };

  // shared styles
  const glassCard =
    "bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)]";
  const roundedCard = "rounded-[30px]";
  const titleText = "text-xl font-semibold text-[#1f3b28]";
  const bodyText = "text-sm text-[#1f3b28] font-times-new-roman opacity-80";

  return (
    <div className="min-h-screen w-full bg-[#a9d9b5]">
      <section className="max-w-6xl mx-auto flex flex-col items-center justify-start pt-32 md:pt-20 px-6">
        <div className="w-full space-y-16">

          {/* HERO) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center"
          >
            {/* Photo placeholder circle */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#cfead8] border-2 border-[#4a6d52] shadow-[0_10px_40px_rgba(0,0,0,0.18)] flex items-center justify-center">
              <img
                src={contactProfile}
                alt="Profile pic"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + title */}
            <div className="space-y-2 text-center">
              <h1 className="text-5xl font-amoresa text-[#1f3b28] mb-2">
                Shannon Lowe
              </h1>
              <p className="font-perandory text-[#1f3b28] opacity-80">
                Global Conversationalist
              </p>
              <p className="font-perandory text-[#304c35] opacity-80 text-sm">
                Sydney, Australia • She/Her
              </p>
            </div>
          </motion.div>

          {/* MAIN GRID */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* LEFT COLUMN – SOCIALS */}
            <div className="flex flex-col gap-4">

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/shannon-a-lowe/"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`${glassCard} ${roundedCard} px-6 py-4 flex items-center justify-between`}
              >
                <div>
                  <h2 className={titleText}>LinkedIn</h2>
                  <p className={bodyText}>For a peek into my work life</p>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/SHS-Peb"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`${glassCard} ${roundedCard} px-6 py-4 flex items-center justify-between`}
              >
                <div>
                  <h2 className={titleText}>GitHub</h2>
                  <p className={bodyText}>Find all my coding here</p>
                </div>
              </motion.a>

              {/* TikTok */}
              <motion.a
                href="https://www.tiktok.com/@techtalkinpink"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`${glassCard} ${roundedCard} px-6 py-4 flex items-center justify-between`}
              >
                <div>
                  <h2 className={titleText}>TikTok</h2>
                  <p className={bodyText}>Video Creations</p>
                </div>
              </motion.a>
            </div>

            {/* RIGHT COLUMN – EMAIL FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`${glassCard} ${roundedCard} px-8 py-8 text-[#1f3b28]`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-amoresa text-[#1f3b28]">
                    Email
                  </h2>
                  <p className={`${bodyText} !opacity-80`}>Let’s chat</p>
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center text-lg text-[#1f3b28]">
                  ✉
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 font-times-new-roman"
              >
                <div>
                  <label className="text-xs uppercase tracking-wide text-[#1f3b28]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl bg-white/25 backdrop-blur-md border border-white/30 text-[#1f3b28] px-3 py-2 text-sm shadow-inner outline-none focus:ring-2 focus:ring-white/70"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wide text-[#1f3b28]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-1 w-full rounded-2xl bg-white/25 backdrop-blur-md border border-white/30 text-[#1f3b28] px-3 py-2 text-sm shadow-inner outline-none focus:ring-2 focus:ring-white/70"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 self-center bg-white/25 backdrop-blur-md border border-white/30 text-[#1f3b28] px-10 py-2 rounded-full text-sm font-semibold shadow hover:bg-white/30 transition-colors"
                >
                  Send
                </button>
              </form>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
