"use client";

import Link from "next/link";
import { motion } from "motion/react";

const journeySteps = [
  {
    number: "01",
    title: "Our Foundation",
    description:
      "Our journey began with a clear purpose — to support healthcare providers with reliable diagnostic solutions and dependable service.",
  },
  {
    number: "02",
    title: "Growing Our Capabilities",
    description:
      "As healthcare needs evolved, we continued expanding our approach with greater focus on technology, quality, and professional support.",
  },
  {
    number: "03",
    title: "Building Trusted Relationships",
    description:
      "We believe sustainable growth comes from understanding customer needs and developing relationships built on trust and consistent service.",
  },
  {
    number: "04",
    title: "Looking Ahead",
    description:
      "We continue moving forward with a commitment to better solutions, stronger partnerships, and meaningful contributions to healthcare.",
  },
];

export default function GrowthJourney() {
  return (
    <section className="hds-growth">
      <div className="hds-growth-container">

        {/* =========================
            LEFT IMAGE
        ========================== */}
        <motion.div
          className="hds-growth-visual"
          initial={{
            opacity: 0,
            x: -50,
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
            duration: 0.75,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="hds-growth-image-wrap"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <motion.img
              src="/images/about/our-growth-journey.png"
              alt="Habib Diagnostic Service growth journey"
              className="hds-growth-image"
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

            <div className="hds-growth-image-overlay" />

            {/* FLOATING CARD */}
            <motion.div
              className="hds-growth-floating"
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
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="hds-growth-floating-icon"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: -8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.65,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 17L10 12L13 15L20 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M15 8H20V13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              <div>
                <strong>Moving Forward</strong>
                <span>With purpose &amp; responsibility</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>


        {/* =========================
            RIGHT CONTENT
        ========================== */}
        <div className="hds-growth-content">

          {/* EYEBROW */}
          <motion.div
            className="hds-growth-eyebrow"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
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
                delay: 0.1,
              }}
            />

            OUR STORY
          </motion.div>


          {/* HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: "easeOut",
            }}
          >
            Growing With a Purpose,

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
              Focused on Better Healthcare
            </motion.span>
          </motion.h2>


          {/* INTRO */}
          <motion.p
            className="hds-growth-intro"
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
              delay: 0.34,
              ease: "easeOut",
            }}
          >
            Our story is shaped by a commitment to quality, dependable
            service, and the changing needs of healthcare professionals.
            Every step forward strengthens our focus on delivering solutions
            that create meaningful value.
          </motion.p>


          {/* =========================
              JOURNEY TIMELINE
          ========================== */}
          <motion.div
            className="hds-growth-timeline"
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
                  delayChildren: 0.2,
                  staggerChildren: 0.16,
                },
              },
            }}
          >
            {journeySteps.map((step, index) => (
              <motion.div
                className="hds-growth-step"
                key={step.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 35,
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
              >

                {/* MARKER */}
                <div className="hds-growth-step-marker">

                  <motion.span
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 0.65,
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
                    {step.number}
                  </motion.span>

                  {index !== journeySteps.length - 1 && (
                    <motion.div
                      className="hds-growth-step-line"
                      variants={{
                        hidden: {
                          scaleY: 0,
                          opacity: 0,
                        },
                        visible: {
                          scaleY: 1,
                          opacity: 1,
                        },
                      }}
                      style={{
                        transformOrigin: "top",
                      }}
                      transition={{
                        duration: 0.55,
                        delay: 0.15,
                        ease: "easeOut",
                      }}
                    />
                  )}

                </div>


                {/* CONTENT */}
                <motion.div
                  className="hds-growth-step-content"
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
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>

              </motion.div>
            ))}
          </motion.div>


          {/* =========================
              BOTTOM
          ========================== */}
          <motion.div
            className="hds-growth-bottom"
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
              duration: 0.55,
              delay: 0.25,
              ease: "easeOut",
            }}
          >

            {/* BUTTON */}
            <motion.div
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Link
                href="/contact"
                className="hds-growth-btn"
              >
                Start a Conversation
                <span>→</span>
              </Link>
            </motion.div>


            {/* MESSAGE */}
            <motion.div
              className="hds-growth-message"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <motion.span
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
              />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Quality
              </motion.div>

              <motion.span
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
              />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Trust
              </motion.div>

              <motion.span
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
              />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Progress
              </motion.div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}