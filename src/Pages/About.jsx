const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-100 py-12 px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-purple-800 drop-shadow-lg">
          About SkillEmpower
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Transforming lives through skill development, education, and opportunities for growth.
        </p>
      </header>

      <section className="max-w-6xl mx-auto">
        {/* Mission Section */}
        <div className="mb-16 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-4xl font-semibold text-purple-700 text-center drop-shadow-sm">
            Our Mission
          </h2>
          <p className="text-gray-700 mt-6 text-center leading-8 text-lg">
            SkillEmpower is committed to equipping individuals with the tools they need to succeed. 
            By offering free, high-quality training programs, we empower participants to reach their full potential, 
            unlock their creativity, and achieve financial independence.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-16 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-4xl font-semibold text-purple-700 text-center drop-shadow-sm">
            Our Vision
          </h2>
          <p className="text-gray-700 mt-6 text-center leading-8 text-lg">
            We envision a future where everyone has equal access to skill development, 
            regardless of their background, enabling them to thrive in a dynamic and evolving world.
          </p>
        </div>

        {/* Acknowledgment Section */}
        <div className="bg-purple-50 shadow-xl rounded-xl p-8 mb-16">
          <h2 className="text-4xl font-semibold text-purple-700 text-center drop-shadow-sm">
            Our Story
          </h2>
          <p className="text-gray-700 mt-6 leading-8 text-lg">
            SkillEmpower is made possible by the unwavering dedication of our sponsors, mentors, and volunteers. 
            We are especially grateful to <span className="font-medium text-purple-800">Dike Akoghi'La Mba</span>, 
            whose generous support and vision for a better future have been instrumental in driving our mission forward. 
            Together, we strive to make impactful skill-building accessible to all.
          </p>
        </div>

        {/* Impact Section */}
        <div className="mb-16 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-4xl font-semibold text-purple-700 text-center drop-shadow-sm">
            Our Impact
          </h2>
          <p className="text-gray-700 mt-6 text-center leading-8 text-lg">
            Since our launch, SkillEmpower has transformed countless lives by providing hands-on training 
            in diverse fields such as catering, cosmetology, professional driving, and more. 
            Our graduates go on to build thriving careers, start businesses, and uplift their communities.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20"> {/* Increased margin-top */}
          <h2 className="text-4xl font-semibold text-purple-700 drop-shadow-sm">Join Our Mission</h2>
          <p className="text-gray-700 mt-6 leading-8 text-lg max-w-3xl mx-auto">
            Be a part of this transformative journey. Whether you're looking to acquire new skills, 
            share your expertise, or support our initiatives, there's a place for you at SkillEmpower.
          </p>
          <a
            href="/register"
            className="mt-10 inline-block px-8 py-4 bg-purple-700 text-white text-lg rounded-lg shadow-lg hover:bg-purple-800 transition-all"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
