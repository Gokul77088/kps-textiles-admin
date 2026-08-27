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
      <div className="featured-floral featured-floral-left">
        <svg viewBox="0 0 420 420" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 35 C100 45 150 80 205 135 C250 180 300 245 405 275" />
            <path d="M65 75 C35 55 25 25 45 10 C70 5 88 35 65 75Z" />
            <path d="M105 105 C65 95 50 65 70 48 C100 48 120 75 105 105Z" />
            <path d="M145 145 C105 135 90 105 110 88 C140 90 160 115 145 145Z" />

            <path d="M70 75 C105 50 135 35 175 32" />
            <path d="M105 105 C145 80 175 65 215 62" />
            <path d="M145 145 C185 120 215 110 255 110" />

            <path d="M185 32 C165 5 175 -15 198 -18 C220 5 215 28 185 32Z" />
            <path d="M215 62 C200 35 210 15 235 17 C250 40 240 60 215 62Z" />

            <path d="M205 135 C220 90 250 65 285 72 C300 105 265 135 205 135Z" />
            <path d="M250 180 C285 145 320 140 345 160 C345 195 300 205 250 180Z" />

            <circle cx="75" cy="115" r="30" />
            <circle cx="75" cy="115" r="9" />

            <path d="M75 85 L75 145" />
            <path d="M45 115 L105 115" />
            <path d="M54 94 L96 136" />
            <path d="M96 94 L54 136" />

            <path d="M315 65 C350 30 390 35 400 65 C390 95 345 98 315 65Z" />
            <path d="M315 65 C345 65 370 65 400 65" />
          </g>
        </svg>
      </div>

      <div className="featured-floral featured-floral-right">
        <svg viewBox="0 0 420 420" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M405 35 C320 45 270 80 215 135 C170 180 120 245 15 275" />

            <path d="M355 75 C385 55 395 25 375 10 C350 5 332 35 355 75Z" />
            <path d="M315 105 C355 95 370 65 350 48 C320 48 300 75 315 105Z" />
            <path d="M275 145 C315 135 330 105 310 88 C280 90 260 115 275 145Z" />

            <path d="M350 75 C315 50 285 35 245 32" />
            <path d="M315 105 C275 80 245 65 205 62" />
            <path d="M275 145 C235 120 205 110 165 110" />

            <path d="M235 32 C255 5 245 -15 222 -18 C200 5 205 28 235 32Z" />
            <path d="M205 62 C220 35 210 15 185 17 C170 40 180 60 205 62Z" />

            <path d="M215 135 C200 90 170 65 135 72 C120 105 155 135 215 135Z" />
            <path d="M170 180 C135 145 100 140 75 160 C75 195 120 205 170 180Z" />

            <circle cx="345" cy="115" r="30" />
            <circle cx="345" cy="115" r="9" />

            <path d="M345 85 L345 145" />
            <path d="M315 115 L375 115" />
            <path d="M324 94 L366 136" />
            <path d="M366 94 L324 136" />

            <path d="M105 65 C70 30 30 35 20 65 C30 95 75 98 105 65Z" />
            <path d="M105 65 C75 65 50 65 20 65" />
          </g>
        </svg>
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
      <div className="featured-floral featured-floral-bottom-left">
        <svg viewBox="0 0 420 420" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 385 C100 375 150 340 205 285 C250 240 300 175 405 145" />
            <path d="M70 345 C40 365 25 395 45 410 C70 415 88 385 70 345Z" />
            <path d="M110 305 C70 315 55 345 75 362 C105 362 125 335 110 305Z" />
            <path d="M150 265 C110 275 95 305 115 322 C145 320 165 295 150 265Z" />

            <circle cx="75" cy="305" r="30" />
            <circle cx="75" cy="305" r="9" />

            <path d="M75 275 L75 335" />
            <path d="M45 305 L105 305" />
            <path d="M54 284 L96 326" />
            <path d="M96 284 L54 326" />

            <path d="M205 285 C220 330 250 355 285 348 C300 315 265 285 205 285Z" />
            <path d="M250 240 C285 275 320 280 345 260 C345 225 300 215 250 240Z" />
          </g>
        </svg>
      </div>

      <div className="featured-floral featured-floral-bottom-right">
        <svg viewBox="0 0 420 420" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M405 385 C320 375 270 340 215 285 C170 240 120 175 15 145" />
            <path d="M350 345 C380 365 395 395 375 410 C350 415 332 385 350 345Z" />
            <path d="M310 305 C350 315 365 345 345 362 C315 362 295 335 310 305Z" />
            <path d="M270 265 C310 275 325 305 305 322 C275 320 255 295 270 265Z" />

            <circle cx="345" cy="305" r="30" />
            <circle cx="345" cy="305" r="9" />

            <path d="M345 275 L345 335" />
            <path d="M315 305 L375 305" />
            <path d="M324 284 L366 326" />
            <path d="M366 284 L324 326" />

            <path d="M215 285 C200 330 170 355 135 348 C120 315 155 285 215 285Z" />
            <path d="M170 240 C135 275 100 280 75 260 C75 225 120 215 170 240Z" />
          </g>
        </svg>
      </div>
    </section>
  )
}
export default FeaturedCollection;
