import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Pricing", path: "/pricing" },
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="aakar-navbar">
        <div className="container">
          <div className="aakar-navbar-inner">
            {/* Logo */}
            <a href="/" className="navbar-logo" onClick={handleMenuClose}>
              <img
                src="/images/aakar-logo.png"
                alt="Aakar.co"
                className="navbar-logo-image"
              />
            </a>

            {/* Center Menu */}
            <div
              className={`navbar-menu ${isMenuOpen ? "navbar-menu-open" : ""}`}
            >
              <div className="navbar-links">
                {navigationItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="navbar-link"
                    onClick={handleMenuClose}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Mobile Start a Project Button */}
              <a
                href="/contact"
                className="navbar-mobile-cta"
                onClick={handleMenuClose}
              >
                Start a Project
              </a>
            </div>

            {/* Desktop Start a Project Button */}
            <a
              href="/contact"
              className="navbar-desktop-cta"
              onClick={handleMenuClose}
            >
              Start a Project
            </a>

            {/* Mobile Toggle */}
            <button
              type="button"
              className={`navbar-toggle ${
                isMenuOpen ? "navbar-toggle-open" : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
