"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ServiceCapabilities() {
  return (
    <section className="hds-service-capabilities">
      <div className="hds-service-cap-container">

        {/* =====================================
            LEFT CONTENT
        ====================================== */}

        <div className="hds-service-cap-content">

          {/* EYEBROW */}
          <motion.div
            className="hds-service-cap-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <span />
            OUR SERVICES
          </motion.div>


          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            Reliable Support

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.22,
                ease: "easeOut",
              }}
            >
              Beyond the Equipment
            </motion.span>
          </motion.h2>


          {/* INTRO */}
          <motion.p
            className="hds-service-cap-intro"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.28,
              ease: "easeOut",
            }}
          >
            Our commitment goes beyond providing diagnostic solutions.
            We support healthcare providers with responsive customer
            service, efficient operations, and dependable distribution.
          </motion.p>


          {/* =====================================
              SERVICE CARDS
          ====================================== */}

          <motion.div
            className="hds-service-cap-list"
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
                  delayChildren: 0.35,
                  staggerChildren: 0.16,
                },
              },
            }}
          >

            {/* CARD 01 */}
            <motion.div
              className="hds-service-cap-card"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                x: 5,
              }}
            >
              <motion.div
                className="hds-service-cap-number"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.45,
                }}
              >
                01
              </motion.div>

              <div className="hds-service-cap-card-content">
                <h3>Customer Service</h3>

                <p>
                  Our dedicated team provides responsive assistance for
                  product inquiries, technical coordination, and ongoing
                  customer support.
                </p>

                <div className="hds-service-cap-tag">
                  <span className="hds-service-cap-dot" />
                  Responsive Support
                </div>
              </div>
            </motion.div>


            {/* CARD 02 */}
            <motion.div
              className="hds-service-cap-card"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -40,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                x: 5,
              }}
            >
              <motion.div
                className="hds-service-cap-number"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.6,
                }}
              >
                02
              </motion.div>

              <div className="hds-service-cap-card-content">
                <h3>Warehouse &amp; Distribution</h3>

                <p>
                  Organized storage and distribution processes help us
                  deliver diagnostic and healthcare solutions efficiently
                  to our customers.
                </p>

                <div className="hds-service-cap-tag">
                  <span className="hds-service-cap-dot" />
                  Efficient Distribution
                </div>
              </div>
            </motion.div>

          </motion.div>


          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.7,
              ease: "easeOut",
            }}
            whileHover={{
              y: -3,
            }}
          >
            <Link
              href="/services"
              className="hds-service-cap-btn"
            >
              Explore Our Services
              <span>→</span>
            </Link>
          </motion.div>

        </div>


        {/* =====================================
            RIGHT IMAGE
        ====================================== */}

        <motion.div
          className="hds-service-cap-visual"
          initial={{
            opacity: 0,
            x: 55,
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
            duration: 0.85,
            ease: "easeOut",
          }}
        >

          <motion.div
            className="hds-service-cap-image-wrap"
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

            <motion.img
              src="/images/services/service-logistics.png"
              alt="Habib Diagnostic Service logistics and distribution"
              className="hds-service-cap-image"
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
              className="hds-service-cap-floating"
              initial={{
                opacity: 0,
                y: 25,
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
                delay: 0.55,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="hds-service-cap-floating-icon"
                initial={{
                  scale: 0,
                  rotate: -20,
                }}
                whileInView={{
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.7,
                  ease: "easeOut",
                }}
              >
                ✓
              </motion.div>

              <div>
                <strong>Dependable Service</strong>
                <span>From support to delivery</span>
              </div>
            </motion.div>

          </motion.div>


          {/* =====================================
              SMALL STATS
          ====================================== */}

          <motion.div
            className="hds-service-cap-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.65,
                  staggerChildren: 0.15,
                },
              },
            }}
          >

            <motion.div
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
              <strong>24/7</strong>
              <span>Support Focus</span>
            </motion.div>


            <motion.div
              className="hds-service-cap-stat-line"
              initial={{
                opacity: 0,
                scaleY: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.75,
              }}
            />


            <motion.div
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
              <strong>Fast</strong>
              <span>Distribution</span>
            </motion.div>

          </motion.div>


          {/* DECORATION */}
          <motion.div
            className="hds-service-cap-decoration"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: "easeOut",
            }}
          />

        </motion.div>

      </div>
    </section>
  );
}