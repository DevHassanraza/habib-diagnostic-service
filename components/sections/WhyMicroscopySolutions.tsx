"use client";

import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Clear Visualization",
    text: "Solutions designed to support detailed sample observation and dependable laboratory visualization.",
  },
  {
    number: "02",
    title: "Modern Imaging Workflows",
    text: "Support for digital imaging, documentation, and efficient laboratory analysis processes.",
  },
  {
    number: "03",
    title: "Professional Guidance",
    text: "Helping laboratories explore suitable microscopy and imaging solutions for their practical requirements.",
  },
  {
    number: "04",
    title: "Laboratory Focused",
    text: "Our approach remains centered on practical workflows, reliable support, and modern diagnostic environments.",
  },
];

export default function WhyMicroscopySolutions() {
  return (
    <section className="hds-microscopy-why">
      <div className="hds-microscopy-why-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-microscopy-why-header">

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
              className="hds-microscopy-why-eyebrow"
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

              WHY MICROSCOPY &amp; IMAGING
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
              Better Visualization for

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
                Modern Laboratory Environments
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
            We focus on practical microscopy and imaging solutions that support
            observation, visualization, documentation, and efficient laboratory
            workflows.
          </motion.p>

        </div>


        {/* =========================
            CARDS
        ========================== */}
        <motion.div
          className="hds-microscopy-why-grid"
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
              className="hds-microscopy-why-card"
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
              <motion.div
                className="hds-microscopy-why-number"
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

              {/* LINE */}
              <motion.div
                className="hds-microscopy-why-line"
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