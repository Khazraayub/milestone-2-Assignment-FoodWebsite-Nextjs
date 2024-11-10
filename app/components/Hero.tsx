import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';


export default function Hero() {
  return (
    

    <section className="text-white bg-red-900 body-font">
            
  <div className="container mx-auto flex px-5 py-24 pt-48 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded-full hover:scale-[1.03] cursor-pointer ease-linear duration-[0.3s] hover:shadow-2xl shadow-gray-950" alt="hero" src="/images/pizza-1.avif"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl font-extrabold mb-4  text-white underline ">WELCOME TO PIZZA HOUSE
      </h1>
      <p className="mb-8 leading-relaxed">At Pizza House,  we believe that great pizza brings people together. Since our doors first opened, we’ve been dedicated to crafting the perfect pizza — from our hand-stretched dough to our fresh, high-quality ingredients. Whether you’re a fan of the classics or looking to try something new, our menu offers something for every taste.
                 Our commitment to quality goes beyond just flavor. Every pizza is baked to perfection in our signature ovens, bringing a crispy crust and gooey cheese right to your table. Join us for a slice, a full pie, or one of our specialty sides and desserts. Here at Pizza House, we’re passionate about creating a cozy, welcoming environment for friends, families, and pizza lovers alike.
                Grab a slice and taste the tradition. Welcome to Pizza House, where every bite feels like home.</p>
      
    </div>
  </div>
 
</section>

       












  )
}
