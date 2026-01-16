import React from 'react'
const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
            <Feature icon="🕐" title="24/7 Booking" desc="Anytime, anywhere" />
            <Feature icon="✓" title="Verified Doctors" desc="Credentials checked" />
            <Feature icon="🔒" title="Secure & Private" desc="Data protected" />
            <Feature icon="⚡" title="Instant Confirmation" desc="No waiting" />
        </div>
    </section>
  )
  function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
}
export default WhyChooseUs
