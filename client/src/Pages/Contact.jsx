import React from 'react'
const Contact = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or need help booking an appointment?
            Our team is here to help you.
          </p>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow p-6 ">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                📍 Our Location
              </h3>
              <p className="text-gray-600">
                CareConnect Medical Center <br />
                Gisenyi, Rwanda
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 ">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                📞 Phone
              </h3>
              <p className="text-gray-600">+250 790 154 496</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 ">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                ✉️ Email
              </h3>
              <p className="text-gray-600">support@healthbook.com</p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow p-8 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-1 w-full h-10 pl-4 border rounded-1xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="mt-1 w-full h-10 pl-4 border rounded-1xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="mt-1 w-full h-10 pl-4 border rounded-1xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-400 text-white py-3 rounded-xl font-semibold shadow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
