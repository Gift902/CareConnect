import { Navigate, Outlet } from 'react-router-dom';
const DoctorProtectedRoute = () => {
  const token = localStorage.getItem('doctorToken');
  console.log("Token:", token);
  if (!token) {
    return <Navigate to="/doctorlogin" replace />;
  }
  return <Outlet />;
};
export default DoctorProtectedRoute;
