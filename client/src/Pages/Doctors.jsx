import React from 'react'
import { Link } from 'react-router-dom'
const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Cardiology',
    image: '/imgs/doctor1.jpg',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialty: 'Dermatology',
    image: '/imgs/doctor2.jpg',
  },
  {
    id: 3,
    name: 'Dr. Alex Brown',
    specialty: 'Pediatrics',
    image: '/imgs/doctor3.jpg',
  },
  {
    id: 4,
    name: 'Dr. Maria Johnson',
    specialty: 'Neurology',
    image: '/imgs/doctor4.jpg',
  },
]
const Doctors = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Doctors
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose a specialist and book your appointment easily
          </p>
        </div>
        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-2xl hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 mt-1">
                  {doctor.specialty}
                </p>
                <Link
                  to={`/userchat`}
                  className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Doctors
