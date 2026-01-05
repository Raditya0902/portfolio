// src/components/HeroClient.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroClient() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Hi, I’m <span className="text-indigo-600">Aditya</span>. I build
          production ML systems and high-performance backends.
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl">
          I'm targeting SDE, AI/ML Engineering roles.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row sm:gap-3 gap-3">
          <a href="#contact" className="w-full sm:w-auto">
            <Button className="w-full md:w-auto">Get in touch</Button>
          </a>
          <a href="#projects" className="w-full sm:w-auto">
            <Button variant="ghost" className="w-full md:w-auto">
              See projects
            </Button>
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
          <a
            href="https://github.com/Raditya0902"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/aditya-rallapalli"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a href="mailto:arallapa@asu.edu" aria-label="Email Aditya">
            <Mail />
          </a>
        </div>
      </motion.div>

      {/* Right: visual card (image fills whole card, zoom on hover) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center"
      >
        {/* <div className="rounded-2xl p-6 shadow-lg bg-white">
          <h3 className="font-semibold text-lg">Key highlights</h3>
          <ul className="mt-4 space-y-2 text-slate-600 text-sm">
            <li>• Master's student — ASU</li>
            <li>• DSA + System Design + Full-stack ML</li>
            <li>• Open to SDE / ML / AI roles</li>
          </ul>
        </div> */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg bg-white max-w-md w-full group"
          aria-hidden={false}
          role="img"
          aria-label="Chess and tennis image"
        >
          {/* Container to control aspect-ratio (adjust ratio if you like) */}
          <div className="w-full aspect-[4/3] relative">
            {/* Image fills the whole card and zooms on hover */}
            <img
              src="/chess-tennis.png" /* adjust if your image filename differs */
              alt="Chess and tennis emblem — strategy and execution"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
