import React from 'react'
const TrustBar = () => {
  return (
    <section className="bg-white py-10 text-center">
        <div className="flex flex-wrap justify-center gap-8 mb-4">
            <span>🏥 City Hospital</span>
            <span>🏥 Care Plus</span>
            <span>🏥 MedLife</span>
            <span>🏥 HealthFirst</span>
        </div>
        <p className="text-gray-600">
        <strong>50,000+</strong> Appointments · <strong>500+</strong> Verified Doctors
        </p>
    </section>
  )
}
export default TrustBar
