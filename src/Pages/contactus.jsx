import { Mail, Phone, MapPin, User, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-12 px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-800">Contact Us</h1>
        <p className="text-gray-700 mt-4">
          We're here to answer your questions and hear your feedback. Reach out to us!
        </p>
      </header>

      <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Contact Information */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">
              Contact Information
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Phone className="text-purple-700 w-6 h-6" />
                <div>
                  <span className="block font-semibold text-gray-800">Phone</span>
                  <a href="tel:+1234567890" className="text-gray-700 hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-purple-700 w-6 h-6" />
                <div>
                  <span className="block font-semibold text-gray-800">Email</span>
                  <a href="mailto:info@skillempower.com" className="text-gray-700 hover:underline">
                    info@skillempower.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="text-purple-700 w-6 h-6" />
                <div>
                  <span className="block font-semibold text-gray-800">Address</span>
                  <span>123 Empowerment Lane, Opportunity City, Future State</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
