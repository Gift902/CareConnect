import React, { useState } from 'react'
import { Link, Links } from 'react-router-dom'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          CareConnect
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link to={'/'} className="hover:text-blue-600 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to={'/doctors'} className="hover:text-blue-600 cursor-pointer">
              Doctors
            </Link>
          </li>
          <li>
            <Link to={'/contact'} className="hover:text-blue-600 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            <li>
              <Link to={'/'} className="hover:text-blue-600 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/doctors'} className="hover:text-blue-600 cursor-pointer">
                Doctors
              </Link>
            </li>
            <li>
              <Link to={'/contact'} className="hover:text-blue-600 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
export default Navbar
