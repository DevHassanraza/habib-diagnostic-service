"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function MicroscopyCTA() {
  return (
    <section className="hds-microscopy-cta">
      <div className="hds-microscopy-cta-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          className="hds-microscopy-cta-content"
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
            className="hds-microscopy-cta-eyebrow"
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
            Need Help Choosing the

            <motion.span
              initial={{
                opacity: 0,
                y: 13,
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
              Right Microscopy &amp; Imaging Solution?
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
            Share your laboratory requirements with us. Our team can help you
            explore suitable microscopy and imaging solutions for observation,
            visualization, and diagnostic workflows.
          </motion.p>


          {/* ACTIONS */}
          <motion.div
            className="hds-microscopy-cta-actions"
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
              duration: 0.5,
              delay: 0.5,
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
                className="hds-microscopy-cta-primary"
              >
                Get a Quote
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
                href="/contact"
                className="hds-microscopy-cta-secondary"
              >
                Contact Our Team
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>


        {/* =========================
            RIGHT SIDE
        ========================== */}
        <motion.div
          className="hds-microscopy-cta-side"
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

          {/* SIDE LINE */}
          <motion.div
            className="hds-microscopy-cta-side-line"
            initial={{
              opacity: 0,
              scaleY: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
            }}
            viewport={{ once: true }}
            style={{
              transformOrigin: "top",
            }}
            transition={{
              duration: 0.55,
              delay: 0.32,
              ease: "easeOut",
            }}
          />


          {/* LABEL */}
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
              duration: 0.45,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            MICROSCOPY &amp; IMAGING
          </motion.span>


          {/* CATEGORIES */}
          <motion.strong
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.48,
              ease: "easeOut",
            }}
          >
            Microscopes

            <motion.i
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.58,
              }}
            >
              •
            </motion.i>

            Imaging Systems

            <motion.i
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.66,
              }}
            >
              •
            </motion.i>

            Digital Visualization
          </motion.strong>

        </motion.div>

      </div>
    </section>
  );
}