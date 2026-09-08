"use client";

import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Routine Laboratory Support",
    text: "Consumables selected to support everyday diagnostic testing, sample handling, and laboratory operations.",
  },
  {
    number: "02",
    title: "Practical Product Range",
    text: "A focused selection of reagents, accessories, and lab supplies for common laboratory requirements.",
  },
  {
    number: "03",
    title: "Workflow Convenience",
    text: "Essential supplies that help laboratories maintain organized and efficient day-to-day workflows.",
  },
  {
    number: "04",
    title: "Responsive Assistance",
    text: "Our team helps you identify suitable laboratory supplies according to your routine operational needs.",
  },
];

export default function WhyLaboratoryConsumables() {
  return (
    <section className="hds-consumables-why">
      <div className="hds-consumables-why-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-consumables-why-header">

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
              className="hds-consumables-why-eyebrow"
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

              WHY OUR CONSUMABLES
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
              Practical Supplies for

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
                Everyday Laboratory Needs
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
            Our laboratory consumables range is focused on practical use,
            routine workflow support, and dependable supply for everyday
            diagnostic environments.
          </motion.p>

        </div>

        {/* =========================
            CARDS
        ========================== */}
        <motion.div
          className="hds-consumables-why-grid"
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
              className="hds-consumables-why-card"
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
              <div className="hds-consumables-why-top">

                <motion.span
                  className="hds-consumables-why-number"
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
                  className="hds-consumables-why-line"
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