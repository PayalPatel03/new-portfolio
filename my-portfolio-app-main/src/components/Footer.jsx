import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { Github, Linkedin, Instagram, Mail, Facebook } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      
      // 📏 Top divider animation
      gsap.fromTo(
        ".footer-divider-top",
        { 
          scaleX: 0,
          opacity: 0
        },
        {
          scaleX: 1,
          opacity: 0.1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-divider-top",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 🖼️ Logo animation
      gsap.fromTo(
        ".footer-logo",
        { 
          scale: 0,
          opacity: 0,
          rotation: -180
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".footer-logo",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📋 Footer columns stagger animation
      gsap.fromTo(
        ".footer-column",
        { 
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-columns",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📝 Column headings animation
      gsap.fromTo(
        ".footer-heading",
        { 
          x: -30,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-columns",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 🔗 Footer links stagger
      gsap.fromTo(
        ".footer-link",
        { 
          x: -20,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-columns",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📏 Bottom divider animation
      gsap.fromTo(
        ".footer-divider-bottom",
        { 
          scaleX: 0,
          opacity: 0
        },
        {
          scaleX: 1,
          opacity: 0.1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-divider-bottom",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // ©️ Copyright text animation
      gsap.fromTo(
        ".footer-copyright",
        { 
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-copyright",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📱 Social icons animation
      gsap.fromTo(
        ".footer-social-icon",
        { 
          scale: 0,
          opacity: 0,
          rotation: 360
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".footer-social-icons",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // ✨ Interactive hover for social icons
      const socialIcons = document.querySelectorAll('.footer-social-icon');
      socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.15,
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

      // 🎯 Interactive hover for footer links
      const footerLinks = document.querySelectorAll('.footer-link a');
      footerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            x: 5,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            x: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={footerRef}>
      {/* Divider */}
      <div className="footer-divider-top max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      <footer className="footer-columns main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        
        {/* LOGO */}
        <div className="footer-column">
          <img
            src={Logo}
            alt="Logo"
            className="footer-logo h-[80px] sm:h-[90px] md:h-[95px] lg:h-[100px] w-auto object-contain mb-6"
          />
        </div>

        {/* NAVIGATION */}
        <div className="footer-column">
          <h5 className="footer-heading font-medium mb-5">Navigation</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg text-gray-400">
            <li className="footer-link">
              <a className="hover:text-[var(--grad-start)] transition" href="#home">
                Home
              </a>
            </li>
            <li className="footer-link">
              <a className="hover:text-[var(--grad-start)] transition" href="#about">
                About
              </a>
            </li>
            <li className="footer-link">
              <a className="hover:text-[var(--grad-start)] transition" href="#skills">
                Skills
              </a>
            </li>
            <li className="footer-link">
              <a className="hover:text-[var(--grad-start)] transition" href="#education">
                Education
              </a>
            </li>
            <li className="footer-link">
              <a className="hover:text-[var(--grad-start)] transition" href="#projects">
                Projects
              </a>
            </li>
            <li className="footer-link">
              <a className="hover:text-[var(--grad-start)] transition" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* TECH STACK */}
        <div className="footer-column">
          <h5 className="footer-heading font-medium mb-5">Tech Stack</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg text-gray-400">
            <li className="footer-link">React.js</li>
            <li className="footer-link">Node.js & Express</li>
            <li className="footer-link">MongoDB</li>
            <li className="footer-link">GSAP Animations</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h5 className="footer-heading font-medium mb-5">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg text-gray-400">
            <li className="footer-link">
              <a
                className="hover:text-[var(--grad-start)] transition"
                href="mailto:tisa1204@gmail.com"
              >
                p6579113@gmail.com
              </a>
            </li>
            <li className="footer-link mt-2 text-sm">
              Available for freelance work
            </li>
          </ul>
        </div>

      </footer>

      {/* Divider */}
      <div className="footer-divider-bottom max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      {/* Bottom Bar */}
      <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:py-8 text-center md:text-left">
        
        <div className="footer-copyright text-base lg:text-lg text-gray-400">
          © 2026 Payal Patel | FULL Stack Developer. All Rights Reserved.
        </div>

        {/* SOCIAL ICONS */}
         
       

      </div>
    </div>
  );
};


export default Footer;
