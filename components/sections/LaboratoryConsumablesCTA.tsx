"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function LaboratoryConsumablesCTA() {
  return (
    <section className="hds-consumables-cta">
      <div className="hds-consumables-cta-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          className="hds-consumables-cta-content"
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* EYEBROW */}
          <motion.div
            className="hds-consumables-cta-eyebrow"
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
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
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
            Need the Right

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
                delay: 0.34,
                ease: "easeOut",
              }}
            >
              Laboratory Consumables?
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
              delay: 0.42,
              ease: "easeOut",
            }}
          >
            Share your laboratory supply requirements with us and our team
            will help you explore suitable reagents, accessories, and
            consumable solutions for your workflow.
          </motion.p>
        </motion.div>


        {/* =========================
            RIGHT ACTION
        ========================== */}
        <motion.div
          className="hds-consumables-cta-action"
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
            amount: 0.35,
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
              className="hds-consumables-cta-btn"
            >
              Discuss Your Requirements
              <span>→</span>
            </Link>
          </motion.div>


          {/* META */}
          <motion.div
            className="hds-consumables-cta-meta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.5,
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
              }}
            >
              Product Guidance
            </motion.span>

            <motion.i
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
              }}
            >
              Responsive Support
            </motion.span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}