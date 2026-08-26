import { useEffect, useState } from "react"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Flower2,
} from "lucide-react"

const slides = [
  {
    id: 1,
    type: "heritage",
    eyebrow: "TIMELESS ELEGANCE",
    title: (
      <>
        Sarees Woven
        <br />
        With Tradition
      </>
    ),
    description: (
      <>
        Discover elegant sarees crafted with
        <br />
        timeless Indian artistry.
      </>
    ),
    image: "/hero-heritage.webp",
    decoration: "/hero-heritage-decoration.webp",
    imageAlt: "Purple Kanjivaram silk saree",
    button: "SHOP SAREES",
    explore: "Explore Collection",
  },

  {
    id: 2,
    type: "silk",
    eyebrow: "PURE SILK COLLECTION",
    title: (
      <>
        The Art of
        <br />
        Pure Silk
      </>
    ),
    description: (
      <>
        Graceful silk sarees for
        <br />
        moments worth remembering.
      </>
    ),
    image: "/hero-silk.webp",
    decoration: "/hero-silk-decoration.webp",
    imageAlt: "Blue pure silk saree",
    button: "SHOP SAREES",
    explore: "Explore Collection",
  },

  {
    id: 3,
    type: "handloom",
    eyebrow: "HANDLOOM HERITAGE",
    title: (
      <>
        Woven By
        <br />
        Skilled Hands
      </>
    ),
    description: (
      <>
        Discover the beauty of traditional
        <br />
        handloom craftsmanship.
      </>
    ),
    image: "/hero-handloom.webp",
    decoration: "/hero-handloom-decoration.webp",
    imageAlt: "Traditional handloom saree",
    button: "SHOP SAREES",
    explore: "Explore Collection",
  },

  {
    id: 4,
    type: "festive",
    eyebrow: "FESTIVE COLLECTION",
    title: (
      <>
        Elegance For
        <br />
        Every Celebration
      </>
    ),

    description: (
      <>
        Sarees that make every
        <br />
        occasion unforgettable.
      </>
    ),

    image: "/hero-festive.webp",
    decoration: "/hero-festive-decoration.webp",
    imageAlt: "Red festive silk saree",
    button: "SHOP SAREES",
    explore: "Explore Collection",
  },
]

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slide = slides[currentSlide]

  /* ======================================================
     NEXT
  ====================================================== */

  const nextSlide = () => {
    setCurrentSlide((current) => {
      return (current + 1) % slides.length
    })
  }

  /* ======================================================
     PREVIOUS
  ====================================================== */

  const previousSlide = () => {
    setCurrentSlide((current) => {
      return (current - 1 + slides.length) % slides.length
    })
  }

  /* ======================================================
     AUTO PLAY
  ====================================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => {
        return (current + 1) % slides.length
      })
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  /* ======================================================
     JSX
  ====================================================== */

  return (
    <section className={`hero hero-${slide.type}`}>
      {/* ==================================================
          DECORATION
      ================================================== */}

      <div className="hero-decoration">
        <img src={slide.decoration} alt="" />
      </div>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="hero-content">
        <div className="hero-eyebrow">{slide.eyebrow}</div>
        <div className="hero-ornament">
          <span className="ornament-line"></span>
          <span className="ornament-diamond">✦</span>
          <span className="ornament-line"></span>
        </div>
        <h1>{slide.title}</h1>
        <p className="hero-description">{slide.description}</p>

        {/* ==================================================
            ACTIONS
        ================================================== */}

        <div className="hero-actions">
          <button className="hero-shop-button" type="button">
            <span>{slide.button}</span>
            <ArrowRight size={18} />
          </button>
          <button className="hero-explore-button" type="button">
            <span>{slide.explore}</span>
            <ArrowRight size={17} />
          </button>
        </div>

        {/* ==================================================
            FEATURES
        ================================================== */}

        <div className="hero-features">
          <div className="hero-feature">
            <div className="hero-feature-icon">
              <Leaf size={22} />
            </div>
            <span>Handpicked Sarees</span>
          </div>
          <div className="hero-feature-divider"></div>
          <div className="hero-feature">
            <div className="hero-feature-icon">
              <Flower2 size={22} />
            </div>
            <span>Crafted in India</span>
          </div>
        </div>
      </div>

      {/* ==================================================
          IMAGE
      ================================================== */}

      <div className="hero-image-container">
        <img src={slide.image} alt={slide.imageAlt} className="hero-image" />
      </div>

      {/* ==================================================
    S-CURVE — BANNER 1 ONLY
================================================== */}

      {slide.type === "heritage" && (
        <div className="hero-curve">
          <svg
            viewBox="0 0 260 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* =================================================
          CREAM CURVED OVERLAY
      ================================================= */}

            <path
              className="hero-curve-fill"
              d="
          M 0 0

          H 125

          C 190 90,
            205 170,
            145 245

          C 82 325,
            72 405,
            135 475

          C 160 505,
            160 555,
            110 600

          H 0

          Z
        "
            />

            {/* =================================================
          GOLD CURVE OUTLINE
      ================================================= */}

            <path
              className="hero-curve-line"
              d="
          M 125 0

          C 190 90,
            205 170,
            145 245

          C 82 325,
            72 405,
            135 475

          C 160 505,
            160 555,
            110 600
        "
            />
          </svg>
        </div>
      )}

      {/* ==================================================
          PREVIOUS
      ================================================== */}

      <button
        type="button"
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={25} />
      </button>

      {/* ==================================================
          NEXT
      ================================================== */}

      <button
        type="button"
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={25} />
      </button>

      {/* ==================================================
          DOTS
      ================================================== */}

      <div className="hero-dots">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
