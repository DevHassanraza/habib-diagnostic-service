"use client";

import Link from "next/link";
import { motion } from "motion/react";

const capabilities = [
  {
    number: "01",
    title: "Reliable Diagnostic Solutions",
    description:
      "Quality-focused diagnostic technologies selected to support accuracy, efficiency, and dependable healthcare delivery.",
  },
  {
    number: "02",
    title: "Healthcare Partnerships",
    description:
      "We work closely with hospitals, laboratories, and healthcare providers to understand their needs and deliver suitable solutions.",
  },
  {
    number: "03",
    title: "Technical & After-Sales Support",
    description:
      "Our commitment continues beyond delivery with professional coordination, technical assistance, and dependable customer support.",
  },
];

export default function WhatWeDoBest() {
  return (
    <section className="hds-best">
      <div className="hds-best-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hds-best-content">

          {/* EYEBROW */}
          <motion.div
            className="hds-best-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <span />
            WHAT WE DO BEST
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            Reliable Diagnostic Solutions,

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.22,
                ease: "easeOut",
              }}
            >
              Built Around Healthcare Needs
            </motion.span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="hds-best-description"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            We combine dependable diagnostic technology, responsive service,
            and healthcare-focused support to help our customers work with
            greater confidence and efficiency.
          </motion.p>

          {/* =========================
              CAPABILITIES
          ========================== */}
          <motion.div
            className="hds-best-list"
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
                  delayChildren: 0.38,
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {capabilities.map((item) => (
              <motion.div
                className="hds-best-item"
                key={item.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -35,
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
                  x: 5,
                }}
              >
                {/* NUMBER */}
                <motion.div
                  className="hds-best-number"
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.75,
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

                <div className="hds-best-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* =========================
              ACTIONS
          ========================== */}
          <motion.div
            className="hds-best-actions"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.75,
              ease: "easeOut",
            }}
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/services"
                className="hds-best-primary-btn"
              >
                Explore Our Expertise
                <span>→</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="hds-best-text-link"
              >
                Talk to Our Team
                <span>↗</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>


        {/* =========================
            RIGHT VISUAL
        ========================== */}
        <motion.div
          className="hds-best-visual"
          initial={{
            opacity: 0,
            x: 55,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            ease: "easeOut",
          }}
        >

          <motion.div
            className="hds-best-image-wrap"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
          >

            {/* IMAGE */}
            <motion.img
              src="/images/services/what-we-do-best.png"
              alt="Habib Diagnostic Service healthcare and diagnostic solutions"
              className="hds-best-image"
              initial={{
                scale: 1.06,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            />

            {/* FLOATING CARD */}
            <motion.div
              className="hds-best-floating-card"
              initial={{
                opacity: 0,
                y: 28,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.55,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="hds-best-floating-icon"
                initial={{
                  scale: 0,
                  rotate: -15,
                }}
                whileInView={{
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.7,
                  ease: "easeOut",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3 19 6v5c0 4.5-2.8 8.2-7 10-4.2-1.8-7-5.5-7-10V6l7-3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />

                  <path
                    d="m9 12 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              <div>
                <strong>Healthcare Focused</strong>
                <span>Solutions built around your needs</span>
              </div>
            </motion.div>

            {/* SMALL LABEL */}
            <motion.div
              className="hds-best-image-label"
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.68,
                ease: "easeOut",
              }}
            >
              <span />
              Precision • Partnership • Support
            </motion.div>

          </motion.div>


          {/* =========================
              BOTTOM INFO PANEL
          ========================== */}
          <motion.div
            className="hds-best-info-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.6,
                  staggerChildren: 0.12,
                },
              },
            }}
          >

            <motion.div
              className="hds-best-info-item"
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
              transition={{ duration: 0.45 }}
            >
              <strong>Quality</strong>
              <span>Focused Solutions</span>
            </motion.div>


            <motion.div
              className="hds-best-info-divider"
              variants={{
                hidden: {
                  opacity: 0,
                  scaleY: 0,
                },
                visible: {
                  opacity: 1,
                  scaleY: 1,
                },
              }}
              transition={{ duration: 0.4 }}
            />


            <motion.div
              className="hds-best-info-item"
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
              transition={{ duration: 0.45 }}
            >
              <strong>Trusted</strong>
              <span>Partnerships</span>
            </motion.div>


            <motion.div
              className="hds-best-info-divider"
              variants={{
                hidden: {
                  opacity: 0,
                  scaleY: 0,
                },
                visible: {
                  opacity: 1,
                  scaleY: 1,
                },
              }}
              transition={{ duration: 0.4 }}
            />


            <motion.div
              className="hds-best-info-item"
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
              transition={{ duration: 0.45 }}
            >
              <strong>Reliable</strong>
              <span>Support</span>
            </motion.div>

          </motion.div>


          {/* DOT DECORATION */}
          <motion.div
            className="hds-best-dots"
            initial={{
              opacity: 0,
              scale: 0.65,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: "easeOut",
            }}
          />

        </motion.div>

      </div>
    </section>
  );
}