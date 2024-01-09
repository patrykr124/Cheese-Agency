'use client'
import React from "react";
import "./Achivments.css";
import { Link as ScrollLink } from 'react-scroll';
import Accessibility from '@mui/icons-material/Accessibility';
import Celebration from '@mui/icons-material/Celebration';
import CenterFocusStrong from '@mui/icons-material/CenterFocusStrong';
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";

function Achivments({ title }) {

  const words = title.split(" ");
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

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

  return (
    <section className="paddingSection">
      <div className="container">
        <div className="achivments_text flex justify-center text-center mb-10 flex-col items-center" ref={ref}>

          <h2 className="text-2xl lg:text-3xl mb-5 ">
          {inView && ( <motion.div variants={containerItems} initial="hidden" animate="visible">
            {title}
            </motion.div>)}
            </h2>
          <p className="lg:w-2/4 w-5/6 description">
          {inView && ( <motion.div variants={containerItems2} initial="hidden" animate="visible">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            nostrum, modi et minima facere qui nulla molestiae! Sequi amet
            consectetur, adipisicing elit. Nihil!
            </motion.div>)}
          </p>
        </div>
        <div className="achivments_item flex flex-col lg:flex-row px-20 ">
          <div className="item lg:px-20 py-10 text-center h-3/4">
           <Accessibility className="text-6xl mb-5"></Accessibility>
            <h3 className="px-2 py-2">1200 clients</h3>
            <p className="description">
              Tempore corrupti temporibus fuga earum asperiores fugit
              laudantium.
            </p>
          </div>
          <div className="item lg:px-20 py-10 text-center h-3/4">
           <Celebration className="text-6xl mb-5"></Celebration>
            <h3 className="px-2 py-2">80% fun</h3>
            <p className="description">
              Tempore corrupti temporibus fuga earum asperiores fugit
              laudantium.
            </p>
          </div>
          <div className="item lg:px-20 py-10 text-center h-3/4 ">
           <CenterFocusStrong className="text-6xl mb-5"></CenterFocusStrong>

            <h3 className="px-2 py-2">100% focus</h3>
            <p className="description">
              Tempore corrupti temporibus fuga earum asperiores fugit
              laudantium.
            </p>
          </div>
        </div>
        <div className="button_box flex justify-center">
        <button className="button_hero font-bold overflow-hidden relative px-8 py-3 bg-transparent border-2 mt-10" >
        <ScrollLink  to="form">
          Learn more
        </ScrollLink>
      </button>
        </div>
      </div>
    </section>
  );
}

export default Achivments;
