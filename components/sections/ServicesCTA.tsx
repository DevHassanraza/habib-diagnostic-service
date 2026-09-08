"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ServicesCTA() {
  return (
    <section className="hds-services-cta">
      <div className="hds-services-cta-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          className="hds-services-cta-content"
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
            ease: "easeOut",
          }}
        >

          {/* EYEBROW */}
          <motion.div
            className="hds-services-cta-eyebrow"
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
                delay: 0.16,
                ease: "easeOut",
              }}
            />

            NEED ASSISTANCE?
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
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Need Support for Your

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
                delay: 0.32,
                ease: "easeOut",
              }}
            >
              Medical Equipment?
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
              delay: 0.42,
              ease: "easeOut",
            }}
          >
            Talk to our team about your diagnostic, laboratory, or medical
            equipment requirements. We’ll help you find the right way forward.
          </motion.p>

        </motion.div>


        {/* =========================
            CTA BUTTON
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 35,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
            delay: 0.3,
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
            className="hds-services-cta-btn"
          >
            Contact Our Team

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

      </div>
    </section>
  );
}