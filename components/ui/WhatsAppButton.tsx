"use client";

import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phoneNumber = "923325832132";

  const message =
    "Hi, I visited the Habib Diagnostic Service website and would like to know more about your products and services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="hds-whatsapp-wrap">

      {/* TOOLTIP */}
      <div className="hds-whatsapp-tooltip">
        Chat with us
      </div>

      {/* PULSE */}
      <span className="hds-whatsapp-pulse" />

      {/* BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hds-whatsapp-button"
        aria-label="Chat with Habib Diagnostic Service on WhatsApp"
        initial={{
          opacity: 0,
          scale: 0.7,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.8,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.08,
          y: -3,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16.04 3C9.39 3 4 8.27 4 14.77c0 2.31.69 4.57 1.98 6.49L4.7 28l6.93-1.8a12.2 12.2 0 0 0 4.4.82h.01C22.68 27.02 28 21.75 28 15.25 28 8.74 22.68 3 16.04 3Zm0 21.95a10.1 10.1 0 0 1-4.14-.88l-.3-.13-4.11 1.07.77-4-.2-.31a9.7 9.7 0 0 1-1.51-5.18c0-5.37 4.32-9.73 9.64-9.73 5.31 0 9.64 4.36 9.64 9.73 0 5.36-4.33 9.43-9.79 9.43Zm5.29-7.28c-.29-.14-1.7-.84-1.96-.94-.27-.1-.46-.14-.65.14-.19.29-.75.94-.91 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.19.05-.36-.02-.51-.08-.14-.65-1.56-.89-2.14-.23-.56-.47-.49-.65-.5h-.55c-.19 0-.5.07-.77.36-.26.29-1 1-1 2.44s1.03 2.83 1.18 3.02c.14.19 2.03 3.13 4.92 4.39.69.3 1.22.48 1.64.61.69.22 1.31.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33Z"
          />
        </svg>
      </motion.a>

    </div>
  );
}