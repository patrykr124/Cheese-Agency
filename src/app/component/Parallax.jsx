'use client'
import { Link as ScrollLink } from 'react-scroll';
import React from "react";
import "./Parallax.css";


function Parallax() {
  return (
    <div className="parallax_section w-full">
      <div className="parallax_image flex items-center justify-center"
        style={{
          backgroundImage: `url('image/carouzel5.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          
        }}
        aria-label="Background Header cloud">
      <div className="button_box">
      <button className="button_hero font-bold overflow-hidden relative px-8 py-3 bg-transparent border-2 mt-10" >
        <ScrollLink  to="form">
          Learn more
        </ScrollLink>
      </button>
      </div>
      </div>
      
    </div>
  );
}

export default Parallax;
