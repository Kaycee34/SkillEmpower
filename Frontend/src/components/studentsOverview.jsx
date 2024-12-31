import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Star } from "lucide-react";
import jane from '../assets/janeDoe.jpg';
import john from '../assets/johnSmith.jpg';
// import alice from '../assets/Alicejohnson.jpg';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Slightly longer animations for a polished look
      easing: "ease-in-out",
      once: true, // Animation triggers only once
    });
  }, []);

  const testimonials = [
    {
      name: "Jane Doe",
      feedback:
        "SkillEmpower provided me with the tools and confidence to secure my dream job. Their expert mentorship is unparalleled.",
      rating: 5,
      role: "Cosmetologist",
      imgs: jane,
    },
    {
      name: "John Smith",
      feedback:
        "The hands-on learning approach was exactly what I needed. I feel empowered and ready to tackle real-world projects.",
      rating: 4,
      role: "Painter",
      imgs: john,
    },
    {
      name: "Alice Johnson",
      feedback:
        "A welcoming community and exceptional resources—SkillEmpower truly cares about its students' success.",
      rating: 5,
      role: "Vulcanizer",
      // imgs: alice,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2
          className="text-4xl font-extrabold text-black text-center mb-10"
          data-aos="fade-up"
        >
          Hear from Our Students
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
              data-aos="slide-in-left"
              data-aos-delay={`${index * 150}`} // Staggered delays
            >
              {/* Centered Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.imgs}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full"
                />
              </div>

              {/* Feedback */}
              <p
                className="text-gray-700 italic text-lg font-medium text-center mb-4"
                data-aos="fade"
                data-aos-delay={`${index * 250}`}
              >
                {testimonial.feedback}
              </p>

              {/* Student Details */}
              <div
                className="text-center"
                data-aos="slide-up"
                data-aos-delay={`${index * 300}`}
              >
                <h3 className="text-lg font-semibold text-purple-700">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>

              {/* Star Ratings */}
              <div
                className="flex justify-center mt-4"
                data-aos="zoom-in"
                data-aos-delay={`${index * 350}`}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
