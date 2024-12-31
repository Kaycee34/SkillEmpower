"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import logo from "../../public/skillempower.png";

const Register = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setError("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, password, confirmPassword } = formData;

    // Validate inputs
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Submit logic
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
      const response = await fetch(`${backendUrl}/api/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess("Registration successful! Redirecting...");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        setTimeout(() => {
          navigate("/"); // Redirect to the homepage
        }, 3000); // Redirect after 3 seconds
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Unable to register. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-12 px-6">
      <header className="text-center mb-12">
        <img src={logo} alt="SkillEmpower Logo" className="mx-auto h-16 mb-4" />
        <h1 className="text-4xl font-bold text-purple-800">Welcome to SkillEmpower</h1>
        <p className="text-gray-800 font-xl font-semibold mt-2">
          Empower your skills and join us today! Fill in the form to register.
        </p>
      </header>

      <section className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter your password"
              />
              {showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(false)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(true)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-800 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Confirm your password"
              />
              {showConfirmPassword ? (
                <EyeOff
                  onClick={() => setShowConfirmPassword(false)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={() => setShowConfirmPassword(true)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg font-medium text-lg focus:outline-none"
          >
            Register
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
