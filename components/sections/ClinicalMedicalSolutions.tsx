"use client";

import Link from "next/link";
import { motion } from "motion/react";

const solutions = [
  {
    number: "01",
    title: "Patient Care",
    subtitle: "Supporting Everyday Care",
    description:
      "Patient care solutions designed to support comfort, practical clinical workflows, and everyday healthcare requirements across different care environments.",
    image: "/images/products/patient-care.png",
    features: [
      "Patient Care Support",
      "Practical Clinical Use",
      "Healthcare Environments",
    ],
  },
  {
    number: "02",
    title: "Monitoring Equipment",
    subtitle: "Supporting Clinical Observation",
    description:
      "Monitoring equipment designed to help healthcare teams observe important patient parameters and support efficient clinical assessment.",
    image: "/images/products/monitoring-equipment.png",
    features: [
      "Patient Monitoring",
      "Clinical Observation",
      "Workflow Support",
    ],
  },
  {
    number: "03",
    title: "Clinical Equipment",
    subtitle: "Essential Medical Solutions",
    description:
      "Clinical equipment selected to support essential medical procedures, practical operation, and modern healthcare workflows.",
    image: "/images/products/clinical-equipment.png",
    features: [
      "Essential Equipment",
      "Clinical Applications",
      "Practical Operation",
    ],
  },
];

export default function ClinicalMedicalSolutions() {
  return (
    <section
      className="hds-clinical-solutions"
      id="clinical-solutions"
    >
      <div className="hds-clinical-solutions-container">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="hds-clinical-solutions-header">

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
              amount: 0.4,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="hds-clinical-solutions-eyebrow"
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
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              Equipment for

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
                  delay: 0.32,
                  ease: "easeOut",
                }}
              >
                Modern Clinical Care
              </motion.span>
            </motion.h2>
          </motion.div>


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
            Explore medical equipment solutions designed around patient care,
            monitoring, and essential clinical requirements.
          </motion.p>

        </div>


        {/* =========================
            SOLUTIONS
        ========================== */}
        <div className="hds-clinical-solutions-list">

          {solutions.map((solution, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.article
                className={`hds-clinical-solution ${
                  isReverse
                    ? "hds-clinical-solution-reverse"
                    : ""
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
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >

                {/* =========================
                    IMAGE
                ========================== */}
                <motion.div
                  className="hds-clinical-solution-image"
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
                    amount: 0.25,
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
                      duration: 1.1,
                      ease: "easeOut",
                    }}
                  />

                  <motion.span
                    className="hds-clinical-solution-number"
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
                      delay: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    {solution.number}
                  </motion.span>
                </motion.div>


                {/* =========================
                    CONTENT
                ========================== */}
                <motion.div
                  className="hds-clinical-solution-content"
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
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.12,
                    ease: "easeOut",
                  }}
                >

                  {/* SUBTITLE */}
                  <motion.span
                    className="hds-clinical-solution-subtitle"
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
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
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
                      y: 18,
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


                  {/* FEATURES */}
                  <motion.div
                    className="hds-clinical-solution-features"
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
                          staggerChildren: 0.1,
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
                              scale: 0,
                            },
                            visible: {
                              scale: 1,
                            },
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        />

                        <strong>{feature}</strong>
                      </motion.div>
                    ))}
                  </motion.div>


                  {/* CTA LINK */}
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
                      delay: 0.65,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      x: 5,
                    }}
                  >
                    <Link
                      href="/contact"
                      className="hds-clinical-solution-link"
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