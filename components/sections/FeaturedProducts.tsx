"use client";

import Link from "next/link";
import { motion } from "motion/react";

const featuredSolutions = [
  {
    number: "01",
    title: "Hematology & Chemistry Analyzers",
    text: "Modern analyzer solutions designed to support efficient laboratory workflows, dependable testing, and accurate diagnostic processes.",
    tag: "Laboratory Diagnostics",
  },
  {
    number: "02",
    title: "PCR & Molecular Testing Systems",
    text: "Molecular diagnostic solutions supporting advanced testing requirements across modern laboratory environments.",
    tag: "Molecular Diagnostics",
  },
  {
    number: "03",
    title: "Microscopy & Imaging Systems",
    text: "Reliable visualization and imaging solutions designed to support detailed examination and diagnostic confidence.",
    tag: "Microscopy & Imaging",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="hds-featured-products">
      <div className="hds-featured-products-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-featured-products-header">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="hds-featured-products-eyebrow"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                style={{ transformOrigin: "left" }}
                transition={{
                  duration: 0.4,
                  delay: 0.15,
                }}
              />

              FEATURED SOLUTIONS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              Product Solutions Designed

              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.32,
                  ease: "easeOut",
                }}
              >
                for Modern Diagnostics
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            From laboratory testing to molecular diagnostics and imaging,
            our product solutions are selected around practical healthcare
            requirements and modern diagnostic workflows.
          </motion.p>

        </div>


        {/* =========================
            MAIN FEATURE
        ========================== */}
        <div className="hds-featured-products-main">

          {/* IMAGE */}
          <motion.div
            className="hds-featured-products-visual"
            initial={{
              opacity: 0,
              x: -45,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
          >
            <motion.img
              src="/images/products/featured-diagnostic-analyzer.png"
              alt="Modern diagnostic laboratory analyzer"
              initial={{ scale: 1.07 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                ease: "easeOut",
              }}
            />

            <div className="hds-featured-products-overlay" />

            <motion.div
              className="hds-featured-products-image-content"
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
                duration: 0.6,
                delay: 0.35,
                ease: "easeOut",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                }}
              >
                LABORATORY SOLUTIONS
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.48,
                  ease: "easeOut",
                }}
              >
                Reliable Equipment for
                Modern Diagnostic Workflows
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.58,
                }}
                whileHover={{ x: 5 }}
              >
                <Link href="/contact">
                  Request Product Information
                  <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>


          {/* =========================
              RIGHT SOLUTIONS
          ========================== */}
          <motion.div
            className="hds-featured-products-list"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.12,
                  staggerChildren: 0.14,
                },
              },
            }}
          >
            {featuredSolutions.map((solution) => (
              <motion.article
                className="hds-featured-product-item"
                key={solution.number}
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
                  x: 5,
                }}
              >
                <motion.div
                  className="hds-featured-product-number"
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
                  {solution.number}
                </motion.div>

                <div className="hds-featured-product-content">

                  <motion.span
                    className="hds-featured-product-tag"
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
                    transition={{ duration: 0.4 }}
                  >
                    {solution.tag}
                  </motion.span>

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
                    transition={{ duration: 0.45 }}
                  >
                    {solution.title}
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
                    transition={{ duration: 0.45 }}
                  >
                    {solution.text}
                  </motion.p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href="/contact">
                      View Solution
                      <span>→</span>
                    </Link>
                  </motion.div>

                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>


        {/* =========================
            BOTTOM STRIP
        ========================== */}
        <motion.div
          className="hds-featured-products-bottom"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.1,
                staggerChildren: 0.12,
              },
            },
          }}
        >

          <motion.div
            className="hds-featured-products-bottom-item"
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
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
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              01
            </motion.span>

            <div>
              <strong>Quality Focused</strong>
              <p>
                Solutions selected around modern diagnostic requirements.
              </p>
            </div>
          </motion.div>


          <motion.div
            className="hds-featured-products-bottom-item"
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
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
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              02
            </motion.span>

            <div>
              <strong>Professional Support</strong>
              <p>
                Clear coordination and dependable customer assistance.
              </p>
            </div>
          </motion.div>


          <motion.div
            className="hds-featured-products-bottom-item"
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
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
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              03
            </motion.span>

            <div>
              <strong>Healthcare Oriented</strong>
              <p>
                Products and solutions built around practical clinical needs.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}