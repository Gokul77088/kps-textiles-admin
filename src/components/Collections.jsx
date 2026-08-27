import { useRef } from "react"

const collections = [
  {
    id: 1,
    name: "Kanchipuram Silk Sarees",
    image: "/collections/kanchipuram.webp",
  },
  {
    id: 2,
    name: "Handloom Sarees",
    image: "/collections/handloom.webp",
  },
  {
    id: 3,
    name: "Bridal Sarees",
    image: "/collections/bridal.webp",
  },
  {
    id: 4,
    name: "Wedding Sarees",
    image: "/collections/wedding.webp",
  },
  {
    id: 5,
    name: "Festive Sarees",
    image: "/collections/festive.webp",
  },
  {
    id: 6,
    name: "Zari Work Sarees",
    image: "/collections/zari-work.webp",
  },
  {
    id: 7,
    name: "Floral Sarees",
    image: "/collections/floral.webp",
  },
  {
    id: 8,
    name: "Traditional Sarees",
    image: "/collections/traditional.webp",
  },
  {
    id: 9,
    name: "Contemporary Silk Sarees",
    image: "/collections/contemporary.webp",
  },
  {
    id: 10,
    name: "Banarasi Sarees",
    image: "/collections/banarasi.webp",
  },
  {
    id: 11,
    name: "Uppada Sarees",
    image: "/collections/uppada.webp",
  },
  {
    id: 12,
    name: "Chanderi Sarees",
    image: "/collections/chanderi.webp",
  },
  {
    id: 13,
    name: "Cotton Sarees",
    image: "/collections/cotton.webp",
  },
  {
    id: 14,
    name: "Designer Sarees",
    image: "/collections/designer.webp",
  },
  {
    id: 15,
    name: "New Arrivals",
    image: "/collections/new-arrivals.webp",
  },
]

/* =========================================
   PREMIUM FLORAL CORNER
========================================= */

function FloralDecoration({ position }) {
  return (
    <div className={`collections-floral ${position}`}>
      <svg
        viewBox="0 0 320 320"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Main flowing vine */}
          <path
            d={
              position.includes("right")
                ? "M318 15 C265 35 255 72 220 102 C180 137 140 150 78 172 C45 184 23 202 5 235"
                : "M2 15 C55 35 65 72 100 102 C140 137 180 150 242 172 C275 184 297 202 315 235"
            }
          />

          {/* Secondary vine */}
          <path
            d={
              position.includes("right")
                ? "M285 0 C258 45 270 82 292 118"
                : "M35 0 C62 45 50 82 28 118"
            }
          />

          {/* Large upper leaf */}
          <path
            d={
              position.includes("right")
                ? "M248 62 C278 25 310 31 306 57 C302 84 270 87 248 62Z"
                : "M72 62 C42 25 10 31 14 57 C18 84 50 87 72 62Z"
            }
          />

          {/* Upper side leaf */}
          <path
            d={
              position.includes("right")
                ? "M218 94 C225 55 258 51 268 73 C278 95 251 111 218 94Z"
                : "M102 94 C95 55 62 51 52 73 C42 95 69 111 102 94Z"
            }
          />

          {/* Middle leaf */}
          <path
            d={
              position.includes("right")
                ? "M175 126 C204 92 236 98 229 124 C222 150 195 151 175 126Z"
                : "M145 126 C116 92 84 98 91 124 C98 150 125 151 145 126Z"
            }
          />

          {/* Long elegant leaf */}
          <path
            d={
              position.includes("right")
                ? "M135 145 C160 116 189 121 188 142 C187 163 161 168 135 145Z"
                : "M185 145 C160 116 131 121 132 142 C133 163 159 168 185 145Z"
            }
          />

          {/* Bottom leaf */}
          <path
            d={
              position.includes("right")
                ? "M72 177 C105 153 130 165 120 188 C109 211 86 207 72 177Z"
                : "M248 177 C215 153 190 165 200 188 C211 211 234 207 248 177Z"
            }
          />

          {/* Floral flower 1 */}
          <g
            transform={
              position.includes("right")
                ? "translate(260 48)"
                : "translate(60 48)"
            }
          >
            <circle r="10" />
            <circle r="3.5" />

            <path d="M0 -10 C-9 -27 -1 -37 6 -25 C10 -18 7 -11 0 -10Z" />
            <path d="M9 -4 C25 -13 32 -5 22 3 C16 8 10 6 9 -4Z" />
            <path d="M7 7 C20 20 11 29 2 19 C-2 14 0 9 7 7Z" />
            <path d="M-7 7 C-20 20 -29 11 -19 2 C-13 -2 -8 0 -7 7Z" />
            <path d="M-9 -4 C-25 -13 -32 -5 -22 3 C-16 8 -10 6 -9 -4Z" />
          </g>

          {/* Small floral cluster */}
          <g
            transform={
              position.includes("right")
                ? "translate(210 110)"
                : "translate(110 110)"
            }
          >
            <circle r="6" />
            <circle r="2" />

            <ellipse cy="-12" rx="5" ry="10" />
            <ellipse cy="12" rx="5" ry="10" />
            <ellipse cx="-12" rx="10" ry="5" />
            <ellipse cx="12" rx="10" ry="5" />
          </g>

          {/* Tiny ornamental circles */}
          <circle
            cx={position.includes("right") ? "292" : "28"}
            cy="118"
            r="3"
          />

          <circle
            cx={position.includes("right") ? "226" : "94"}
            cy="164"
            r="2.5"
          />

          {/* Fine inner vine */}
          <path
            d={
              position.includes("right")
                ? "M315 235 C280 215 258 222 238 245"
                : "M5 235 C40 215 62 222 82 245"
            }
          />

          {/* Bottom leaves */}
          <path
            d={
              position.includes("right")
                ? "M238 245 C258 218 283 220 280 240 C277 259 255 260 238 245Z"
                : "M82 245 C62 218 37 220 40 240 C43 259 65 260 82 245Z"
            }
          />

          <path
            d={
              position.includes("right")
                ? "M205 264 C225 240 249 244 246 263 C242 282 220 282 205 264Z"
                : "M115 264 C95 240 71 244 74 263 C78 282 100 282 115 264Z"
            }
          />
        </g>
      </svg>
    </div>
  )
}

function Collections() {
  const collectionsRef = useRef(null)

  const scrollCollections = (direction) => {
    if (!collectionsRef.current) return

    const amount = collectionsRef.current.clientWidth * 0.82

    collectionsRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    })
  }

  return (
    <section className="collections-section">
      {/* =========================================
          PREMIUM FLORAL DECORATIONS
      ========================================= */}

      <FloralDecoration position="collections-floral-top-left" />
      <FloralDecoration position="collections-floral-top-right" />
      <FloralDecoration position="collections-floral-bottom-left" />
      <FloralDecoration position="collections-floral-bottom-right" />

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="collections-header">
        <span className="collections-eyebrow">OUR COLLECTIONS</span>

        <h2>
          EXPLORE OUR EXQUISITE
          <br />
          SAREE COLLECTIONS
        </h2>

        <div className="collections-ornament">
          <span></span>
          <b>✥</b>
          <span></span>
        </div>

        <p>
          From timeless traditions to contemporary elegance,
          <br />
          discover the perfect saree for every occasion.
        </p>
      </div>

      {/* =========================================
          SLIDER
      ========================================= */}

      <div className="collections-slider-wrapper">
        <button
          type="button"
          className="collections-slider-arrow collections-slider-arrow-left"
          onClick={() => scrollCollections("left")}
          aria-label="Previous collections"
        >
          ‹
        </button>

        <div className="collections-grid" ref={collectionsRef}>
          {collections.map((collection) => (
            <article className="collection-card" key={collection.id}>
              {/* IMAGE */}

              <img
                src={collection.image}
                alt={collection.name}
                loading="lazy"
              />

              {/* IMAGE DARKENING */}

              <div className="collection-gradient"></div>

              {/* =================================
                  LOGO BADGE
              ================================= */}

              <div className="collection-logo-wrapper">
                <div className="collection-logo-decoration">
                  <span className="logo-line logo-line-left"></span>

                  <div className="collection-logo">
                    <img src="/logo/peacock-logo.webp" alt="Shop logo" />
                  </div>

                  <span className="logo-line logo-line-right"></span>
                </div>
              </div>

              {/* =================================
                  CONTENT
              ================================= */}

              <div className="collection-overlay">
                <div className="collection-content">
                  <h3>{collection.name}</h3>

                  <div className="collection-divider">
                    <span></span>
                    <b>❃</b>
                    <span></span>
                  </div>

                  <button type="button" className="collection-button">
                    EXPLORE COLLECTION
                    <span> →</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="collections-slider-arrow collections-slider-arrow-right"
          onClick={() => scrollCollections("right")}
          aria-label="Next collections"
        >
          ›
        </button>
      </div>

      {/* =========================================
          PAGINATION
      ========================================= */}

      <div className="collections-pagination">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Collections
