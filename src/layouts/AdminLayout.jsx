import { Outlet } from "react-router-dom"
import AdminHeader from "../components/admin/AdminHeader"
import Sidebar from "../components/admin/Sidebar"

function AdminLayout() {
  return (
    <div>
      <AdminHeader />

      <div>
        <Sidebar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
