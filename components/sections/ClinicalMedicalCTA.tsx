"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ClinicalMedicalCTA() {
  return (
    <section className="hds-clinical-cta">
      <div className="hds-clinical-cta-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          className="hds-clinical-cta-content"
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
            className="hds-clinical-cta-eyebrow"
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
                duration: 0.45,
                delay: 0.15,
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
            Looking for the Right

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
              Clinical Equipment?
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
            Share your clinical and medical equipment requirements with us.
            Our team will help you explore suitable solutions for your
            healthcare environment.
          </motion.p>

        </motion.div>


        {/* =========================
            RIGHT ACTION
        ========================== */}
        <motion.div
          className="hds-clinical-cta-action"
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
            delay: 0.2,
            ease: "easeOut",
          }}
        >

          {/* BUTTON */}
          <motion.div
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
              delay: 0.4,
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
              className="hds-clinical-cta-btn"
            >
              Discuss Your Requirements
              <span>→</span>
            </Link>
          </motion.div>


          {/* META */}
          <motion.div
            className="hds-clinical-cta-meta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.55,
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
              Professional Assistance
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