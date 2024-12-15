import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white dark:bg-gray-900 ml-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12 lg:py-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-5xl">
            Revolutionize Your Business
            <br />
            <span className="text-blue-600">with ShopPlusPlus</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Trade in bulk for free on our secure platform.
            Use cards to pay and track orders with our intuitive
            dashboard.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://merakiui.com/images/components/Catalogue-pana.svg"
            alt="ShopPlusPlus Illustration"
            className="w-3/4 lg:w-2/3"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
