
const courses = [
  {
    title: "Paint Making & Painting",
    description: "Learn the art of creating paints and mastering painting techniques for homes and businesses.",
    icon: "🎨",
  },
  {
    title: "Catering/ Cake Making",
    description: "Master the skills of baking and cake decoration for professional or personal purposes.",
    icon: "🍰",
  },
  {
    title: "Building Technology (Tilling)",
    description: "Get hands-on experience in tiling and construction techniques.",
    icon: "🛠️",
  },
  {
    title: "Event Making/Planning & Decoration",
    description: "Plan and decorate events to perfection with this comprehensive course.",
    icon: "🎉",
  },
  {
    title: "Hair Styling/ Fashion Designing",
    description: "Gain expertise in hairstyling and fashion design to make a mark in the beauty industry.",
    icon: "✂️",
  },
  {
    title: "Cosmetology",
    description: "Learn beauty treatments, skincare, and makeup techniques.",
    icon: "💄",
  },
  {
    title: "Professional Driving Training",
    description: "Become a skilled driver with our professional driving training.",
    icon: "🚗",
  },
  {
    title: "Animal Husbandry",
    description: "Learn how to care for and manage animals effectively.",
    icon: "🐄",
  },
  {
    title: "Satellite Installations",
    description: "Become proficient in installing and maintaining satellite dishes and related systems.",
    icon: "📡",
  },
  {
    title: "Camera & Video Coverage",
    description: "Learn professional camera handling and video coverage techniques.",
    icon: "📷",
  },
  {
    title: "Vulcanizer",
    description: "Learn the art of tire repair and maintenance.",
    icon: "🔧",
  },
  {
    title: "Bead Making/Design",
    description: "Create stunning bead designs and jewelry.",
    icon: "📿",
  },
  {
    title: "Alumaco",
    description: "Master the skills of working with aluminum for construction and design.",
    icon: "🏗️",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-white py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-black">Explore Our Courses</h1>
        <p className="text-gray-500 mt-2">Practical training designed to empower you with skills for success.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4">{course.icon}</div>
            <h2 className="text-xl font-semibold text-purple-700">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <button className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
