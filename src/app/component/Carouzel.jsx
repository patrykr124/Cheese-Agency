"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carouzel.css";
import Image from "next/image";

function Carouzel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      key: "desktop",
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      key: "tablet",
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      key: "mobile",
    },
  };

  return (
    <div className="carousel_section flex items-center justify-center paddingSection">
      <div className="container">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          autoPlay={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="person_box  bg-dark flex lg:flex-row flex-col p-5 lg:p-20 lg:px-36 ">
            <div className="person_item lg:w-1/2 flex flex-row lg:flex-col ">
              <Image
                className="image_person rounded-full mb-5 object-cover mr-5 lx:mr-0"
                src="image/item1.jpg"
                width={600}
                height={600}
                alt="vape men"
                style={{ width: "100px", height: "100px" }}
              ></Image>
              <h3 className="person_name">Davis Lovens</h3>
              <p className=" person_title text-xs mt-2 ">CEO of PUBLISHER</p>
            </div>

            <div className="person_text flex lg:items-center lg:ml-10">
              <p className="text-xs lg:text-sm  description">
                1Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                nulla. Dolor nostrum temporibus quidem deleniti fugiat ipsum!
                Pariatur voluptatem quibusdam dolores natus consequatur itaque
                dolor ut accusamus laborum labore! Exercitationem necessitatibus
                explicabo animi sed similique nesciunt iure? Accusamus, nihil
                quam.
              </p>
            </div>
          </div>

          <div className="person_box  bg-dark flex lg:flex-row flex-col p-5 lg:p-20 lg:px-36 ">
            <div className="person_item lg:w-1/2 flex flex-row lg:flex-col ">
              <Image
                className="image_person rounded-full mb-5 object-cover mr-5 lx:mr-0"
                src="image/item2.jpg"
                width={600}
                height={600}
                alt="vape men"
                style={{ width: "100px", height: "100px" }}
              ></Image>
              <h3 className="person_name">Davis Lovens</h3>
              <p className="person_title text-xs mt-2 ">CEO of PUBLISHER</p>
            </div>

            <div className="person_text flex lg:items-center lg:ml-10">
              <p className="text-xs lg:text-sm  description">
                1Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                nulla. Dolor nostrum temporibus quidem deleniti fugiat ipsum!
                Pariatur voluptatem quibusdam dolores natus consequatur itaque
                dolor ut accusamus laborum labore! Exercitationem necessitatibus
                explicabo animi sed similique nesciunt iure? Accusamus, nihil
                quam.
              </p>
            </div>
          </div>

          <div className="person_box  bg-dark flex lg:flex-row flex-col p-5 lg:p-20 lg:px-36 ">
            <div className="person_item lg:w-1/2 flex flex-row lg:flex-col ">
              <Image
                className="image_person rounded-full mb-5 object-cover mr-5 lx:mr-0"
                src="image/item3.jpg"
                width={600}
                height={600}
                alt="vape men"
                style={{ width: "100px", height: "100px" }}
              ></Image>
              <h3 className="person_name">Davis Lovens</h3>
              <p className="person_title text-xs mt-2 ">CEO of PUBLISHER</p>
            </div>

            <div className="person_text flex lg:items-center lg:ml-10">
              <p className="text-xs lg:text-sm  description">
                1Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                nulla. Dolor nostrum temporibus quidem deleniti fugiat ipsum!
                Pariatur voluptatem quibusdam dolores natus consequatur itaque
                dolor ut accusamus laborum labore! Exercitationem necessitatibus
                explicabo animi sed similique nesciunt iure? Accusamus, nihil
                quam.
              </p>
            </div>
          </div>

          <div className="person_box  bg-dark flex lg:flex-row flex-col p-5 lg:p-20 lg:px-36 ">
            <div className="person_item lg:w-1/2 flex flex-row lg:flex-col ">
              <Image
                className="image_person rounded-full mb-5 object-cover mr-5 lx:mr-0"
                src="image/item2.jpg"
                width={600}
                height={600}
                alt="vape men"
                style={{ width: "100px", height: "100px" }}
              ></Image>
              <h3 className="person_name">Davis Lovens</h3>
              <p className="person_title text-xs mt-2 ">CEO of PUBLISHER</p>
            </div>

            <div className="person_text flex lg:items-center lg:ml-10">
              <p className="text-xs lg:text-sm  description">
                1Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                nulla. Dolor nostrum temporibus quidem deleniti fugiat ipsum!
                Pariatur voluptatem quibusdam dolores natus consequatur itaque
                dolor ut accusamus laborum labore! Exercitationem necessitatibus
                explicabo animi sed similique nesciunt iure? Accusamus, nihil
                quam.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Carouzel;
