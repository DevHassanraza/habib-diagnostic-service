"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="hds-footer">

      {/* =========================
          TOP CTA
      ========================== */}
      <div className="hds-footer-cta-wrap">
        <motion.div
          className="hds-footer-cta"
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
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
          <motion.div
            className="hds-footer-cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.15,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.span
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
              READY TO WORK WITH US?
            </motion.span>

            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  y: 22,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
            >
              Need Reliable Diagnostic
              <strong> Solutions?</strong>
            </motion.h2>

            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
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
              Let’s discuss your diagnostic and healthcare requirements and
              find the right solutions for your organization.
            </motion.p>
          </motion.div>

          <motion.div
            className="hds-footer-cta-actions"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: "easeOut",
            }}
          >
            <motion.div
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link href="/contact" className="hds-footer-cta-primary">
                Get a Quote
                <motion.span
                  whileHover={{
                    x: 4,
                  }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link href="/contact" className="hds-footer-cta-secondary">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="hds-footer-main">
        <motion.div
          className="hds-footer-container"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >

          {/* BRAND */}
          <motion.div
            className="hds-footer-brand"
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            <Link href="/" className="hds-footer-logo-wrap">
              <img
                src="/logos/habib-diagnostic-logo.png"
                alt="Habib Diagnostic Service"
                className="hds-footer-logo"
              />
            </Link>

            <p>
              Habib Diagnostic Service provides reliable diagnostic,
              healthcare, and medical solutions with a focus on quality,
              professional support, and long-term partnerships.
            </p>

            <div className="hds-footer-socials">
              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="Instagram">
                ig
              </a>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            className="hds-footer-column"
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            <h3>Quick Links</h3>

            <div className="hds-footer-links">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/products">Products</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            className="hds-footer-column"
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            <h3>Our Solutions</h3>

            <div className="hds-footer-links">
              <Link href="/products">Diagnostic Equipment</Link>
              <Link href="/products">Medical Solutions</Link>
              <Link href="/services">Customer Support</Link>
              <Link href="/services">Technical Assistance</Link>
              <Link href="/services">Distribution Services</Link>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            className="hds-footer-column hds-footer-contact"
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            <h3>Get In Touch</h3>

            <motion.div
              className="hds-footer-contact-item"
              whileHover={{ x: 4 }}
            >
              <span className="hds-footer-contact-icon">☎</span>

              <div>
                <strong>Phone</strong>
                <a href="tel:+923325832132">
                  +92 332 5832132
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hds-footer-contact-item"
              whileHover={{ x: 4 }}
            >
              <span className="hds-footer-contact-icon">✉</span>

              <div>
                <strong>Email</strong>
                <a href="mailto:info@habibdiagnostic.com">
                  info@habibdiagnostic.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hds-footer-contact-item"
              whileHover={{ x: 4 }}
            >
              <span className="hds-footer-contact-icon">⌖</span>

              <div>
                <strong>Location</strong>
                <span>Pakistan</span>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================== */}
      <div className="hds-footer-bottom">
        <motion.div
          className="hds-footer-bottom-inner"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
        >

          {/* LEFT */}
          <p className="hds-footer-copyright">
            © {new Date().getFullYear()} Habib Diagnostic Service.
            All rights reserved.
          </p>

          {/* CENTER - SOFTWAYHUB */}
          <div className="hds-footer-developer">
            <span>Developed by</span>

            <a
              href="https://softwayhub.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoftwayHub
            </a>
          </div>

          {/* RIGHT */}
          <div className="hds-footer-bottom-links">
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <span />

            <Link href="/terms">
              Terms &amp; Conditions
            </Link>
          </div>

        </motion.div>
      </div>

    </footer>
  );
}