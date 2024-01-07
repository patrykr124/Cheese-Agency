'use client'
import React from "react";
import { Link as ScrollLink } from 'react-scroll';

function Form() {
  return (
    <div id="form" className="form_section paddingSection w-full flex flex-col items-center">
      <div className="form_title text-center mb-10 flex flex-col items-center">
        <h2 className="mb-10 lg:text-3xl text-2xl">Contact us</h2>
        <p className="description w-5/6 lg:w-full">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
          similique!
        </p>
      </div>
      <form className="form_box flex flex-col justify-center items-center w-5/6 lg:w-1/2">
        <div className="name flex flex-col w-full mb-5">
          <label className="text-center"> Name</label>
          <input className="p-1"></input>
        </div>

        <div className="Email  flex flex-col w-full mb-5">
          <label className="text-center">Email</label>
          <input className="p-1"></input>
        </div>

        <div className="Phone  flex flex-col w-full mb-5 ">
          <label className="text-center ">Phone</label>
          <input className="p-1"></input>
        </div>

        <div className="Text  flex flex-col w-full mb-5">
          <label className="text-center">Text</label>
          <textarea className="textarea_box max-h-96 text-black p-1"></textarea>
        </div>
        <button className="button_hero font-bold overflow-hidden relative px-8 py-3 bg-transparent border-2 mt-10" >
        <ScrollLink  to="/">
          Learn more
        </ScrollLink>
      </button>
      </form>
    </div>
  );
}

export default Form;
