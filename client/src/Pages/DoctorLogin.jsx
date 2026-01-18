import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const DoctorLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/doctors/login', formData);
      localStorage.setItem('doctorToken', res.data.token);
      toast.success('Login successful ' + res.data.doctor.name);
      navigate('/doctordashboard');
    } catch (error) {
      console.log(error.response?.data);
      toast.error(error.response?.data.message || error.response?.data.error);
    }
  };
  return (
    <section className="min-h-screen bg-linear-to-b from-blue-50 to-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Doctor Login
          </h1>
          <p className="mt-2 text-gray-600">
            Access your appointments and patients
          </p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name='email'
              onChange={handleChange}
              placeholder="doctor@example.com"
              className="mt-1 w-full h-10 border pl-4 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name='password'
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1 w-full h-10 border pl-4 rounded-xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
          {/* Login Button */}
          <button
            className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow"
          >
            Login as Doctor
          </button>
        </form>
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Don’t have a doctor account?{' '}
          <Link
            to="/doctorsignup"
            className="text-blue-600 hover:underline font-medium"
          >
            Register here
          </Link>
        </div>
      </div>
    </section>
  )
}
export default DoctorLogin
