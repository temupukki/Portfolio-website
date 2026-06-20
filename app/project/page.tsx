"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const projects = [
 
{
    title: "Dashen-bank Loan-Orgination web-app  ",
    description:
      "A secure, scalable platform designed to streamline the end-to-end loan processing lifecycle—from application intake and eligibility checks to approval, documentation, and disbursement. Built with role-based access, BPMN-modeled workflows, and audit-ready compliance features, it empowers financial institutions to enhance operational efficiency, reduce turnaround time, and ensure regulatory alignment.",
    tags: [
      "Typescript",
      "Tailwind",
      "Postgres",
      "Prisma",
      "ShadCN",
      "Better-auth",
      "Next.js",
      "React",
      "zod",
      "supabase",
    ],
    github: "https://github.com/temupukki/Loan-orgination",
    live: "https://loan-orgination.vercel.app/",
  },
  {
  title: "Clinical NLP and OCR System",
  description:
    "An end-to-end clinical document processing platform that integrates OCR and transformer-based NLP models for medical information extraction. The system digitizes scanned clinical documents, performs biomedical Named Entity Recognition (NER), classifies entity assertions (Present, Absent, Possible, Historical), and generates concise clinical summaries through a unified FastAPI-powered inference pipeline.",
  tags: [
    "Python",
    "PyTorch",
    "Transformers",
    "FastAPI",
    "BioClinicalBERT",
    "BERT",
    "BART",
    "TrOCR",
    "Deep Learning",
    "Hugging Face",
    "REST API",
  ],
},

  {
    title: "Milk Shop Web App",
    description:
      "A high-performance dairy e-commerce platform built on Next.js. TypeScript core with Tailwind for utility-first styling and ShadCN for production-ready UI components. Powered by Postgres via Prisma ORM for robust data handling. Implements secure authentication with better-auth.",
    tags: [
      "Typescript",
      "Tailwind",
      "Postgres",
      "Prisma",
      "ShadCN",
      "Better-auth",
      "Next.js",
      "React",
      "zod",
    ],
    github: "https://github.com/temupukki/milk-shop-website",
    live: "https://milk-shop-website-8tfp.vercel.app/",
  },
  {
    title: "ESX - Compilance Tracker   ",
    description: "simple compilance tracker !",
    tags: [
      "Typescript",
      "Tailwind",
      "Postgres",
      "Prisma",
      "ShadCN",
      "Better-auth",
      "Next.js",
      "React",
      "zod",
      "supabase",
    ],
    github: "https://github.com/temupukki/simple-bpmn-website",
    live: "https://simple-bpmn-website.vercel.app/",
  },
  {
    title: "Temporary-Banking-System For Loan-Orgination web-app  ",
    description: "Temporary-Banking-System For Loan-Orgination web-app!",
    tags: [
      "Typescript",
      "Tailwind",
      "Postgres",
      "Prisma",
      "ShadCN",
      "Better-auth",
      "Next.js",
      "React",
      "zod",
      "supabase",
    ],
    github: "https://github.com/temupukki/temporary-CBS",
    live: "https://temporary-cbs.vercel.app/",
  },
  
   {
    title: "Signature Verification System",
    description:
      "MATLAB tool for verifying handwritten signatures using AlexNet CNN and image processing techniques.",
    tags: ["MATLAB", "AlexNet", "CNN"],
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

        <motion.div 
          className="flex mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="https://github.com/temupukki" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 border border-indigo-400"
            >
              <span>View More Projects</span>
              <FiArrowRight className="text-lg" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}