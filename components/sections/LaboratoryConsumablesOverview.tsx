"use client";

import { motion } from "motion/react";

const areas = [
  {
    number: "01",
    title: "Reagents & Kits",
    text: "Routine laboratory reagents and testing kits designed to support diagnostic workflows and day-to-day laboratory operations.",
  },
  {
    number: "02",
    title: "Accessories",
    text: "Practical laboratory accessories that help support organized, efficient, and consistent testing environments.",
  },
  {
    number: "03",
    title: "Lab Consumables",
    text: "Essential consumable supplies for sample handling, preparation, testing, and routine laboratory use.",
  },
];

export default function LaboratoryConsumablesOverview() {
  return (
    <section className="hds-consumables-overview">
      <div className="hds-consumables-overview-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-consumables-overview-header">

          {/* LEFT */}
          <motion.div
            className="hds-consumables-overview-left"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            {/* EYEBROW */}
            <motion.div
              className="hds-consumables-overview-eyebrow"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
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
                  delay: 0.15,
                  ease: "easeOut",
                }}
              />

              LABORATORY ESSENTIALS
            </motion.div>


            {/* HEADING */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              Everyday Supplies for

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
                  duration: 0.55,
                  delay: 0.32,
                  ease: "easeOut",
                }}
              >
                Reliable Lab Workflows
              </motion.span>
            </motion.h2>
          </motion.div>


          {/* RIGHT DESCRIPTION */}
          <motion.div
            className="hds-consumables-overview-right"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.65,
              delay: 0.18,
              ease: "easeOut",
            }}
          >
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
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
              Our laboratory consumables range focuses on practical supplies
              that support routine testing, sample handling, preparation, and
              everyday diagnostic workflows.
            </motion.p>
          </motion.div>

        </div>


        {/* =========================
            CARDS
        ========================== */}
        <motion.div
          className="hds-consumables-overview-grid"
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
                delayChildren: 0.12,
                staggerChildren: 0.14,
              },
            },
          }}
        >
          {areas.map((area) => (
            <motion.article
              className="hds-consumables-overview-card"
              key={area.number}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 38,
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
                className="hds-consumables-overview-number"
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
                {area.number}
              </motion.div>


              {/* LINE */}
              <motion.div
                className="hds-consumables-overview-line"
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
                  delay: 0.1,
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
                  duration: 0.4,
                }}
              >
                {area.title}
              </motion.h3>


              {/* DESCRIPTION */}
              <motion.p
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
                }}
              >
                {area.text}
              </motion.p>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}