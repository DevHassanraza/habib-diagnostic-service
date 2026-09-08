"use client";

import { motion } from "motion/react";

export default function ContactLocation() {
  return (
    <section className="hds-contact-location">
      <div className="hds-contact-location-container">

        {/* =========================
            TOP HEADER
        ========================== */}
        <div className="hds-contact-location-top">

          {/* LEFT */}
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
              amount: 0.4,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            {/* EYEBROW */}
            <motion.div
              className="hds-contact-location-eyebrow"
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

              OUR LOCATIONS
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
              Visit Habib Diagnostic

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
                At Our Locations
              </motion.span>
            </motion.h2>
          </motion.div>


          {/* RIGHT DESCRIPTION */}
          <motion.p
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
            Connect with our team for diagnostic products, medical equipment,
            service inquiries, and professional assistance.
          </motion.p>

        </div>


        {/* =========================
            OFFICE CARDS
        ========================== */}
        <motion.div
          className="hds-contact-offices"
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
                staggerChildren: 0.16,
              },
            },
          }}
        >

          {/* OFFICE 01 */}
          <motion.article
            className="hds-contact-office"
            variants={{
              hidden: {
                opacity: 0,
                y: 38,
                scale: 0.98,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              y: -6,
            }}
          >
            <motion.div
              className="hds-contact-office-number"
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
              01
            </motion.div>

            <motion.div
              className="hds-contact-office-content"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <span>RAWALPINDI OFFICE</span>

              <h3>Commercial Market</h3>

              <p>
                Flat No. 06, 1st Floor, ABC Plaza,
                Commercial Market, Satellite Town,
                Block B, Rawalpindi
              </p>

              <motion.div
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=ABC+Plaza+Commercial+Market+Satellite+Town+Block+B+Rawalpindi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                  <span>↗</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.article>


          {/* OFFICE 02 */}
          <motion.article
            className="hds-contact-office"
            variants={{
              hidden: {
                opacity: 0,
                y: 38,
                scale: 0.98,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              y: -6,
            }}
          >
            <motion.div
              className="hds-contact-office-number"
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
              02
            </motion.div>

            <motion.div
              className="hds-contact-office-content"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <span>KHARIAN OFFICE</span>

              <h3>Gulyana, Kharian</h3>

              <p>
                Kharian Road, Gulyana,
                Kharian, District Gujrat
              </p>

              <motion.div
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kharian+Road+Gulyana+Kharian+Gujrat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                  <span>↗</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.article>

        </motion.div>

      </div>
    </section>
  );
}