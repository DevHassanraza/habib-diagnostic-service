"use client";

import Link from "next/link";
import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Quality You Can Trust",
    description:
      "Reliable diagnostic and healthcare solutions with a strong focus on quality, consistency, and performance.",
  },
  {
    number: "02",
    title: "Diverse Product Solutions",
    description:
      "A broad range of diagnostic and medical solutions designed around different healthcare requirements.",
  },
  {
    number: "03",
    title: "Professional Expertise",
    description:
      "Knowledgeable support to help healthcare providers choose suitable solutions with confidence.",
  },
  {
    number: "04",
    title: "Dependable Service",
    description:
      "Responsive customer and after-sales support focused on building long-term healthcare partnerships.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="hds-why">
      <div className="hds-why-container">

        {/* =========================
            LEFT SIDE
        ========================== */}
        <motion.div
          className="hds-why-left"
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
                staggerChildren: 0.1,
              },
            },
          }}
        >

          {/* EYEBROW */}
          <motion.div
            className="hds-why-eyebrow"
            variants={{
              hidden: {
                opacity: 0,
                x: -25,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <motion.span
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
                duration: 0.4,
                ease: "easeOut",
              }}
            />

            WHY CHOOSE HABIB
          </motion.div>

          {/* HEADING */}
          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 28,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            Trusted Diagnostic Solutions,

            <motion.span
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
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              Built Around Quality &amp; Care
            </motion.span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="hds-why-description"
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
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            We combine reliable diagnostic solutions, professional expertise,
            and responsive support to help healthcare providers work with
            greater confidence and efficiency.
          </motion.p>

          {/* =========================
              IMAGE
          ========================== */}
          <motion.div
            className="hds-why-image-wrap"
            variants={{
              hidden: {
                opacity: 0,
                x: -35,
                scale: 0.97,
              },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <motion.img
              src="/images/about/why-choose-habib.png"
              alt="Habib Diagnostic Service healthcare professional"
              className="hds-why-image"
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

            {/* FLOATING CARD */}
            <motion.div
              className="hds-why-floating"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.35,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="hds-why-floating-icon"
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
                  duration: 0.4,
                  delay: 0.45,
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
                  duration: 0.4,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                <strong>Healthcare Focused</strong>
                <span>Quality • Support • Trust</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* BUTTON */}
          <motion.div
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
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            whileHover={{
              x: 5,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link href="/about" className="hds-why-btn">
              Learn More About Us
              <span>→</span>
            </Link>
          </motion.div>

        </motion.div>

        {/* =========================
            RIGHT CARDS
        ========================== */}
        <motion.div
          className="hds-why-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
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
          {reasons.map((item) => (
            <motion.article
              className="hds-why-card"
              key={item.number}
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

              <div className="hds-why-card-top">

                {/* ICON */}
                <motion.div
                  className="hds-why-card-icon"
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.7,
                      rotate: -6,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                >
                  {item.number === "01" && (
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
                  )}

                  {item.number === "02" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="6"
                        height="6"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <rect
                        x="14"
                        y="4"
                        width="6"
                        height="6"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <rect
                        x="4"
                        y="14"
                        width="6"
                        height="6"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <rect
                        x="14"
                        y="14"
                        width="6"
                        height="6"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  )}

                  {item.number === "03" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M6 20v-1a6 6 0 0 1 12 0v1"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18.5 5.5 20 7l2-2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  {item.number === "04" && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 13v-2a8 8 0 0 1 16 0v2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 13h2a2 2 0 0 1 2 2v3H6a2 2 0 0 1-2-2v-3ZM20 13h-2a2 2 0 0 0-2 2v3h2a2 2 0 0 0 2-2v-3Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </motion.div>

                {/* NUMBER */}
                <motion.span
                  className="hds-why-card-number"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 12,
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
                  {item.number}
                </motion.span>
              </div>

              {/* TITLE */}
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
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                {item.title}
              </motion.h3>

              {/* DESCRIPTION */}
              <motion.p
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
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                {item.description}
              </motion.p>

              {/* BOTTOM LINE */}
              <motion.div
                className="hds-why-card-line"
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
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}