"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiLinkedin,
  FiGithub,
  FiDownload,
  FiFileText,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

export default function Contact() {
  const handleDownloadCV = () => {
    const cvUrl =
      "https://drive.google.com/file/d/1OEP08bpWWjG-an1ZznECq7sdt2gRai-p/view?usp=sharing";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Temesgen-Gashaw-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=" text-white w-full md:w-[60%] mx-auto px-4">
      <title>Contact | Temesgen Gashaw</title>
      <div className="py-12 md:py-20">
        <Head>
          <title>Contact | Temesgen Gashaw</title>
        </Head>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-400 mb-3 md:mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Let&apos;s collaborate on something extraordinary
          </p>

          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 border border-indigo-400 mx-auto"
          >
            <FiDownload className="text-lg" />
            <span>My CV</span>
            <FiFileText className="text-lg" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className=" rounded-xl overflow-hidden w-full max-w-2xl mx-auto "
        >
          <div className="p-6 md:p-8 lg:p-10">
            <div className="space-y-4 md:space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-3 md:p-4 hover:bg-gray-700/40 rounded-lg transition-colors"
              >
                <div className="bg-indigo-500/10 p-2 md:p-3 rounded-lg mt-1">
                  <FiMail className="text-indigo-400 text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium mb-1 text-sm md:text-base">
                    Email
                  </h3>
                  <a
                    href="mailto:temesgengashaw8@example.com"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm md:text-base"
                  >
                    temesgengashaw8@example.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-3 md:p-4 hover:bg-gray-700/40 rounded-lg transition-colors"
              >
                <div className="bg-indigo-500/10 p-2 md:p-3 rounded-lg mt-1">
                  <FiPhone className="text-indigo-400 text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium mb-1 text-sm md:text-base">
                    Phone
                  </h3>
                  <a
                    href="tel:+251982533682"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm md:text-base"
                  >
                    +251 982533682
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-3 md:p-4 hover:bg-gray-700/40 rounded-lg transition-colors"
              >
                <div className="bg-indigo-500/10 p-2 md:p-3 rounded-lg mt-1">
                  <FiMessageSquare className="text-indigo-400 text-lg md:text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-300 font-medium mb-2 md:mb-3 text-sm md:text-base">
                    Social Media
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <motion.a
                      href="https://t.me/Pukkival"
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-700/50 hover:bg-indigo-500/10 rounded-lg border border-gray-600 transition-colors text-sm md:text-base"
                    >
                      <FaTelegram className="text-indigo-400" />
                      <span>Telegram</span>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/temesgen-gashaw-280827328"
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-700/50 hover:bg-indigo-500/10 rounded-lg border border-gray-600 transition-colors text-sm md:text-base"
                    >
                      <FiLinkedin className="text-indigo-400" />
                      <span>LinkedIn</span>
                    </motion.a>
                    <motion.a
                      href="https://github.com/temupukki"
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-700/50 hover:bg-indigo-500/10 rounded-lg border border-gray-600 transition-colors text-sm md:text-base"
                    >
                      <FiGithub className="text-indigo-400" />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
