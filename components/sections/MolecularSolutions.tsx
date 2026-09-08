"use client";

import Link from "next/link";
import { motion } from "motion/react";

const solutions = [
  {
    number: "01",
    title: "PCR Systems",
    subtitle: "Modern Amplification & Testing Workflows",
    description:
      "PCR system solutions designed to support molecular amplification, efficient laboratory workflows, and modern diagnostic testing requirements.",
    points: [
      "PCR amplification workflows",
      "Efficient sample processing",
      "Modern laboratory testing",
    ],
    image: "/images/products/pcr-systems.png",
    imageAlt: "PCR system in a molecular diagnostics laboratory",
    reverse: false,
  },
  {
    number: "02",
    title: "Molecular Testing",
    subtitle: "Supporting Modern Molecular Diagnostics",
    description:
      "Molecular testing solutions focused on supporting sample preparation, diagnostic workflows, and dependable laboratory testing environments.",
    points: [
      "Molecular testing workflows",
      "Sample preparation support",
      "Diagnostic laboratory applications",
    ],
    image: "/images/products/molecular-testing.png",
    imageAlt: "Molecular diagnostic testing laboratory",
    reverse: true,
  },
];

export default function MolecularSolutions() {
  return (
    <section className="hds-molecular-solutions">
      <div className="hds-molecular-solutions-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-molecular-solutions-header">

          <motion.div
            className="hds-molecular-solutions-eyebrow"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
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
                delay: 0.1,
                ease: "easeOut",
              }}
            />

            CORE MOLECULAR SOLUTIONS
          </motion.div>


          <div className="hds-molecular-solutions-heading">

            <motion.h2
              initial={{
                opacity: 0,
                x: -35,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              Technology Supporting

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
                  duration: 0.55,
                  delay: 0.25,
                  ease: "easeOut",
                }}
              >
                Modern Molecular Diagnostics
              </motion.span>
            </motion.h2>


            <motion.p
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
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              Explore our molecular diagnostic solution areas designed around
              efficient laboratory workflows and modern testing requirements.
            </motion.p>

          </div>
        </div>


        {/* =========================
            SOLUTIONS
        ========================== */}
        <div className="hds-molecular-solutions-list">

          {solutions.map((solution) => (
            <motion.article
              key={solution.number}
              className={
                solution.reverse
                  ? "hds-molecular-solution-row hds-molecular-solution-reverse"
                  : "hds-molecular-solution-row"
              }
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
            >

              {/* =========================
                  IMAGE
              ========================== */}
              <motion.div
                className="hds-molecular-solution-visual"
                initial={{
                  opacity: 0,
                  x: solution.reverse ? 50 : -50,
                  scale: 0.96,
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
                <motion.div
                  className="hds-molecular-solution-image-wrap"
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08,
                    ease: "easeOut",
                  }}
                >
                  <motion.img
                    src={solution.image}
                    alt={solution.imageAlt}
                    className="hds-molecular-solution-image"
                    initial={{
                      scale: 1.07,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  />

                  <div className="hds-molecular-solution-overlay" />


                  {/* NUMBER */}
                  <motion.div
                    className="hds-molecular-solution-number"
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.35,
                      ease: "easeOut",
                    }}
                  >
                    {solution.number}
                  </motion.div>

                </motion.div>
              </motion.div>


              {/* =========================
                  CONTENT
              ========================== */}
              <motion.div
                className="hds-molecular-solution-content"
                initial={{
                  opacity: 0,
                  x: solution.reverse ? -45 : 45,
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
                  duration: 0.7,
                  delay: 0.1,
                  ease: "easeOut",
                }}
              >

                {/* SUBTITLE */}
                <motion.span
                  className="hds-molecular-solution-subtitle"
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
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                >
                  {solution.subtitle}
                </motion.span>


                {/* TITLE */}
                <motion.h3
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
                    delay: 0.28,
                    ease: "easeOut",
                  }}
                >
                  {solution.title}
                </motion.h3>


                {/* DESCRIPTION */}
                <motion.p
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
                    delay: 0.36,
                    ease: "easeOut",
                  }}
                >
                  {solution.description}
                </motion.p>


                {/* =========================
                    POINTS
                ========================== */}
                <motion.div
                  className="hds-molecular-solution-points"
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
                        delayChildren: 0.42,
                        staggerChildren: 0.09,
                      },
                    },
                  }}
                >
                  {solution.points.map((point) => (
                    <motion.div
                      className="hds-molecular-solution-point"
                      key={point}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: 18,
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

                      <strong>{point}</strong>
                    </motion.div>
                  ))}
                </motion.div>


                {/* =========================
                    LINK
                ========================== */}
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
                    duration: 0.45,
                    delay: 0.58,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                >
                  <Link
                    href="/contact"
                    className="hds-molecular-solution-link"
                  >
                    Request Product Information
                    <span>→</span>
                  </Link>
                </motion.div>

              </motion.div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}