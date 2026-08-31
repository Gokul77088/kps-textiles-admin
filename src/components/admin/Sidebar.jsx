import { NavLink } from "react-router-dom"

function Sidebar({ sidebarOpen }) {
  return (
    <aside
      className={
        sidebarOpen ? "admin-sidebar expanded" : "admin-sidebar collapsed"
      }
    >
      <div className="sidebar-logo">
        <h2>KPS</h2>

        <span>TEXTILES</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-icon">📊</span>

          <span className="sidebar-title">Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-icon">📦</span>

          <span className="sidebar-title">Products</span>
        </NavLink>

        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-icon">🗂️</span>

          <span className="sidebar-title">Categories</span>
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-icon">⚙️</span>

          <span className="sidebar-title">Settings</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
