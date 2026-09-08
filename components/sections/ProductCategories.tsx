"use client";

import Link from "next/link";
import { motion } from "motion/react";

const categories = [
  {
    number: "01",
    title: "Laboratory Diagnostics",
    description:
      "Reliable laboratory solutions for chemistry, hematology, immunoassay, and routine diagnostic workflows.",
    items: ["Chemistry Analyzers", "Hematology", "Immunoassay"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3H15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M10 3V9L5.5 17.2C5 18.2 5.7 20 7.3 20H16.7C18.3 20 19 18.2 18.5 17.2L14 9V3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8 14H16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Molecular Diagnostics",
    description:
      "Advanced molecular testing solutions supporting precise analysis and modern diagnostic applications.",
    items: ["PCR Systems", "Molecular Testing", "Testing Platforms"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3C8 7 16 7 16 11C16 15 8 15 8 21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M16 3C16 7 8 7 8 11C8 15 16 15 16 21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M9.5 6H14.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M9.5 12H14.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M9.5 18H14.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Microscopy & Imaging",
    description:
      "Imaging and microscopy solutions designed to support clear visualization and confident diagnostic work.",
    items: ["Microscopes", "Imaging Systems", "Optical Solutions"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4L13 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12.5 6.5L15.5 3.5L18 6L15 9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M11 8L8 11C6.5 12.5 6.5 15 8 16.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 20H18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M8 17H16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Point of Care Testing",
    description:
      "Fast and practical testing solutions designed to support timely decisions close to the patient.",
    items: ["Rapid Testing", "POCT Equipment", "Portable Testing"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="3"
          width="12"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 7H15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M9 11H13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="16"
          r="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Clinical & Medical Equipment",
    description:
      "Practical medical and clinical equipment supporting modern healthcare environments and patient care.",
    items: ["Patient Care", "Monitoring Equipment", "Clinical Equipment"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13H8L10 8L13 16L15 12H20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 21C7 18.2 4 15 4 10.5C4 7.5 6 5.5 8.8 5.5C10.2 5.5 11.3 6.2 12 7.2C12.7 6.2 13.8 5.5 15.2 5.5C18 5.5 20 7.5 20 10.5C20 15 17 18.2 12 21Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Laboratory Consumables",
    description:
      "Essential laboratory consumables and accessories for everyday diagnostic and testing workflows.",
    items: ["Reagents & Kits", "Accessories", "Lab Consumables"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3H15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M10 3V8L7 13V18C7 19.1 7.9 20 9 20H15C16.1 20 17 19.1 17 18V13L14 8V3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8 14H16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ProductCategories() {
  return (
    <section
      className="hds-product-categories"
      id="product-categories"
    >
      <div className="hds-product-categories-container">

        {/* =========================
            TOP
        ========================== */}
        <div className="hds-product-categories-top">

          <motion.div
            className="hds-product-categories-heading"
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

            <motion.div
              className="hds-product-categories-eyebrow"
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

              PRODUCT CATEGORIES
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
              Solutions for Modern

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
                Diagnostic & Healthcare Needs
              </motion.span>
            </motion.h2>

          </motion.div>


          {/* INTRO */}
          <motion.p
            className="hds-product-categories-intro"
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Explore our key product categories designed around the practical
            requirements of laboratories, diagnostic centers, healthcare
            professionals, and clinical environments.
          </motion.p>

        </div>


        {/* =========================
            CATEGORY GRID
        ========================== */}
        <motion.div
          className="hds-product-categories-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {categories.map((category) => (
            <motion.article
              className="hds-product-category-card"
              key={category.number}
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

              {/* =========================
                  TOP LINE
              ========================== */}
              <div className="hds-product-category-card-top">

                <motion.span
                  className="hds-product-category-number"
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
                  {category.number}
                </motion.span>


                <motion.div
                  className="hds-product-category-icon"
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.75,
                      rotate: -6,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                >
                  {category.icon}
                </motion.div>

              </div>


              {/* =========================
                  CONTENT
              ========================== */}
              <div className="hds-product-category-content">

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
                  {category.title}
                </motion.h3>


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
                  {category.description}
                </motion.p>


                {/* ITEMS */}
                <motion.div
                  className="hds-product-category-items"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.07,
                      },
                    },
                  }}
                >
                  {category.items.map((item) => (
                    <motion.div
                      className="hds-product-category-item"
                      key={item}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: 15,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                    >
                      <motion.span
                        variants={{
                          hidden: {
                            opacity: 0,
                            scale: 0,
                          },
                          visible: {
                            opacity: 1,
                            scale: 1,
                          },
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      />

                      {item}
                    </motion.div>
                  ))}
                </motion.div>

              </div>


              {/* =========================
                  LINK
              ========================== */}
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
                  href="/products"
                  className="hds-product-category-link"
                >
                  Explore Category
                  <span>→</span>
                </Link>
              </motion.div>

            </motion.article>
          ))}
        </motion.div>


        {/* =========================
            BOTTOM CTA
        ========================== */}
        <motion.div
          className="hds-product-categories-bottom"
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
        >

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <motion.span
              className="hds-product-categories-bottom-label"
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
            >
              NEED A SPECIFIC SOLUTION?
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
                delay: 0.28,
                ease: "easeOut",
              }}
            >
              Our team can help you find the right product.
            </motion.strong>
          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: "easeOut",
            }}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              href="/contact"
              className="hds-product-categories-contact"
            >
              Talk to Our Team
              <span>→</span>
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}