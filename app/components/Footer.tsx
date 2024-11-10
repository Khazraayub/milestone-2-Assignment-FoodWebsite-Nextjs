import React from 'react'
import Link from 'next/link'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="text-white bg-black body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img className="w-15 h-10 text-white  p-1 bg-red-500 rounded-full" 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR9uA3Nzm5L7rYsENSJr8rokJvQ3NITJlmA&s"/>
        <span className="ml-3  text-2xl font-bold text-red-600">Pizza House</span>
      </a>
      <p className="mt-2 text-sm text-white">Copyright &copy; 2024 — Designed by Khazra Shaikh &#9829; All right Reserved</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3"> Company Information</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">About Us</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Our Story</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Careers</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Franchise Opportunities</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Customer Support</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">Contact Us</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">FAQs</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Delivery Information</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Refund & Cancellation Policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3"> Promotions & Offers</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">Deals & Discounts</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Loyalty Program</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Gift Cards</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Student Discounts</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Locations</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-800">Find a Pizza House Near You</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Store Locator</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">International Locations</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-800">Order Tracking</a>
          </li>
        </nav>
      </div>
   
  
 
    <div className="container border-t-0 border-gray-300 flex justify-center sm:px-4 py-9 mx-auto items-center w-[100%]">
          <ul className="flex gap-4 sm:gap-9 text-[20px] sm:text-[25px]  ">
            <li className="hover:animate-bounce   hover:text-blue-500 rounded-full p-2 bg-gray-600">
              <Link
                className=" rounded-xl"
                target="_blank"
                href={"https://www.linkedin.com/in/khazra-ayub-99b762260/"}
              >
                <FaLinkedin />
              </Link>
            </li>
            <li className="hover:animate-bounce hover:text-gray-400  rounded-full p-2 bg-gray-600">
              <Link
                className="rounded-xl"
                target="_blank"
                href={"https://github.com/Khazraayub"}
              >
                <FaGithub />
              </Link>
            </li>
            <li className=" hover:animate-bounce hover:text-orange-500  rounded-full p-2 bg-gray-600">
              <Link
                className="rounded-xl"
                target="_blank"
                href={"#"}
              >
                <MdEmail />
              </Link>
            </li>

            <li className="hover:animate-bounce rounded-full p-2 bg-gray-600">
              <Link className="rounded-xl  hover:text-blue-900" href={"#"}>
                <FaSquareFacebook />
              </Link>
            </li>
          </ul>
        </div>
        </div>
        
  </div>
</footer>
  )
}
