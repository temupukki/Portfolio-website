"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Signature Verification System",
    description:
      "MATLAB tool for verifying handwritten signatures using AlexNet CNN and image processing techniques.",
    tags: ["MATLAB", "AlexNet", "CNN", "Image Processing"],
    github: "https://github.com/temupukki/Signature-verfication-system",
    live: "",
  },
];

export default function Projects() {
  return (
    <div className=" text-white w-[60%] md:w-[60%] mx-auto">
      <title>Projects | Temesgen Gashaw</title>

      <div className="pt-16 md:pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-start mb-12 md:mb-16"
        >
          <h2 className="text-4xl font-bold text-indigo-400 ">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-6 border-l-8 border-indigo-500"
            >
              <h2 className="text-3xl font-semibold text-indigo-300 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className=" py-3 px-3 text-md text-gray-300 border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={project.github}
                      className="flex items-center gap-2 px-6 py-3 bg-indigo-900/60 rounded-e-2xl hover:bg-indigo-700  transition-colors border"
                    >
                      <FiGithub className="text-indigo-400" />
                      <span>Code</span>
                    </Link>
                  </motion.div>
                )}
                {project.live && (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={project.live}
                      className="flex items-center gap-2 px-6 py-3 bg-indigo-900/60 rounded-e-2xl hover:bg-indigo-700  transition-colors border"
                    >
                      <FiExternalLink className="text-white" />
                      <span>Live Demo</span>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
