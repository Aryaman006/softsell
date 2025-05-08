import React from "react";

const Hero = ({id}) => {
  return (
    <section id={id} className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-32">
      <h1 className="text-5xl font-bold leading-tight">Welcome to SoftSell</h1>
      <p className="mt-4 text-2xl">Sell your software licenses easily and securely.</p>
      <button className="mt-8 px-10 py-4 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
        Sell My Licenses
      </button>
    </section>
  );
};

export default Hero;
