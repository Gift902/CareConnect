import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserChatIcon from '../components/UserChatIcon'
const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.clear();
      navigate('/', {replace: true});
    };
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              User Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Welcome back, Gift
            </p>
          </div>
        <div className="flex items-center gap-6">
          <UserChatIcon />
          <button
            onClick={handleLogout}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold shadow"
          >
            Logout
          </button>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white rounded-2xl shadow p-4 space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-4 py-2 rounded-xl font-medium ${
                activeTab === 'overview'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              🏠 Overview
            </button>
            <button
              onClick={() => setActiveTab('appointments')}
              className={`w-full text-left px-4 py-2 rounded-xl font-medium ${
                activeTab === 'appointments'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              📅 My Appointments
            </button>
            <button
              onClick={() => setActiveTab('doctors')}
              className={`w-full text-left px-4 py-2 rounded-xl font-medium ${
                activeTab === 'doctors'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              👨‍⚕️ Find Doctors
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-2 rounded-xl font-medium ${
                activeTab === 'profile'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              ⚙️ Profile
            </button>
          </div>
          {/* Main Content */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow p-6">
            {/* OVERVIEW */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Overview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-blue-50">
                    <h3 className="text-gray-600">Upcoming Appointments</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">2</p>
                  </div>
                  <div className="p-6 rounded-xl bg-green-50">
                    <h3 className="text-gray-600">Completed Visits</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">6</p>
                  </div>
                  <div className="p-6 rounded-xl bg-orange-50">
                    <h3 className="text-gray-600">Favorite Doctors</h3>
                    <p className="text-3xl font-bold text-orange-600 mt-2">3</p>
                  </div>
                </div>
              </div>
            )}
            {/* APPOINTMENTS */}
            {activeTab === 'appointments' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  My Appointments
                </h2>
                <div className="space-y-4">
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between p-4 shadow rounded-xl"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          Dr. John Doe
                        </p>
                        <p className="text-sm text-gray-600">
                          Tomorrow · 2:00 PM
                        </p>
                      </div>
                      <span className="text-sm px-3 py-1 rounded-lg bg-blue-100 text-blue-600">
                        Upcoming
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* FIND DOCTORS */}
            {activeTab === 'doctors' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Find Doctors
                </h2>
                <p className="text-gray-600 mb-4">
                  Browse available doctors and book an appointment.
                </p>
                <Link
                  to="/doctors"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow"
                >
                  View Doctors
                </Link>
              </div>
            )}
            {/* PROFILE */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Profile Settings
                </h2>
                <div className="space-y-4 max-w-lg">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border pl-4 py-2 rounded-xl border-gray-300"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border pl-4 py-2 rounded-xl border-gray-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border pl-4 py-2 rounded-xl border-gray-300"
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default UserDashboard
