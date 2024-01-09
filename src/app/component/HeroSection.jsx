"use client";
import React from "react";
import "./heroSection.css";
import { Link as ScrollLink } from "react-scroll";
import {motion} from 'framer-motion'

function HeroSection({ text }) {
  const words = text.split(" ");
  console.log(words)

  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.05, delayChildren: 0.05 * i},
    })
  };

  const containerP = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        type: 'spring',
        damping: 25,
        stiffness: 100,
        delay: 0.4
      },
    }
  };

  const containerButton = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        type: 'spring',
        damping: 40,
        stiffness: 100,
        delay: 0.9
      },
    }
  };

  const child = {
    visible: {
      opacity:1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity:0,
      y:20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <section
      id="home"
      className="h-screen w-full relative"
      style={{
        backgroundImage: `url('/image/header1.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
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
          <motion.div variants={container} style={{overflow: "hidden", display: 'flex'}} initial="hidden" animate="visible">
          {words.map((word, index) => (
            <motion.span variants={child} key={index}>{word}</motion.span>
          ))}
          </motion.div>
          </h1>
        
          <motion.div className=" flex justify-center" variants={containerP} initial="hidden" animate="visible">
        <h2 className="text-center text-xl lowercase font-light w-5/6 xl:w-1/2">
          Lorem ipsum dolor sit amet,consectetur adipisicing elit. Qui nam nihil
          sunt, optio iusto delectus eius tempore unde ipsam commodi eius
          tempore unde ipsam commodi?
        </h2>
        </motion.div>
        <motion.div variants={containerButton} initial="hidden" animate="visible">
        <button className="button_hero font-bold overflow-hidden relative px-8 py-3 bg-transparent border-2 mt-10">
          <ScrollLink to="form">Learn more</ScrollLink>
        </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
