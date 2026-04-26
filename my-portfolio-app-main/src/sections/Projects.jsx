import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import ProjectData from "../components/ProjectData.jsx";

import { Github, ExternalLink } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 🔥 Heading animation
      const headingText = new SplitType(".projects-heading", { types: "chars" });

      gsap.fromTo(
        headingText.chars,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.02,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".projects-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 🔥 Description animation
      gsap.fromTo(
        ".projects-description",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-description",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 🔥 Button animation
      gsap.fromTo(
        ".projects-btn",
        { scale: 0, opacity: 0, rotation: 180 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".projects-btn",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 🔥 Horizontal scroll (Desktop only)
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer && window.innerWidth > 768) {
        const scrollWidth =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        gsap.to(scrollContainer, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer,
            start: "top 20%",
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      // 🔥 Cards entrance animation
      gsap.fromTo(
        ".project-card",
        { scale: 0.8, opacity: 0, y: 100 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-scroll-wrapper",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 🔥 Tilt + image zoom
      const cards = document.querySelectorAll(".project-card");

      cards.forEach((card) => {
        const img = card.querySelector("img");

        card.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.1,
            rotation: 2,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: "power2.out",
            transformPerspective: 1000,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });

      return () => {
        headingText.revert();
      };
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={projectsRef}>
      <div className="min-h-screen bg-white text-black py-24 lg:py-40 pb-32 lg:pb-48 overflow-hidden">
        {/* Title Wrapper */}
        <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
          <div className="max-w-xl">
            <h3 className="projects-heading mb-3 text-3xl lg:text-5xl font-bold">
              Selected Work
            </h3>
            <p className="projects-description text-lg lg:text-xl text-gray-700">
              A collection of my recent projects showcasing modern web
              development, creative design, and seamless user experiences across
              various technologies.
            </p>
          </div>

          <div className="projects-btn">
            <GradientButton text="Explore All" link="" className="btn-light" />
          </div>
        </div>

        {/* Projects Scroll Wrapper */}
        <div className="projects-scroll-wrapper">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6"
          >
            {ProjectData.map(
              ({ id, name, image, link, github }) => (
                <div
                  key={id}
                  className="project-card relative rounded-2xl 
                  w-full min-w-[270px] lg:min-w-xl 
                  h-64 lg:h-96 block overflow-hidden group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
                    from-black/70 via-black/30 to-transparent 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300"
                  />

                  {/* 🔥 CENTER ICONS */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-6
                    opacity-0 group-hover:opacity-100
                    scale-75 group-hover:scale-100
                    transition-all duration-300 z-10"
                  >
                    {/* GitHub */}
                    <a
                      href={github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/80 text-white p-4 rounded-full
                      hover:scale-110 hover:bg-white hover:text-black transition-all"
                    >
                      <Github size={20} />
                    </a>

                    {/* Live Demo */}
                    <a
                      href={link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/80 text-white p-4 rounded-full
                      hover:scale-110 hover:bg-white hover:text-black transition-all"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  {/* Project Name Badge */}
                  <span
                    className="absolute top-4 right-4 bg-black text-white uppercase 
                    px-5 py-1 rounded-full text-sm lg:text-lg 
                    transform group-hover:scale-110 
                    transition-transform duration-300 z-10"
                  >
                    {name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
