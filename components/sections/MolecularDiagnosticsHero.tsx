"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function MolecularDiagnosticsHero() {
  return (
    <section className="hds-molecular-hero">
      <div className="hds-molecular-hero-container">

        {/* LEFT CONTENT */}
        <div className="hds-molecular-hero-content">

          {/* BREADCRUMB */}
          <motion.div
            className="hds-molecular-hero-breadcrumb"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
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

            <strong>Molecular Diagnostics</strong>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            className="hds-molecular-hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ transformOrigin: "left" }}
              transition={{
                duration: 0.4,
                delay: 0.28,
                ease: "easeOut",
              }}
            />

            MOLECULAR DIAGNOSTICS
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            Advanced Molecular

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.46,
                ease: "easeOut",
              }}
            >
              Diagnostic Solutions
            </motion.span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.56,
              ease: "easeOut",
            }}
          >
            Explore molecular diagnostic solutions designed to support
            modern testing workflows, laboratory efficiency, and reliable
            diagnostic processes.
          </motion.p>

          {/* ACTIONS */}
          <motion.div
            className="hds-molecular-hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.68,
              ease: "easeOut",
            }}
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="#molecular-solutions"
                className="hds-molecular-hero-primary"
              >
                Explore Solutions
                <span>→</span>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="hds-molecular-hero-secondary"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            className="hds-molecular-hero-features"
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
            {[
              "PCR Systems",
              "Molecular Testing",
              "Diagnostic Workflows",
            ].map((feature) => (
              <motion.div
                className="hds-molecular-hero-feature"
                key={feature}
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
                  transition={{ duration: 0.3 }}
                />

                <strong>{feature}</strong>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hds-molecular-hero-visual"
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
            className="hds-molecular-hero-image-wrap"
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
              src="/images/products/molecular-diagnostics-hero.png"
              alt="Molecular diagnostics laboratory testing"
              className="hds-molecular-hero-image"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: "easeOut",
              }}
            />

            <div className="hds-molecular-hero-overlay" />

            {/* IMAGE LABEL */}
            <motion.div
              className="hds-molecular-hero-image-label"
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
              <span>MOLECULAR TESTING</span>

              <strong>
                Modern Testing.
                <br />
                Reliable Workflows.
              </strong>
            </motion.div>
          </motion.div>

          {/* FLOATING CARD */}
          <motion.div
            className="hds-molecular-hero-floating"
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
              className="hds-molecular-hero-floating-icon"
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
                  d="M8 3C8 8 16 8 16 13C16 18 8 18 8 21"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />

                <path
                  d="M16 3C16 8 8 8 8 13C8 18 16 18 16 21"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />

                <path
                  d="M9 6H15M9 18H15M9 12H15"
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
              <strong>Molecular Diagnostic Solutions</strong>

              <span>
                Supporting modern laboratory testing requirements
              </span>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}