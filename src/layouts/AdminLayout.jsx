import { useState } from "react"
import { Outlet } from "react-router-dom"
import AdminHeader from "../components/admin/AdminHeader"
import Sidebar from "../components/admin/Sidebar"
import "../styles/admin.css"

function AdminLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  function handleMenuClick() {
    setIsSidebarCollapsed((previousState) => {
      return !previousState
    })
  }

  return (
    <div
      className={
        isSidebarCollapsed
          ? "admin-layout sidebar-collapsed"
          : "admin-layout sidebar-expanded"
      }
    >

      <AdminHeader onMenuClick={handleMenuClick} />

      <div className="admin-body">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
