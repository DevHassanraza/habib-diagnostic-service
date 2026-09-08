"use client";

import { motion } from "motion/react";

export default function ContactFormSection() {
  return (
    <section className="hds-contact-section" id="contact-form">
      <div className="hds-contact-section-container">

        {/* =========================
            LEFT CONTACT INFO
        ========================== */}
        <motion.div
          className="hds-contact-info"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* EYEBROW */}
          <motion.div
            className="hds-contact-info-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
              transition={{
                duration: 0.4,
                delay: 0.15,
              }}
            />

            CONTACT INFORMATION
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Start a Conversation With

            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.32,
                ease: "easeOut",
              }}
            >
              Our Team
            </motion.span>
          </motion.h2>

          {/* INTRO */}
          <motion.p
            className="hds-contact-info-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            Tell us what you need and our team will get back to you with the
            relevant information about our products and services.
          </motion.p>

          {/* CONTACT ITEMS */}
          <motion.div
            className="hds-contact-info-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.45,
                  staggerChildren: 0.13,
                },
              },
            }}
          >
            <motion.div
              className="hds-contact-info-item"
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.span
                className="hds-contact-info-number"
                variants={{
                  hidden: { opacity: 0, scale: 0.7 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.35 }}
              >
                01
              </motion.span>

              <div>
                <small>PHONE</small>
                <a href="tel:+923325832132">+92 332 5832132</a>
              </div>
            </motion.div>

            <motion.div
              className="hds-contact-info-item"
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.span
                className="hds-contact-info-number"
                variants={{
                  hidden: { opacity: 0, scale: 0.7 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.35 }}
              >
                02
              </motion.span>

              <div>
                <small>EMAIL</small>
                <a href="mailto:info@habibdiagnostic.com">
                  info@habibdiagnostic.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hds-contact-info-item"
              variants={{
                hidden: { opacity: 0, x: -25 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.span
                className="hds-contact-info-number"
                variants={{
                  hidden: { opacity: 0, scale: 0.7 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.35 }}
              >
                03
              </motion.span>

              <div>
                <small>LOCATION</small>
                <p>Pakistan</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>


        {/* =========================
            RIGHT FORM CARD
        ========================== */}
        <motion.div
          className="hds-contact-form-card"
          initial={{
            opacity: 0,
            x: 45,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          {/* FORM HEADING */}
          <motion.div
            className="hds-contact-form-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <span>MAKE AN INQUIRY</span>

            <h3>How Can We Help?</h3>

            <p>
              Complete the form below and share your requirements with our team.
            </p>
          </motion.div>


          {/* FORM */}
          <motion.form
            className="hds-contact-form"
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
                  delayChildren: 0.4,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {/* NAME + PHONE */}
            <motion.div
              className="hds-contact-form-row"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
            >
              <div className="hds-contact-field">
                <label htmlFor="name">Full Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="hds-contact-field">
                <label htmlFor="phone">Phone Number</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+92"
                />
              </div>
            </motion.div>


            {/* EMAIL */}
            <motion.div
              className="hds-contact-field"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
            >
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </motion.div>


            {/* SUBJECT */}
            <motion.div
              className="hds-contact-field"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
            >
              <label htmlFor="subject">Inquiry About</label>

              <select
                id="subject"
                name="subject"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>

                <option value="products">
                  Diagnostic Products
                </option>

                <option value="equipment">
                  Medical Equipment
                </option>

                <option value="services">
                  Services &amp; Support
                </option>

                <option value="other">
                  General Inquiry
                </option>
              </select>
            </motion.div>


            {/* MESSAGE */}
            <motion.div
              className="hds-contact-field"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
            >
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your requirements..."
                required
              />
            </motion.div>


            {/* SUBMIT */}
            <motion.button
              type="submit"
              className="hds-contact-submit"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 18,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.45,
              }}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              Send Inquiry
              <span>→</span>
            </motion.button>

          </motion.form>
        </motion.div>

      </div>
    </section>
  );
}