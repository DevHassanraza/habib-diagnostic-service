"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function PointOfCareCTA() {
  return (
    <section className="hds-poct-cta">
      <div className="hds-poct-cta-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          className="hds-poct-cta-content"
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
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          {/* EYEBROW */}
          <motion.div
            className="hds-poct-cta-eyebrow"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
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
                delay: 0.15,
                ease: "easeOut",
              }}
            />

            PRODUCT ASSISTANCE
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Need the Right Point of Care

            <motion.span
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
                duration: 0.55,
                delay: 0.32,
                ease: "easeOut",
              }}
            >
              Testing Solution?
            </motion.span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            Tell us about your diagnostic requirements and our team will help
            you explore suitable point-of-care testing solutions for your
            clinical environment.
          </motion.p>

        </motion.div>


        {/* =========================
            RIGHT ACTION
        ========================== */}
        <motion.div
          className="hds-poct-cta-action"
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
            duration: 0.7,
            delay: 0.18,
            ease: "easeOut",
          }}
        >

          {/* BUTTON */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.35,
              ease: "easeOut",
            }}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              href="/contact"
              className="hds-poct-cta-btn"
            >
              Discuss Your Requirements
              <motion.span
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>


          {/* SUPPORT META */}
          <motion.p
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
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              Professional product assistance
            </motion.span>

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

            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              Responsive support
            </motion.span>
          </motion.p>

        </motion.div>

      </div>
    </section>
  );
}