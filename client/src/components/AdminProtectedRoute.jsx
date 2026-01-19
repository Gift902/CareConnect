import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import axios from 'axios'
const AdminProtectedRoute = () => {
  const token = localStorage.getItem('adminToken')
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!token) {
      setLoading(false)
      return
    }
    axios
      .get('http://localhost:5001/api/admin/dashboard', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => setVerified(true))
      .catch(() => {
        localStorage.removeItem('adminToken') // Remove invalid token
        setVerified(false)
      })
      .finally(() => setLoading(false))
  }, [token])
  if (loading) return <div>Loading...</div>
  if (!token || !verified) return <Navigate to="/adminlogin" replace />
  return <Outlet />
}
export default AdminProtectedRoute
