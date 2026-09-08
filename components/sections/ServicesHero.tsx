"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ServicesHero() {
  return (
    <section className="hds-services-hero">
      <div className="hds-services-hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hds-services-hero-content">

          {/* BREADCRUMB */}
          <motion.div
            className="hds-services-hero-breadcrumb"
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
            <strong>Services</strong>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            className="hds-services-hero-eyebrow"
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

            OUR SERVICES
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
            Supporting Healthcare

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
              Beyond Equipment
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
            We provide professional support and practical solutions to help
            healthcare and laboratory teams use their equipment effectively
            and confidently.
          </motion.p>

          {/* =========================
              ACTIONS
          ========================== */}
          <motion.div
            className="hds-services-hero-actions"
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
                href="#our-services"
                className="hds-services-hero-primary"
              >
                Explore Services
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
                className="hds-services-hero-secondary"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* =========================
            RIGHT VISUAL
        ========================== */}
        <motion.div
          className="hds-services-hero-visual"
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

          {/* IMAGE */}
          <motion.img
            src="/images/services/services-hero.png"
            alt="Professional diagnostic laboratory services"
            initial={{
              scale: 1.08,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.22,
              ease: "easeOut",
            }}
          />

          {/* EXISTING OVERLAY */}
          <motion.div
            className="hds-services-hero-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
          />

          {/* =========================
              IMAGE LABEL
          ========================== */}
          <motion.div
            className="hds-services-hero-label"
            initial={{
              opacity: 0,
              x: -25,
              y: 10,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            <motion.span
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
              PROFESSIONAL SUPPORT
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
                delay: 0.86,
                ease: "easeOut",
              }}
            >
              Reliable Service.
              <br />
              Practical Solutions.
            </motion.strong>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}