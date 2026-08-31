import { useState } from "react"
import { useProducts } from "../../context/ProductContext"
import ProductTable from "../../components/admin/ProductTable"
import { Link } from "react-router-dom"
import Modal from "../../components/admin/Modal"

function Products() {
  const { products, setProducts } = useProducts()

  // SEARCH
  const [searchTerm, setSearchTerm] = useState("")

  // CATEGORY FILTER
  const [selectedCategory, setSelectedCategory] = useState("all")

  // DELETE
  const [productToDelete, setProductToDelete] = useState(null)

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 5

  // GET UNIQUE CATEGORIES
  const categories = [...new Set(products.map((product) => product.category))]

  // SEARCH + FILTER
  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase().trim()

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // TOTAL NUMBER OF PAGES
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // STARTING INDEX
  const startIndex = (currentPage - 1) * productsPerPage

  // PRODUCTS FOR CURRENT PAGE
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  )

  // DELETE PRODUCT
  function handleDeleteProduct() {
    const updatedProducts = products.filter(
      (product) => product.id !== productToDelete.id,
    )

    setProducts(updatedProducts)

    setProductToDelete(null)

    // Recalculate filtered products
    const newFilteredProducts = updatedProducts.filter((product) => {
      const search = searchTerm.toLowerCase().trim()

      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    const newTotalPages = Math.ceil(
      newFilteredProducts.length / productsPerPage,
    )

    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages)
    }

    if (newTotalPages === 0) {
      setCurrentPage(1)
    }
  }

  // SEARCH CHANGE
  function handleSearchChange(event) {
    setSearchTerm(event.target.value)
    setCurrentPage(1)
  }

  // CATEGORY CHANGE
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="products-page">
      {/* PAGE HEADER */}

      <div className="products-header">
        <div>
          <h1>Products</h1>

          <p>Manage your textile products</p>
        </div>

        <Link to="/admin/products/add" className="add-product-button">
          + Add Product
        </Link>
      </div>

      {/* SUMMARY */}

      <div className="products-summary">
        <div>
          <span>Total Products</span>

          <strong>{products.length}</strong>
        </div>

        <div>
          <span>Showing</span>

          <strong>{filteredProducts.length}</strong>
        </div>
      </div>

      {/* SEARCH + FILTER */}

      <div className="products-toolbar">
        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <select
          className="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* PRODUCT TABLE */}

      <div className="products-table-card">
        <div className="table-header">
          <div>
            <h2>Product List</h2>

            <p>
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <ProductTable
          products={paginatedProducts}
          onDelete={setProductToDelete}
        />

        {/* NO PRODUCTS */}

        {filteredProducts.length === 0 && (
          <div className="products-empty">
            <div className="empty-icon">📦</div>

            <h3>No products found</h3>

            <p>Try changing your search or category filter.</p>
          </div>
        )}
      </div>

      {/* PAGINATION */}

      {totalPages > 0 && (
        <div className="pagination">
          <button
            className="pagination-button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ← Previous
          </button>

          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={
                    currentPage === page ? "page-number active" : "page-number"
                  }
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ),
            )}
          </div>

          <button
            className="pagination-button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next →
          </button>
        </div>
      )}

      {/* DELETE MODAL */}

      {productToDelete && (
        <Modal
          title="Delete Product"
          message={`Are you sure you want to delete "${productToDelete.name}"?`}
          onConfirm={handleDeleteProduct}
          onCancel={() => setProductToDelete(null)}
        />
      )}
    </div>
  )
}

export default Products
