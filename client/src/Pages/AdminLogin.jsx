import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [loading, setLoading ] = useState(false);
  const [error, setError ] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(' ')
    try {
      const res = await axios.post(
        'http://localhost:5001/api/admin/login',
        { email, password }
      )
      if (res.data.success) {
        localStorage.setItem('adminToken', res.data.token);
        toast.success(res.data.message);
        navigate('/admindashboard');
      }
    } catch (error) {
      setError (
        toast.error(error.response?.data?.message) || 'Login failed'
      )
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Login
          </h1>
          <p className="text-gray-600 mt-2">
            Secure system access
          </p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@careconnect.com"
              required
              className="w-full pl-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full pl-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold shadow transition"
          >
           {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Authorized personnel only
        </p>
      </div>
    </section>
  )
}
export default AdminLogin
