import { useNavigate } from "react-router-dom"

function AdminHeader({ onMenuClick }) {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem("admin-auth")
    navigate("/admin/login")
  }

  return (
    <header className="admin-header">
      <div className="header-left">
        <button
          className="menu-button"
          onClick={onMenuClick}
          type="button"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <div className="header-brand">
          <h2>KPS Textiles</h2>
          <span>Admin Panel</span>
        </div>
      </div>

      <div className="header-right">
        <div className="admin-profile">
          <div className="admin-avatar">A</div>

          <div className="admin-info">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default AdminHeader
