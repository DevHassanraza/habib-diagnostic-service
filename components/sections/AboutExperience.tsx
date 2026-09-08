"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function AboutExperience() {
  return (
    <section className="hds-about-experience">
      <div className="hds-about-container">

        {/* =========================
            LEFT IMAGE
        ========================== */}

        <motion.div
          className="hds-about-visual"
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <motion.div
            className="hds-about-image-wrap"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
          >

            <img
              src="/images/about/about-habib-diagnostic.png"
              alt="Habib Diagnostic Service advanced diagnostic solutions"
              className="hds-about-image"
            />


            {/* EXPERIENCE BADGE */}

            <motion.div
              className="hds-experience-badge"
              initial={{
                opacity: 0,
                scale: 0.75,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.55,
                ease: "easeOut",
              }}
            >
              <strong>5+</strong>

              <span>
                Years of
                <br />
                Excellence
              </span>
            </motion.div>


            {/* PRECISION CARD */}

            <motion.div
              className="hds-precision-card"
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
                duration: 0.6,
                delay: 0.7,
                ease: "easeOut",
              }}
            >
              <span className="hds-precision-line" />

              <div>
                <strong>Precision</strong>
                <span>in Every Solution</span>
              </div>
            </motion.div>

          </motion.div>


          {/* DECORATIVE DOTS */}

          <motion.div
            className="hds-about-dots hds-about-dots-one"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={index} />
            ))}
          </motion.div>


          <motion.div
            className="hds-about-circle"
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


        {/* =========================
            RIGHT CONTENT
        ========================== */}

        <div className="hds-about-content">

          {/* EYEBROW */}

          <motion.div
            className="hds-about-eyebrow"
            initial={{
              opacity: 0,
              y: 18,
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
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <span />
            ABOUT HABIB DIAGNOSTIC SERVICE
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
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Delivering Diagnostic Excellence

            <span>
              Through Technology &amp; Trust
            </span>
          </motion.h2>


          {/* DESCRIPTION */}

          <motion.p
            className="hds-about-description"
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
            At Habib Diagnostic Service, we are committed to providing
            advanced diagnostic solutions that help healthcare professionals
            deliver better care. With a focus on quality, innovation, and
            customer support, we work closely with hospitals, laboratories,
            and clinics to build healthier communities.
          </motion.p>


          {/* =========================
              FEATURES
          ========================== */}

          <motion.div
            className="hds-about-features"
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
                  delayChildren: 0.38,
                  staggerChildren: 0.14,
                },
              },
            }}
          >

            {/* FEATURE 1 */}

            <motion.div
              className="hds-about-feature"
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
              <motion.div
                className="hds-about-feature-icon"
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
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
                    d="M9 3h6M10 3v5l-4.5 7.5A3.5 3.5 0 0 0 8.5 21h7a3.5 3.5 0 0 0 3-5.5L14 8V3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M8 14h8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              <div>
                <h3>Advanced Diagnostic Solutions</h3>

                <p>
                  Modern technologies designed for accuracy and efficiency.
                </p>
              </div>
            </motion.div>


            {/* FEATURE 2 */}

            <motion.div
              className="hds-about-feature"
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
              <motion.div
                className="hds-about-feature-icon"
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
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
                    d="M8.5 12.5 11 15l5-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </motion.div>

              <div>
                <h3>Trusted Healthcare Partnerships</h3>

                <p>
                  Reliable solutions for hospitals, laboratories and clinics.
                </p>
              </div>
            </motion.div>


            {/* FEATURE 3 */}

            <motion.div
              className="hds-about-feature"
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
              <motion.div
                className="hds-about-feature-icon"
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
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
                    d="M4 13v-2a8 8 0 0 1 16 0v2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M4 13h2a2 2 0 0 1 2 2v3H6a2 2 0 0 1-2-2v-3ZM20 13h-2a2 2 0 0 0-2 2v3h2a2 2 0 0 0 2-2v-3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M16 19c-1 1-2.2 1.5-4 1.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              <div>
                <h3>Professional Technical Support</h3>

                <p>
                  Dedicated assistance from installation to after-sales
                  support.
                </p>
              </div>
            </motion.div>

          </motion.div>


          {/* BUTTON */}

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
              className="hds-about-btn"
            >
              Discover Our Story
              <span>→</span>
            </Link>
          </motion.div>

        </div>
      </div>


      {/* =========================
          BOTTOM TRUST STRIP
      ========================== */}

      <motion.div
        className="hds-about-trust-wrap"
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
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >

        <motion.div
          className="hds-about-trust"
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
                delayChildren: 0.15,
                staggerChildren: 0.15,
              },
            },
          }}
        >

          {/* QUALITY */}

          <motion.div
            className="hds-about-trust-item"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="hds-about-trust-icon">
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
            </div>

            <div>
              <strong>Quality Equipment</strong>
              <span>Trusted diagnostic technology</span>
            </div>
          </motion.div>


          {/* SUPPORT */}

          <motion.div
            className="hds-about-trust-item"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="hds-about-trust-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 11a4 4 0 1 0 0-8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M2 21v-2a6 6 0 0 1 12 0v2M14 14a6 6 0 0 1 8 5.6V21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <strong>Reliable Support</strong>
              <span>From installation to service</span>
            </div>
          </motion.div>


          {/* HEALTHCARE */}

          <motion.div
            className="hds-about-trust-item"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="hds-about-trust-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12h4l2-5 4 10 2-5h6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <strong>Healthcare Focused</strong>
              <span>For a healthier tomorrow</span>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>

    </section>
  );
}