"use client";

import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Practical Support",
    text: "Service focused on real equipment and laboratory requirements.",
  },
  {
    number: "02",
    title: "Technical Guidance",
    text: "Clear assistance to help teams understand equipment and available solutions.",
  },
  {
    number: "03",
    title: "Responsive Assistance",
    text: "Professional coordination when you need product or service support.",
  },
  {
    number: "04",
    title: "Healthcare Focused",
    text: "Solutions designed around diagnostic, laboratory, and clinical environments.",
  },
];

export default function WhyChooseServices() {
  return (
    <section className="hds-services-why">
      <div className="hds-services-why-container">

        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          className="hds-services-why-heading"
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
                staggerChildren: 0.1,
              },
            },
          }}
        >

          {/* EYEBROW */}
          <motion.div
            className="hds-services-why-eyebrow"
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
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

            WHY CHOOSE US
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
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            Service You Can

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
              Depend On
            </motion.span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
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
            We combine practical support with professional guidance to help
            healthcare teams get more from their medical and diagnostic
            equipment.
          </motion.p>

        </motion.div>


        {/* =========================
            CARDS
        ========================== */}
        <motion.div
          className="hds-services-why-grid"
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
              className="hds-services-why-card"
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

              {/* NUMBER */}
              <motion.span
                className="hds-services-why-number"
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

              {/* TEXT */}
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