"use client";

import { motion } from "motion/react";

const areas = [
  {
    number: "01",
    title: "Patient Care",
    text: "Equipment and solutions designed to support everyday patient care across hospitals, clinics, and healthcare facilities.",
  },
  {
    number: "02",
    title: "Monitoring Equipment",
    text: "Clinical monitoring solutions that help healthcare teams observe important patient parameters efficiently.",
  },
  {
    number: "03",
    title: "Clinical Equipment",
    text: "Practical medical equipment selected to support essential clinical procedures and healthcare workflows.",
  },
];

export default function ClinicalMedicalOverview() {
  return (
    <section className="hds-clinical-overview">
      <div className="hds-clinical-overview-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-clinical-overview-header">

          {/* LEFT */}
          <motion.div
            className="hds-clinical-overview-left"
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
              className="hds-clinical-overview-eyebrow"
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
                }}
              />

              CLINICAL EQUIPMENT SOLUTIONS
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
              Supporting Modern

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
                Healthcare Environments
              </motion.span>
            </motion.h2>

          </motion.div>


          {/* RIGHT DESCRIPTION */}
          <motion.div
            className="hds-clinical-overview-right"
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
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              Our clinical and medical equipment range is focused on practical
              solutions that support patient care, clinical monitoring, and
              essential healthcare workflows.
            </motion.p>
          </motion.div>

        </div>


        {/* =========================
            CARDS
        ========================== */}
        <motion.div
          className="hds-clinical-overview-grid"
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
              className="hds-clinical-overview-card"
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
                className="hds-clinical-overview-number"
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
                className="hds-clinical-overview-line"
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