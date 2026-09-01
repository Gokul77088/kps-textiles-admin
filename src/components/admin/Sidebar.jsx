import { NavLink } from "react-router-dom"

function Sidebar({ isCollapsed }) {
  return (
    <aside
      className={isCollapsed ? "admin-sidebar collapsed" : "admin-sidebar"}
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
          <span className="sidebar-text">Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-icon">📦</span>

          <span className="sidebar-text">Products</span>
        </NavLink>

        <NavLink
          to="/admin/categories"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-icon">🗂️</span>

          <span className="sidebar-text">Categories</span>
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-icon">⚙️</span>

          <span className="sidebar-text">Settings</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
