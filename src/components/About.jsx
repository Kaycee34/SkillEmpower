const AboutSection = () => {
    return (
      <section className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About SkillEmpower
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            SkillEmpower is designed to equip individuals with the skills needed to succeed in a fast-paced, ever-changing world. We believe that by empowering individuals with practical knowledge, we can help unlock their potential and enable them to achieve success in both their personal and professional lives. Whether you’re looking to enhance your entrepreneurial, technical, or creative skills, SkillEmpower provides you with the tools and resources to thrive.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3 bg-purple-500 text-white rounded-lg font-medium shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  