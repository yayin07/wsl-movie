import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full py-6 md:py-12 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <div className="container px-4 md:px-6 grid grid-cols-7 gap-8">
          <div className="space-y-4  col-span-2 items-end flex">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie, odio a volutpat pretium, est tortor sagittis
            </p>
          </div>

          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-8 ">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Navigation</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Our Studio</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Our team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Our History
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Information</h3>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Career
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 dark:hover:text-white"
                    >
                      Vision
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-2 col-span-2">
            <div>
              <h3 className="font-semibold text-lg">News & Film Update</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                molestie, odio a volutpat pretium, est tortor sagittis
              </p>
            </div>

            <div className="flex gap-2 items-center border border-gray-300 rounded-md px-2 py-1 bg-white dark:bg-gray-800">
              <Input
                type="email"
                placeholder="Your Email"
                className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-500"
              />
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send"
                >
                  <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                  <path d="M22 2 11 13" />
                </svg>
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 ">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
            @EpicLens 2025. All rights reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              <FaFacebookSquare className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              <FaXTwitter className="h-6 w-6" />
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              <FaInstagramSquare className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-700 dark:hover:text-white"
            >
              <FaYoutube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
