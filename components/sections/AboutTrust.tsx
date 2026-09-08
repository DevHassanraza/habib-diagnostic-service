"use client";

import Link from "next/link";
import { motion } from "motion/react";

const trustItems = [
  {
    number: "01",
    title: "Reliable Solutions",
    text: "Dependable diagnostic and healthcare solutions selected around quality, performance, and practical requirements.",
  },
  {
    number: "02",
    title: "Professional Support",
    text: "Responsive coordination and dependable assistance to support customers throughout their journey with us.",
  },
  {
    number: "03",
    title: "Quality Focus",
    text: "We keep quality at the center of our products, services, and the way we work with healthcare providers.",
  },
  {
    number: "04",
    title: "Customer Commitment",
    text: "We take time to understand customer requirements and support them with clarity, care, and professionalism.",
  },
];

export default function AboutTrust() {
  return (
    <section className="hds-trust">
      <div className="hds-trust-container">

        {/* =========================
            TOP AREA
        ========================== */}

        <div className="hds-trust-header">

          {/* LEFT HEADING */}
          <motion.div
            className="hds-trust-heading"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="hds-trust-eyebrow"
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
              <span></span>
              WHY HABIB DIAGNOSTIC
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
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
              A Partner You Can Rely On
            </motion.h2>
          </motion.div>


          {/* RIGHT CONTENT */}
          <motion.div
            className="hds-trust-header-content"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
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
                delay: 0.25,
                ease: "easeOut",
              }}
            >
              We believe strong healthcare partnerships are built through
              dependable solutions, professional support, and a clear
              understanding of customer needs.
            </motion.p>

            <motion.div
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
                duration: 0.5,
                delay: 0.4,
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
                className="hds-trust-btn"
              >
                Get a Quote
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>


        {/* =========================
            TRUST CARDS
        ========================== */}

        <motion.div
          className="hds-trust-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.15,
                staggerChildren: 0.13,
              },
            },
          }}
        >
          {trustItems.map((item) => (
            <motion.article
              className="hds-trust-card"
              key={item.number}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
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
              whileHover={{
                y: -7,
              }}
            >

              {/* NUMBER */}
              <motion.div
                className="hds-trust-card-number"
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
                {item.number}
              </motion.div>


              {/* LINE */}
              <motion.div
                className="hds-trust-card-line"
                variants={{
                  hidden: {
                    scaleX: 0,
                    opacity: 0,
                  },
                  visible: {
                    scaleX: 1,
                    opacity: 1,
                  },
                }}
                style={{
                  transformOrigin: "left",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />


              <motion.h3
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
                }}
              >
                {item.title}
              </motion.h3>

              <motion.p
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
                }}
              >
                {item.text}
              </motion.p>

            </motion.article>
          ))}
        </motion.div>


        {/* =========================
            BOTTOM MESSAGE
        ========================== */}

        <motion.div
          className="hds-trust-bottom"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.1,
                staggerChildren: 0.08,
              },
            },
          }}
        >

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            Quality
          </motion.span>

          <motion.i
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            Trust
          </motion.span>

          <motion.i
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            Professional Support
          </motion.span>

          <motion.i
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            Better Healthcare
          </motion.span>

        </motion.div>

      </div>
    </section>
  );
}