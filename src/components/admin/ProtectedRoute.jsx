import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("admin-auth") === "true";

  if (!isAuthenticated) {
    return ( <Navigate to="/admin/login" replace />)
  }

  return <Outlet />
}

export default ProtectedRoute;
