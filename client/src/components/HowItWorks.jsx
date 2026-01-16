import React from 'react'
const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <Step icon="🔍" title="Search" desc="Find your specialist" />
            <Step icon="📅" title="Select" desc="Choose a convenient time" />
            <Step icon="✅" title="Confirm" desc="Get instant confirmation" />
        </div>
    </section>
  )
  function Step({ icon, title, desc }) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
      );
    }
}
export default HowItWorks
