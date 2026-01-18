import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post(
        "http://localhost:5001/api/Users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      setMessage(toast.success(res.data.message));
      setFormData({name: "", email: "", password: ""});
      navigate('/login');
    } catch (error) {
      setMessage(
        toast.error(error.response?.data?.message) || "Something went wrong"
      );
    }finally {
      setLoading(false);
    }
  };
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
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name='name'
              autoComplete='off'
              value={formData.name}
              placeholder="John Doe"
              className="mt-1 w-full pl-4 h-10 rounded-xl border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name='email'
              autoComplete='off'
              value={formData.email}
              placeholder="you@example.com"
              className="mt-1 w-full pl-4 h-10 rounded-xl border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name='password'
              autoComplete='off'
              value={formData.password}
              placeholder="••••••••"
              className="mt-1 w-full pl-4 h-10 rounded-xl border-gray-300 border focus:ring-blue-500 focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          {/* Signup Button */}
          <button
            type="submit"
            className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
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
