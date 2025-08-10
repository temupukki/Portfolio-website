"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="w-[60%] mx-auto py-12 mt-24 border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <div>
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <FaCode className="text-indigo-400 text-2xl mr-3" />
            <span className="text-xl font-semibold">Temesgen Gashaw</span>
          </motion.div>

          <motion.div
            className="text-gray-400 mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.div>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {[
              { icon: <FaGithub />, url: "https://github.com/temupukki" },
              {
                icon: <FaLinkedin />,
                url: "https://linkedin.com/in/temesgen-gashaw-280827328",
              },

              { icon: <FaTelegram />, url: "https://t.me/Pukkival" },
              { icon: <FaEnvelope />, url: "mailto:temesgengashaw8@email.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-xl"
                aria-label={item.icon.type.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
