import { useState } from "react"
import { Outlet } from "react-router-dom"
import AdminHeader from "../components/admin/AdminHeader"
import Sidebar from "../components/admin/Sidebar"
import "../styles/admin.css"

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function toggleSidebar() {
    setSidebarOpen((previous) => !previous)
  }

  return (
    <div
      className={
        sidebarOpen
          ? "admin-layout sidebar-expanded"
          : "admin-layout sidebar-collapsed"
      }
    >
      <AdminHeader onMenuClick={toggleSidebar} />

      <div className="admin-body">
        <Sidebar sidebarOpen={sidebarOpen} />

        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
