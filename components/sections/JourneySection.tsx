"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function JourneySection() {
  return (
    <section className="hds-journey">
      <div className="hds-journey-container">

        {/* =====================================
            LEFT VISUAL
        ====================================== */}

        <motion.div
          className="hds-journey-visual"
          initial={{
            opacity: 0,
            x: -55,
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
            duration: 0.85,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="hds-journey-image-wrap"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
          >

            {/* IMAGE */}

            <motion.img
              src="/images/about/our-journey.png"
              alt="Habib Diagnostic Service healthcare partnership"
              className="hds-journey-image"
              initial={{
                scale: 1.06,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            />


            {/* FLOATING CARD */}

            <motion.div
              className="hds-journey-floating-card"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.55,
                ease: "easeOut",
              }}
            >

              <motion.div
                className="hds-journey-floating-icon"
                initial={{
                  scale: 0,
                  rotate: -15,
                }}
                whileInView={{
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.72,
                  ease: "easeOut",
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

              <div>
                <strong>Built on Trust</strong>
                <span>Focused on better healthcare</span>
              </div>

            </motion.div>
          </motion.div>


          {/* ACCENT */}

          <motion.div
            className="hds-journey-accent"
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          />

        </motion.div>


        {/* =====================================
            RIGHT CONTENT
        ====================================== */}

        <div className="hds-journey-content">

          {/* EYEBROW */}

          <motion.div
            className="hds-journey-eyebrow"
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <span />
            OUR JOURNEY
          </motion.div>


          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: "easeOut",
            }}
          >
            Built on Precision,

            <motion.span
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
                duration: 0.6,
                delay: 0.25,
                ease: "easeOut",
              }}
            >
              Driven by Better Healthcare
            </motion.span>
          </motion.h2>


          {/* DESCRIPTION */}

          <motion.p
            className="hds-journey-description"
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
              duration: 0.65,
              delay: 0.32,
              ease: "easeOut",
            }}
          >
            Habib Diagnostic Service continues to grow with a clear focus on
            reliable diagnostic solutions, strong healthcare partnerships,
            and professional support. Our journey is driven by quality,
            continuous improvement, and a commitment to helping healthcare
            providers deliver better outcomes.
          </motion.p>


          {/* =====================================
              MISSION + VISION
          ====================================== */}

          <motion.div
            className="hds-journey-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.42,
                  staggerChildren: 0.18,
                },
              },
            }}
          >

            {/* MISSION */}

            <motion.div
              className="hds-journey-card"
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
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
            >
              <div className="hds-journey-card-top">

                <motion.div
                  className="hds-journey-card-icon"
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  transition={{
                    duration: 0.2,
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
                      d="M9 12h6M12 9v6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                <motion.span
                  className="hds-journey-card-number"
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
                    delay: 0.55,
                  }}
                >
                  01
                </motion.span>

              </div>

              <h3>Our Mission</h3>

              <p>
                To provide dependable diagnostic and healthcare solutions
                that support accuracy, efficiency, and better patient care.
              </p>
            </motion.div>


            {/* VISION */}

            <motion.div
              className="hds-journey-card"
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
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
            >
              <div className="hds-journey-card-top">

                <motion.div
                  className="hds-journey-card-icon"
                  whileHover={{
                    scale: 1.08,
                    rotate: -4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </motion.div>

                <motion.span
                  className="hds-journey-card-number"
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
                    delay: 0.7,
                  }}
                >
                  02
                </motion.span>

              </div>

              <h3>Our Vision</h3>

              <p>
                To become a trusted healthcare solutions partner recognized
                for quality, innovation, service, and long-term relationships.
              </p>
            </motion.div>

          </motion.div>


          {/* =====================================
              BUTTON
          ====================================== */}

          <motion.div
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
              delay: 0.75,
              ease: "easeOut",
            }}
            whileHover={{
              y: -3,
            }}
          >
            <Link
              href="/about"
              className="hds-journey-btn"
            >
              Learn More About Us
              <span>→</span>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}