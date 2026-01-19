import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Health, Your Schedule</h1>
                <p className="text-lg mb-6">Book trusted doctors in minutes. Easy, secure, anytime.</p>
                <div className='space-x-5'>
                    <Link to={'/signup'} className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold shadow">
                    Enter as a patient
                    </Link>
                    <Link to={'/doctorsignup'} className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold shadow">
                    Enter as a doctor
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <img
                src='/imgs/doctors.jpg'
                alt="Doctor Illustration"
                className="rounded-2xl shadow-xl"/>
            </div>
        </div>
    </section>
  )
}
export default Hero
