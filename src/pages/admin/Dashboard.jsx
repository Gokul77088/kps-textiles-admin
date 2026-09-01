import { Link } from "react-router-dom"
import { useProducts } from "../../context/ProductContext"
import { useCategories } from "../../context/CategoryContext"

function Dashboard() {
  const { products } = useProducts()
  const { categories } = useCategories()

  const outOfStockProducts = products.filter(
    (product) => product.quantity === 0,
  )

  const recentProducts = [...products].reverse().slice(0, 5)

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div>
            <p>Total Products</p>
            <h2>{products.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🗂️</div>
          <div>
            <p>Total Categories</p>
            <h2>{categories.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div>
            <p>Out of Stock</p>
            <h2>{outOfStockProducts.length}</h2>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <div>
            <h2>Recent Products</h2>
            <p>Latest products added to your store</p>
          </div>
          <Link to="/admin/products" className="view-all-link">
            View All
          </Link>
        </div>

        {recentProducts.length > 0 ? (
          <div className="recent-products">
            {recentProducts.map((product) => (
              <div className="recent-product" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>

                <div className="product-price">
                  <strong>₹{product.price}</strong>
                  <span
                    className={
                      product.quantity > 0
                        ? "stock in-stock"
                        : "stock out-stock"
                    } 
                  >
                    {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No products available.</p>
            <Link to="/admin/products/add">Add your first product</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard;
