import { useState } from "react";

import award1 from "../assets/award1.jpg";
import award2 from "../assets/award2.jpg";
import award3 from "../assets/award3.png";
import award4 from "../assets/award4.png";
import award5 from "../assets/award5.png";
import ojt from "../assets/ojt.png";
import academicEnglish from "../assets/academic_english.png";
import academicWriting from "../assets/Academic_writing.png";
import sdlc from "../assets/Software_development_lifecycle.png";
import webDesign from "../assets/Web_design.png";

export default function AwardsCertificates() {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    { img: award1, title: "Top 5 Award in the Engineering Field" },
    { img: award2, title: "Top 5 Award in the Engineering Field" },
    { img: award3, title: "Honorable student – SP25" },
    { img: award4, title: "Excellent student – FA24" },
    { img: award5, title: "Excellent student – SU24" },
    { img: ojt, title: "On-the-Job Training (OJT) – FPT Software" },
    { img: academicEnglish, title: "English Preparatory Course Level 6" },
    { img: academicWriting, title: "Academic Writing" },
    { img: sdlc, title: "Software Development Lifecycle" },
    { img: webDesign, title: "Web Design Certificate" },
  ];

  return (
    <>
      <section
        id="awards"
        className="py-24 bg-black text-white overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-pink-500 mb-10">
            Awards & Certificates
          </h3>

          <div className="relative group">
            <div className="flex gap-8 w-max animate-slide">
              {[...items, ...items].map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActiveItem(item)}
                  className="
                    w-64 shrink-0 cursor-pointer
                    bg-gray-900/60
                    rounded-2xl p-4
                    backdrop-blur
                    transition-all duration-300
                    hover:scale-105
                    hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]
                  "
                >
                  <div className="overflow-hidden rounded-xl mb-4 bg-black">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-40 object-contain"
                    />
                  </div>

                  <p className="text-center text-sm text-gray-300">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FULLSCREEN PREVIEW (CLICK) ===== */}
      {activeItem && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/80 backdrop-blur-sm
            flex items-center justify-center
            animate-fade-in
          "
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-5xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeItem.img}
              alt={activeItem.title}
              className="
                w-full max-h-[80vh]
                object-contain
                rounded-2xl
                shadow-[0_0_60px_rgba(236,72,153,0.6)]
              "
            />

            <p className="text-center mt-4 text-gray-200 text-lg">
              {activeItem.title}
            </p>

            {/* Close hint */}
            <p className="text-center mt-2 text-sm text-gray-400">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
