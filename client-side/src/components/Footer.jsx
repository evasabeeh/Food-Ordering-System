import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-ternary text-white py-8 mt-8" id="footer">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.png" alt="Logo" className="w-32 mb-4" />
          <div className="flex space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-700 hover:text-secondary">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-700 hover:text-secondary">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-700 hover:text-secondary">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-700 hover:text-secondary">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Learn more</h2>
          <ul className="space-y-1">
            <li className="hover:text-secondary cursor-pointer">Home</li>
            <li className="hover:text-secondary cursor-pointer">About us</li>
            <li className="hover:text-secondary cursor-pointer">Delivery</li>
            <li className="hover:text-secondary cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-1">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              <span>0522 734 9100</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2 ">
              <Mail className="w-4 h-4 text-secondary" />
              <span>foodwhiz@hotmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />
      <p className="text-center text-sm text-gray-500">
        Copyright 2024 © foodwhiz.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
