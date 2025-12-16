import warriorOne from "../assets/imgs/warriorOne.jfif";
import warriorTwo from "../assets/imgs/warriorTwo.jfif";
import warriorThree from "../assets/imgs/warriorThree.jfif";

export default function Advocacy() {
  return (
    <section className="w-full bg-[#FFD6F3] text-[#1F1F1F] py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Top row – Circle + Text */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          
          {/* Circle Image Placeholder */}
          <div className="w-82 h-82 rounded-full overflow-hidden bg-[#FFC7F0] border-2 border-[#FFBEEB] shadow-md flex items-center justify-center">
            <img
                    src={warriorThree}
                    alt="Warrior Woman speaker image"
                    className="w-full h-full object-cover"
                  />
          </div>

          {/* Name + Role */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Shannon Lowe</h1>
            <p className="font-medium">Advocate & Mentor</p>
            <p className="text-sm text-[#7A4B75]">Sydney, Australia • She/Her</p>
          </div>
        </div>

        {/* Second Row – Large left card + two right cards */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Large Block */}
          <div className="flex-1">
            <div className="bg-[#FFBEEB] rounded-[32px] p-10 shadow-md h-full">
              <h2 className="text-xl font-semibold mb-3">Advocacy Overview</h2>
              <p className="text-sm text-[#5C3558] leading-relaxed font-times-new-roman">
                When I was a child, I often daydreamed about the kind of adult I wished existed someone grounded, safe, understanding, and protective. Over the years, through challenges, growth, and a lot of introspection, I realised I had become that adult for myself.
                That realisation shaped my purpose: to share the perspective I’ve gained from my own path and to help others feel seen and supported. I don’t believe people need to be “saved.” They need a space where they can be fully themselves, surrounded by understanding, compassion, and community no matter their age or stage of life.
                My advocacy is built on creating that space and helping others build it for themselves.
              </p>
            </div>
          </div>

          {/* Right Column of Two Cards */}
          <div className="flex-1 flex flex-col gap-6">

            <div className="bg-[#FFBEEB] rounded-[32px] p-8 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Current Focus</h3>
              <p className="text-sm text-[#5C3558] leading-relaxed font-times-new-roman">
                I recently graduated from the Warrior Woman Foundation program, where I was honoured to be invited back as a Kindred Warrior to support next year’s mentees. I also continue my involvement with Wesley Aunts & Uncles, maintaining my connection through a new bond after the graduation of my previous one.
                Beyond these programs, I’m always exploring new avenues to give back — whether through mentoring, community work, storytelling, or connection-based initiatives. Uplifting others is woven into both my personal life and professional mission.
              </p>
            </div>

            <div className="bg-[#FFBEEB] rounded-[32px] p-8 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Panels & Speaking</h3>
              <p className="text-sm text-[#5C3558] leading-relaxed font-times-new-roman">
                I am available for panels, workshops, and speaking engagements.
                My talks draw from my lived experience and centre around:
                Personal growth & navigating life’s complexities, Goal setting & self-belief, Tech pathways & supporting women in STEM,
                Advocacy, safety, and community, Motivational or “power speaker” sessions
                If you have questions or would like to inquire about booking, please feel free to contact me  I’d love to collaborate.
              </p>
            </div>

          </div>
        </div>

        {/* Warrior Woman section */}
        <div className="space-y-8">
          <div className="inline-flex px-6 py-2 rounded-full bg-[#FFBEEB] shadow-sm">
            <span className="text-sm font-semibold">Warrior Woman</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Big Left Block */}
            <div className="flex-1">
              <div className="bg-[#FFBEEB] rounded-[32px] p-10 shadow-md h-full">
                <h3 className="text-lg font-semibold mb-3">
                  Warrior Woman Foundation
                </h3>
                <p className="text-sm text-[#5C3558] leading-relaxed font-times-new-roman">
                  Over six months, I completed the Young Warrior Woman Program, 
                  an initiative designed to support young women through one-on-one mentoring, 
                  peer community, and personal development. During my time as a mentee, I built confidence, 
                  strengthened my voice, and found a supportive network of women who walked beside me as I worked toward my goals.
                  A highlight of the program was being invited to speak at my graduation, standing alongside Jacinta Tynan and sharing the growth I experienced throughout the journey. 
                  Later that year, I was also invited to speak at the Empower Her event, 
                  where I reflected publicly on how the program shaped my confidence and helped me move toward my dreams.
                  I am honoured to continue my involvement with the Foundation as a Kindred Warrior, supporting the next cohort of mentees and giving back to a community that has given so much to me.
                </p>
              </div>
            </div>

            {/* Image bubble grid */}
            <div className="w-full lg:w-60 flex flex-col gap-4">

              <div className="flex gap-4">
                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorOne}
                    alt="Warrior Woman celebration event group photo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorThree}
                    alt="Shannon speaking on stage at the Warrior Woman event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-4">

                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-28 shadow-inner overflow-hidden">
                  <img
                    src={warriorTwo}
                    alt="Warrior Woman flyer with medal"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] h-28 shadow-inner flex items-center justify-center text-[11px] text-[#7A4B75]">
                  More soon
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Wesley Aunts & Uncles section */}
        <div className="space-y-8">
          <div className="inline-flex px-6 py-2 rounded-full bg-[#FFBEEB] shadow-sm">
            <span className="text-sm font-semibold">Wesley Aunts & Uncles</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Big Left Block */}
            <div className="flex-1">
              <div className="bg-[#FFBEEB] rounded-[32px] p-10 shadow-md h-full">
                <h3 className="text-lg font-semibold mb-3">
                  Wesley Aunts & Uncles
                </h3>
                <p className="text-sm text-[#5C3558] leading-relaxed font-times-new-roman">
                  I volunteer as an Aunt with the Wesley Aunts & Uncles Program, a community initiative that pairs children with supportive adult mentors who can offer stability, encouragement, and positive experiences outside their immediate environment.

I spend quality time with the child I’m matched with, offering consistency, emotional support, and opportunities to explore new activities. Whether we’re engaging in creative projects, spending time outdoors, or simply talking through their week, my focus is on building trust and helping them feel seen, valued, and supported.

The program plays a vital role in strengthening resilience and wellbeing for children who may benefit from having an additional caring adult in their lives. Being part of this work has deepened my understanding of community responsibility and the impact that small, consistent moments of connection can have on a young person’s confidence and sense of belonging.

My involvement with Wesley Aunts & Uncles has been one of the most grounding and meaningful parts of my advocacy journey, and I am grateful for the opportunity to contribute to a child’s growth in a positive and supportive way.
                </p>
              </div>
            </div>

            {/* Image bubble grid */}
            <div className="w-full lg:w-60 flex flex-col gap-4">

              <div className="flex gap-4">
                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorOne} /*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorThree}/*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-4">

                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-28 shadow-inner overflow-hidden">
                  <img
                    src={warriorTwo}/*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] h-28 shadow-inner flex items-center justify-center text-[11px] text-[#7A4B75]">
                  More soon
                </div>
              </div>

            </div>
          
          </div>
        </div>

        {/* She Codes */}
        <div className="space-y-8">
          <div className="inline-flex px-6 py-2 rounded-full bg-[#FFBEEB] shadow-sm">
            <span className="text-sm font-semibold">She Codes</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Big Left Block */}
            <div className="flex-1">
              <div className="bg-[#FFBEEB] rounded-[32px] p-10 shadow-md h-full">
                <h3 className="text-lg font-semibold mb-3">
                  She Codes
                </h3>
                <p className="text-sm text-[#5C3558] leading-relaxed font-times-new-roman">
                  I was selected to participate in the She Codes Plus Sydney program, a six-month intensive designed to help women build strong foundations in software development and gain real-world project experience. Being accepted into this program marked a major milestone in my journey into tech, after spending a year independently strengthening my coding skills and developing confidence in my abilities.

Throughout the program, I deepened my knowledge across the full stack, built practical projects, and worked alongside a cohort of talented women all striving to grow in the industry. The hands-on learning environment, combined with mentorship and industry exposure, helped me refine my technical foundations and expand my understanding of what a career in tech can look like.

I’m grateful to Kate Kirwin, the founder of She Codes Australia, for creating a pathway that truly empowers women entering the tech workforce. The program was made possible through the support of Commonwealth Bank, Telstra, and Canva, whose partnership opens doors for women who may not otherwise have access to this level of training.

Being part of She Codes Plus was not only a learning experience — it was a transformative step that strengthened my skills, broadened my network, and affirmed my commitment to pursuing a long-term future in technology.
                </p>
              </div>
            </div>

            {/* Image bubble grid */}
            <div className="w-full lg:w-60 flex flex-col gap-4">

              <div className="flex gap-4">
                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorOne} /*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorThree}/*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-4">

                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-28 shadow-inner overflow-hidden">
                  <img
                    src={warriorTwo}/*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] h-28 shadow-inner flex items-center justify-center text-[11px] text-[#7A4B75]">
                  More soon
                </div>
              </div>

            </div>
          
          </div>
        </div>

        {/* Code Like a Girl section */}
        <div className="space-y-8">
          <div className="inline-flex px-6 py-2 rounded-full bg-[#FFBEEB] shadow-sm">
            <span className="text-sm font-semibold">Code Like a Girl</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Big Left Block */}
            <div className="flex-1">
              <div className="bg-[#FFBEEB] rounded-[32px] p-10 shadow-md h-full">
                <h3 className="text-lg font-semibold mb-3">
                  Code Like a Girl
                </h3>
                <p className="text-sm text-[#5C3558] leading-relaxed font-times-new-roman">
                  I have been actively involved with Code Like a Girl, participating in a range of their community events and completing their Career Mentoring Program in 2025. 
                  Through these experiences, I connected with women across the tech industry, gained valuable career guidance, and strengthened my confidence
                </p>
              </div>
            </div>

            {/* Image bubble grid */}
            <div className="w-full lg:w-60 flex flex-col gap-4">

              <div className="flex gap-4">
                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorOne} /*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorThree}/*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-4">

                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-28 shadow-inner overflow-hidden">
                  <img
                    src={warriorTwo}/*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] h-28 shadow-inner flex items-center justify-center text-[11px] text-[#7A4B75]">
                  More soon
                </div>
              </div>

            </div>
          
          </div>
        </div>

      {/* Her Tech Circle */}
        <div className="space-y-8">
          <div className="inline-flex px-6 py-2 rounded-full bg-[#FFBEEB] shadow-sm">
            <span className="text-sm font-semibold">Her Tech Circle</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Big Left Block */}
            <div className="flex-1">
              <div className="bg-[#FFBEEB] rounded-[32px] p-10 shadow-md h-full">
                <h3 className="text-lg font-semibold mb-3">
                  Her Tech Circle
                </h3>
                <p className="text-sm text-[#5C3558] leading-relaxed font-times-new-roman">
                  I volunteer my time with HerTechCircle, a community-driven initiative that supports women entering and growing within the technology industry. Through this organisation, I contribute to creating safe, empowering spaces where women can access guidance, share experiences, and build the confidence needed to thrive in tech.

My involvement includes providing mentorship, offering career support, and engaging with women who are navigating the early stages of their tech journey. Whether I’m helping someone prepare for their first interview, clarifying technical concepts, or simply being a supportive presence, my focus is always on making the tech industry feel more accessible and less intimidating.
                </p>
              </div>
            </div>

            {/* Image bubble grid */}
            <div className="w-full lg:w-60 flex flex-col gap-4">

              <div className="flex gap-4">
                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorOne} /*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-32 shadow-inner overflow-hidden">
                  <img
                    src={warriorThree}/*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-4">

                <div className="flex-1 bg-[#FFC7F0] rounded-[24px] overflow-hidden h-28 shadow-inner overflow-hidden">
                  <img
                    src={warriorTwo}/*change src*/
                    alt="image description"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 bg-[#FFC7F0] rounded-[24px] h-28 shadow-inner flex items-center justify-center text-[11px] text-[#7A4B75]">
                  More soon
                </div>
              </div>

            </div>
          
          </div>
        </div>

      </div>
    </section>
  );
}