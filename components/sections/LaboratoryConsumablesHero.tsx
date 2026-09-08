"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function LaboratoryConsumablesHero() {
  return (
    <section className="hds-consumables-hero">
      <div className="hds-consumables-hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hds-consumables-hero-content">

          {/* BREADCRUMB */}
          <motion.div
            className="hds-consumables-hero-breadcrumb"
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
            <Link href="/products">Products</Link>
            <span>→</span>
            <strong>Laboratory Consumables</strong>
          </motion.div>


          {/* EYEBROW */}
          <motion.div
            className="hds-consumables-hero-eyebrow"
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
              delay: 0.2,
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
                delay: 0.28,
                ease: "easeOut",
              }}
            />

            LABORATORY CONSUMABLES
          </motion.div>


          {/* HEADING */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            Essential Supplies for

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
                delay: 0.46,
                ease: "easeOut",
              }}
            >
              Everyday Laboratory Work
            </motion.span>
          </motion.h1>


          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.56,
              ease: "easeOut",
            }}
          >
            Explore laboratory consumables and supporting products for routine
            diagnostic, testing, and laboratory workflows.
          </motion.p>


          {/* ACTION BUTTONS */}
          <motion.div
            className="hds-consumables-hero-actions"
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.68,
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
                href="#consumable-solutions"
                className="hds-consumables-hero-primary"
              >
                Explore Consumables
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
                className="hds-consumables-hero-secondary"
              >
                Request Information
              </Link>
            </motion.div>
          </motion.div>


          {/* FEATURES */}
          <motion.div
            className="hds-consumables-hero-features"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.78,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
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
                duration: 0.45,
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
              />

              <strong>Reagents &amp; Kits</strong>
            </motion.div>

            <motion.div
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
                duration: 0.45,
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
              />

              <strong>Accessories</strong>
            </motion.div>

            <motion.div
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
                duration: 0.45,
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
              />

              <strong>Lab Consumables</strong>
            </motion.div>
          </motion.div>

        </div>


        {/* =========================
            RIGHT VISUAL
        ========================== */}
        <motion.div
          className="hds-consumables-hero-visual"
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
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="hds-consumables-hero-image-wrap"
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
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <motion.img
              src="/images/products/laboratory-consumables-hero.png"
              alt="Laboratory consumables and diagnostic supplies"
              className="hds-consumables-hero-image"
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

            <div className="hds-consumables-hero-overlay" />


            {/* IMAGE LABEL */}
            <motion.div
              className="hds-consumables-hero-label"
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
                delay: 0.72,
                ease: "easeOut",
              }}
            >
              <span>LAB ESSENTIALS</span>

              <strong>
                Practical Supplies.
                <br />
                Everyday Laboratory Support.
              </strong>
            </motion.div>
          </motion.div>


          {/* FLOATING CARD */}
          <motion.div
            className="hds-consumables-hero-floating"
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
              delay: 0.85,
              ease: "easeOut",
            }}
          >
            <strong>Laboratory Supply Solutions</strong>
            <span>Supporting routine diagnostic workflows</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}