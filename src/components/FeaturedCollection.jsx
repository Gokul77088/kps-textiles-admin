import { useState } from "react"

const featuredProducts = [
  {
    id: 1,
    code: "G0770014",
    type: "Silk Saree",
    description:
      "Elegant silk saree crafted with traditional Indian detailing.",
    images: [
      "/featured-collection/saree-01/saree-01-main.webp",
      "/featured-collection/saree-01/saree-01-detail-02.webp",
      "/featured-collection/saree-01/saree-01-detail-03.webp",
      "/featured-collection/saree-01/saree-01-detail-04.webp",
      "/featured-collection/saree-01/saree-01-detail-05.webp",
    ],
  },

  {
    id: 2,
    code: "G0659076",
    type: "Silk Saree",
    description:
      "Graceful silk saree featuring timeless traditional craftsmanship.",
    images: [
      "/featured-collection/saree-02/saree-02-main.webp",
      "/featured-collection/saree-02/saree-02-detail-02.webp",
      "/featured-collection/saree-02/saree-02-detail-03.webp",
      "/featured-collection/saree-02/saree-02-detail-04.webp",
      "/featured-collection/saree-02/saree-02-detail-05.webp",
    ],
  },

  {
    id: 3,
    code: "G0660716",
    type: "Silk Saree",
    description: "A beautiful silk saree designed for timeless elegance.",
    images: [
      "/featured-collection/saree-03/saree-03-main.webp",
      "/featured-collection/saree-03/saree-03-detail-02.webp",
      "/featured-collection/saree-03/saree-03-detail-03.webp",
      "/featured-collection/saree-03/saree-03-detail-04.webp",
      "/featured-collection/saree-03/saree-03-detail-05.webp",
    ],
  },

  {
    id: 4,
    code: "F211644",
    type: "Silk Saree",
    description: "Traditional silk elegance with beautiful woven detailing.",
    images: [
      "/featured-collection/saree-04/saree-04-main.webp",
      "/featured-collection/saree-04/saree-04-detail-02.webp",
      "/featured-collection/saree-04/saree-04-detail-03.webp",
      "/featured-collection/saree-04/saree-04-detail-04.webp",
      "/featured-collection/saree-04/saree-04-detail-05.webp",
    ],
  },

  {
    id: 5,
    code: "G0652046",
    type: "Silk Saree",
    description: "Refined silk saree with rich traditional character.",
    images: [
      "/featured-collection/saree-05/saree-05-main.webp",
      "/featured-collection/saree-05/saree-05-detail-02.webp",
      "/featured-collection/saree-05/saree-05-detail-03.webp",
      "/featured-collection/saree-05/saree-05-detail-04.webp",
      "/featured-collection/saree-05/saree-05-detail-05.webp",
      "/featured-collection/saree-05/saree-05-detail-06.webp",
    ],
  },

  {
    id: 6,
    code: "G0538952",
    type: "Silk Saree",
    description: "Elegant silk saree showcasing traditional Indian artistry.",
    images: [
      "/featured-collection/saree-06/saree-06-main.webp",
      "/featured-collection/saree-06/saree-06-detail-02.webp",
      "/featured-collection/saree-06/saree-06-detail-03.webp",
      "/featured-collection/saree-06/saree-06-detail-04.webp",
      "/featured-collection/saree-06/saree-06-detail-05.webp",
      "/featured-collection/saree-06/saree-06-detail-06.webp",
    ],
  },
]

function FeaturedProductCard({ product}) {
  const [currentImage, setCurrentImage] = useState(0)
  const [loadedImages, setLoadedImages] = useState(() => {
    return new Set([0])
  })

  const [isLoading, setIsLoading] = useState(false)

  const imageCount = product.images.length

  /*
  ======================================================
  LOAD IMAGE
  ======================================================
  */

  const loadImage = (index) => {
    if (loadedImages.has(index)) {
      return Promise.resolve()
    }

    setIsLoading(true)

    return new Promise((resolve, reject) => {
      const img = new Image()

      img.onload = () => {
        setLoadedImages((previous) => {
          const updated = new Set(previous)
          updated.add(index)
          return updated
        })

        setIsLoading(false)
        resolve()
      }

      img.onerror = () => {
        setIsLoading(false)
        reject()
      }

      img.src = product.images[index]
    })
  }

  /*
  ======================================================
  CHANGE IMAGE
  ======================================================
  */

  const changeImage = async (index) => {
    if (index === currentImage || isLoading) {
      return
    }

    try {
      await loadImage(index)
      setCurrentImage(index)

      /*
        Preload the next image quietly.
        This makes the next click feel instant.
      */

      const nextIndex = (index + 1) % imageCount

      if (!loadedImages.has(nextIndex)) {
        const img = new Image()
        img.src = product.images[nextIndex]
      }
    } catch (error) {
      console.error("Failed to load product image:", error)
    }
  }

  /*
  ======================================================
  PREVIOUS IMAGE
  ======================================================
  */

  const previousImage = () => {
    if (isLoading) return

    const previousIndex = (currentImage - 1 + imageCount) % imageCount

    changeImage(previousIndex)
  }

  /*
  ======================================================
  NEXT IMAGE
  ======================================================
  */

  const nextImage = () => {
    if (isLoading) return

    const nextIndex = (currentImage + 1) % imageCount

    changeImage(nextIndex)
  }

  /*
  ======================================================
  WHATSAPP ENQUIRY
  ======================================================
  */

  const handleEnquiry = () => {
    const phoneNumber = "917708891854"

    const message = `Hello K Perumal Silks,

I am interested in this saree.

Product Code: ${product.code}
Type: ${product.type}

Please share more details.`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <article className="featured-product-card">
      {/* ==================================================
          IMAGE AREA
      ================================================== */}

      <div className="featured-product-image">
        <img
          src={product.images[currentImage]}
          alt={`${product.type} - ${product.code}`}
          loading={currentImage === 0 ? "eager" : "lazy"}
        />

        {/* ==================================================
            LOADING
        ================================================== */}

        {isLoading && (
          <div className="featured-image-loading">
            <span></span>
          </div>
        )}

        {/* ==================================================
            PREVIOUS
        ================================================== */}

        <button
          type="button"
          className="featured-image-arrow featured-image-arrow-left"
          onClick={(event) => {
            event.stopPropagation()
            previousImage()
          }}
          aria-label="Previous product image"
        >
          ‹
        </button>

        {/* ==================================================
            NEXT
        ================================================== */}

        <button
          type="button"
          className="featured-image-arrow featured-image-arrow-right"
          onClick={(event) => {
            event.stopPropagation()
            nextImage()
          }}
          aria-label="Next product image"
        >
          ›
        </button>

        {/* ==================================================
            DOTS
        ================================================== */}

        <div className="featured-image-dots">
          {product.images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentImage ? "active" : ""}
              onClick={(event) => {
                event.stopPropagation()
                changeImage(index)
              }}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ==================================================
          PRODUCT INFORMATION
      ================================================== */}

      <div className="featured-product-info">
        <span className="featured-product-type">{product.type}</span>

        <div className="featured-product-code">
          Product Code: <strong>{product.code}</strong>
        </div>

        {/* ==================================================
            ENQUIRY
        ================================================== */}

        <button
          type="button"
          className="featured-enquiry-button"
          onClick={(event) => {
            event.stopPropagation()
            handleEnquiry()
          }}
        >
          ENQUIRE NOW
        </button>
      </div>
    </article>
  )
}

function FeaturedCollection() {
  return (
    <section className="featured-collection">
      <div className="featured-bg-decoration featured-bg-decoration-left">
        ❋
      </div>

      <div className="featured-bg-decoration featured-bg-decoration-right">
        ❋
      </div>
      <div className="featured-collection-header">
        <span className="featured-collection-eyebrow">
          OUR SIGNATURE SELECTION
        </span>

        <h2>FEATURED COLLECTION</h2>

        <div className="featured-collection-ornament">
          <span></span>
          <span>✦</span>
          <span></span>
        </div>

        <p>Discover our handpicked collection of elegant silk sarees.</p>
      </div>

      <div className="featured-products-grid">
        {featuredProducts.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
export default FeaturedCollection;
