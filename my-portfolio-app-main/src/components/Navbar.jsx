import React, { useRef, useState } from "react";
import Logo from "../assets/images/logo.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar initial animation only
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <>
      {/* Modern Glassmorphism Navbar */}
      <nav 
        ref={navbarRef} 
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gradient-to-b from-black/40 via-black/20 to-transparent border-b border-white/10 shadow-2xl shadow-black/50"
      >
        <div className="main-container py-2 flex justify-between items-center">
          {/* Logo with Glass Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all duration-300"></div>
            <img
              src={Logo}
              alt="Logo"
              className="relative h-[60px] sm:h-[65px] md:h-[70px] lg:h-[75px] w-auto select-none 
              drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              draggable="false"
            />
          </div>

          {/* Hamburger with Glass Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-xl blur-lg"></div>
            <button
              onClick={toggleMenu}
              className="relative flex flex-col gap-2 cursor-pointer group p-3 rounded-xl
              backdrop-blur-sm bg-white/5 border border-white/10
              hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span className="w-8 lg:w-10 h-0.5 bg-white transition-all duration-300 group-hover:w-10 lg:group-hover:w-12"></span>
              <span className="w-8 lg:w-10 h-0.5 bg-white transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></span>
            </button>
          </div>
        </div>

        {/* Animated Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </nav>

      {/* Fullscreen Menu with Enhanced Glass */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ease-in-out overflow-y-auto ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.95) 100%)'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-black/60 pointer-events-none"></div>

        {/* Close Button with Premium Glass */}
        <button
          onClick={toggleMenu}
          className={`fixed top-6 right-6 lg:top-8 lg:right-8 w-12 h-12 
          flex items-center justify-center rounded-2xl 
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 
          border border-white/20 shadow-2xl shadow-white/10
          hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:scale-110
          transition-all duration-300 z-[110] ${
            isMenuOpen
              ? "scale-100 opacity-100 delay-300"
              : "scale-0 opacity-0"
          }`}
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Menu Content Container */}
        <div className="relative z-10 text-center px-4 py-20 w-full max-w-4xl mx-auto">
          {/* Menu Links */}
          <ul className="space-y-1 sm:space-y-2 mb-8">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`transition-all duration-500 ease-out ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 50 + 200}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                  font-bold text-white 
                  transition-all duration-300"
                >
                  {/* Number with Glass */}
                  <span className="hidden md:inline-block absolute -left-8 lg:-left-10 top-1/2 -translate-y-1/2 
                  text-xs font-normal px-2 py-1 rounded-lg
                  backdrop-blur-sm bg-white/5 border border-white/10
                  text-gray-400 opacity-0 group-hover:opacity-100 
                  transition-all duration-300">
                    0{index + 1}
                  </span>

                  {/* Link Text with Premium Glass Effect */}
                  <span className="relative inline-block px-4 py-2 rounded-xl
                  group-hover:backdrop-blur-xl group-hover:bg-gradient-to-r group-hover:from-white/10 group-hover:to-white/5
                  group-hover:border group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-white/10
                  transition-all duration-500">
                    {link.name}
                    
                    {/* Animated Underline */}
                    <span className="absolute bottom-2 left-4 w-0 h-[2px] 
                    bg-gradient-to-r from-white via-gray-300 to-white
                    group-hover:w-[calc(100%-2rem)] transition-all duration-500"></span>
                  </span>

                  {/* Arrow with Glass */}
                  <span className="hidden md:inline-block absolute -right-8 top-1/2 -translate-y-1/2 
                  text-lg w-6 h-6 rounded-lg
                  backdrop-blur-sm bg-white/5 border border-white/10
                  flex items-center justify-center
                  opacity-0 -translate-x-2 
                  group-hover:opacity-100 group-hover:translate-x-0 
                  transition-all duration-300">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links with Premium Glass Pills */}
          <div className={`flex flex-wrap gap-3 justify-center transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 delay-500"
              : "opacity-0 translate-y-4"
          }`}>
            <a
              href="https://github.com/PayalPatel03"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl backdrop-blur-xl 
              bg-gradient-to-r from-white/10 to-white/5 
              border border-white/20 shadow-xl shadow-black/50
              text-gray-300 hover:text-white 
              hover:from-white/20 hover:to-white/10 hover:border-white/30
              hover:scale-105 hover:shadow-2xl hover:shadow-white/10
              text-xs lg:text-sm uppercase tracking-wider font-medium
              transition-all duration-300"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/payal-patel-8931222b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl backdrop-blur-xl 
              bg-gradient-to-r from-white/10 to-white/5 
              border border-white/20 shadow-xl shadow-black/50
              text-gray-300 hover:text-white 
              hover:from-white/20 hover:to-white/10 hover:border-white/30
              hover:scale-105 hover:shadow-2xl hover:shadow-white/10
              text-xs lg:text-sm uppercase tracking-wider font-medium
              transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/_payall__015/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl backdrop-blur-xl 
              bg-gradient-to-r from-white/10 to-white/5 
              border border-white/20 shadow-xl shadow-black/50
              text-gray-300 hover:text-white 
              hover:from-white/20 hover:to-white/10 hover:border-white/30
              hover:scale-105 hover:shadow-2xl hover:shadow-white/10
              text-xs lg:text-sm uppercase tracking-wider font-medium
              transition-all duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;