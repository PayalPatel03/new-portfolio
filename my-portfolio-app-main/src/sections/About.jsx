import React, { useRef } from "react";
import aboutImg from "../assets/images/profile-final.jpg";
import { Download } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        ".about-img",
        { x: -100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-img",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

    
      gsap.fromTo(
        ".about-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Paragraph animation (line stagger)
      const aboutText = new SplitType(".about-text", { types: "lines" });

      aboutText.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.fromTo(
        aboutText.lines,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      //  Button animation
      gsap.fromTo(
        ".resume-btn",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".resume-btn",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        aboutText.revert();
      };
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative z-30 min-h-screen bg-white rounded-tl-[60px] flex items-center"
    >
      <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 lg:py-16">
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={aboutImg}
            alt="About Tisa"
            className="about-img w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px]
                       rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="font-heading text-black">
          <h2 className="about-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About Me
          </h2>

          <div className="overflow-hidden mb-8">
            <p className="about-text text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
             I am a passionate and motivated student with a strong foundation in both
front-end and back-end technologies. I have hands-on experience in building
responsive web applications and dynamic user interfaces through
academic projects.
            </p>
          </div>

          {/* RESUME DOWNLOAD BUTTON */}
          <a
            href="/resume_payal.pdf"
            download
            className="resume-btn inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold
                     border-2 border-black text-black
                     hover:bg-black hover:text-white
                     transition-all duration-300 ease-in-out
                     cursor-pointer rounded-lg group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
