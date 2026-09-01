import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useProducts } from "../../context/ProductContext"
import { useCategories } from "../../context/CategoryContext"

function EditProduct() {
  const { id } = useParams()
  const { products, setProducts } = useProducts()
  const { categories } = useCategories()
  const navigate = useNavigate()
  const product = products.find((product) => product.id === Number(id))
  const [formData, setFormData] = useState(() => ({
    name: product?.name || "",
    sku: product?.sku || "",
    description: product?.description || "",
    price: product?.price || "",
    quantity: product?.quantity || "",
    category: product?.category || "",
    image: product?.image || "",
  }))

  if (!product) {
    return (
      <div className="product-form-page">
        <div className="product-not-found">
          <h1>Product Not Found</h1>
          <p>The product you are trying to edit does not exist.</p>
          <button onClick={() => navigate("/admin/products")}>
            Back to Products
          </button>
        </div>
      </div>
    )
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
      setFormData((previousData) => ({
        ...previousData,
        image: reader.result,
      }))
    }

    reader.readAsDataURL(file)
  }

  // UPDATE PRODUCT

  function handleSubmit(event) {
    event.preventDefault()
    const updatedProduct = {
      ...product,
      name: formData.name,
      sku: formData.sku,
      description: formData.description,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      category: formData.category,
      image: formData.image,
    }

    const updatedProducts = products.map((product) => {
      if (product.id === Number(id)) {
        return updatedProduct
      }

      return product
    })

    setProducts(updatedProducts)
    navigate("/admin/products")
  }

  return (
    <div className="product-form-page">
      <div className="product-form-header">
        <div>
          <h1>Edit Product</h1>
          <p>Update the details of your product</p>
        </div>
      </div>

      <div className="product-form-card">
        <form onSubmit={handleSubmit}>

          <div className="form-section">
            <div className="form-section-header">
              <h2>Product Information</h2>
              <p>Update the basic details of the product</p>
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
              <p>Update the price, quantity and category</p>
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
              <p>Update the image for this product</p>
            </div>
            <div className="image-upload-area">
              <label className="image-upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <span className="upload-icon">📷</span>
                <strong>Click to change image</strong>
                <span>PNG, JPG or JPEG</span>
              </label>


              {formData.image && (
                <div className="image-preview">
                  <p>Image Preview</p>
                  <div className="preview-container">
                    <img src={formData.image} alt={formData.name} />
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct
