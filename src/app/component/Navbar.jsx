"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleColorNav = () => {
      const isScrolled = window.scrollY > 200;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleColorNav);
    return () => {
      window.removeEventListener("scroll", handleColorNav);
    };
  }, []);

  const scrollPage = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true); 
    }

  };
  return (
    <header
      className={`flex row px-10 lg:px-0 py-5 bg-transparent fixed inset-0 z-10 h-20 justify-between lg:justify-around ${
        scroll ? "dark" : ""
      }`}
    >
      <div className="logo flex items-center" onClick={scrollPage}>
        <i className="fa-solid fa-chess-king"></i>
      </div>
      <div className=" nav  flex justify-center text-center items-center gap-10">
        <Link className="action px-5 uppercase lg:flex hidden" href="#Aboutus">
          About us
        </Link>
        <Link className="action  px-5 uppercase lg:flex hidden" href="#services">
          services
        </Link>
        <Link className="action px-5 uppercase lg:flex hidden" href="#team">
          Team
        </Link>
        <Link className="action px-5 uppercase lg:flex hidden" href="#offer">
          Offer
        </Link>
        <button className="lg:hidden z-40" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i> 
        </button>

        {showMenu && (
          <div className={`menuOpen nav flex flex-col justify-center text-center items-center gap-20 bg-black fixed right-0 top-0 bottom-0 px-4 transition duration-100 '}`}>
            <Link className="action px-5 uppercase" href="#Aboutus" onClick={toggleMenu}>
              About us
            </Link>
            <Link className="action  px-5 uppercase" href="#services" onClick={toggleMenu}>
              services
            </Link>
            <Link className="action px-5 uppercase" href="#team" onClick={toggleMenu}>
              Team
            </Link>
            <Link className="action px-5 uppercase" href="#offer" onClick={toggleMenu}>
              Offer
            </Link>
          </div>
        )}

        <button className="lg:flex hidden button_hero font-bold overflow-hidden relative px-8 py-3 bg-transparent border-2">
          <ScrollLink to="form">LEARN MORE</ScrollLink>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
