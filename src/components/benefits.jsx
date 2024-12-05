import { BookOpen, UserCheck, Hammer, Clock, TrendingUp, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Free Training",
      description: "Learn valuable skills without any cost to kickstart your career.",
      icon: <BookOpen className="h-8 w-8 text-purple-500" />, // Book icon for learning
    },
    {
      title: "Expert Mentors",
      description: "Learn directly from professionals with real-world experience.",
      icon: <UserCheck className="h-8 w-8 text-purple-500" />, // User icon for mentorship
    },
    {
      title: "Practical Hands-On Learning",
      description: "Engage in real-life projects and case studies to build job-ready skills.",
      icon: <Hammer className="h-8 w-8 text-purple-500" />, // Hammer icon for hands-on work
    },
    {
      title: "Flexible Schedules",
      description: "Access courses and training that fit your busy lifestyle.",
      icon: <Clock className="h-8 w-8 text-purple-500" />, // Clock icon for flexibility
    },
    {
      title: "Career Advancement",
      description: "Increase your employability with certifications and portfolio-worthy projects.",
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />, // Trending up icon for growth
    },
    {
      title: "Community Support",
      description: "Join a network of like-minded learners and mentors for ongoing growth and collaboration.",
      icon: <Users className="h-8 w-8 text-purple-500" />, // Group of users icon for community
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Benefits of Skill Empower
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
