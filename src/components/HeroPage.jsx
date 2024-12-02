const Hero = () => {
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

    return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-col items-center justify-start md:justify-center overflow-hidden">
      {/* Background Enhancements */}
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tr from-blue-400 to-teal-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-10 w-36 h-36 bg-gradient-to-tl from-yellow-300 to-red-400 rounded-full blur-2xl opacity-30"></div>
    </div>

      {/* Hero Section */}
    <div className="relative text-center px-6 mt-16 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-snug">
            Empower Your Future
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            with Skills
            </span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            Join thousands of learners acquiring in-demand skills for a brighter
            future. <br />
            Unlock your potential with our programs in entrepreneurial studies,
            technical training, and creative arts.
        </p>
        <div className="mt-8">
            <button className="px-8 py-3 bg-purple-500 text-white rounded-lg font-medium shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105">
            Get Started
            </button>
        </div>
        </div>

      {/* Programs Section */}
    <div className="w-full px-6 mt-12 md:mt-20">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            School of Entrepreneurial Studies & Skills Acquisition
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        {programs.slice(0, 3).map((program, index) => (
            <div
            key={index}
            className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
            <div className="h-4 w-4 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full"></div>
            <h3 className="text-sm md:text-base font-medium text-gray-800 truncate">
                {program}
            </h3>
            </div>
        ))}
          {/* Display remaining programs in a grid for larger screens */}
        {programs.slice(3).map((program, index) => (
            <div
              key={index + 3} // Ensure unique keys
            className="hidden md:flex items-center gap-2 p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
            <div className="h-4 w-4 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full"></div>
            <h3 className="text-sm md:text-base font-medium text-gray-800 truncate">
                {program}
            </h3>
            </div>
        ))}
        </div>
    </div>
    </section>
);
};

export default Hero;
