"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function LaboratoryDiagnosticsHero() {
  return (
    <section className="hds-lab-hero">
      <div className="hds-lab-hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hds-lab-hero-content">

          {/* BREADCRUMB */}
          <motion.div
            className="hds-lab-hero-breadcrumb"
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

            <strong>Laboratory Diagnostics</strong>
          </motion.div>


          {/* EYEBROW */}
          <motion.div
            className="hds-lab-hero-eyebrow"
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

            LABORATORY DIAGNOSTICS
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
            Reliable Laboratory Solutions

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
              for Modern Diagnostics
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
            Explore laboratory diagnostic solutions designed to support
            accurate testing, efficient workflows, and dependable healthcare
            environments.
          </motion.p>


          {/* ACTIONS */}
          <motion.div
            className="hds-lab-hero-actions"
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
                href="#laboratory-solutions"
                className="hds-lab-hero-primary"
              >
                Explore Solutions
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
                className="hds-lab-hero-secondary"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>


          {/* FEATURES */}
          <motion.div
            className="hds-lab-hero-features"
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
              className="hds-lab-hero-feature"
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

              <strong>Chemistry Analyzers</strong>
            </motion.div>


            <motion.div
              className="hds-lab-hero-feature"
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

              <strong>Hematology</strong>
            </motion.div>


            <motion.div
              className="hds-lab-hero-feature"
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

              <strong>Immunoassay</strong>
            </motion.div>
          </motion.div>

        </div>


        {/* =========================
            RIGHT IMAGE
        ========================== */}
        <motion.div
          className="hds-lab-hero-visual"
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
            className="hds-lab-hero-image-wrap"
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
              src="/images/products/laboratory-diagnostics-hero.png"
              alt="Modern laboratory diagnostic equipment"
              className="hds-lab-hero-image"
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

            <div className="hds-lab-hero-overlay" />


            {/* IMAGE BADGE */}
            <motion.div
              className="hds-lab-hero-image-badge"
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
              <span>LABORATORY SOLUTIONS</span>

              <strong>
                Accuracy.
                <br />
                Efficiency.
                <br />
                Reliability.
              </strong>
            </motion.div>

          </motion.div>


          {/* =========================
              FLOATING CARD
          ========================== */}
          <motion.div
            className="hds-lab-hero-floating-card"
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
            <motion.div
              className="hds-lab-hero-floating-icon"
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
                delay: 0.95,
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
                  d="M9 3H15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />

                <path
                  d="M10 3V9L6 17.2C5.5 18.3 6.2 20 7.8 20H16.2C17.8 20 18.5 18.3 18 17.2L14 9V3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />

                <path
                  d="M8 14H16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

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
                delay: 1,
                ease: "easeOut",
              }}
            >
              <strong>Diagnostic Laboratory Solutions</strong>

              <span>
                Designed around modern testing requirements
              </span>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}