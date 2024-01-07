
import React from "react";
import './About.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import PanoramaHorizontal from '@mui/icons-material/PanoramaHorizontal';
import DoubleArrow from '@mui/icons-material/DoubleArrow';

function About() {
  return (
    <section id="Aboutus" className="h-full w-full flex justify-center align-middle">
      <div className="container paddingSection">
        <div className="about_text mb-20 text-center flex flex-col items-center">
          <h2 className="uppercase text-center mb-5 lg:text-3xl text-2xl ">
            We are a new digital product development agency
          </h2>
          <p className="text-center description w-5/6 xl:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ut iusto eius, praesentium vel voluptates velit sit laborum magnam quam libero excepturi rerum nemo consectetur reprehenderit doloribus, vero placeat totam!
          </p>
        </div>
        <div className="about_item flex flex-col lg:flex-row gap-20 px-10">
          <div className="items  bg-darkW px-5 py-20 text-center">
            <PhotoCamera className="text-5xl mb-5" ></PhotoCamera>
            <h3 className="px-2 py-2">Graphic Design</h3>
            <p className="description">
              Tempore corrupti temporibus fuga earum asperiores fugit
              laudantium.
            </p>
          </div>
          <div className="items bg-dark px-5 py-20 text-center">
            <PanoramaHorizontal className="text-5xl mb-5"/>

            <h3 className="px-2 py-2">Motion Design</h3>
            <p className="description">
              Tempore corrupti temporibus fuga earum asperiores fugit
              laudantium.
            </p>
          </div>
          <div className="items px-5 py-20 text-center bg-darkW">
            <DoubleArrow className="text-5xl mb-5"></DoubleArrow>

            <h3 className="px-2 py-2">SEO Solution</h3>
            <p className="description">
              Tempore corrupti temporibus fuga earum asperiores fugit
              laudantium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
