// src/pages/Contact.jsx
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent("Portfolio Enquiry");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);

    window.location.href = `mailto:YOUR_EMAIL_HERE?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <div className="min-h-screen w-full bg-[#a9d9b5] flex flex-col items-center pt-24 px-4">
      <div className="w-full max-w-5xl">

        {/* TOP ROW: PHOTO + TEXT */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
          {/* Photo placeholder circle */}
          <div className="w-56 h-56 rounded-full border-[3px] border-[#4a6d52] bg-[#cfead8] shadow-md">
            {/* swap for image:
            <img
              src="/your-photo.jpg"
              alt="Shannon Lowe"
              className="w-full h-full rounded-full object-cover border-[3px] border-[#4a6d52] shadow-md"
            />
            */}
          </div>

          {/* Name + title */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold text-[#1f3b28]">
              Shannon Lowe
            </h1>
            <p className="text-[#1f3b28] text-lg mt-1">
              Global Conversationalist
            </p>
            <p className="text-[#304c35] text-sm mt-1">
              Sydney, Australia &bull; She/Her
            </p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT COLUMN – SOCIALS */}
          <div className="flex flex-col gap-4">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noreferrer"
              className="bg-[#4f9f72] text-white rounded-[30px] px-6 py-4 flex items-center justify-between shadow-md border border-white/70"
            >
              <div>
                <h2 className="text-xl font-semibold">LinkedIn</h2>
                <p className="text-sm text-white/85">
                  for a peek into my work life
                </p>
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold">
                in
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SHS-Peb"
              target="_blank"
              rel="noreferrer"
              className="bg-[#4f9f72] text-white rounded-[30px] px-6 py-4 flex items-center justify-between shadow-md border border-white/70"
            >
              <div>
                <h2 className="text-xl font-semibold">GitHub</h2>
                <p className="text-sm text-white/85">
                  find all my coding here
                </p>
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-lg font-bold">
                {"{"}{"}"}
              </div>
            </a>

            {/* TikTok */}
            <div className="bg-[#4f9f72] text-white rounded-[30px] px-6 py-5 shadow-md border border-white/70">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold">TikTok</h2>
                  <p className="text-sm text-white/85">
                    videos of me in the wild
                  </p>
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                  TT
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.tiktok.com/@YOUR-TECH-ACCOUNT"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-[#4f9f72] rounded-full px-6 py-2 text-sm font-semibold shadow-sm"
                >
                  Tech
                </a>
                <a
                  href="https://www.tiktok.com/@YOUR-WRITING-ACCOUNT"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-[#4f9f72] rounded-full px-6 py-2 text-sm font-semibold shadow-sm"
                >
                  Writing
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – EMAIL FORM */}
          <div className="bg-[#4f9f72] text-white rounded-[30px] px-8 py-8 shadow-md border border-white/70">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold">Email</h2>
                <p className="text-sm text-white/85">lets chat</p>
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-lg">
                ✉
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs uppercase tracking-wide text-white/85">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl bg-[#a9d9b5] text-[#1f3b28] px-3 py-2 text-sm shadow-inner outline-none focus:ring-2 focus:ring-white/70"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wide text-white/85">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-2xl bg-[#a9d9b5] text-[#1f3b28] px-3 py-2 text-sm shadow-inner outline-none focus:ring-2 focus:ring-white/70"
                />
              </div>

              <button
                type="submit"
                className="mt-4 self-center bg-[#a9d9b5] text-[#1f3b28] px-10 py-2 rounded-full text-sm font-semibold shadow hover:bg-[#bde3c4] transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
