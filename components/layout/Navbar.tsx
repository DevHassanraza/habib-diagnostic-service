"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


/* =========================================================
   PRODUCT CATEGORIES
========================================================= */

const productCategories = [
  {
    title: "Laboratory Diagnostics",
    href: "/products/laboratory-diagnostics",
    items: ["Chemistry Analyzers", "Hematology", "Immunoassay"],
  },
  {
    title: "Molecular Diagnostics",
    href: "/products/molecular-diagnostics",
    items: ["PCR Systems", "Molecular Testing"],
  },
  {
    title: "Microscopy & Imaging",
    href: "/products/microscopy-imaging",
    items: ["Microscopes", "Imaging Systems"],
  },
  {
    title: "Point of Care Testing",
    href: "/products/point-of-care-testing",
    items: ["Rapid Testing", "POCT Equipment"],
  },
  {
    title: "Clinical & Medical Equipment",
    href: "/products/clinical-medical-equipment",
    items: [
      "Patient Care",
      "Monitoring Equipment",
      "Clinical Equipment",
    ],
  },
  {
    title: "Laboratory Consumables",
    href: "/products/laboratory-consumables",
    items: ["Reagents & Kits", "Accessories", "Lab Consumables"],
  },
];


/* =========================================================
   SEARCH DATA
========================================================= */

const searchItems = [
  {
    title: "Home",
    description: "Habib Diagnostic Service",
    href: "/",
    keywords: "home habib diagnostic healthcare",
  },
  {
    title: "About Us",
    description: "Learn more about Habib Diagnostic Service",
    href: "/about",
    keywords: "about company habib diagnostic",
  },
  {
    title: "Products",
    description: "Explore our complete product solutions",
    href: "/products",
    keywords: "products medical diagnostic equipment",
  },
  {
    title: "Laboratory Diagnostics",
    description:
      "Chemistry analyzers, hematology and immunoassay solutions",
    href: "/products/laboratory-diagnostics",
    keywords:
      "laboratory diagnostics chemistry analyzer analyzers hematology immunoassay",
  },
  {
    title: "Molecular Diagnostics",
    description: "PCR systems and molecular testing solutions",
    href: "/products/molecular-diagnostics",
    keywords:
      "molecular diagnostics pcr systems molecular testing",
  },
  {
    title: "Microscopy & Imaging",
    description: "Microscopes and imaging systems",
    href: "/products/microscopy-imaging",
    keywords:
      "microscopy imaging microscope microscopes imaging systems",
  },
  {
    title: "Point of Care Testing",
    description: "Rapid testing and POCT equipment",
    href: "/products/point-of-care-testing",
    keywords:
      "point of care testing rapid testing poct equipment",
  },
  {
    title: "Clinical & Medical Equipment",
    description:
      "Patient care, monitoring and clinical equipment",
    href: "/products/clinical-medical-equipment",
    keywords:
      "clinical medical equipment patient care monitoring equipment",
  },
  {
    title: "Laboratory Consumables",
    description:
      "Reagents, kits, accessories and laboratory consumables",
    href: "/products/laboratory-consumables",
    keywords:
      "laboratory consumables reagents kits accessories lab consumables",
  },
  {
    title: "Services",
    description: "Professional diagnostic and medical support",
    href: "/services",
    keywords:
      "services support maintenance technical guidance consultation",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team",
    href: "/contact",
    keywords:
      "contact quote inquiry rawalpindi kharian gujrat location",
  },
];


/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const [mobileProductsOpen, setMobileProductsOpen] =
    useState(false);

  const [desktopProductsOpen, setDesktopProductsOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");


  /* =========================================================
     CLOSE MENUS AFTER ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setDesktopProductsOpen(false);
    setMenuOpen(false);
    setMobileProductsOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
  }, [pathname]);


  /* =========================================================
     SEARCH FILTER
  ========================================================= */

  const filteredSearchItems = searchItems.filter((item) => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return false;

    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query)
    );
  });


  /* =========================================================
     ESC KEY + BODY SCROLL
  ========================================================= */

  useEffect(() => {
    if (!searchOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleEscape);
    };
  }, [searchOpen]);


  /* =========================================================
     CLOSE PRODUCTS
  ========================================================= */

  const closeProductsMenu = () => {
    setDesktopProductsOpen(false);
  };


  return (
    <header className="hds-header">

      {/* =====================================================
          TOPBAR
      ====================================================== */}

      <div className="hds-topbar">
        <div className="hds-topbar-inner">

          <div className="hds-topbar-left">
            <span>
              Advanced Diagnostic & Healthcare Solutions
            </span>
          </div>

          <div className="hds-topbar-right">

            <a href="tel:+923325832132">
              ☎ +92 332 5832132
            </a>

            <a href="mailto:info@habibdiagnostic.com">
              ✉ info@habibdiagnostic.com
            </a>

          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <nav className="hds-navbar">

        {/* LOGO */}

        <Link
          href="/"
          className="hds-logo-wrap"
          onClick={closeProductsMenu}
        >
          <img
            src="/logos/habib-diagnostic-logo.png"
            alt="Habib Diagnostic Service"
            className="hds-logo"
          />
        </Link>


        {/* ===================================================
            DESKTOP NAVIGATION
        ==================================================== */}

        <div className="hds-nav-links">

          <Link
            href="/"
            className="hds-nav-link"
            onClick={closeProductsMenu}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hds-nav-link"
            onClick={closeProductsMenu}
          >
            About Us
          </Link>


          {/* =================================================
              PRODUCTS MEGA MENU
          ================================================== */}

          <div
            className="hds-products-nav"
            onMouseEnter={() =>
              setDesktopProductsOpen(true)
            }
            onMouseLeave={() =>
              setDesktopProductsOpen(false)
            }
          >

            <button
              type="button"
              className="hds-nav-link hds-products-trigger"
              onClick={() =>
                setDesktopProductsOpen(
                  (prev) => !prev
                )
              }
            >
              Products

              <span className="hds-products-chevron">
                ↓
              </span>
            </button>


            <div
              className="hds-mega-menu"
              style={{
                opacity: desktopProductsOpen ? 1 : 0,
                visibility: desktopProductsOpen
                  ? "visible"
                  : "hidden",
                pointerEvents: desktopProductsOpen
                  ? "auto"
                  : "none",
              }}
            >
              <div className="hds-mega-menu-inner">

                {/* TOP */}

                <div className="hds-mega-menu-top">

                  <div>

                    <span className="hds-mega-eyebrow">
                      PRODUCT SOLUTIONS
                    </span>

                    <h3>
                      Explore Our Diagnostic
                      <span>
                        {" "}
                        & Healthcare Solutions
                      </span>
                    </h3>

                  </div>


                  <Link
                    href="/products"
                    className="hds-mega-all-link"
                    onClick={closeProductsMenu}
                  >
                    View All Products
                    <span>→</span>
                  </Link>

                </div>


                {/* CATEGORIES */}

                <div className="hds-mega-grid">

                  {productCategories.map(
                    (category) => (
                      <div
                        className="hds-mega-category"
                        key={category.title}
                      >

                        {/* MAIN CATEGORY */}

                        <Link
                          href={category.href}
                          className="hds-mega-category-title"
                          onClick={closeProductsMenu}
                        >
                          {category.title}
                        </Link>


                        {/* SUB ITEMS */}

                        <div className="hds-mega-category-items">

                          {category.items.map(
                            (item) => (
                              <Link
                                href={category.href}
                                key={item}
                                onClick={closeProductsMenu}
                              >
                                {item}
                              </Link>
                            )
                          )}

                        </div>

                      </div>
                    )
                  )}

                </div>


                {/* BOTTOM */}

                <div className="hds-mega-bottom">

                  <div className="hds-mega-bottom-text">

                    <span>
                      Looking for the right solution?
                    </span>

                    <strong>
                      Our team can help you choose.
                    </strong>

                  </div>


                  <Link
                    href="/contact"
                    className="hds-mega-contact"
                    onClick={closeProductsMenu}
                  >
                    Talk to Our Team
                    <span>→</span>
                  </Link>

                </div>

              </div>
            </div>

          </div>


          <Link
            href="/services"
            className="hds-nav-link"
            onClick={closeProductsMenu}
          >
            Services
          </Link>


          <Link
            href="/contact"
            className="hds-nav-link"
            onClick={closeProductsMenu}
          >
            Contact
          </Link>

        </div>


        {/* ===================================================
            NAVBAR ACTIONS
        ==================================================== */}

        <div className="hds-nav-actions">

          {/* SEARCH */}

          <button
            type="button"
            className="hds-search-btn"
            aria-label="Search"
            onClick={() => {
              setSearchOpen(true);
              setMenuOpen(false);
              setDesktopProductsOpen(false);
            }}
          >
            ⌕
          </button>


          {/* QUOTE */}

          <Link
            href="/contact"
            className="hds-appointment-btn"
            onClick={closeProductsMenu}
          >
            Get a Quote
            <span>→</span>
          </Link>


          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className="hds-menu-btn"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >

            <span
              className={
                menuOpen
                  ? "hds-menu-icon open"
                  : "hds-menu-icon"
              }
            >
              <span />
              <span />
              <span />
            </span>

          </button>

        </div>

      </nav>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={
          menuOpen
            ? "hds-mobile-menu open"
            : "hds-mobile-menu"
        }
      >

        <Link
          href="/"
          onClick={() => {
            setMenuOpen(false);
            setMobileProductsOpen(false);
          }}
        >
          Home
        </Link>


        <Link
          href="/about"
          onClick={() => {
            setMenuOpen(false);
            setMobileProductsOpen(false);
          }}
        >
          About Us
        </Link>


        {/* MOBILE PRODUCTS */}

        <div className="hds-mobile-products">

          <button
            type="button"
            className="hds-mobile-products-trigger"
            onClick={() =>
              setMobileProductsOpen(
                (prev) => !prev
              )
            }
          >

            <span>Products</span>

            <span
              className={
                mobileProductsOpen
                  ? "hds-mobile-products-arrow open"
                  : "hds-mobile-products-arrow"
              }
            >
              ↓
            </span>

          </button>


          <div
            className={
              mobileProductsOpen
                ? "hds-mobile-products-dropdown open"
                : "hds-mobile-products-dropdown"
            }
          >

            <Link
              href="/products"
              className="hds-mobile-view-all"
              onClick={() => {
                setMenuOpen(false);
                setMobileProductsOpen(false);
              }}
            >
              View All Products
            </Link>


            {productCategories.map(
              (category) => (
                <div
                  className="hds-mobile-product-category"
                  key={category.title}
                >

                  <Link
                    href={category.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileProductsOpen(false);
                    }}
                  >
                    {category.title}
                  </Link>

                </div>
              )
            )}

          </div>

        </div>


        <Link
          href="/services"
          onClick={() => {
            setMenuOpen(false);
            setMobileProductsOpen(false);
          }}
        >
          Services
        </Link>


        <Link
          href="/contact"
          onClick={() => {
            setMenuOpen(false);
            setMobileProductsOpen(false);
          }}
        >
          Contact
        </Link>


        <Link
          href="/contact"
          className="hds-mobile-appointment"
          onClick={() => {
            setMenuOpen(false);
            setMobileProductsOpen(false);
          }}
        >
          Get a Quote
        </Link>

      </div>


      {/* =====================================================
          SEARCH OVERLAY
      ====================================================== */}

      <div
        className={
          searchOpen
            ? "hds-search-overlay open"
            : "hds-search-overlay"
        }
        onMouseDown={(event) => {
          if (
            event.target ===
            event.currentTarget
          ) {
            setSearchOpen(false);
          }
        }}
      >

        <div className="hds-search-panel">

          <div className="hds-search-top">

            <div>

              <span className="hds-search-eyebrow">
                WEBSITE SEARCH
              </span>

              <h2>
                What are you looking for?
              </h2>

            </div>


            <button
              type="button"
              className="hds-search-close"
              aria-label="Close search"
              onClick={() =>
                setSearchOpen(false)
              }
            >
              ×
            </button>

          </div>


          <div className="hds-search-input-wrap">

            <span className="hds-search-input-icon">
              ⌕
            </span>


            <input
              type="search"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(
                  event.target.value
                )
              }
              placeholder="Search products, services, equipment..."
              autoFocus={searchOpen}
            />


            {searchQuery && (
              <button
                type="button"
                className="hds-search-clear"
                onClick={() =>
                  setSearchQuery("")
                }
              >
                Clear
              </button>
            )}

          </div>


          <div className="hds-search-results">

            {!searchQuery.trim() && (
              <div className="hds-search-suggestions">

                <span>
                  Popular searches
                </span>

                <div>

                  {[
                    "Laboratory",
                    "PCR",
                    "Microscopes",
                    "POCT",
                    "Consumables",
                  ].map((term) => (

                    <button
                      type="button"
                      key={term}
                      onClick={() =>
                        setSearchQuery(term)
                      }
                    >
                      {term}
                    </button>

                  ))}

                </div>

              </div>
            )}


            {searchQuery.trim() &&
              filteredSearchItems.map(
                (item) => (

                  <Link
                    href={item.href}
                    key={item.href}
                    className="hds-search-result"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >

                    <div>

                      <strong>
                        {item.title}
                      </strong>

                      <p>
                        {item.description}
                      </p>

                    </div>

                    <span>→</span>

                  </Link>

                )
              )}


            {searchQuery.trim() &&
              filteredSearchItems.length === 0 && (

                <div className="hds-search-empty">

                  <strong>
                    No results found
                  </strong>

                  <p>
                    Try another keyword or
                    contact our team for
                    assistance.
                  </p>

                  <Link
                    href="/contact"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    Contact Our Team →
                  </Link>

                </div>
              )}

          </div>

        </div>

      </div>

    </header>
  );
}