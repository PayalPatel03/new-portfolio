import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const educationData = [
  {
    degree: "Bachelor Degree in Computer Engineering",
    institute: "GIDC Degree Engineering College ,Navsari",
    year: "2023 – Present",
  },
  {
degree: "Full Stack Development",
    institute: "Red and White Skill Educaion",
    year: "2024-2025",
  },
  {
    degree: "12th",
    institute: "GSEB",
    year: "2023",
  },
  {
    degree: "10th",
    institute: "GSEB",
    year: "2021",
  },
];

const Education = () => {
  const eduRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      
      // 🎯 Heading animation with split text
      const headingText = new SplitType(".edu-heading", { types: "chars" });
      
      gsap.fromTo(
        headingText.chars,
        { 
          y: 100,
          opacity: 0,
          rotateX: -90
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".edu-heading",
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📝 Description animation
      gsap.fromTo(
        ".edu-description",
        { 
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".edu-description",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📊 Table Header animation (Desktop)
      gsap.fromTo(
        ".table-header th",
        { 
          y: -30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".table-header",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 🎓 Table rows animation with stagger (Desktop)
      gsap.fromTo(
        ".edu-row",
        { 
          x: -50,
          opacity: 0,
          rotateY: -15
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".edu-table",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📱 Mobile cards animation
      gsap.fromTo(
        ".edu-card",
        { 
          scale: 0.8,
          opacity: 0,
          y: 50
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".edu-cards",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover effect removed

      return () => {
        headingText.revert();
      };
    }, eduRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={eduRef}
      className="min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl w-full">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="edu-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white mb-4 sm:mb-6">
            Education
          </h2>
          <p className="edu-description text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            My educational journey and academic achievements.
          </p>
        </div>

        {/* EDUCATION TABLE - Desktop */}
        <div className="hidden md:block overflow-x-auto edu-table">
          <table className="w-full border-collapse">
            <thead>
              <tr className="table-header border-b-2 border-white/20">
                <th className="text-left text-white font-heading text-xl lg:text-2xl xl:text-3xl pb-6 px-4 lg:px-6">
                  Degree
                </th>
                <th className="text-left text-white font-heading text-xl lg:text-2xl xl:text-3xl pb-6 px-4 lg:px-6">
                  Institute
                </th>
                <th className="text-right text-white font-heading text-xl lg:text-2xl xl:text-3xl pb-6 px-4 lg:px-6">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {educationData.map(({ degree, institute, year }, i) => (
                <tr
                  key={i}
                  className="edu-row border-b border-white/10 hover:bg-white/5 transition-all duration-300"
                >
                  <td className="text-white font-heading text-lg lg:text-xl xl:text-2xl py-8 lg:py-10 px-4 lg:px-6">
                    {degree}
                  </td>
                  <td className="text-gray-400 text-base lg:text-lg xl:text-xl py-8 lg:py-10 px-4 lg:px-6">
                    {institute}
                  </td>
                  <td className="text-gray-400 text-base lg:text-lg xl:text-xl py-8 lg:py-10 px-4 lg:px-6 text-right">
                    {year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EDUCATION CARDS - Mobile */}
        <div className="md:hidden space-y-6 edu-cards">
          {educationData.map(({ degree, institute, year }, i) => (
            <div
              key={i}
              className="edu-card bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-white font-heading text-xl sm:text-2xl mb-3">
                {degree}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg mb-2">
                {institute}
              </p>
              <p className="text-gray-500 text-sm sm:text-base">
                {year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;