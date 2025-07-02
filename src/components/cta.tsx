"use client";

import { motion } from "motion/react";
import { Button } from "./button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 mt-40 mb-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Ready to simplify your state?
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-50">
          Join developers who are building better React apps with useS
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link
                href="https://github.com/ChristBM/use-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-medium rounded-lg"
              asChild
            >
              <Link
                href="https://www.npmjs.com/package/use-s-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                npm install
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
