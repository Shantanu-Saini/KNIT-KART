import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import style from './footer.module.css';

const Footer = () => {

  const [flash, setFlash] = useState(false);

  const handleClick = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 1000); // Reset flash after 1 second
  };

  return (
    <div className="px-4 md:px-20 py-12 bg-footer text-text">
      <div className="flex flex-col md:flex-row justify-between">
        <div className={`flex flex-col mb-8 md:mb-0 p-2 ${flash ? style.flash : ''}`}>
          {/* <div className={`${flash ? style.flash : ''}`}> */}
            <h1 className="text-lg md:text-2xl mb-4">Contact Us</h1>
          <ul className="list-none space-y-4">
            <li>Phone: +91 7786989680</li>
            <li>Email: arshil.22709@knit.ac.in</li>
          </ul>
          {/* </div> */}
        </div>

        <div className="flex flex-col p-2">
          <div className="mb-8 md:mb-0">
            <h1 className="text-lg md:text-2xl mb-4">Quick Links</h1>
            <ul className="list-none space-y-4">
              <li className="cursor-pointer">
                <a
                  href="/#"
                  className="relative after:w-0 after:left-0 after:bottom-0 after:border-b-2 after:rounded after:absolute after:duration-300 after:hover:w-full after:border-text"
                >
                  Home
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/#FAQs"
                  className="relative after:w-0 after:left-0 after:bottom-0 after:border-b-2 after:rounded after:absolute after:duration-300 after:hover:w-full after:border-text"
                >
                  FAQs
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/#team"
                  className="relative after:w-0 after:left-0 after:bottom-0 after:border-b-2 after:rounded after:absolute after:duration-300 after:hover:w-full after:border-text"
                >
                  Development team
                </a>
              </li>
              <li className="cursor-pointer" onClick={handleClick}>
                <a
                  href="#footer"
                  className="relative after:w-0 after:left-0 after:bottom-0 after:border-b-2 after:rounded after:absolute after:duration-300 after:hover:w-full after:border-text"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col mb-8 md:mb-0 p-2">
          <h1 className="text-lg md:text-2xl mb-4">Social Media</h1>
          <ul className="list-none space-x-4 flex mb-10">
            <li className="cursor-pointer duration-300 hover:text-secondary">
              <FaInstagram className="text-2xl" />
            </li>
            <li className="cursor-pointer duration-300 hover:text-secondary">
              <FaLinkedinIn className="text-2xl" />
            </li>

            <li className="cursor-pointer duration-300 hover:text-secondary">
              <FaXTwitter className="text-2xl" />
            </li>
          </ul>
          <div className="flex flex-col space-y-2">
            <h1 className="text-lg md:text-2xl mb-2">Newsletter</h1>
            <p>No signup required for exploring the products</p>
            <div className="flex md:flex-row flex-col md:space-x-2 space-y-2 md:space-y-0">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="h-10 px-2 text-black flex-grow focus:outline-none rounded"
              />
              <button className="px-4 py-1 font-medium text-lg bg-accent text-white hover:bg-teal-500 hover:text-white rounded transform transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 border-gray-600" />
      <p className="mt-5 text-center text-sm">
        &copy; {new Date().getFullYear()} KNIT KART, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
