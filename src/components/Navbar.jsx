import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import resumePDF from "../assets/resume.pdf"; // Import the PDF file

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const menuItems = ["home", "about", "projects", "skills", "contact"];

  return (
    <>
      <div className="hidden md:flex items-center space-x-1">
        {menuItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item}`}
            className="nav-link"
            onClick={(e) => handleNavClick(e, item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.a>
        ))}
        <motion.a
          href={resumePDF}
          download="Petar_Markota_Resume.pdf"
          className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white
          hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden p-2 hover:bg-surface-light rounded-lg transition-colors duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </motion.svg>
      </motion.button>
    </>
  );
};

export default Navbar;
