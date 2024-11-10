import React from 'react'

export default function About() {
  return (
    <section className="text-white bg-red-900 body-font">
       
    <div className="container mx-auto flex px-5 py-24 pt-48 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl font-extrabold mb-4  text-white underline">ABOUT OUR FOOD</h1>
        <p className="mb-8 leading-relaxed">At Pizza House, pizza is more than just food – it’s an experience crafted with love and attention to every detail. Our pizzas start with freshly prepared dough, hand-stretched to create the perfect balance of crispy and chewy crust. We top each pizza with our signature tomato sauce, made from vine-ripened tomatoes and a blend of herbs and spices for a rich, flavorful base.
                    We believe in using only the finest, freshest ingredients. From creamy mozzarella cheese that melts to perfection to a variety of high-quality toppings – including hand-cut vegetables, premium meats, and unique flavors – every pizza is made to order and cooked to golden-brown perfection in our ovens.
                    Whether you’re craving a classic Margherita, a spicy Pepperoni, or an inventive custom creation, our menu offers a wide variety of options to satisfy every pizza lover’s taste. At Pizza House, we take pride in making every slice memorable. Dig into a slice of passion, quality, and flavor with us!.</p>
       
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded-full hover:scale-[1.03] cursor-pointer ease-linear duration-[0.3s] hover:shadow-2xl shadow-gray-950" alt="hero" src="/images/pizza1.jpg"/>
      </div>
    </div>
    
  </section>
  )
}
