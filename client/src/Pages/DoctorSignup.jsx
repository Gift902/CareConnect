import React from 'react'
import { Link } from 'react-router-dom'
const DoctorSignup = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-blue-50 to-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Doctor Registration
          </h1>
          <p className="mt-2 text-gray-600">
            Join HealthBook and start accepting appointments
          </p>
        </div>
        {/* Form */}
        <form className="space-y-5">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Dr. John Doe"
                className="mt-1 w-full h-10 border pl-4 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="doctor@example.com"
                className="mt-1 w-full h-10 border pl-4 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          {/* Professional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Specialty
              </label>
              <input
                type="text"
                placeholder="Cardiology"
                className="mt-1 w-full h-10 border pl-4 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                License Number
              </label>
              <input
                type="text"
                placeholder="Medical License ID"
                className="mt-1 w-full h-10 border pl-4 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+250 7xx xxx xxx"
                className="mt-1 w-full h-10 border pl-4 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CV
              </label>
              <input
                type="file"
                placeholder="HealthBook Clinic"
                className="mt-1 w-full h-10 border pl-4 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          {/* Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full h-10 border pl-4 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          {/* Submit */}
          <Link
            to="/doctorlogin"
            className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow"
          >
            Register as Doctor
          </Link>
        </form>
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Already registered?{' '}
          <Link to="/doctorlogin" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </div>
      </div>
    </section>
  )
}
export default DoctorSignup
