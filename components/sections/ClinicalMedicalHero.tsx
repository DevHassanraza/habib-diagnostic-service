"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ClinicalMedicalHero() {
  return (
    <section className="hds-clinical-hero">
      <div className="hds-clinical-hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hds-clinical-hero-content">

          {/* BREADCRUMB */}
          <motion.div
            className="hds-clinical-hero-breadcrumb"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/products">Products</Link>
            <span>→</span>
            <strong>Clinical &amp; Medical Equipment</strong>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            className="hds-clinical-hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.22,
              ease: "easeOut",
            }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ transformOrigin: "left" }}
              transition={{
                duration: 0.45,
                delay: 0.3,
              }}
            />
            CLINICAL &amp; MEDICAL EQUIPMENT
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.32,
              ease: "easeOut",
            }}
          >
            Medical Equipment

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.48,
                ease: "easeOut",
              }}
            >
              Built for Clinical Care
            </motion.span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.58,
              ease: "easeOut",
            }}
          >
            Explore clinical and medical equipment designed to support patient
            care, monitoring, and essential healthcare workflows across modern
            medical environments.
          </motion.p>

          {/* ACTIONS */}
          <motion.div
            className="hds-clinical-hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="#clinical-solutions"
                className="hds-clinical-hero-primary"
              >
                Explore Equipment
                <span>→</span>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/contact"
                className="hds-clinical-hero-secondary"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            className="hds-clinical-hero-features"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.82,
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {[
              "Patient Care",
              "Monitoring Equipment",
              "Clinical Equipment",
            ].map((item) => (
              <motion.div
                key={item}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -18,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                <motion.span
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                />

                <strong>{item}</strong>
              </motion.div>
            ))}
          </motion.div>

        </div>


        {/* =========================
            RIGHT VISUAL
        ========================== */}
        <motion.div
          className="hds-clinical-hero-visual"
          initial={{
            opacity: 0,
            x: 55,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.85,
            delay: 0.2,
            ease: "easeOut",
          }}
        >

          <motion.div
            className="hds-clinical-hero-image-wrap"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.85,
              delay: 0.3,
              ease: "easeOut",
            }}
          >

            {/* IMAGE */}
            <motion.img
              src="/images/products/clinical-medical-equipment-hero.png"
              alt="Modern clinical and medical equipment"
              className="hds-clinical-hero-image"
              initial={{
                scale: 1.08,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.4,
                delay: 0.25,
                ease: "easeOut",
              }}
            />

            <div className="hds-clinical-hero-overlay" />

            {/* IMAGE LABEL */}
            <motion.div
              className="hds-clinical-hero-label"
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.72,
                ease: "easeOut",
              }}
            >
              <span>CLINICAL CARE</span>

              <strong>
                Reliable Equipment.
                <br />
                Practical Support.
              </strong>
            </motion.div>

          </motion.div>


          {/* FLOATING CARD */}
          <motion.div
            className="hds-clinical-hero-floating"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.85,
              ease: "easeOut",
            }}
          >
            <strong>Clinical Equipment Solutions</strong>

            <span>
              Supporting modern patient care environments
            </span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}