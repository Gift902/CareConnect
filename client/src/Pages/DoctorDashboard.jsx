import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DoctorChatIcon from '../components/DoctorChatIcon'
const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Doctor Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Welcome back, Dr. John Doe
            </p>
          </div>
          <div className="flex items-center gap-6">
          <DoctorChatIcon />

          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold shadow"
          >
            Logout
          </Link>
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
              📊 Overview
            </button>
            <button
              onClick={() => setActiveTab('appointments')}
              className={`w-full text-left px-4 py-2 rounded-xl font-medium ${
                activeTab === 'appointments'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              📅 Appointments
            </button>
            <button
              onClick={() => setActiveTab('patients')}
              className={`w-full text-left px-4 py-2 rounded-xl font-medium ${
                activeTab === 'patients'
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              👥 Patients
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
                    <h3 className="text-gray-600">Today Appointments</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
                  </div>
                  <div className="p-6 rounded-xl bg-green-50">
                    <h3 className="text-gray-600">Total Patients</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">124</p>
                  </div>
                  <div className="p-6 rounded-xl bg-orange-50">
                    <h3 className="text-gray-600">Pending Requests</h3>
                    <p className="text-3xl font-bold text-orange-600 mt-2">3</p>
                  </div>
                </div>
              </div>
            )}
            {/* APPOINTMENTS */}
            {activeTab === 'appointments' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Appointments
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between p-4 shadow rounded-xl"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          Patient Name
                        </p>
                        <p className="text-sm text-gray-600">
                          Today · 10:00 AM
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <button className="px-4 py-1 rounded-lg bg-green-500 text-white text-sm">
                          Accept
                        </button>
                        <button className="px-4 py-1 rounded-lg bg-red-500 text-white text-sm">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* PATIENTS */}
            {activeTab === 'patients' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Patients
                </h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="p-4 shadow rounded-xl flex justify-between"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          Patient Name
                        </p>
                        <p className="text-sm text-gray-600">
                          Last Visit: Jan 10, 2026
                        </p>
                      </div>
                      <button className="text-blue-600 hover:underline text-sm">
                        View Profile
                      </button>
                    </div>
                  ))}
                </div>
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
                    className="w-full pl-4 py-2 border rounded-xl border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Specialty"
                    className="w-full pl-4 py-2 border rounded-xl border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full pl-4 py-2 border rounded-xl border-gray-300"
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
export default DoctorDashboard
