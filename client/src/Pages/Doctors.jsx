import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchedDoctors = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/doctors");
        console.log(res.data);
        setDoctors(res.data);
      } catch (error) {
        console.error("Failed to fetch doctors", error);
      }
    };
    fetchedDoctors();
  }, []);
  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Doctors
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose a specialist and book your appointment easily
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white rounded-2xl shadow-2xl hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src = {`http://localhost:5001/uploads/images/${doctor.image}`}
                alt="doctor-image"
                className="w-full h-90 sm:h-48 md:h-56 lg:h-64  bg-gray-100 rounded-t-2xl overflow-hidden flex items-center justify-center"
              />
              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 mt-1">
                  {doctor.speciality}
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
