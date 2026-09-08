"use client";

import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Quality Focused",
    text: "We focus on dependable diagnostic and healthcare solutions selected around practical performance and modern requirements.",
  },
  {
    number: "02",
    title: "Reliable Support",
    text: "Our team provides clear coordination and professional assistance to help customers make confident product decisions.",
  },
  {
    number: "03",
    title: "Modern Diagnostic Solutions",
    text: "We support healthcare and laboratory environments with solutions aligned with evolving diagnostic workflows and technology.",
  },
  {
    number: "04",
    title: "Customer-Centered Approach",
    text: "We take time to understand each requirement and guide customers toward solutions that fit their actual needs.",
  },
];

export default function WhyProductSolutions() {
  return (
    <section className="hds-product-why">
      <div className="hds-product-why-container">

        {/* =========================
            LEFT SIDE
        ========================== */}
        <motion.div
          className="hds-product-why-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >

          {/* EYEBROW */}
          <motion.div
            className="hds-product-why-eyebrow"
            variants={{
              hidden: {
                opacity: 0,
                x: -25,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <motion.span
              variants={{
                hidden: {
                  scaleX: 0,
                },
                visible: {
                  scaleX: 1,
                },
              }}
              style={{
                transformOrigin: "left",
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            />

            WHY OUR SOLUTIONS
          </motion.div>

          {/* HEADING */}
          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 28,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            More Than Products.

            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 12,
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
              A Reliable Healthcare Partner.
            </motion.span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
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
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            Our approach goes beyond simply supplying equipment. We focus on
            understanding customer requirements, providing dependable
            solutions, and supporting better diagnostic and healthcare
            environments.
          </motion.p>

          {/* HIGHLIGHT */}
          <motion.div
            className="hds-product-why-highlight"
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
                scale: 0.97,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  x: -12,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              OUR APPROACH
            </motion.span>

            <motion.strong
              variants={{
                hidden: {
                  opacity: 0,
                  y: 12,
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
              Practical Solutions.
              <br />
              Professional Support.
            </motion.strong>
          </motion.div>

        </motion.div>


        {/* =========================
            RIGHT SIDE
        ========================== */}
        <motion.div
          className="hds-product-why-list"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.12,
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {reasons.map((reason) => (
            <motion.article
              className="hds-product-why-item"
              key={reason.number}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 40,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              whileHover={{
                x: 6,
              }}
            >

              {/* NUMBER */}
              <motion.div
                className="hds-product-why-number"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.7,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {reason.number}
              </motion.div>

              {/* CONTENT */}
              <motion.div
                className="hds-product-why-content"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 12,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </motion.div>

              {/* ARROW */}
              <motion.div
                className="hds-product-why-arrow"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -12,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={{
                  x: 5,
                }}
              >
                →
              </motion.div>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}