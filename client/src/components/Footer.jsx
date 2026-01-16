import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-white font-bold mb-4">CareConnect</h3>
                <p>Doctor booking you can trust.</p>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-3">Links</h4>
                <ul className="space-y-2">
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-3">Get the App</h4>
                <div className="flex gap-4">
                    <span className="bg-gray-700 px-4 py-2 rounded">App Store</span>
                    <span className="bg-gray-700 px-4 py-2 rounded">Google Play</span>
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer
