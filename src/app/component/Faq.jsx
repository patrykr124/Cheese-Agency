"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="faq_section paddingSection border-b-2 border-gray-500 ">
      <div className="container">
        <div className="faq_title flex items-center flex-col">
          <h2 className="title mb-10 lg:text-3xl text-2xl">FAQ</h2>
          <p className="faq_description text-center lg:w-1/2 w-5/6 mb-10 description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
            repellat ut? Tempore ipsam ipsa ut beatae voluptatem iusto et
            recusandae! Quia illum dolore esse amet! Rerum veritatis
            exercitationem, voluptate architecto dicta corrupti nostrum
            necessitatibus ea!
          </p>
        </div>
        <div className="accordeon_box w-full flex flex-col items-center">
          <div className="accordeon gap-5 flex flex-col lg:w-2/3 px-10 lg:px-0">
            <Accordion className="flex flex-col justify-between" open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="flex  bg-dark p-4 font-bold text-lg"
              >
                What is Backup?
              </AccordionHeader>
              <AccordionBody className="flex p-4 ">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="flex  bg-dark p-4 font-bold text-lg"
              >
                How to use SEO?
              </AccordionHeader>
              <AccordionBody className="flex p-4 ">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="flex  bg-dark p-4 font-bold text-lg"
              >
                What can I do with Yarn?
              </AccordionHeader>
              <AccordionBody className="flex p-4">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="flex  bg-dark p-4 font-bold text-lg"
              >
                What can I do with Cash?
              </AccordionHeader>
              <AccordionBody className="flex p-4">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="flex  bg-dark p-4 font-bold text-lg"
              >
                What can I do with React Native?
              </AccordionHeader>
              <AccordionBody className="flex p-4">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
