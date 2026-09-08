"use client";

import { motion } from "motion/react";

export default function PointOfCareOverview() {
  return (
    <section className="hds-poct-overview">
      <div className="hds-poct-overview-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          className="hds-poct-overview-left"
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
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          {/* EYEBROW */}
          <motion.div
            className="hds-poct-overview-eyebrow"
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
              delay: 0.08,
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

            POINT OF CARE SOLUTIONS
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
              delay: 0.18,
              ease: "easeOut",
            }}
          >
            Fast, Practical Testing

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
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              Where Care Happens
            </motion.span>
          </motion.h2>

        </motion.div>


        {/* =========================
            RIGHT CONTENT
        ========================== */}
        <motion.div
          className="hds-poct-overview-right"
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
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
        >

          {/* DESCRIPTION */}
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
              delay: 0.25,
              ease: "easeOut",
            }}
          >
            Point of care testing helps bring essential diagnostic testing
            closer to patients and clinical teams. These solutions are designed
            to support efficient testing workflows in hospitals, clinics, and
            other healthcare environments.
          </motion.p>


          {/* NOTE */}
          <motion.div
            className="hds-poct-overview-note"
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.4,
              ease: "easeOut",
            }}
          >

            {/* NUMBER */}
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.48,
                ease: "easeOut",
              }}
            >
              01
            </motion.span>


            {/* NOTE CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              <motion.strong
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.55,
                }}
              >
                Designed for Practical Clinical Use
              </motion.strong>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.62,
                  ease: "easeOut",
                }}
              >
                Supporting faster assessment, simplified workflows, and
                dependable day-to-day diagnostic testing.
              </motion.p>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>


      {/* =========================
          BOTTOM STRIP
      ========================== */}
      <motion.div
        className="hds-poct-overview-strip"
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
              delayChildren: 0.1,
              staggerChildren: 0.12,
            },
          },
        }}
      >

        {/* RAPID TESTING */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
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
          <motion.strong
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            Rapid Testing
          </motion.strong>

          <motion.span
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            Efficient diagnostic assessment
          </motion.span>
        </motion.div>


        {/* POCT EQUIPMENT */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
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
          <motion.strong
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            POCT Equipment
          </motion.strong>

          <motion.span
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            Practical testing systems
          </motion.span>
        </motion.div>


        {/* CLINICAL EFFICIENCY */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
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
          <motion.strong
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            Clinical Efficiency
          </motion.strong>

          <motion.span
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            Closer to patient care
          </motion.span>
        </motion.div>

      </motion.div>

    </section>
  );
}