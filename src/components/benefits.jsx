import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { BookOpen, UserCheck, Hammer, Clock, TrendingUp, Users } from "lucide-react";

const Benefits = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animations
      easing: "ease-in-out",
      once: true, // Trigger animation only once
    });
  }, []);

  const benefits = [
    {
      title: "Free Training",
      description: "Learn valuable skills without any cost to kickstart your career.",
      icon: <BookOpen className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Expert Mentors",
      description: "Learn directly from professionals with real-world experience.",
      icon: <UserCheck className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Practical Hands-On Learning",
      description: "Engage in real-life projects and case studies to build job-ready skills.",
      icon: <Hammer className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Flexible Schedules",
      description: "Access courses and training that fit your busy lifestyle.",
      icon: <Clock className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Career Advancement",
      description: "Increase your employability with certifications and portfolio-worthy projects.",
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
    },
    {
      title: "Community Support",
      description: "Join a network of like-minded learners and mentors for ongoing growth and collaboration.",
      icon: <Users className="h-8 w-8 text-purple-500" />,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8" data-aos="fade">
          Benefits of Skill Empower
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all transform hover:scale-105"
              data-aos="fade-up" // Fade-up animation for each card
              data-aos-delay={`${index * 150}`} // Staggered delay
            >
              {/* Icon */}
              <div className="mb-4">{benefit.icon}</div>

              {/* Title */}
              <h3
                className="text-xl font-semibold text-gray-700 mb-2"
                data-aos="zoom-in" // Zoom effect for the title
                data-aos-delay={`${index * 200}`}
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-600 bg-gray-50 p-3 rounded-md shadow-sm"
                data-aos="fade" // Smooth fade effect for text
                data-aos-delay={`${index * 300}`}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
