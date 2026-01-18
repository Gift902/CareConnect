import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Contact from './Pages/Contact'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import DoctorSignup from './Pages/DoctorSignup'
import DoctorLogin from './Pages/DoctorLogin'
import DoctorDashboard from './Pages/DoctorDashboard'
import UserDashboard from './Pages/UserDashboard'
import DoctorChat from './Pages/DoctorChat'
import UserChat from './Pages/UserChat'
import DoctorChats from './Pages/DoctorChats'
import UserChats from './Pages/UserChats'
import ProtectedRoute from './components/ProtectedRoute';
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/doctors' element={<Doctors />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/doctorsignup' element={<DoctorSignup />}></Route>
      <Route path='/doctorlogin' element={<DoctorLogin />}></Route>
      <Route path='/doctordashboard' element={<DoctorDashboard />}></Route>
      <Route path='/userdashboard' element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
      }></Route>
      <Route path='/doctorchat' element={<DoctorChat />}></Route>
      <Route path='/userchat' element={<UserChat />}></Route>
      <Route path='/doctorchats' element={<DoctorChats />}></Route>
      <Route path='/userchats' element={<UserChats />}></Route>
    </Routes>
    <ToastContainer
        position="top-right"
        autoClose={1000} // close after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
export default App
