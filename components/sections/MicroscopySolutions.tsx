"use client";

import Link from "next/link";
import { motion } from "motion/react";

const solutions = [
  {
    number: "01",
    title: "Microscopes",
    subtitle: "Detailed Observation for Laboratory Workflows",
    description:
      "Microscopy solutions designed to support clear visualization, detailed sample observation, and practical laboratory examination requirements.",
    points: [
      "Detailed sample observation",
      "Routine laboratory examination",
      "Clear optical visualization",
    ],
    image: "/images/products/microscopes.png",
    imageAlt: "Professional laboratory microscope",
    reverse: false,
  },
  {
    number: "02",
    title: "Imaging Systems",
    subtitle: "Digital Visualization for Modern Laboratories",
    description:
      "Imaging solutions focused on digital visualization, documentation, and supporting efficient laboratory analysis and diagnostic workflows.",
    points: [
      "Digital image visualization",
      "Laboratory documentation",
      "Modern imaging workflows",
    ],
    image: "/images/products/imaging-systems.png",
    imageAlt: "Modern laboratory imaging system",
    reverse: true,
  },
];

export default function MicroscopySolutions() {
  return (
    <section className="hds-microscopy-solutions">
      <div className="hds-microscopy-solutions-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-microscopy-solutions-header">

          <motion.div
            className="hds-microscopy-solutions-eyebrow"
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

            CORE IMAGING SOLUTIONS
          </motion.div>


          <div className="hds-microscopy-solutions-heading">

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
              See the Details with

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
                Modern Visualization Solutions
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
              Explore microscopy and imaging solutions designed to support
              observation, visualization, documentation, and modern
              laboratory workflows.
            </motion.p>

          </div>
        </div>


        {/* =========================
            SOLUTIONS
        ========================== */}
        <div className="hds-microscopy-solutions-list">

          {solutions.map((solution) => (
            <motion.article
              key={solution.number}
              className={
                solution.reverse
                  ? "hds-microscopy-solution-row hds-microscopy-solution-reverse"
                  : "hds-microscopy-solution-row"
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
                className="hds-microscopy-solution-visual"
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
                  className="hds-microscopy-solution-image-wrap"
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
                    className="hds-microscopy-solution-image"
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

                  <div className="hds-microscopy-solution-overlay" />


                  {/* NUMBER */}
                  <motion.div
                    className="hds-microscopy-solution-number"
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
                className="hds-microscopy-solution-content"
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
                  className="hds-microscopy-solution-subtitle"
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
                  className="hds-microscopy-solution-points"
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
                      className="hds-microscopy-solution-point"
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
                    className="hds-microscopy-solution-link"
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