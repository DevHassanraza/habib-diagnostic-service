"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function AboutHero() {
  return (
    <section className="hds-about-page-hero">

      {/* BACKGROUND IMAGE */}
      <motion.div
        className="hds-about-page-hero-bg"
        style={{
          backgroundImage: "url('/images/about/about-hero.png')",
        }}
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
      />

      <div className="hds-about-page-hero-overlay" />

      <div className="hds-about-page-hero-container">
        <div className="hds-about-page-hero-content">

          {/* BREADCRUMB */}
          <motion.div
            className="hds-about-page-breadcrumb"
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
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <Link href="/">Home</Link>
            <span>→</span>
            <strong>About Us</strong>
          </motion.div>


          {/* EYEBROW */}
          <motion.span
            className="hds-about-page-eyebrow"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.28,
              ease: "easeOut",
            }}
          >
            ABOUT HABIB DIAGNOSTIC SERVICE
          </motion.span>


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
              delay: 0.38,
              ease: "easeOut",
            }}
          >
            Built on Trust,

            <motion.span
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.55,
                ease: "easeOut",
              }}
            >
              Focused on Better Healthcare
            </motion.span>
          </motion.h1>


          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.65,
              ease: "easeOut",
            }}
          >
            We are committed to delivering reliable diagnostic and healthcare
            solutions that support medical professionals, improve efficiency,
            and contribute to better patient care.
          </motion.p>


          {/* BUTTONS */}
          <motion.div
            className="hds-about-page-hero-actions"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.78,
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
              <Link
                href="/contact"
                className="hds-about-page-primary-btn"
              >
                Get in Touch
                <span>→</span>
              </Link>
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
                href="/products"
                className="hds-about-page-secondary-btn"
              >
                Explore Products
              </Link>
            </motion.div>
          </motion.div>


          {/* TRUST ITEMS */}
          <motion.div
            className="hds-about-page-trust"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.9,
                  staggerChildren: 0.13,
                },
              },
            }}
          >

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 18,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <strong>Quality</strong>
              <span>Healthcare Solutions</span>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 18,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <strong>Reliable</strong>
              <span>Professional Support</span>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 18,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <strong>Focused</strong>
              <span>Better Patient Care</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}