"use client";
import { motion } from "framer-motion";
import Head from "next/head";

const frontendLibraries = ["React", "Next.js", "Redux", "Vite"];

const stylingTools = [
  "Tailwind CSS",
  "Framer Motion",
  "ShadCN UI",
  
];

const frontendLanguages = ["JavaScript", "TypeScript", "HTML5", "CSS3"];

const backendLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Go",
  "REST",
  "GraphQL",
];
const backendFrameworks = ["Node.js", "Express.js", "FastAPI"];
const backendData = ["PostgreSQL", "SQLite", "Prisma"];

const buildTools = ["ESLint", "Prettier"];

export default function Skills() {
  return (
    <div className="min-h-screen text-white w-[60%] mx-auto">
      <title>Skills | Temesgen Gashaw</title>
      <Head>
        <title>Skills | Abebe Kebede</title>
      </Head>

      <div className="pt-14 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-13"
        >
          <h2 className="text-2xl mb-8 font-bold text-indigo-400">
            Frontend Development
          </h2>

          <div className="mb-6">
            <h3 className="text-xl mb-4 text-gray-300">Languages</h3>
            <div className="flex flex-wrap gap-4">
              {frontendLanguages.map((language, index) => (
                <motion.div
                  key={language}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(79, 70, 229, 0.2)",
                  }}
                  className="px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-default"
                >
                  {language}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-4 text-gray-300">
              Libraries & Frameworks
            </h3>
            <div className="flex flex-wrap gap-4">
              {frontendLibraries.map((lib, index) => (
                <motion.div
                  key={lib}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index + 0.3, duration: 0.5 }}
                  whileHover={{
                    y: -3,
                    backgroundColor: "rgba(79, 70, 229, 0.2)",
                  }}
                  className="px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-default"
                >
                  {lib}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-4 text-gray-300">Styling & UI Tools</h3>
            <div className="flex flex-wrap gap-4">
              {stylingTools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.6, duration: 0.5 }}
                  whileHover={{
                    x: 3,
                    backgroundColor: "rgba(79, 70, 229, 0.2)",
                  }}
                  className="px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-4 text-gray-300">Build Tools</h3>
            <div className="flex flex-wrap gap-4">
              {buildTools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.6, duration: 0.5 }}
                  whileHover={{
                    x: 3,
                    backgroundColor: "rgba(79, 70, 229, 0.2)",
                  }}
                  className="px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-indigo-400">
            Backend Development
          </h2>

          <div className="mb-6">
            <h3 className="text-xl mb-4 text-gray-300">Languages and APIs</h3>
            <div className="flex flex-wrap gap-4">
              {backendLanguages.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.6, duration: 0.5 }}
                  whileHover={{
                    x: 3,
                    backgroundColor: "rgba(79, 70, 229, 0.2)",
                  }}
                  className="px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-4 text-gray-300">
              Runtimes and Frameworks
            </h3>
            <div className="flex flex-wrap gap-4">
              {backendFrameworks.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.6, duration: 0.5 }}
                  whileHover={{
                    x: 3,
                    backgroundColor: "rgba(79, 70, 229, 0.2)",
                  }}
                  className="px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl mb-4 text-gray-300">Database and ORM</h3>
            <div className="flex flex-wrap gap-4">
              {backendData.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.6, duration: 0.5 }}
                  whileHover={{
                    x: 3,
                    backgroundColor: "rgba(79, 70, 229, 0.2)",
                  }}
                  className="px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
