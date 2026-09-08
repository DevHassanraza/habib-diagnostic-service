"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    id: 1,
    image: "/images/hero/hero-diagnostic-lab.png",
    eyebrow: "Precision • Reliability • Better Care",
    title: "Advanced Diagnostic Solutions",
    highlight: "for Better Healthcare",
    description:
      "Reliable diagnostic technologies and medical equipment designed to support accuracy, efficiency, and better patient care.",
    primaryText: "Explore Products",
    primaryLink: "/products",
    secondaryText: "Get a Quote",
    secondaryLink: "/contact",
  },
  {
    id: 2,
    image: "/images/hero/hero-ct-imaging.png",
    eyebrow: "Innovation in Medical Imaging",
    title: "Advanced Imaging Technology",
    highlight: "Built for Precision",
    description:
      "Modern imaging solutions that help healthcare professionals make faster, clearer, and more confident decisions.",
    primaryText: "Explore Solutions",
    primaryLink: "/products",
    secondaryText: "Contact Us",
    secondaryLink: "/contact",
  },
  {
    id: 3,
    image: "/images/hero/hero-clinical-equipment.png",
    eyebrow: "Modern Clinical Technology",
    title: "Clinical Equipment Solutions",
    highlight: "for Better Patient Care",
    description:
      "High-quality clinical and diagnostic equipment designed to support modern healthcare environments and better outcomes.",
    primaryText: "Our Products",
    primaryLink: "/products",
    secondaryText: "Get a Quote",
    secondaryLink: "/contact",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="hds-hero-slider">

      {/* ACTIVE SLIDE */}
      <AnimatePresence mode="wait">

        <motion.div
          key={slide.id}
          className="hds-hero-slide active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >

          {/* BACKGROUND IMAGE */}

          <motion.div
            className="hds-hero-image"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
            initial={{
              scale: 1.08,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 6,
              ease: "easeOut",
            }}
          />

          <div className="hds-hero-overlay" />


          {/* CONTENT */}

          <div className="hds-hero-container">

            <div className="hds-hero-content">

              {/* EYEBROW */}

              <motion.span
                className="hds-hero-eyebrow"
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.15,
                  ease: "easeOut",
                }}
              >
                {slide.eyebrow}
              </motion.span>


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
                  delay: 0.25,
                  ease: "easeOut",
                }}
              >
                {slide.title}

                <motion.span
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.42,
                    ease: "easeOut",
                  }}
                >
                  {slide.highlight}
                </motion.span>

              </motion.h1>


              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                {slide.description}
              </motion.p>


              {/* BUTTONS */}

              <motion.div
                className="hds-hero-buttons"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.65,
                  ease: "easeOut",
                }}
              >

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Link
                    href={slide.primaryLink}
                    className="hds-hero-primary-btn"
                  >
                    {slide.primaryText}
                    <span>→</span>
                  </Link>
                </motion.div>


                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Link
                    href={slide.secondaryLink}
                    className="hds-hero-secondary-btn"
                  >
                    {slide.secondaryText}
                  </Link>
                </motion.div>

              </motion.div>


              {/* TRUST ITEMS */}

              <motion.div
                className="hds-hero-trust"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      delayChildren: 0.8,
                      staggerChildren: 0.12,
                    },
                  },
                }}
              >

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <strong>Trusted</strong>
                  <span>Healthcare Solutions</span>
                </motion.div>


                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <strong>Modern</strong>
                  <span>Diagnostic Technology</span>
                </motion.div>


                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <strong>Reliable</strong>
                  <span>Professional Support</span>
                </motion.div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </AnimatePresence>


      {/* =====================================================
          ARROWS
      ====================================================== */}

      <motion.div
        className="hds-hero-arrows"
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.9,
        }}
      >

        <motion.button
          type="button"
          className="hds-hero-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
          whileTap={{
            scale: 0.9,
          }}
        >
          ←
        </motion.button>


        <motion.button
          type="button"
          className="hds-hero-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
          whileTap={{
            scale: 0.9,
          }}
        >
          →
        </motion.button>

      </motion.div>


      {/* =====================================================
          DOTS
      ====================================================== */}

      <motion.div
        className="hds-hero-dots"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.95,
        }}
      >

        {slides.map((_, index) => (

          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={
              activeSlide === index
                ? "active"
                : ""
            }
            aria-label={`Go to slide ${index + 1}`}
          />

        ))}

      </motion.div>


      {/* =====================================================
          COUNTER
      ====================================================== */}

      <motion.div
        className="hds-hero-counter"
        initial={{
          opacity: 0,
          x: -15,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
      >

        <span>
          0{activeSlide + 1}
        </span>

        <div />

        <span>
          0{slides.length}
        </span>

      </motion.div>

    </section>
  );
}