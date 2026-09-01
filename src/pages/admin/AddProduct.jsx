import { useState } from "react"
import { useProducts } from "../../context/ProductContext"
import { useNavigate } from "react-router-dom"
import { useCategories } from "../../context/CategoryContext"

function AddProduct() {
  const { products, setProducts } = useProducts()
  const { categories } = useCategories()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    image: "",
  })

  function handleSubmit(event) {
    event.preventDefault()

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      sku: formData.sku,
      description: formData.description,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      category: formData.category,
      image: formData.image,
    }

    setProducts([...products, newProduct])
    navigate("/admin/products")
  }

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleImageChange(event) {
    const file = event.target.files[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="product-form-page">
      <div className="product-form-header">
        <div>
          <h1>Add Product</h1>
          <p>Add a new product to your inventory</p>
        </div>
      </div>

      <div className="product-form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="form-section-header">
              <h2>Product Information</h2>
              <p>Enter the basic details of the product</p>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>SKU Code</label>
                <input
                  type="text"
                  name="sku"
                  placeholder="Enter SKU code"
                  value={formData.sku}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field form-field-full">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Enter product description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-header">
              <h2>Inventory Details</h2>
              <p>Set the price, quantity and category</p>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label>Price</label>
                <div className="input-prefix">
                  <span>₹</span>
                  <input
                    type="number"
                    name="price"
                    placeholder="0"
                    min="0"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  min="0"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-header">
              <h2>Product Image</h2>
              <p>Upload an image for this product</p>
            </div>

            <div className="image-upload-area">
              <label className="image-upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />

                <span className="upload-icon">📷</span>
                <strong>Click to upload image</strong>
                <span>PNG, JPG or JPEG</span>
              </label>

              {formData.image && (
                <div className="image-preview">
                  <p>Image Preview</p>
                  <div className="preview-container">
                    <img src={formData.image} alt="Product preview" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="product-form-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/admin/products")}
            >
              Cancel
            </button>

            <button type="submit" className="submit-button">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
