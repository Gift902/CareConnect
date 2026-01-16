import React from 'react'
const Specialists = () => {
    const items = [
        "General Practice",
        "Dentistry",
        "Cardiology",
        "Dermatology",
        "Pediatrics",
        "Orthopedics",
    ];
  return (
    <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Specialties</h2>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item) => (
            <div key={item} className="shadow rounded-2xl p-6 text-center hover:shadow">
                <div className="text-4xl mb-4">🩺</div>
                <h3 className="font-semibold text-xl mb-2">{item}</h3>
                <a href="#" className="text-blue-600 font-medium">Book Now →</a>
            </div>
            ))}
        </div>
    </section>
  )
}
export default Specialists
