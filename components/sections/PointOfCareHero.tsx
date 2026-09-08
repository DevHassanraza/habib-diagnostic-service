"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function PointOfCareHero() {
  return (
    <section className="hds-poct-hero">
      <div className="hds-poct-hero-container">

        {/* =========================
            CONTENT
        ========================== */}
        <div className="hds-poct-hero-content">

          {/* BREADCRUMB */}
          <motion.div
            className="hds-poct-hero-breadcrumb"
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

            <strong>Point of Care Testing</strong>
          </motion.div>


          {/* EYEBROW */}
          <motion.div
            className="hds-poct-hero-eyebrow"
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

            POINT OF CARE TESTING
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
            Diagnostic Testing

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
              Closer to the Patient
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
            Explore point-of-care testing solutions designed to support rapid
            diagnostic workflows, practical clinical testing, and efficient
            patient care environments.
          </motion.p>


          {/* ACTIONS */}
          <motion.div
            className="hds-poct-hero-actions"
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
                href="#poct-solutions"
                className="hds-poct-hero-primary"
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
                className="hds-poct-hero-secondary"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>


          {/* FEATURES */}
          <motion.div
            className="hds-poct-hero-features"
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
              "Rapid Testing",
              "POCT Equipment",
              "Clinical Workflows",
            ].map((feature) => (
              <motion.div
                className="hds-poct-hero-feature"
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
                  transition={{
                    duration: 0.3,
                  }}
                />

                <strong>{feature}</strong>
              </motion.div>
            ))}
          </motion.div>

        </div>


        {/* =========================
            VISUAL
        ========================== */}
        <motion.div
          className="hds-poct-hero-visual"
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

          {/* IMAGE */}
          <motion.div
            className="hds-poct-hero-image-wrap"
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
              src="/images/products/point-of-care-testing-hero.png"
              alt="Point of care diagnostic testing equipment"
              className="hds-poct-hero-image"
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

            <div className="hds-poct-hero-overlay" />


            {/* IMAGE LABEL */}
            <motion.div
              className="hds-poct-hero-image-label"
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
              <span>POINT OF CARE</span>

              <strong>
                Practical Testing.
                <br />
                Efficient Workflows.
              </strong>
            </motion.div>

          </motion.div>


          {/* =========================
              FLOATING CARD
          ========================== */}
          <motion.div
            className="hds-poct-hero-floating"
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

            {/* ICON */}
            <motion.div
              className="hds-poct-hero-floating-icon"
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
              <motion.span
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.25,
                  delay: 1.02,
                }}
              />

              <motion.span
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.25,
                  delay: 1.1,
                }}
              />
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
                delay: 1,
                ease: "easeOut",
              }}
            >
              <strong>Point of Care Solutions</strong>

              <span>
                Supporting efficient clinical testing environments
              </span>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}