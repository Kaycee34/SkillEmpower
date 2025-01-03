import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Animation only runs once
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-20 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold text-gray-800 mb-6"
          data-aos="fade-up" // Animation for header
        >
          About SkillEmpower
        </h2>
        <p
          className="text-lg text-gray-700 leading-relaxed mb-6"
          data-aos="fade-up" // Animation for paragraph
          data-aos-delay="100" // Delay for the paragraph animation
        >
          At SkillEmpower, we are committed to equipping individuals with the essential skills for thriving in a fast-evolving world. Our mission is to empower you with practical, real-world knowledge that unlocks your potential and drives success across personal and professional pursuits. Whether you’re focused on entrepreneurship, technology, or creative growth, we provide the resources and guidance to help you succeed.
        </p>
        {/* Sponsor Mention */}
        <p
          className="text-gray-600 mt-6 italic"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Proudly sponsored by <span className="font-semibold">Dike Akoghi'La Mba</span>
        </p>
        <div
          className="mt-10"
          data-aos="fade-up" // Animation for the button
          data-aos-delay="300" // Delay for button animation
          style={{ transform: "none" }} // Ensure no transform is set initially
        >
          <a href="/aboutus" className="px-10 py-4 bg-purple-600 text-white rounded-full font-medium shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
