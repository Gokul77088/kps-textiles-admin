import { useState } from "react"
import { useCategories } from "../../context/CategoryContext"
import Modal from "../../components/admin/Modal"
import { useProducts } from "../../context/ProductContext"

function Categories() {
  const { categories, setCategories } = useCategories()
  const { products, setProducts } = useProducts()
  const [newCategory, setNewCategory] = useState("")
  const [editingCategory, setEditingCategory] = useState(null)
  const [editName, setEditName] = useState("")
  const [categoryToDelete, setCategoryToDelete] = useState(null)
  const [deleteError, setDeleteError] = useState("")

  // ADD CATEGORY

  function handleAddCategory(event) {
    event.preventDefault()

    const categoryName = newCategory.trim()

    if (!categoryName) {
      return
    }

    if (
      categories.some(
        (category) => category.toLowerCase() === categoryName.toLowerCase(),
      )
    ) {
      return
    }

    setCategories([...categories, categoryName])
    setNewCategory("")
  }

  // EDIT CATEGORY

  function handleEditCategory() {
    const updatedName = editName.trim()

    if (!updatedName) {
      return
    }

    if (
      categories.some(
        (category) =>
          category !== editingCategory &&
          category.toLowerCase() === updatedName.toLowerCase(),
      )
    ) {
      return
    }

    // UPDATE CATEGORY

    const updatedCategories = categories.map((category) => {
      if (category === editingCategory) {
        return updatedName
      }
      return category
    })

    // UPDATE PRODUCTS USING OLD CATEGORY

    const updatedProducts = products.map((product) => {
      if (product.category === editingCategory) {
        return {
          ...product,
          category: updatedName,
        }
      }

      return product
    })

    setCategories(updatedCategories)
    setProducts(updatedProducts)
    setEditingCategory(null)
    setEditName("")
  }

  // DELETE CATEGORY

  function handleDeleteCategory() {
    const productsUsingCategory = products.filter(
      (product) => product.category === categoryToDelete,
    )

    if (productsUsingCategory.length > 0) {
      setDeleteError(
        `Cannot delete "${categoryToDelete}". ${productsUsingCategory.length} product(s) are using this category.`,
      )

      return
    }

    const updatedCategories = categories.filter(
      (category) => category !== categoryToDelete,
    )

    setCategories(updatedCategories)
    setCategoryToDelete(null)
    setDeleteError("")
  }

  // COUNT PRODUCTS IN CATEGORY

  function getProductCount(category) {
    return products.filter((product) => product.category === category).length
  }

  return (
    <div className="categories-page">
      <div className="categories-header">
        <div>
          <h1>Categories</h1>
          <p>Manage your product categories</p>
        </div>
      </div>

      <div className="categories-summary">
        <div className="category-summary-card">
          <div className="summary-icon">🗂️</div>
          <div>
            <span>Total Categories</span>
            <strong>{categories.length}</strong>
          </div>
        </div>

        <div className="category-summary-card">
          <div className="summary-icon">📦</div>
          <div>
            <span>Total Products</span>
            <strong>{products.length}</strong>
          </div>
        </div>
      </div>

      <div className="add-category-card">
        <div className="section-heading">
          <div>
            <h2>Add Category</h2>
            <p>Create a new product category</p>
          </div>
        </div>

        <form className="add-category-form" onSubmit={handleAddCategory}>
          <input
            type="text"
            placeholder="Enter category name"
            value={newCategory}
            onChange={(event) => setNewCategory(event.target.value)}
          />
          <button type="submit">+ Add Category</button>
        </form>
      </div>

      <div className="category-list-card">
        <div className="section-heading">
          <div>
            <h2>Categories</h2>
            <p>
              {categories.length} categor
              {categories.length === 1 ? "y" : "ies"}
            </p>
          </div>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <div className="category-item" key={category}>
              <div className="category-info">
                <div className="category-icon">🗂️</div>
                <div>
                  <h3>{category}</h3>
                  <p>
                    {getProductCount(category)} product
                    {getProductCount(category) !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* ACTIONS */}

              <div className="category-actions">
                <button
                  className="category-edit-button"
                  onClick={() => {
                    setEditingCategory(category)
                    setEditName(category)
                  }}
                >
                  Edit
                </button>

                <button
                  className="category-delete-button"
                  onClick={() => setCategoryToDelete(category)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* EMPTY STATE */}

          {categories.length === 0 && (
            <div className="categories-empty">
              <div>🗂️</div>
              <h3>No categories yet</h3>
              <p>Add your first product category above.</p>
            </div>
          )}
        </div>
      </div>

      {/* EDIT CATEGORY */}

      {editingCategory && (
        <div className="edit-category-card">
          <div className="section-heading">
            <div>
              <h2>Edit Category</h2>
              <p>Update the category name</p>
            </div>
          </div>
          <input
            type="text"
            value={editName}
            onChange={(event) => setEditName(event.target.value)}
          />

          <div className="edit-category-actions">
            <button
              className="save-category-button"
              onClick={handleEditCategory}
            >
              Save
            </button>

            <button
              className="cancel-category-button"
              onClick={() => {
                setEditingCategory(null)
                setEditName("")
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}

      {categoryToDelete && (
        <Modal
          title="Delete Category"
          message={
            deleteError ||
            `Are you sure you want to delete "${categoryToDelete}"?`
          }
          onConfirm={handleDeleteCategory}
          onCancel={() => {
            setCategoryToDelete(null)
            setDeleteError("")
          }}
        />
      )}
    </div>
  )
}

export default Categories;
