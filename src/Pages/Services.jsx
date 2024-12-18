
import { BookOpen, UserCheck, ClipboardCheck, Lightbulb, Users, Award } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-100 py-12 px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-800">Our Services</h1>
        <p className="text-gray-600 font-xl font-semibold mt-4">
          At SkillEmpower, we are committed to empowering individuals by providing access to free, high-quality skill training programs designed to transform lives.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <BookOpen className="text-purple-700 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold text-purple-700">Free Courses</h2>
          <p className="text-gray-600 mt-4 font-xl font-semibold text-center">
            We offer a wide range of skill-based courses completely free of charge. Whether you're interested in catering, cosmetology, or professional driving, we ensure affordability and accessibility for everyone.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <UserCheck className="text-purple-700 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold text-purple-700">Expert Instructors</h2>
          <p className="text-gray-600 mt-4 font-xl font-semibold text-center">
            Our courses are taught by experienced professionals passionate about sharing their knowledge. You'll learn through hands-on training and real-world applications to prepare for success.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <ClipboardCheck className="text-purple-700 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold text-purple-700">Comprehensive Curriculum</h2>
          <p className="text-gray-600 mt-4 font-xl font-semibold text-center">
            Each course is carefully designed with a practical and focused curriculum, ensuring you gain the skills needed to excel in your chosen field.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <Award className="text-purple-700 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold text-purple-700">Certification</h2>
          <p className="text-gray-600 mt-4 font-xl font-semibold text-center">
            Upon completion of any course, you will receive a certificate that validates your expertise, helping you stand out in the competitive job market.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <Lightbulb className="text-purple-700 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold text-purple-700">Empowerment for All</h2>
          <p className="text-gray-600 mt-4 font-xl font-semibold text-center">
            Our program is designed to empower individuals from all walks of life, fostering self-reliance, creativity, and entrepreneurship.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <Users className="text-purple-700 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold text-purple-700">Community Support</h2>
          <p className="text-gray-600 mt-4 font-xl font-semibold text-center">
            Join a thriving community of learners and mentors who support and inspire each other to grow and succeed.
          </p>
        </div>
      </div>

      <footer className="text-center mt-12">
        <p className="text-gray-700 font-xl font-semibold">
          Ready to start your journey with SkillEmpower? Enroll today and unlock your potential!
        </p>
      </footer>
    </div>
  );
};

export default Services;
