import React, { useRef } from "react";
import {
  Code2,
  FileCode2,
  Braces,
  Layers,
  Database,
  Server,
  Github,
  Palette,
  Boxes
} from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  { name: "HTML5", Icon: FileCode2 },
  { name: "CSS3", Icon: Palette },
  { name: "JavaScript", Icon: Braces },
  { name: "Bootstrap", Icon: Layers },
  { name: "jQuery", Icon: Code2 },
  { name: "Node.js", Icon: Server },
  { name: "MongoDB", Icon: Database },
  { name: "React.js", Icon: Boxes },
  { name: "GitHub", Icon: Github },

];

const Skills = () => {
  const skillsRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      
      // 🎯 Heading animation with word split
      const headingText = new SplitType(".skills-heading", { types: "words" });
      
      gsap.fromTo(
        headingText.words,
        { 
          y: 80,
          opacity: 0,
          scale: 0.5,
          rotation: -10
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".skills-heading",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📝 Description animation
      gsap.fromTo(
        ".skills-description",
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
            trigger: ".skills-description",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 🎨 Skill cards animation with stagger
      gsap.fromTo(
        ".skill-card",
        { 
          scale: 0,
          opacity: 0,
          rotation: 180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          stagger: {
            amount: 0.8,
            from: "start",
            ease: "power2.out"
          },
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // ✨ Icon animation on scroll
      gsap.fromTo(
        ".skill-icon",
        { 
          scale: 0,
          rotation: -180
        },
        {
          scale: 1,
          rotation: 0,
          stagger: {
            amount: 0.8,
            from: "start"
          },
          duration: 0.7,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      return () => {
        headingText.revert();
      };
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={skillsRef}
      className="min-h-screen bg-black flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="skills-heading text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            What I Do
          </h2>
          <p className="skills-description text-gray-400 max-w-2xl mx-auto">
            I specialize in building modern, responsive, and scalable web
            applications using the latest frontend and backend technologies.
            My focus is on clean UI, performance, and maintainable code.
          </p>
        </div>

        {/* GRID */}
        <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map(({ name, Icon }, index) => (
            <div
              key={index}
              className="skill-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
              flex flex-col items-center justify-center text-center
              hover:border-[var(--color-gradient)]
              hover:shadow-[0_0_25px_var(--color-gradient)]
              transition-all duration-300"
            >
              <Icon className="skill-icon w-10 h-10 text-[var(--color-gradient)] mb-3" />
              <span className="text-white text-sm md:text-base font-medium tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;