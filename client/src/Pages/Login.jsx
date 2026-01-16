import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-blue-50 to-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>
          <p className="mt-2 text-gray-600">
            Login to manage your appointments
          </p>
        </div>
        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full pl-4 h-10 rounded-1xl border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full pl-4 h-10 rounded-1xl border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          {/* Login Button → Link */}
          <Link
            to="/userdashboard"
            className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow"
          >
            Login
          </Link>
        </form>
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Login
