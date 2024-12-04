import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import hero from "../assets/heroimg.jpeg";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const programs = [
    "Paint Making & Painting",
    "Catering/ Cake Making",
    "Building Technology (Tilling)",
    "Event Making/Planning & Decoration",
    "Hair Styling/ Fashion Designing",
    "Cosmetology",
    "Professional Driving Training",
    "Animal Husbandry",
    "Satellite Installations",
    "Camera & Video Coverage",
    "Vulcanizer",
    "Bead Making/Design",
    "Alumaco",
  ];

  // State to manage the collapsed/expanded state
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  // Determine displayed programs
  const displayedPrograms = isSmallScreen
    ? showAllPrograms
      ? programs
      : programs.slice(0, 4)
    : programs;

  // Toggle the showAllPrograms state
  const handleTogglePrograms = () => {
    setShowAllPrograms((prevState) => !prevState);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative text-center px-6 z-10" data-aos="fade-down">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-snug"
          data-aos="fade-in"
        >
          Empower Your Future
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            with Skills
          </span>
        </h1>
        <p
          className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed"
          data-aos="fade-up"
        >
          Join thousands of learners acquiring in-demand skills for a brighter
          future. <br />
          Unlock your potential with our programs in entrepreneurial studies,
          technical training, and creative arts.
        </p>
        <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
          <button className="px-8 py-3 bg-purple-500 text-white rounded-xl font-medium shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Programs Section */}
      <div className="relative w-full px-6 mt-12 md:mt-20 z-10" data-aos="fade-up">
        <h2
          className="text-center text-xl md:text-2xl font-semibold text-white mb-6"
          data-aos="zoom-in"
        >
          Our Trainings
        </h2>
        <div
          className={`flex flex-wrap justify-center gap-4 px-2 ${
            isSmallScreen ? "grid grid-cols-2" : ""
          }`}
        >
          {displayedPrograms.map((program, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-4 bg-transparent rounded-lg shadow-md border border-purple-500 hover:shadow-lg hover:scale-105 transform transition-all duration-300"
              data-aos="flip-left"
              data-aos-delay={index * 100} // Adds a delay for each program
            >
              <div className="h-4 w-4 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full"></div>
              <h3 className="md:text-base font-bold text-3xl text-gray-100">
                {program}
              </h3>
            </div>
          ))}
        </div>

        {/* View More Link for Small Screens */}
        {isSmallScreen && (
          <div className="mt-6 text-center" data-aos="fade-left">
            <button
              onClick={handleTogglePrograms}
              className="text-blue-500 hover:text-purple-600 text-sm font-medium"
            >
              {showAllPrograms ? "Collapse Programs" : "View More Programs"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
