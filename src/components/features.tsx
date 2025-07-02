"use client";

import { FEATURES, fadeInUp, staggerContainer } from "@/data/landing";
import { motion } from "motion/react";

export default function Features() {
  return (
    <section className="px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Everything you need
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-50">
            Powerful features that make state management intuitive and efficient
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center relative ${
                  feature.status === "complete"
                    ? "bg-blue-100"
                    : feature.status === "partial"
                    ? "bg-amber-100"
                    : "bg-slate-100"
                }`}
              >
                <feature.icon
                  className={`w-8 h-8 ${
                    feature.status === "complete"
                      ? "text-blue-600"
                      : feature.status === "partial"
                      ? "text-amber-600"
                      : "text-slate-500"
                  }`}
                />
                {feature.status === "complete" && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
                {feature.status === "partial" && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
