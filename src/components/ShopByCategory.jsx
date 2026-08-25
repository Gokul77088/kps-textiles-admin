const categories = [
  {
    id: 1,
    name: "SAREES",
    image: "/category-sarees.png",
  },
  {
    id: 2,
    name: "KURTIS",
    image: "/category-kurtis.png",
  },
  {
    id: 3,
    name: "SILK MATERIALS",
    image: "/category-dress-materials.png",
  },
  {
    id: 4,
    name: "MEN",
    image: "/category-men.png",
  },
  {
    id: 5,
    name: "KIDS",
    image: "/category-kids.png",
  },
  {
    id: 6,
    name: "SALE",
    sale: true,
    discount: "40%",
  },
]

function ShopByCategory() {
  return (
    <section className="shop-category">
      <div className="shop-category-header">
        <h2>SHOP BY CATEGORY</h2>

        <div className="shop-category-ornament">
          <span></span>
          <span>✦</span>
          <span></span>
        </div>
      </div>

      <div className="category-list">
        {categories.map((category) => (
          <div className="category-item" key={category.id}>
            {category.sale ? (
              <div className="category-sale">
                <span className="sale-label">UP TO</span>
                <strong>{category.discount}</strong>
                <span className="sale-label">OFF</span>
              </div>
            ) : (
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              </div>
            )}

            <h3>{category.name}</h3>

            <button type="button" className="category-link">
              VIEW ALL
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ShopByCategory
