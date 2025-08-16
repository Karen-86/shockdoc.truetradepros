import React from "react";
import localData from "@/localData";

const { logo } = localData.images;
const { facebookIcon, linkedinIcon, instagramIcon } = localData.svgs;

const Footer = () => {
  return (
    <footer className="bg-gray-50  min-h-[300px] pb-[3rem] pt-[3rem] font-sans">
      <div className="container">
        <div className="content">
          <div className="group flex items-center gap-x-20 gap-y-10  flex-wrap">
            <div>
              <img src={logo} alt="" className="max-w-[50px] h-auto border-4 border-secondary-2 min-w-[60px] mb-5" />
              <p className="text-xs text-secondary-2 text-thin max-w-[280px] mb-8 leading-[1.5]">
                The team with the skills and passion to transform houses into dream homes, delivering exceptional quality, lasting
                value, and peace of mind.
              </p>
              <div className="social-list flex gap-3">
                <a
                  href="#/"
                  target="_blank"
                  className="block  w-[35px] h-[35px] rounded-full bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer p-[9px] fill-gray-600"
                >
                  {facebookIcon}
                </a>
                <a
                  href="#/"
                  target="_blank"
                  className="block  w-[35px] h-[35px] rounded-full bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer p-[9px] fill-gray-600"
                >
                  {linkedinIcon}
                </a>
                <a
                  href="#/"
                  target="_blank"
                  className="block  w-[35px] h-[35px] rounded-full bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer p-[9px] fill-gray-600"
                >
                  {instagramIcon}
                </a>
              </div>
            </div>
            <ul className="flex flex-col gap-2 flex-1">
              <a href="#services" className=" text-dark font-medium  hover:text-secondary-2 duration-300">
                Services
              </a>
              <a href="#about-us" className=" text-dark font-medium  hover:text-secondary-2 duration-300">
                About Us
              </a>
              <a href="#showcase" className=" text-dark font-medium  hover:text-secondary-2 duration-300">
                Contact
              </a>
            </ul>

            <ul className="">
              <li className="text-secondary-2 mb-2"> Shelltedpete Handyman (serving Asheville NC area)</li>
              <li className="text-secondary-2 mb-2">340 Merrimon Avenue, Asheville NC 28801</li>
              <li className="text-secondary-2 mb-2">info @ shelltedpete.com</li>
              <li className="text-secondary-2 mb-2">‪(980) 533-1889</li>
            </ul>
          </div>

          <br />
          <br />
          <p className="text-secondary-2 text-sm">© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
