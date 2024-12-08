import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import hero from "../assets/heroimg.jpeg";

const Hero = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Smooth animations with a balanced duration
      easing: "ease-in-out", // Subtle easing for animations
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`, // Subtle background pulse
      }}
      data-aos="fade"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div
        className="relative text-center px-6 z-10 max-w-3xl"
        data-aos="fade-up" // Smooth fade-up effect
      >
        <h1
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
          data-aos="fade-up"
        >
          Empower Your Future
        </h1>
        <span
          className="mt-2 block text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"
          data-aos="fade-up" // Smooth text entrance
          data-aos-delay="100"
        >
          Build Skills That Matter
        </span>
        <p
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Achieve your dreams with expert-led training in technical, creative, 
          and entrepreneurial skills. Start your journey towards a brighter future today.
        </p>
        {/* Sponsor Mention */}
        <p
          className="mt-6 text-gray-200 text-sm italic"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Sponsored by <span className="font-semibold">Dike Akoghi'La Mba</span>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
          <button className="px-8 py-3 bg-purple-500 text-white rounded-lg font-medium shadow-md hover:bg-purple-600 transition-transform transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
