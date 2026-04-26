import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      
      // 🎯 Heading animation with word split
      const headingText = new SplitType(".contact-heading", { types: "words" });
      
      gsap.fromTo(
        headingText.words,
        { 
          y: 100,
          opacity: 0,
          rotateX: -90
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".contact-heading",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📝 Description animation
      gsap.fromTo(
        ".contact-description",
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
            trigger: ".contact-description",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📋 Form animation - slide from left
      gsap.fromTo(
        ".contact-form",
        { 
          x: -100,
          opacity: 0,
          rotateY: -15
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📝 Form inputs stagger animation
      gsap.fromTo(
        ".form-input",
        { 
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 🔘 Form button animation
      gsap.fromTo(
        ".form-button",
        { 
          scale: 0,
          opacity: 0,
          rotation: 180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          delay: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 💬 Info card animation - slide from right
      gsap.fromTo(
        ".contact-info",
        { 
          x: 100,
          opacity: 0,
          rotateY: 15
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📇 Info cards stagger
      gsap.fromTo(
        ".info-card",
        { 
          y: 30,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📱 Social icons animation
      gsap.fromTo(
        ".social-icon",
        { 
          scale: 0,
          opacity: 0,
          rotation: 360
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".social-icons",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // ✨ Interactive hover for social icons
      const socialIcons = document.querySelectorAll('.social-icon');
      socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.5,
            ease: "back.out(1.7)"
          });
        });
        
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      });

      return () => {
        headingText.revert();
      };
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={contactRef}
      className="min-h-screen bg-black flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="contact-heading text-white text-4xl md:text-5xl font-heading mb-4">
            Let's Work Together
          </h1>
          <p className="contact-description text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* FORM */}
          <div className="contact-form bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="space-y-6">
              
              <div className="form-input">
                <label className="text-gray-300 text-sm mb-1 block">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-[var(--grad-start)] transition"
                />
              </div>

              <div className="form-input">
                <label className="text-gray-300 text-sm mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-[var(--grad-end)] transition"
                />
              </div>

              <div className="form-input">
                <label className="text-gray-300 text-sm mb-1 block">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none resize-none focus:border-transparent focus:ring-2 focus:ring-[var(--grad-start)] transition"
                />
              </div>

              <div className="pt-4 form-button">
                <GradientButton
                  text="Send Message"
                  link="#"
                  className="w-full hover:scale-105 transition-transform border border-white/50"
                />
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-between">
            
            <div className="contact-info bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6 mb-6">
              <h2 className="text-white text-2xl font-heading">
                Let's Connect
              </h2>

              <p className="text-gray-400">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              {/* Cards */}
              <div className="space-y-4">
                <div className="info-card flex items-center gap-4 bg-black/40 border border-white/10 rounded-lg p-4">
                  <Mail className="w-6 h-6 text-[var(--grad-start)]" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">p6579113@gmail.com</p>
                  </div>
                </div>

                <div className="info-card flex items-center gap-4 bg-black/40 border border-white/10 rounded-lg p-4">
                  <MapPin className="w-6 h-6 text-[var(--grad-end)]" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Navsari, Gujarat</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-center lg:text-left mb-4">
              Connect with me
            </p>
            
            {/* SOCIALS */}
            <div className="social-icons flex gap-4 justify-center lg:justify-start">
              {[ 
                { Icon: Github, link: "https://github.com/PayalPatel03" },
                { Icon: Linkedin, link: "https://www.linkedin.com/in/payal-patel-8931222b7/" },
                { Icon: Twitter, link: "https://twitter.com" },
                { Icon: Instagram, link: "https://www.instagram.com/_payall__015/?hl=en" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  className="social-icon w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300
                  hover:text-[var(--grad-start)]
                  hover:border-[var(--grad-start)]
                  hover:shadow-[0_0_15px_var(--grad-start)]
                  transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;