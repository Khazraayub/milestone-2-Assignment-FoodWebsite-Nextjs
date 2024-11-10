"use client"
import React from "react";
import Link from 'next/link'


export default function Navbar() {


  return (
    <header className="text-white fixed top-0 w-full bg-black body-font">
  <div className="container mx-auto flex flex-wrap  p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img className="w-15 h-10 text-white  p-1 bg-red-500 rounded-full" 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR9uA3Nzm5L7rYsENSJr8rokJvQ3NITJlmA&s"/>
      
      <span className="ml-3 text-red-600 text-4xl font-bold">Pizza House</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 font-bold	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-red-600 cursor-pointer" href="/">Home</a>
      <a className="mr-5 hover:text-red-600 cursor-pointer" href="/menu">Menu</a>
      <a className="mr-5 hover:text-red-600 cursor-pointer"href="/about">About</a>
      <a className="mr-5 hover:text-red-600 cursor-pointer" href="/contact">Contact</a>
    </nav>
    <Link className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 rounded text-base mt-4 md:mt-0" href={"/signup"}>Signup</Link>

    

  </div>
</header>
  )
}
