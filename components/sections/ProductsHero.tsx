"use client";

import Link from "next/link";
import { motion } from "motion/react";

const heroPoints = [
  "Laboratory Diagnostics",
  "Molecular Diagnostics",
  "Microscopy & Imaging",
  "Point of Care Testing",
];

export default function ProductsHero() {
  return (
    <section className="hds-products-hero">
      <div className="hds-products-hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hds-products-hero-content">

          {/* BREADCRUMB */}
          <motion.div
            className="hds-products-hero-breadcrumb"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: "easeOut",
            }}
          >
            <Link href="/">Home</Link>
            <span>→</span>
            <strong>Products</strong>
          </motion.div>


          {/* EYEBROW */}
          <motion.div
            className="hds-products-hero-eyebrow"
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.18,
              ease: "easeOut",
            }}
          >
            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              style={{
                transformOrigin: "left",
              }}
              transition={{
                duration: 0.4,
                delay: 0.25,
                ease: "easeOut",
              }}
            />

            OUR PRODUCTS
          </motion.div>


          {/* HEADING */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 34,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.28,
              ease: "easeOut",
            }}
          >
            Diagnostic Solutions

            <motion.span
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.43,
                ease: "easeOut",
              }}
            >
              Built for Better Healthcare
            </motion.span>
          </motion.h1>


          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.53,
              ease: "easeOut",
            }}
          >
            Explore a focused range of diagnostic, laboratory, imaging,
            clinical, and healthcare solutions designed to support accuracy,
            efficiency, and better patient care.
          </motion.p>


          {/* =========================
              ACTIONS
          ========================== */}
          <motion.div
            className="hds-products-hero-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.64,
              ease: "easeOut",
            }}
          >
            <motion.div
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <a
                href="#product-categories"
                className="hds-products-hero-primary"
              >
                Explore Categories
                <span>→</span>
              </a>
            </motion.div>

            <motion.div
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Link
                href="/contact"
                className="hds-products-hero-secondary"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>


          {/* =========================
              HERO POINTS
          ========================== */}
          <motion.div
            className="hds-products-hero-points"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.75,
                  staggerChildren: 0.09,
                },
              },
            }}
          >
            {heroPoints.map((item) => (
              <motion.div
                className="hds-products-hero-point"
                key={item}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -18,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.42,
                  ease: "easeOut",
                }}
              >
                <motion.span
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                    },
                  }}
                  transition={{
                    duration: 0.28,
                  }}
                />

                <strong>{item}</strong>
              </motion.div>
            ))}
          </motion.div>

        </div>


        {/* =========================
            RIGHT VISUAL
        ========================== */}
        <motion.div
          className="hds-products-hero-visual"
          initial={{
            opacity: 0,
            x: 55,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.18,
            ease: "easeOut",
          }}
        >

          {/* IMAGE WRAPPER */}
          <motion.div
            className="hds-products-hero-image-wrap"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.28,
              ease: "easeOut",
            }}
          >

            {/* IMAGE */}
            <motion.img
              src="/images/products/products-hero.png"
              alt="Diagnostic laboratory equipment"
              className="hds-products-hero-image"
              initial={{
                scale: 1.08,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: "easeOut",
              }}
            />

            <div className="hds-products-hero-image-overlay" />


            {/* IMAGE BADGE */}
            <motion.div
              className="hds-products-hero-badge"
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.7,
                ease: "easeOut",
              }}
            >
              <motion.span
                className="hds-products-hero-badge-small"
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.78,
                  ease: "easeOut",
                }}
              >
                QUALITY FOCUSED
              </motion.span>

              <motion.strong
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.85,
                  ease: "easeOut",
                }}
              >
                Modern Diagnostic
                <span>Solutions</span>
              </motion.strong>
            </motion.div>

          </motion.div>


          {/* =========================
              FLOATING CARD
          ========================== */}
          <motion.div
            className="hds-products-hero-floating"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.55,
              delay: 0.88,
              ease: "easeOut",
            }}
          >

            {/* ICON */}
            <motion.div
              className="hds-products-hero-floating-icon"
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.96,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 4H17"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M9 4V9L5 17C4.5 18 5.2 20 7 20H17C18.8 20 19.5 18 19 17L15 9V4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 14H16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>


            {/* FLOATING TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 1.02,
                ease: "easeOut",
              }}
            >
              <strong>Reliable Healthcare Solutions</strong>

              <span>
                Designed around modern diagnostic needs
              </span>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}