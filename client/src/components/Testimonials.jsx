import React from 'react'
const Testimonials = () => {
  return (
    <section className="bg-white py-16">
    <h2 className="text-3xl font-bold text-center mb-12">What Patients Say</h2>
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
        <div key={i} className="shadow rounded-2xl p-6">
            <div className="flex items-center mb-4">
                <img src="/imgs/001.jpg" className="w-20 h-20 rounded-full mr-4"/>
                <div>
                    <h4 className="font-semibold">Patient {i}</h4>
                    <p className="text-yellow-400">★★★★★</p>
                </div>
            </div>
            <p className="text-gray-600">Very easy and fast doctor booking experience.</p>
        </div>
        ))}
    </div>
    </section>
  )
}
export default Testimonials
