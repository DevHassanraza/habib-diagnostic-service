"use client";

import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Practical Clinical Use",
    text: "Equipment selected to support real healthcare workflows across hospitals, clinics, and other medical environments.",
  },
  {
    number: "02",
    title: "Patient-Focused Solutions",
    text: "Our range is built around practical patient care requirements and everyday clinical support.",
  },
  {
    number: "03",
    title: "Reliable Equipment",
    text: "We focus on dependable medical equipment that supports consistent use in modern healthcare settings.",
  },
  {
    number: "04",
    title: "Professional Support",
    text: "Customers receive responsive coordination and product assistance based on their clinical requirements.",
  },
];

export default function WhyClinicalMedicalSolutions() {
  return (
    <section className="hds-clinical-why">
      <div className="hds-clinical-why-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-clinical-why-header">

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
            {/* EYEBROW */}
            <motion.div
              className="hds-clinical-why-eyebrow"
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

              WHY OUR EQUIPMENT
            </motion.div>

            {/* HEADING */}
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
              Designed Around

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
                Clinical Requirements
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}
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
            Our clinical and medical equipment solutions are focused on
            practical operation, dependable performance, and support for
            everyday healthcare environments.
          </motion.p>

        </div>


        {/* =========================
            CARDS
        ========================== */}
        <motion.div
          className="hds-clinical-why-grid"
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
              className="hds-clinical-why-card"
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

              {/* NUMBER + LINE */}
              <div className="hds-clinical-why-top">

                <motion.span
                  className="hds-clinical-why-number"
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
                </motion.span>

                <motion.span
                  className="hds-clinical-why-line"
                  variants={{
                    hidden: {
                      scaleX: 0,
                      opacity: 0,
                    },
                    visible: {
                      scaleX: 1,
                      opacity: 1,
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
                {reason.title}
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
                {reason.text}
              </motion.p>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}