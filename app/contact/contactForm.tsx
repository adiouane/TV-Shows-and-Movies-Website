"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Submet from './submet';
import Image from 'next/image';

const CustomAlert = ({ message }: { message: string }) => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Holy smokes!</strong>
      <span className="block sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Close</title>
          <path
            d="M14.348 5.652a.5.5 0 0 1 0 .707L10.707 10l3.641 3.641a.5.5 0 1 1-.707.707L10 10.707l-3.641 3.641a.5.5
              0 0 1-.707-.707L9.293 10 5.652 6.359a.5.5 0 0 1 .707-.707L10
              9.293l3.641-3.641a.5.5 0 0 1 .707 0z"
          />
        </svg>
      </span>
    </div>
  );
};



export default function ContactForm() {
  const form = useRef(null);
  let istrue = false;

  const sendemail = (e:any) => {
    e.preventDefault();
    emailjs
      .sendForm('service_7y7q335', 'template_epdz0jb', form.current as any, 'hkIjitlE9QsEw1Us5')
      .then((result) => {
        console.log(result.text);
        istrue = true;
        alert("Your message has been sent successfully. We will contact you soon.");
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <img src='https://th.bing.com/th/id/R.6f3ecdf04f6810549268fb9ce1ef987a?rik=pQq5sUI6hTlr9w&pid=ImgRaw&r=0'
    className="absolute h-full w-full object-cover opacity-60 z-0  pointer-events-none" />
      {/* <Image src="/images/westworld.gif/" alt="background" className="absolute h-full w-full object-cover opacity-20 z-0 pointer-events-none"

        width={1920}
        height={1080}
      style={{ touchAction: 'none' }} /> */}
      <form ref={form} 
      onSubmit={sendemail}
      className="max-w-lg w-full mx-auto mt-10 p-8 md:p-12 lg:p-16 rounded-lg shadow-xl z-10">
      
        <div className="mb-4">
          <label htmlFor="from_name" className="block text-gray-700 text-sm font-bold mb-2">
            From Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="from_email" className="block text-gray-700 text-sm font-bold mb-2">
            From Email
          </label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea

            name="message"
            id="message"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex justify-center">
          <Submet />
          {istrue && <CustomAlert message="Your message has been sent successfully. We will contact you soon." />}
        </div>
      </form>
    </div>
  );
};


