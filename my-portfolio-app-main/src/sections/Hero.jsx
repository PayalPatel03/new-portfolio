import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import heroCircle from "../assets/images/circle.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {

      // 🔒 Pin only on large screens (mobile friendly)
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: window.innerWidth > 1024,
        scrub: window.innerWidth > 1024
      });

      // 📝 Text split
      const h1Text = new SplitType(".hero-h1", { types: "words" });
      const h3Text = new SplitType(".hero-h3", { types: "words" });

      // 🎬 H1 animation
      gsap.fromTo(
        h1Text.words,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1,
          ease: "power3.out"
        }
      );

      // 🎬 H3 animation
      gsap.fromTo(
        h3Text.words,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1.3,
          delay: 0.2,
          ease: "power4.out"
        }
      );

      
      gsap.fromTo(
        ".hero-img",
        { x: 80, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          delay: 0.4,
          ease: "power3.out"
        }
      );

      // 🔘 Button animation (safe)
      gsap.fromTo(
        ".hero-btn",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 1.4,
          duration: 0.6,
          ease: "power2.out"
        }
      );

      
      return () => {
        h1Text.revert();
        h3Text.revert();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen pt-[100px] sm:pt-[120px] relative overflow-visible z-10"
    >
      <div className="main-container h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 
       px-6 sm:px-10 lg:px-20">


        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[60%] translate-y-2 text-center lg:text-left">
          <h1 className="hero-h1 uppercase font-heading font-semibold text-lg sm:text-xl lg:text-2xl mb-4">
            Payal Patel
          </h1>

          <h3
            className="
              hero-h3 font-heading font-bold leading-[1.1] tracking-tight
              text-4xl sm:text-5xl md:text-6xl lg:text-[5.8vw]
              mb-6
            "
          >
            FULL Stack <br />

            <span className="text-stroke">Developer</span>
          </h3>

          <div className="flex justify-center lg:justify-start">
            <GradientButton
              text="Let's Talk"
              link="mail to:p6579113@gmail.com"
              className="btn-light border border-white/50 hero-btn"
            />
          </div>
        </div>

       
       {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[40%] relative flex justify-center lg:justify-end overflow-hidden">
          <div className="relative flex justify-center lg:justify-center w-full max-w-md lg:max-w-lg">

            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30 -z-10"
              style={{ background: "var(--color-gradient)" }}
            />

            <img
              src={heroCircle}
              alt="Hero Graphic"
              className="hero-img w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[520px]
                         h-auto animate-spin-slow"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;