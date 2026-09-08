"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ContactHero() {
  return (
    <section className="hds-contact-new">

      {/* BACKGROUND GLOWS */}
      <motion.div
        className="hds-contact-new-glow hds-contact-glow-one"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="hds-contact-new-glow hds-contact-glow-two"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          delay: 0.15,
          ease: "easeOut",
        }}
      />


      <div className="hds-contact-new-container">

        {/* BREADCRUMB */}
        <motion.div
          className="hds-contact-new-breadcrumb"
          initial={{
            opacity: 0,
            y: -12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <Link href="/">Home</Link>
          <span>/</span>
          <strong>Contact Us</strong>
        </motion.div>


        {/* MAIN CONTENT */}
        <div className="hds-contact-new-content">

          {/* LABEL */}
          <motion.div
            className="hds-contact-new-label"
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.22,
              ease: "easeOut",
            }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{
                transformOrigin: "right",
              }}
              transition={{
                duration: 0.45,
                delay: 0.3,
                ease: "easeOut",
              }}
            />

            GET IN TOUCH

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{
                transformOrigin: "left",
              }}
              transition={{
                duration: 0.45,
                delay: 0.3,
                ease: "easeOut",
              }}
            />
          </motion.div>


          {/* HEADING */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.32,
              ease: "easeOut",
            }}
          >
            We&apos;re Here to Help

            <motion.span
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.48,
                ease: "easeOut",
              }}
            >
              Let&apos;s Connect.
            </motion.span>
          </motion.h1>


          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.58,
              ease: "easeOut",
            }}
          >
            Have a question about our diagnostic products, medical equipment,
            or services? Our team is ready to understand your requirements
            and provide the information you need.
          </motion.p>


          {/* CTA BUTTON */}
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.55,
              delay: 0.72,
              ease: "easeOut",
            }}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <a
              href="#contact-form"
              className="hds-contact-new-btn"
            >
              Contact Our Team

              <motion.span
                initial={{
                  x: 0,
                  y: 0,
                }}
                whileHover={{
                  x: 3,
                  y: 3,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                ↘
              </motion.span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}