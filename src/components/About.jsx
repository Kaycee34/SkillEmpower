const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-20 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About SkillEmpower
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At SkillEmpower, we are committed to equipping individuals with the essential skills for thriving in a fast-evolving world. Our mission is to empower you with practical, real-world knowledge that unlocks your potential and drives success across personal and professional pursuits. Whether you’re focused on entrepreneurship, technology, or creative growth, we provide the resources and guidance to help you succeed.
        </p>
        <div className="mt-10">
          <button className="px-10 py-4 bg-purple-600 text-white rounded-full font-medium shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
