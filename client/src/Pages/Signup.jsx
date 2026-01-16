import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-blue-50 to-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create an Account
          </h1>
          <p className="mt-2 text-gray-600">
            Join HealthBook and book appointments easily
          </p>
        </div>
        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full pl-4 h-10 rounded-xl border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full pl-4 h-10 rounded-xl border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full pl-4 h-10 rounded-xl border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full pl-4 h-10 rounded-xl border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Signup Button */}
          <Link
            to="/login"
            className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow"
          >
            Sign Up
          </Link>
        </form>
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Signup
