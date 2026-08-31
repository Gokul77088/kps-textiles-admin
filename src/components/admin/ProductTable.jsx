import { Link } from "react-router-dom"

function ProductTable({ products, onDelete }) {
  return (
    <div className="product-table-wrapper">
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
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
              {/* IMAGE */}

              <td>
                <div className="table-product-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </td>

              {/* NAME */}

              <td>
                <div className="table-product-name">{product.name}</div>
              </td>

              {/* PRICE */}

              <td>
                <strong>₹{product.price}</strong>
              </td>

              {/* CATEGORY */}

              <td>
                <span className="category-badge">{product.category}</span>
              </td>

              {/* QUANTITY */}

              <td>{product.quantity}</td>

              {/* STATUS */}

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

              {/* ACTIONS */}

              <td>
                <div className="table-actions">
                  {/* EDIT */}

                  <Link
                    to={`/admin/products/edit/${product.id}`}
                    className="edit-button"
                  >
                    Edit
                  </Link>

                  {/* DELETE */}

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
