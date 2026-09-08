"use client";

import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Faster Clinical Decisions",
    text: "Point-of-care testing helps bring essential diagnostic information closer to clinical teams for more efficient assessment.",
  },
  {
    number: "02",
    title: "Practical Workflows",
    text: "Solutions are designed to support straightforward testing processes in hospitals, clinics, and other care environments.",
  },
  {
    number: "03",
    title: "Flexible Applications",
    text: "Suitable for different clinical settings where convenient access to diagnostic testing is important.",
  },
  {
    number: "04",
    title: "Dependable Support",
    text: "We focus on providing reliable solutions with professional coordination and customer-focused assistance.",
  },
];

export default function WhyPointOfCareSolutions() {
  return (
    <section className="hds-poct-why">
      <div className="hds-poct-why-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-poct-why-header">

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
              className="hds-poct-why-eyebrow"
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

              WHY OUR SOLUTIONS
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
              Built Around

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
                Practical Patient Care
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
            Our point-of-care testing solutions are selected to support
            efficient diagnostic workflows, practical operation, and dependable
            clinical use.
          </motion.p>

        </div>

        {/* =========================
            CARDS
        ========================== */}
        <motion.div
          className="hds-poct-why-grid"
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
              className="hds-poct-why-card"
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
              <div className="hds-poct-why-top">

                <motion.span
                  className="hds-poct-why-number"
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
                  className="hds-poct-why-line"
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