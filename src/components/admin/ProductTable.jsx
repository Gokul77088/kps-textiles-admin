import { Link } from "react-router-dom"

function ProductTable({ products, onDelete }) {
  return (
    <div className="product-table-wrapper">
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>SKU Code</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="table-product-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </td>
              <td>
                <div className="table-product-name">{product.name}</div>
              </td>
              <td>
                <strong>{product.sku}</strong>
              </td>
              <td>
                <strong>₹{product.price}</strong>
              </td>
              <td>
                <span className="category-badge">{product.category}</span>
              </td>
              <td>{product.quantity}</td>
              <td>
                <span
                  className={
                    product.quantity > 0
                      ? "status-badge in-stock"
                      : "status-badge out-stock"
                  }
                >
                  {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </td>
              <td>
                <div className="table-actions">
                  <Link
                    to={`/admin/products/edit/${product.id}`}
                    className="edit-button"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => onDelete(product)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
