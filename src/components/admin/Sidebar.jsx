import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside>
      <h2>KPS</h2>

      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/admin/products">Products</Link>
          </li>

          <li>
            <Link to="/admin/categories">Categories</Link>
          </li>

          <li>
            <Link to="/admin/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
