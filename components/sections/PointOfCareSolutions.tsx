"use client";

import Link from "next/link";
import { motion } from "motion/react";

const solutions = [
  {
    number: "01",
    title: "Rapid Testing",
    subtitle: "Efficient Diagnostic Assessment",
    description:
      "Rapid testing solutions designed to support convenient sample testing and efficient diagnostic assessment in clinical and point-of-care environments.",
    image: "/images/products/rapid-testing.png",
    features: [
      "Practical Testing Workflows",
      "Rapid Diagnostic Support",
      "Clinical Applications",
    ],
  },
  {
    number: "02",
    title: "POCT Equipment",
    subtitle: "Testing Closer to Patient Care",
    description:
      "Point-of-care equipment designed to support practical diagnostic workflows where timely testing and convenient access are important.",
    image: "/images/products/poct-equipment.png",
    features: [
      "Compact Testing Systems",
      "Clinical Workflow Support",
      "Practical Operation",
    ],
  },
];

export default function PointOfCareSolutions() {
  return (
    <section className="hds-poct-solutions" id="poct-solutions">
      <div className="hds-poct-solutions-container">

        {/* =========================
            HEADING
        ========================== */}
        <div className="hds-poct-solutions-heading">

          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="hds-poct-solutions-eyebrow"
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
                delay: 0.08,
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

              CORE SOLUTIONS
            </motion.div>

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
                delay: 0.18,
                ease: "easeOut",
              }}
            >
              Point of Care

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
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                Testing Solutions
              </motion.span>
            </motion.h2>
          </motion.div>


          {/* RIGHT DESCRIPTION */}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Explore practical diagnostic solutions designed to support
            efficient testing closer to patients and clinical teams.
          </motion.p>

        </div>


        {/* =========================
            SOLUTIONS
        ========================== */}
        <div className="hds-poct-solutions-list">

          {solutions.map((solution, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.article
                className={`hds-poct-solution ${
                  isReverse ? "hds-poct-solution-reverse" : ""
                }`}
                key={solution.title}
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
                  className="hds-poct-solution-image"
                  initial={{
                    opacity: 0,
                    x: isReverse ? 50 : -50,
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
                  <motion.img
                    src={solution.image}
                    alt={solution.title}
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

                  {/* NUMBER */}
                  <motion.div
                    className="hds-poct-solution-number"
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
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    {solution.number}
                  </motion.div>
                </motion.div>


                {/* =========================
                    CONTENT
                ========================== */}
                <motion.div
                  className="hds-poct-solution-content"
                  initial={{
                    opacity: 0,
                    x: isReverse ? -45 : 45,
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
                    className="hds-poct-solution-subtitle"
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
                      FEATURES
                  ========================== */}
                  <motion.div
                    className="hds-poct-solution-features"
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
                    {solution.features.map((feature) => (
                      <motion.div
                        key={feature}
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

                        {feature}
                      </motion.div>
                    ))}
                  </motion.div>


                  {/* =========================
                      CTA
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
                      className="hds-poct-solution-link"
                    >
                      Request Product Information
                      <span>→</span>
                    </Link>
                  </motion.div>

                </motion.div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}