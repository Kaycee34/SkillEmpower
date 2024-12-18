"use client";
import { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import logo from '../../public/skillempower.png'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-12 px-6">
      <header className="text-center mb-12">
        <img
          src={logo}
          alt="SkillEmpower Logo"
          className="mx-auto h-16 mb-4"
        />
        <h1 className="text-4xl font-bold text-purple-800">Welcome to SkillEmpower</h1>
        <p className="text-gray-800 font-xl font-semibold mt-2">
          Empower your skills and join us today! Fill in the form to register.
        </p>
      </header>

      <section className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                id="name"
                className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                id="email"
                className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 focus:outline-none"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-400 focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Register
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-800">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-700 font-semibold hover:underline"
            >
              Log in
            </a>
          </p>
          <p className="text-gray-800 mt-2">
            By signing up, you agree to our{" "}
            <a
              href="/terms"
              className="text-purple-700 font-semibold hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="text-purple-700 font-semibold hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
