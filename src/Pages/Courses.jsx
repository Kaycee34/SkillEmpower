import cateringImg from '../assets/catering.jpeg';
import painting from '../assets/painting.jpeg';
import photographer from '../assets/Photographer.jpeg';
import AnimalHus from '../assets/AnimalHusbandary.jpeg';
import Cosmetology from '../assets/Cosmetology.jpeg';
import Driver from '../assets/Driver.jpeg';
import satellite from '../assets/Satellite.jpeg';
import BeadMaking from '../assets/BeadMaking.jpeg';
import eventplanning from '../assets/catering.jpg';
import vulcanizer from '../assets/vulcanizer.jpeg';
import hairdresser from '../assets/haidresser.jpg';
import alumaco from '../assets/alumaco.jpg';
import tiling from '../assets/tiling.jpg'

const courses = [
  {
    title: "Paint Making & Painting",
    description: "Learn the art of creating paints and mastering painting techniques for homes and businesses.",
    image: painting,
  },
  {
    title: "Catering/ Cake Making",
    description: "Master the skills of baking and cake decoration for professional or personal purposes.",
    image: cateringImg,
  },
  {
    title: "Building Technology (Tilling)",
    description: "Get hands-on experience in tiling and construction techniques.",
    image: tiling
  },
  {
    title: "Event Planning & Decoration",
    description: "Plan and decorate events to perfection with this comprehensive course.",
    image: eventplanning,
  },
  {
    title: "Hair Styling/ Fashion Designing",
    description: "Gain expertise in hairstyling and fashion design to make a mark in the beauty industry.",
    image: hairdresser,
  },
  {
    title: "Cosmetology",
    description: "Learn beauty treatments, skincare, and makeup techniques.",
    image: Cosmetology,
  },
  {
    title: "Professional Driving Training",
    description: "Become a skilled driver with our professional driving training.",
    image: Driver,
  },
  {
    title: "Animal Husbandry",
    description: "Learn how to care for and manage animals effectively.",
    image: AnimalHus,
  },
  {
    title: "Satellite Installations",
    description: "Become proficient in installing and maintaining satellite dishes and related systems.",
    image: satellite,
  },
  {
    title: "Camera & Video Coverage",
    description: "Learn professional camera handling and video coverage techniques.",
    image: photographer,
  },
  {
    title: "Vulcanizer",
    description: "Learn the art of tire repair and maintenance.",
    image: vulcanizer,
  },
  {
    title: "Bead Making/Design",
    description: "Create stunning bead designs and jewelry.",
    image: BeadMaking,
  },
  {
    title: "Alumaco",
    description: "Master the skills of working with aluminum for construction and design.",
    image: alumaco,
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-100 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-800">Explore Our Courses</h1>
        <p className="text-gray-600 font-xl font-semibold mt-2">
          Practical training designed to empower you with skills for success.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg flex flex-col items-center text-center h-[370px]"
          >
            <img
              src={course.image}
              alt={`Course: ${course.title}`}
              className="w-full h-52 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold text-gray-700 mt-4">
              {course.title}
            </h2>
            <p className="text-gray-600 font-xl font-semibold mt-2">{course.description}</p>
            <a href="/aboutus" className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
