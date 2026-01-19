import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/')
  }
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              System control & management panel
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold shadow"
          >
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white rounded-2xl shadow p-4 space-y-2">
            {[
              { key: 'overview', label: '📊 Overview' },
              { key: 'doctors', label: '👨‍⚕️ Doctors' },
              { key: 'patients', label: '👥 Patients' },
              { key: 'appointments', label: '📅 Appointments' },
              { key: 'specialties', label: '🧠 Specialties' },
              { key: 'settings', label: '⚙️ Settings' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-left px-4 py-2 rounded-xl font-medium ${
                  activeTab === tab.key
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Main Content */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow p-6">
            {/* OVERVIEW */}
            {activeTab === 'overview' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Overview</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-blue-50">
                    <h3 className="text-gray-600">Total Doctors</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">42</p>
                  </div>
                  <div className="p-6 rounded-xl bg-green-50">
                    <h3 className="text-gray-600">Total Patients</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">310</p>
                  </div>
                  <div className="p-6 rounded-xl bg-orange-50">
                    <h3 className="text-gray-600">Pending Approvals</h3>
                    <p className="text-3xl font-bold text-orange-600 mt-2">5</p>
                  </div>
                </div>
              </>
            )}
            {/* DOCTORS */}
            {activeTab === 'doctors' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Doctors</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map(item => (
                    <div
                      key={item}
                      className="p-4 shadow rounded-xl flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          Dr. John Doe
                        </p>
                        <p className="text-sm text-gray-600">
                          Cardiology · Pending
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <button className="px-4 py-1 rounded-lg bg-green-500 text-white text-sm">
                          Approve
                        </button>
                        <button className="px-4 py-1 rounded-lg bg-red-500 text-white text-sm">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* PATIENTS */}
            {activeTab === 'patients' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Patients</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map(item => (
                    <div
                      key={item}
                      className="p-4 shadow rounded-xl flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          Patient Name
                        </p>
                        <p className="text-sm text-gray-600">
                          Registered: Jan 2026
                        </p>
                      </div>
                      <button className="text-red-600 hover:underline text-sm">
                        Block
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* APPOINTMENTS */}
            {activeTab === 'appointments' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Appointments</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map(item => (
                    <div
                      key={item}
                      className="p-4 shadow rounded-xl flex justify-between"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          Dr. Jane Smith → Patient Name
                        </p>
                        <p className="text-sm text-gray-600">
                          Jan 20, 2026 · 11:00 AM
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-blue-600">
                        Approved
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* SPECIALTIES */}
            {activeTab === 'specialties' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Specialties</h2>
                <div className="space-y-3 max-w-md">
                  <input
                    type="text"
                    placeholder="New Specialty"
                    className="w-full pl-4 py-2 border rounded-xl border-gray-300"
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold">
                    Add Specialty
                  </button>
                </div>
              </>
            )}
            {/* SETTINGS */}
            {activeTab === 'settings' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">System Settings</h2>
                <div className="space-y-4 max-w-lg">
                  <input
                    type="number"
                    placeholder="Max appointments per doctor/day"
                    className="w-full pl-4 py-2 border rounded-xl border-gray-300"
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold">
                    Save Settings
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default AdminDashboard
