"use client";

import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Quality Focused",
    text: "Solutions selected with a focus on dependable performance, practical laboratory use, and consistent diagnostic support.",
  },
  {
    number: "02",
    title: "Workflow Oriented",
    text: "We focus on solutions that support efficient laboratory processes and fit modern testing environments.",
  },
  {
    number: "03",
    title: "Professional Support",
    text: "Our team helps customers understand their requirements and choose suitable diagnostic solutions.",
  },
  {
    number: "04",
    title: "Healthcare Driven",
    text: "Every solution is considered around the needs of laboratories, healthcare professionals, and patient care.",
  },
];

export default function WhyLaboratorySolutions() {
  return (
    <section className="hds-lab-why">
      <div className="hds-lab-why-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-lab-why-header">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              className="hds-lab-why-eyebrow"
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
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
                  delay: 0.16,
                  ease: "easeOut",
                }}
              />

              WHY OUR LABORATORY SOLUTIONS
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 26,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.18,
                ease: "easeOut",
              }}
            >
              More Than Equipment.

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
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                A Reliable Diagnostic Partner.
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.p
            initial={{
              opacity: 0,
              x: 40,
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
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            We aim to support modern laboratories with dependable solutions,
            practical guidance, and professional coordination throughout the
            customer journey.
          </motion.p>

        </div>

        {/* =========================
            CARDS
        ========================== */}
        <motion.div
          className="hds-lab-why-grid"
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
          {reasons.map((reason) => (
            <motion.article
              className="hds-lab-why-card"
              key={reason.number}
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
              <motion.div
                className="hds-lab-why-number"
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
                {reason.number}
              </motion.div>

              <motion.div
                className="hds-lab-why-line"
                variants={{
                  hidden: {
                    opacity: 0,
                    scaleX: 0,
                  },
                  visible: {
                    opacity: 1,
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
                {reason.title}
              </motion.h3>

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
                {reason.text}
              </motion.p>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}