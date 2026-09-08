"use client";

import { motion } from "motion/react";

const microscopySolutions = [
  {
    number: "01",
    title: "Microscopes",
    text: "Microscopy solutions designed to support clear observation, detailed laboratory examination, and routine diagnostic workflows.",
  },
  {
    number: "02",
    title: "Imaging Systems",
    text: "Imaging solutions focused on digital visualization, documentation, and supporting modern laboratory analysis requirements.",
  },
];

export default function MicroscopyOverview() {
  return (
    <section
      className="hds-microscopy-overview"
      id="microscopy-solutions"
    >
      <div className="hds-microscopy-overview-container">

        {/* =========================
            LEFT INTRO
        ========================== */}
        <motion.div
          className="hds-microscopy-overview-intro"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          {/* EYEBROW */}
          <motion.div
            className="hds-microscopy-overview-eyebrow"
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

            MICROSCOPY &amp; IMAGING
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
            Clearer Observation for

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
              Modern Laboratory Workflows
            </motion.span>
          </motion.h2>


          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            Habib Diagnostic Service supports laboratories with microscopy and
            imaging solutions designed around detailed visualization, practical
            analysis, and dependable diagnostic workflows.
          </motion.p>


          {/* OUR FOCUS */}
          <motion.div
            className="hds-microscopy-overview-note"
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
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <motion.span
              initial={{
                opacity: 0,
                x: -12,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.6,
                ease: "easeOut",
              }}
            >
              OUR FOCUS
            </motion.span>

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
                duration: 0.45,
                delay: 0.68,
                ease: "easeOut",
              }}
            >
              Supporting accurate observation, digital visualization, and
              efficient laboratory examination.
            </motion.strong>
          </motion.div>

        </motion.div>


        {/* =========================
            RIGHT SOLUTIONS
        ========================== */}
        <motion.div
          className="hds-microscopy-overview-solutions"
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
                delayChildren: 0.15,
                staggerChildren: 0.14,
              },
            },
          }}
        >
          {microscopySolutions.map((solution) => (
            <motion.article
              className="hds-microscopy-overview-item"
              key={solution.number}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 40,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              whileHover={{
                x: 5,
              }}
            >

              {/* NUMBER */}
              <motion.div
                className="hds-microscopy-overview-number"
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
                {solution.number}
              </motion.div>


              {/* CONTENT */}
              <motion.div
                className="hds-microscopy-overview-content"
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
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </motion.div>


              {/* ARROW */}
              <motion.div
                className="hds-microscopy-overview-arrow"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -10,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={{
                  x: 5,
                }}
              >
                →
              </motion.div>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}