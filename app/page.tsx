"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Temesgen Gashaw";
  const titleText = "Full-Stack Developer";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 90);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className=" text-white w-[60%] mx-auto mt-10">
      <title>Temesgen Gashaw</title>

      <div className="pt-24 w-full">
        <motion.div
          className="flex items-center justify-between w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-indigo-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src="/temesgengashaw.png"
              alt="Temesgen Gashaw"
              width={256} // Matches largest container size (64*4=256)
              height={256} // Matches largest container size
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>

          <div className="flex-1 ml-12">
            <motion.h1
              className="text-5xl text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.h1>

            <motion.p
              className="text-xl text-indigo-300 mt-8 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              {titleText}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="mt-24 w-full bg-gray-900/10  rounded-xl "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(17, 24, 39, 0.2)",
            borderColor: "rgb(129, 140, 248)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.h2
            className="text-4xl mb-0.5 text-indigo-300"
            whileHover={{ color: "rgb(167, 139, 250)" }}
          >
            About Me
          </motion.h2>
          <motion.hr
            className="border-t-2 border-gray-500 opacity-40 mb-6"
            whileHover={{ borderColor: "rgb(129, 140, 248)", opacity: 1 }}
          />

          <motion.div
            className="space-y-6 text-gray-300 text-lg"
            whileHover={{
              color: "rgb(209, 213, 219)",
              transition: { staggerChildren: 0.1 },
            }}
          >
            <motion.p
              whileHover={{ x: 5 }}
              className="leading-relaxed text-gray-300 text-xl "
            >
              Hey there! I&apos;m Temesgen — a full-stack developer passionate
              about building things that actually make a difference. I love
              diving into the full process, from sketching out clean, intuitive
              interfaces to engineering backend systems that are fast, reliable,
              and built to scale. What drives me is the challenge of turning
              complex ideas into smooth, user-friendly experiences that feel
              effortless. Whether I&apos;m refining a feature or solving a
              tricky bug, I&apos;m all about creating solutions that are both
              thoughtful and impactful.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
