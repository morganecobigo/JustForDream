import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import Logo from "../../assets/logo.gif";
import "./header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 400) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 400) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  });

  const scrollToTop = () => {
    scroller.scrollTo("header", {
      smooth: true,
      duration: 500,
      offset: -70,
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="just_header" id="header">
      <img src={Logo} alt="just-for-dream" className="logo_Nelly" />
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="neon-link"
          href="#about"
        >
          À propos de moi
        </ScrollLink>
        <Link to="/gallery" className="neon-link">
          Galerie
        </Link>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          className="neon-link"
          href="#services"
        >
          Prestations
        </ScrollLink>
        <ScrollLink
          to="notice"
          smooth={true}
          duration={500}
          className="neon-link"
          href="#notice"
        >
          Avis Clients
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="neon-link"
          href="#contact"
        >
          Contact
        </ScrollLink>
      </nav>
      <li className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </li>
      <div className={`back-to-top ${isVisible ? "visible" : ""}`}>
        <div className="arrow" onClick={scrollToTop}>
          &#8593;
        </div>
      </div>
    </header>
  );
}

export default Header;
