"use client";

import Link from "next/link";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Equipment Installation",
    text: "Professional installation support to help ensure medical and laboratory equipment is properly set up and ready for use.",
  },
  {
    number: "02",
    title: "Maintenance Support",
    text: "Practical maintenance assistance to support equipment performance and help reduce unnecessary interruptions.",
  },
  {
    number: "03",
    title: "Technical Guidance",
    text: "Product guidance and technical assistance to help healthcare teams understand and operate equipment confidently.",
  },
  {
    number: "04",
    title: "Product Consultation",
    text: "Support in identifying suitable medical and diagnostic solutions based on your facility and operational requirements.",
  },
];

export default function OurServices() {
  return (
    <section className="hds-our-services" id="our-services">
      <div className="hds-our-services-container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="hds-our-services-header">

          {/* LEFT HEADING */}
          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="hds-our-services-eyebrow"
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

              WHAT WE OFFER
            </motion.div>

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
              Professional Support for

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
                Healthcare Equipment
              </motion.span>
            </motion.h2>
          </motion.div>


          {/* RIGHT DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              x: 35,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Our services are focused on practical support, equipment guidance,
            and reliable assistance for healthcare and laboratory environments.
          </motion.p>

        </div>


        {/* =========================
            SERVICES GRID
        ========================== */}
        <motion.div
          className="hds-our-services-grid"
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
          {services.map((service) => (
            <motion.article
              className="hds-service-card"
              key={service.number}
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

              {/* CARD TOP */}
              <div className="hds-service-card-top">

                <motion.span
                  className="hds-service-number"
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
                  {service.number}
                </motion.span>

                <motion.span
                  className="hds-service-line"
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
                    y: 14,
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
                {service.title}
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
                  ease: "easeOut",
                }}
              >
                {service.text}
              </motion.p>


              {/* LINK */}
              <motion.div
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
                  ease: "easeOut",
                }}
                whileHover={{
                  x: 5,
                }}
              >
                <Link
                  href="/contact"
                  className="hds-service-link"
                >
                  Discuss Service
                  <span>→</span>
                </Link>
              </motion.div>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}