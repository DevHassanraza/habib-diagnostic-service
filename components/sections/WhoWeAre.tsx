"use client";

import Link from "next/link";
import { motion } from "motion/react";

const highlights = [
  {
    number: "01",
    title: "Quality First",
    text: "Reliable solutions selected with a strong focus on quality and performance.",
  },
  {
    number: "02",
    title: "Healthcare Focused",
    text: "Solutions designed around the practical needs of modern healthcare providers.",
  },
  {
    number: "03",
    title: "Professional Support",
    text: "Responsive assistance and dependable support throughout the customer journey.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="hds-who">
      <div className="hds-who-container">

        {/* ======================
            LEFT CONTENT
        ====================== */}
        <motion.div
          className="hds-who-content"
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
            className="hds-who-eyebrow"
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

            WHO WE ARE
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
            Supporting Better Healthcare

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
              Through Reliable Solutions
            </motion.span>
          </motion.h2>


          {/* LEAD */}
          <motion.p
            className="hds-who-lead"
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
            Habib Diagnostic Service is focused on providing dependable
            diagnostic and healthcare solutions that help medical
            professionals work with greater confidence and efficiency.
          </motion.p>


          {/* SECOND PARAGRAPH */}
          <motion.p
            className="hds-who-text"
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
            Our approach goes beyond supplying equipment. We aim to understand
            the needs of healthcare providers, offer suitable solutions, and
            build relationships based on quality, service, and trust.
          </motion.p>


          {/* ======================
              HIGHLIGHTS
          ====================== */}
          <motion.div
            className="hds-who-highlights"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {highlights.map((item) => (
              <motion.div
                className="hds-who-highlight"
                key={item.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -28,
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
                whileHover={{
                  x: 5,
                }}
              >
                <motion.div
                  className="hds-who-highlight-number"
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
                  {item.number}
                </motion.div>

                <motion.div
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
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              </motion.div>
            ))}
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
            <Link href="/contact" className="hds-who-btn">
              Talk to Our Team
              <span>→</span>
            </Link>
          </motion.div>

        </motion.div>


        {/* ======================
            RIGHT IMAGE
        ====================== */}
        <motion.div
          className="hds-who-visual"
          initial={{
            opacity: 0,
            x: 50,
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

          {/* IMAGE WRAPPER */}
          <motion.div
            className="hds-who-image-wrap"
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
              duration: 0.75,
              ease: "easeOut",
            }}
          >

            {/* IMAGE */}
            <motion.img
              src="/images/about/who-we-are.png"
              alt="Diagnostic laboratory professional"
              className="hds-who-image"
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


            {/* ACCENT */}
            <motion.div
              className="hds-who-image-accent"
              initial={{
                opacity: 0,
                scaleY: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
              }}
              viewport={{ once: true }}
              style={{
                transformOrigin: "bottom",
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: "easeOut",
              }}
            />


            {/* EXPERIENCE BADGE */}
            <motion.div
              className="hds-who-experience"
              initial={{
                opacity: 0,
                x: -25,
                y: 18,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.35,
                ease: "easeOut",
              }}
            >
              <motion.strong
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.45,
                  ease: "easeOut",
                }}
              >
                5+
              </motion.strong>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 10,
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
                <span>Years of</span>
                <b>Excellence</b>
              </motion.div>
            </motion.div>

          </motion.div>


          {/* ======================
              TRUST CARD
          ====================== */}
          <motion.div
            className="hds-who-trust-card"
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
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.55,
              delay: 0.45,
              ease: "easeOut",
            }}
          >

            {/* ICON */}
            <motion.div
              className="hds-who-trust-icon"
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
                delay: 0.55,
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
                  d="M12 3L19 6V11C19 15.4 16.3 19.1 12 21C7.7 19.1 5 15.4 5 11V6L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />

                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>


            {/* TRUST TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.62,
                ease: "easeOut",
              }}
            >
              <strong>Driven by Quality</strong>
              <span>Focused on dependable healthcare solutions</span>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}