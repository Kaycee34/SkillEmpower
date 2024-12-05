
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback:
        "SkillEmpower provided me with the tools and confidence to secure my dream job. Their expert mentorship is unparalleled.",
      rating: 5,
      role: "Junior Web Developer",
    },
    {
      name: "John Smith",
      feedback:
        "The hands-on learning approach was exactly what I needed. I feel empowered and ready to tackle real-world projects.",
      rating: 4,
      role: "Freelance Designer",
    },
    {
      name: "Alice Johnson",
      feedback:
        "A welcoming community and exceptional resources—SkillEmpower truly cares about its students' success.",
      rating: 5,
      role: "Marketing Specialist",
    },
  ];

  return (
    <section className="py-12 bg-purple-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-black text-center mb-10">
          Hear from Our Students
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <Quote className="h-10 w-10 text-purple-600" />
              </div>
              {/* Feedback */}
              <p className="text-gray-700 italic text-center mb-4">
                {testimonial.feedback}
              </p>
              {/* Student Details */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-purple-700">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
              {/* Star Ratings */}
              <div className="flex justify-center mt-4">
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
