import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const styles = {
    pageHeader: {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },
  };

  const navigate = useNavigate();

  return (
    <section>
      <div style={styles.pageHeader}>
        <div className="text-center px-4 sm:px-8 lg:px-16">
          <h1 className="text-5xl font-extrabold mb-4 sm:text-6xl">
            Welcome to Our Online Store!
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
            Discover an Amazing Selection of Products and Start Shopping Today!
          </p>
          <button
            onClick={() => navigate(`/search?category=All`)}
            className="bg-indigo-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
          >
            Explore Our Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
