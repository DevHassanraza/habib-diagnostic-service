"use client";

import { motion } from "motion/react";

const coreValues = [
  {
    number: "01",
    title: "Quality",
    text: "We focus on dependable solutions that support accuracy, performance, and better healthcare.",
  },
  {
    number: "02",
    title: "Trust",
    text: "We value honest communication, reliable service, and long-term professional relationships.",
  },
  {
    number: "03",
    title: "Responsibility",
    text: "We approach every requirement with care, professionalism, and a strong sense of responsibility.",
  },
  {
    number: "04",
    title: "Progress",
    text: "We continue learning, improving, and adapting to the evolving needs of modern healthcare.",
  },
];

export default function OurPurpose() {
  return (
    <section className="hds-purpose">
      <div className="hds-purpose-container">

        {/* =========================
            TOP CONTENT
        ========================== */}
        <div className="hds-purpose-top">

          <motion.div
            className="hds-purpose-heading"
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
              className="hds-purpose-eyebrow"
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
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
                transition={{
                  duration: 0.4,
                  delay: 0.15,
                  ease: "easeOut",
                }}
              />

              OUR PURPOSE
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
              Guided by Purpose,

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
                Driven by Better Healthcare
              </motion.span>
            </motion.h2>
          </motion.div>


          <motion.p
            className="hds-purpose-intro"
            initial={{
              opacity: 0,
              x: 35,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
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
            Our purpose defines how we work, how we support our customers,
            and how we continue moving forward in an evolving healthcare
            environment.
          </motion.p>

        </div>


        {/* =========================
            MAIN AREA
        ========================== */}
        <div className="hds-purpose-main">

          {/* IMAGE */}
          <motion.div
            className="hds-purpose-visual"
            initial={{
              opacity: 0,
              x: -50,
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
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <motion.img
              src="/images/about/our-purpose.png"
              alt="Modern diagnostic laboratory"
              className="hds-purpose-image"
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

            <div className="hds-purpose-visual-overlay" />


            {/* IMAGE NOTE */}
            <motion.div
              className="hds-purpose-image-note"
              initial={{
                opacity: 0,
                y: 28,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              <motion.span
                className="hds-purpose-note-line"
                initial={{
                  scaleY: 0,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{ once: true }}
                style={{
                  transformOrigin: "top",
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              />

              <motion.div
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.55,
                  ease: "easeOut",
                }}
              >
                <strong>Purpose in Every Step</strong>

                <span>
                  Supporting quality, trust and progress in healthcare
                </span>
              </motion.div>
            </motion.div>
          </motion.div>


          {/* =========================
              MISSION + VISION
          ========================== */}
          <motion.div
            className="hds-purpose-statements"
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
                  staggerChildren: 0.16,
                },
              },
            }}
          >

            {/* MISSION */}
            <motion.article
              className="hds-purpose-statement hds-purpose-mission"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 45,
                  y: 20,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
            >
              <div className="hds-purpose-statement-top">

                <motion.span
                  className="hds-purpose-statement-number"
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
                  }}
                >
                  01
                </motion.span>

                <motion.div
                  className="hds-purpose-statement-icon"
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.75,
                      rotate: -8,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    },
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M15 9L20 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </div>

              <motion.span
                className="hds-purpose-label"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                OUR MISSION
              </motion.span>

              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Delivering Solutions That Make a Difference
              </motion.h3>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                To provide reliable diagnostic and healthcare solutions
                supported by professional service, helping healthcare
                providers operate with greater confidence and efficiency.
              </motion.p>
            </motion.article>


            {/* VISION */}
            <motion.article
              className="hds-purpose-statement hds-purpose-vision"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 45,
                  y: 20,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
            >
              <div className="hds-purpose-statement-top">

                <motion.span
                  className="hds-purpose-statement-number"
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
                >
                  02
                </motion.span>

                <motion.div
                  className="hds-purpose-statement-icon"
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.75,
                      rotate: -8,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    },
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12C5.5 8 8.5 6 12 6C15.5 6 18.5 8 21 12C18.5 16 15.5 18 12 18C8.5 18 5.5 16 3 12Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </motion.div>
              </div>

              <motion.span
                className="hds-purpose-label"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                OUR VISION
              </motion.span>

              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Moving Forward With Healthcare
              </motion.h3>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                To grow as a trusted healthcare solutions provider recognized
                for quality, dependable service, and a continued commitment
                to supporting better healthcare.
              </motion.p>
            </motion.article>

          </motion.div>
        </div>


        {/* =========================
            CORE VALUES
        ========================== */}
        <div className="hds-purpose-values">

          <motion.div
            className="hds-purpose-values-heading"
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <motion.span
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
              }}
            >
              CORE VALUES
            </motion.span>

            <motion.h3
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
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              The Principles Behind Our Work
            </motion.h3>
          </motion.div>


          <motion.div
            className="hds-purpose-values-grid"
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
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {coreValues.map((value) => (
              <motion.article
                className="hds-purpose-value-card"
                key={value.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
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
                  y: -6,
                }}
              >
                <div className="hds-purpose-value-top">

                  <motion.span
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
                    }}
                  >
                    {value.number}
                  </motion.span>

                  <motion.div
                    variants={{
                      hidden: {
                        scaleX: 0,
                      },
                      visible: {
                        scaleX: 1,
                      },
                    }}
                    style={{
                      transformOrigin: "left",
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                  />
                </div>

                <motion.h4
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
                >
                  {value.title}
                </motion.h4>

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
                >
                  {value.text}
                </motion.p>
              </motion.article>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}