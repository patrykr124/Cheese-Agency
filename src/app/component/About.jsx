'use client'
import React from "react";
import './About.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import PanoramaHorizontal from '@mui/icons-material/PanoramaHorizontal';
import DoubleArrow from '@mui/icons-material/DoubleArrow';
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";

function About( {text}) {
  const words = text.split("\n");
 

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: 0.08, delayChildren: 0.08 * i},
    })
  };


  const containerItems = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        type: 'spring',
        damping: 40,
        stiffness: 100,
        delay: 0.2
      },
    }
  };

  const containerItems2 = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        type: 'spring',
        damping: 40,
        stiffness: 100,
        delay: 0.4
      },
    }
  };

  const containerItems3 = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        type: 'spring',
        damping: 40,
        stiffness: 100,
        delay: 0.6
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
    <section id="Aboutus" className="h-full w-full flex justify-center align-middle">
      <div className="container paddingSection">
        <div className="about_text mb-20 text-center flex flex-col items-center" ref={ref}>
          
          <h2 className="uppercase text-center mb-5 lg:text-3xl text-2xl ">
          {inView && ( 
              <motion.div variants={container} initial="hidden" animate="visible">
                {words.map((word, index) => (
                  <motion.span variants={child} key={index}>
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </h2>
          <p className="text-center description w-5/6 xl:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ut iusto eius, praesentium vel voluptates velit sit laborum magnam quam libero excepturi rerum nemo consectetur reprehenderit doloribus, vero placeat totam!
          </p>
        </div>
        <div className="about_item flex flex-col lg:flex-row gap-20 px-10">
        {inView && ( <motion.div variants={containerItems} initial="hidden" animate="visible">
          <div className="items  bg-darkW px-5 py-20 text-center">
            <PhotoCamera className="text-5xl mb-5" ></PhotoCamera>
            <h3 className="px-2 py-2">Graphic Design</h3>
            <p className="description">
              Tempore corrupti temporibus fuga earum asperiores fugit
              laudantium.
            </p>
          </div>
          </motion.div>)}

          {inView && ( <motion.div variants={containerItems2} initial="hidden" animate="visible">
          <div className="items bg-dark px-5 py-20 text-center">
            <PanoramaHorizontal className="text-5xl mb-5"/>

            <h3 className="px-2 py-2">Motion Design</h3>
            <p className="description">
              Tempore corrupti temporibus fuga earum asperiores fugit
              laudantium.
            </p>
          </div>
          </motion.div>)}

          {inView && ( <motion.div variants={containerItems3} initial="hidden" animate="visible">

          <div className="items px-5 py-20 text-center bg-darkW">
            <DoubleArrow className="text-5xl mb-5"></DoubleArrow>

            <h3 className="px-2 py-2">SEO Solution</h3>
            <p className="description">
              Tempore corrupti temporibus fuga earum asperiores fugit
              laudantium.
            </p>
          </div>
          </motion.div>)}
        </div>
      </div>
    </section>
  );
}

export default About;
