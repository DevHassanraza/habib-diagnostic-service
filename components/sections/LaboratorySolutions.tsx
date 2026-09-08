"use client";

import Link from "next/link";
import { motion } from "motion/react";

const laboratorySolutions = [
  {
    number: "01",
    title: "Chemistry Analyzers",
    subtitle: "Efficient Routine Chemistry Testing",
    description:
      "Our chemistry analyzer solutions are designed to support efficient laboratory workflows, consistent testing processes, and dependable day-to-day diagnostic operations.",
    points: [
      "Routine chemistry testing",
      "Streamlined laboratory workflows",
      "Reliable testing support",
    ],
    image: "/images/products/chemistry-analyzer.png",
    imageAlt: "Clinical chemistry analyzer",
    reverse: false,
  },
  {
    number: "02",
    title: "Hematology",
    subtitle: "Solutions for Blood Analysis Workflows",
    description:
      "Hematology solutions support modern blood analysis workflows with practical equipment options designed around laboratory efficiency and diagnostic requirements.",
    points: [
      "Blood analysis workflows",
      "Laboratory sample processing",
      "Modern diagnostic requirements",
    ],
    image: "/images/products/hematology-analyzer.png",
    imageAlt: "Modern hematology analyzer",
    reverse: true,
  },
  {
    number: "03",
    title: "Immunoassay",
    subtitle: "Reliable Immunoassay Testing Solutions",
    description:
      "Our immunoassay solutions are focused on supporting laboratories with dependable testing systems for a range of diagnostic applications and clinical workflows.",
    points: [
      "Immunoassay testing",
      "Clinical diagnostic workflows",
      "Reliable laboratory solutions",
    ],
    image: "/images/products/immunoassay-analyzer.png",
    imageAlt: "Modern immunoassay analyzer",
    reverse: false,
  },
];

export default function LaboratorySolutions() {
  return (
    <section className="hds-lab-solutions">
      <div className="hds-lab-solutions-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-lab-solutions-header">

          <motion.div
            className="hds-lab-solutions-eyebrow"
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

            CORE LABORATORY SOLUTIONS
          </motion.div>


          <div className="hds-lab-solutions-heading-row">

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
              Diagnostic Equipment for

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
                Modern Laboratory Workflows
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
              Explore our key laboratory diagnostic solution areas, focused on
              supporting efficient testing, practical workflows, and reliable
              healthcare environments.
            </motion.p>

          </div>
        </div>


        {/* =========================
            SOLUTIONS LIST
        ========================== */}
        <div className="hds-lab-solutions-list">

          {laboratorySolutions.map((solution) => (
            <motion.article
              key={solution.number}
              className={
                solution.reverse
                  ? "hds-lab-solution-row hds-lab-solution-row-reverse"
                  : "hds-lab-solution-row"
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
                className="hds-lab-solution-visual"
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
                  className="hds-lab-solution-image-wrap"
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
                    className="hds-lab-solution-image"
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

                  <div className="hds-lab-solution-image-overlay" />


                  {/* NUMBER */}
                  <motion.div
                    className="hds-lab-solution-number"
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
                className="hds-lab-solution-content"
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

                {/* SMALL TITLE */}
                <motion.div
                  className="hds-lab-solution-small-title"
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
                </motion.div>


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
                  className="hds-lab-solution-points"
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
                      className="hds-lab-solution-point"
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
                    className="hds-lab-solution-link"
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