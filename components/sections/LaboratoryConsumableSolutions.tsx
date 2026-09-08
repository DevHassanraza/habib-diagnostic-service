"use client";

import Link from "next/link";
import { motion } from "motion/react";

const solutions = [
  {
    number: "01",
    title: "Reagents & Kits",
    subtitle: "Diagnostic Testing Essentials",
    description:
      "Laboratory reagents and testing kits designed to support routine diagnostic procedures and everyday laboratory workflows.",
    image: "/images/products/reagents-kits.png",
    features: [
      "Routine Diagnostic Testing",
      "Laboratory Applications",
      "Workflow Support",
    ],
  },
  {
    number: "02",
    title: "Accessories",
    subtitle: "Practical Laboratory Support",
    description:
      "Laboratory accessories and supporting tools for organized sample preparation, handling, and day-to-day testing activities.",
    image: "/images/products/lab-accessories.png",
    features: [
      "Sample Handling",
      "Laboratory Organization",
      "Practical Daily Use",
    ],
  },
  {
    number: "03",
    title: "Lab Consumables",
    subtitle: "Everyday Laboratory Supplies",
    description:
      "Essential consumable supplies for routine laboratory work, sample processing, preparation, and diagnostic testing.",
    image: "/images/products/lab-consumables.png",
    features: [
      "Routine Lab Supplies",
      "Sample Preparation",
      "Testing Support",
    ],
  },
];

export default function LaboratoryConsumableSolutions() {
  return (
    <section
      className="hds-consumable-solutions"
      id="consumable-solutions"
    >
      <div className="hds-consumable-solutions-container">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="hds-consumable-solutions-heading">

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
              className="hds-consumable-solutions-eyebrow"
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
                  duration: 0.4,
                  delay: 0.15,
                  ease: "easeOut",
                }}
              />

              CORE CONSUMABLES
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
              Essential Supplies for

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
                Modern Laboratories
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
            Explore practical laboratory supplies designed to support routine
            testing, sample preparation, and everyday diagnostic workflows.
          </motion.p>

        </div>


        {/* =========================
            SOLUTIONS
        ========================== */}
        <div className="hds-consumable-solutions-list">

          {solutions.map((solution, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.article
                className={`hds-consumable-solution ${
                  isReverse
                    ? "hds-consumable-solution-reverse"
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
                  className="hds-consumable-solution-image"
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

                  <motion.span
                    className="hds-consumable-solution-number"
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
                  </motion.span>
                </motion.div>


                {/* =========================
                    CONTENT
                ========================== */}
                <motion.div
                  className="hds-consumable-solution-content"
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
                    className="hds-consumable-solution-subtitle"
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


                  {/* FEATURES */}
                  <motion.div
                    className="hds-consumable-solution-features"
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

                        <strong>{feature}</strong>
                      </motion.div>
                    ))}
                  </motion.div>


                  {/* LINK */}
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
                      className="hds-consumable-solution-link"
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