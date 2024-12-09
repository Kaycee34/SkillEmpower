
import cateringImg from '../assets/catering.jpeg'
import painting from '../assets/painting.jpeg'
import photographer from '../assets/Photographer.jpeg'
const PopularCourses = () => {
    const courses = [
      {
        title: "Paint Making & Painting",
        description:
          "Learn the art of creating paints and mastering painting techniques for homes and businesses.",
        image: `${painting}`,
      },
      {
        title: "Catering/ Cake Making",
        description:
          "Master the skills of baking and cake decoration for professional or personal purposes.",
        image: `${cateringImg}`,
      },
      {
        title: "Camera & Video Coverage",
        description: "Learn professional camera handling and video coverage techniques.",
        image: `${photographer}`,
      }
    ];
  
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Popular Courses
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Discover our top courses designed to equip you with valuable skills.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Course Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {/* Course Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                  <button className="mt-4 px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PopularCourses;
  