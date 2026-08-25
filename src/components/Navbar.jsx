import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import {
  Search,
  Heart,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import logo from "../assets/kps-logo.png"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSareeMenuOpen, setIsSareeMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsSareeMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <img src={logo} alt="KPS textiles" />
          <div className="brand-name">
            <span>KPS</span>
          </div>
        </Link>

        <nav className="desktop-navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <div
            className="saree-menu"
            onMouseEnter={() => setIsSareeMenuOpen(true)}
            onMouseLeave={() => setIsSareeMenuOpen(false)}
          >
            <button
              className="nav-link saree-menu-button"
              onClick={() => setIsSareeMenuOpen(!isSareeMenuOpen)}
            >
              Sarees
              <ChevronDown size={15} />
            </button>
            {isSareeMenuOpen && (
              <div className="saree-dropdown">
                <Link to="/shop?category=kanjivaram">Kanjivaram Sarees</Link>

                <Link to="/shop?category=banarasi">Banarasi Sarees</Link>

                <Link to="/shop?category=silk">Silk Sarees</Link>

                <Link to="/shop?category=cotton">Cotton Sarees</Link>

                <Link to="/shop?category=handloom">Handloom Sarees</Link>

                <Link to="/shop?category=designer">Designer Sarees</Link>

                <Link to="/shop?category=wedding">Wedding Sarees</Link>

                <Link to="/shop" className="view-all-sarees">
                  View All Sarees →
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/collections"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Collections
          </NavLink>

          <NavLink
            to="/handloom"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Handloom
          </NavLink>

          <NavLink
            to="/new-arrivals"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            New Arrivals
          </NavLink>

          <NavLink
            to="/best-sellers"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Best Sellers
          </NavLink>

          <NavLink
            to="/offers"
            className={({ isActive }) =>
              isActive ? "nav-link active offer-link" : "nav-link offer-link"
            }
          >
            Offers
          </NavLink>
        </nav>

        {/* Right-side Actions */}
        <div className="navbar-actions">
          <button aria-label="Search" onClick={() => setIsSearchOpen(true)}>
            <Search size={21} />
          </button>

          <Link to="/wishlist" aria-label="Wishlist">
            <Heart size={21} />
          </Link>

          <Link to="/cart" className="cart-button" aria-label="Cart">
            <ShoppingBag size={21} />
            <span className="cart-count">0</span>
          </Link>

          <Link to="/account" aria-label="Account">
            <UserRound size={21} />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mobile-menu-header">
          <span>KPS TEXTILES</span>

          <button onClick={closeMobileMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-navigation">
          <NavLink to="/" onClick={closeMobileMenu}>
            Home
          </NavLink>

          <button
            className="mobile-saree-button"
            onClick={() => setIsSareeMenuOpen(!isSareeMenuOpen)}
          >
            <span>Sarees</span>
            <ChevronDown size={18} />
          </button>

          {isSareeMenuOpen && (
            <div className="mobile-saree-links">
              <Link to="/shop?category=kanjivaram" onClick={closeMobileMenu}>
                Kanjivaram Sarees
              </Link>

              <Link to="/shop?category=banarasi" onClick={closeMobileMenu}>
                Banarasi Sarees
              </Link>

              <Link to="/shop?category=silk" onClick={closeMobileMenu}>
                Silk Sarees
              </Link>

              <Link to="/shop?category=cotton" onClick={closeMobileMenu}>
                Cotton Sarees
              </Link>

              <Link to="/shop?category=handloom" onClick={closeMobileMenu}>
                Handloom Sarees
              </Link>

              <Link to="/shop?category=designer" onClick={closeMobileMenu}>
                Designer Sarees
              </Link>

              <Link to="/shop?category=wedding" onClick={closeMobileMenu}>
                Wedding Sarees
              </Link>
            </div>
          )}

          <NavLink to="/collections" onClick={closeMobileMenu}>
            Collections
          </NavLink>

          <NavLink to="/handloom" onClick={closeMobileMenu}>
            Handloom
          </NavLink>

          <NavLink to="/new-arrivals" onClick={closeMobileMenu}>
            New Arrivals
          </NavLink>

          <NavLink to="/best-sellers" onClick={closeMobileMenu}>
            Best Sellers
          </NavLink>

          <NavLink to="/offers" onClick={closeMobileMenu}>
            Offers
          </NavLink>
        </nav>

        <div className="mobile-menu-footer">
          <Link to="/wishlist" onClick={closeMobileMenu}>
            <Heart size={19} />
            Wishlist
          </Link>

          <Link to="/account" onClick={closeMobileMenu}>
            <UserRound size={19} />
            My Account
          </Link>

          <button aria-label="Search" onClick={() => setIsSearchOpen(true)}>
            <Search size={21} />
            Search
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu} />
      )}

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-panel">
            <div className="search-header">
              <div>
                <img src={logo} alt="KPS textiles" />
                <span className="search-brand">KPS</span>
              </div>

              <button
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={24} />
              </button>
            </div>

            <div className="search-content">
              <h2>Search Sarees</h2>

              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="Search Kanjivaram, Silk, Cotton..."
                  autoFocus
                />

                <Search size={20} />
              </div>

              <div className="popular-searches">
                <h4>Popular Searches</h4>

                <div className="search-tags">
                  <button>Silk</button>
                  <button>Wedding</button>
                  <button>Handloom</button>
                  <button>Cotton</button>
                </div>
              </div>

              <div className="trending-searches">
                <h4>Trending</h4>

                <p>• Kanjivaram Silk Saree</p>
                <p>• Banarasi Wedding Collection</p>
                <p>• Pure Cotton Daily Wear</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
