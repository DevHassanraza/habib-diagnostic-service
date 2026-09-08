"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ProductCTA() {
  return (
    <section className="hds-product-cta">
      <div className="hds-product-cta-container">

        <motion.div
          className="hds-product-cta-inner"
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          {/* =========================
              DECORATION
          ========================== */}
          <motion.div
            className="hds-product-cta-shape hds-product-cta-shape-one"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="hds-product-cta-shape hds-product-cta-shape-two"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
          />


          {/* =========================
              LEFT
          ========================== */}
          <motion.div
            className="hds-product-cta-content"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: "easeOut",
            }}
          >

            {/* EYEBROW */}
            <motion.div
              className="hds-product-cta-eyebrow"
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.18,
                ease: "easeOut",
              }}
            >
              <motion.span
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{ once: true }}
                style={{
                  transformOrigin: "left",
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.25,
                  ease: "easeOut",
                }}
              />

              PRODUCT ASSISTANCE
            </motion.div>


            {/* HEADING */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 26,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.28,
                ease: "easeOut",
              }}
            >
              Not Sure Which Solution

              <motion.span
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  ease: "easeOut",
                }}
              >
                Fits Your Requirements?
              </motion.span>
            </motion.h2>


            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.48,
                ease: "easeOut",
              }}
            >
              Tell us what you are looking for. Our team can help you explore
              suitable diagnostic, laboratory, and healthcare solutions based
              on your requirements.
            </motion.p>

          </motion.div>


          {/* =========================
              RIGHT
          ========================== */}
          <motion.div
            className="hds-product-cta-action"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: "easeOut",
            }}
          >

            {/* ACTION TEXT */}
            <motion.div
              className="hds-product-cta-action-top"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
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
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                LET&apos;S FIND THE RIGHT SOLUTION
              </motion.span>

              <motion.strong
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 16,
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
                Talk to our team about your product requirements.
              </motion.strong>
            </motion.div>


            {/* =========================
                BUTTONS
            ========================== */}
            <motion.div
              className="hds-product-cta-buttons"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.48,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >

              {/* PRIMARY */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 18,
                    scale: 0.97,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  href="/contact"
                  className="hds-product-cta-primary"
                >
                  Get a Quote
                  <span>→</span>
                </Link>
              </motion.div>


              {/* SECONDARY */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 18,
                    scale: 0.97,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  href="/contact"
                  className="hds-product-cta-secondary"
                >
                  Contact Our Team
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}