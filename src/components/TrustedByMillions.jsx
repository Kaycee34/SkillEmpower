import { GraduationCap, Briefcase, Globe, Users } from 'lucide-react';

const TrustedByMillions = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Trusted by Millions Worldwide
        </h2>
        <p className="text-lg text-gray-400 text-center mb-8">
          Empowering individuals with skills and knowledge across the globe.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:flex-nowrap">
          {/* Lucide Icons */}
          <div className="flex-1 flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <GraduationCap className="text-blue-500" size={40} />
            </div>
            <p className="text-gray-400 text-sm">Education Empowerment</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <Briefcase className="text-green-500" size={40} />
            </div>
            <p className="text-gray-400 text-sm">Career Opportunities</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <Globe className="text-yellow-500" size={40} />
            </div>
            <p className="text-gray-400 text-sm">Global Reach</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center shadow-md">
              <Users className="text-purple-500" size={40} />
            </div>
            <p className="text-gray-400 text-sm">Community of Millions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByMillions;
  