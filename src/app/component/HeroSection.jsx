'use client'
import React from "react";
import './heroSection.css'
import { Link as ScrollLink } from 'react-scroll';


function HeroSection() {

  
  return (
    <section id="home"
      className="h-screen w-full relative"
      style={{
        backgroundImage: `url('/image/header1.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed',
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Background Header cloud"

    >
      <div className="box-shadow absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="flex flex-col items-center container z-0 ">
        <h1 className=" text-white mb-10 text-3xl lg:text-4xl xl:text-7xl  text-center font-bold uppercase">
          
            Original Solution
         
        </h1>
        <p className="text-center w-5/6 xl:w-1/2">
          Lorem ipsum dolor sit amet,consectetur adipisicing elit. Qui nam nihil
          sunt, optio iusto delectus eius tempore unde ipsam commodi eius tempore unde ipsam commodi?
        </p>
        <button className="button_hero font-bold overflow-hidden relative px-8 py-3 bg-transparent border-2 mt-10" >
        <ScrollLink  to="form">
          Learn more
        </ScrollLink>
      </button>
      </div>
      
    </section>
  );
}

export default HeroSection;
