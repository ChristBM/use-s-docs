"use client";

import { motion } from "motion/react";
import { Globe, Layers, Rocket, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/data/landing";
import { Card, CardContent } from "./card";

export default function WhyUses() {
  return (
    <section className="px-6 mt-40">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-light mb-6">Why useS?</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-50">
            Created with a clear goal: to make state management in React easier
            and powerful
          </p>
        </motion.div>

        {/* Problems Section */}
        <motion.div
          className="mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-light text-center mb-12"
            variants={fadeInUp}
          >
            The Problems with Current Approaches
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="p-8 h-full bg-white border-slate-200">
                <CardContent className="p-0">
                  <div className="w-12 h-12 mb-6 bg-red-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">
                    Global State is Unnecessarily Complex
                  </h4>
                  <div className="text-slate-600 space-y-3">
                    <p>
                      To share state across components, you typically need to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Create a context with createContext</li>
                      <li>Create and configure a Provider</li>
                      <li>Wrap your app with that Provider</li>
                      <li>Use useContext in every component</li>
                      <li>Create custom hooks for additional logic</li>
                    </ul>
                    <p className="text-sm font-medium text-red-600">
                      All with potential re-render and scalability issues.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 h-full bg-white border-slate-200">
                <CardContent className="p-0">
                  <div className="w-12 h-12 mb-6 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">
                    useState Doesn&apos;t Scale
                  </h4>
                  <div className="text-slate-600 space-y-3">
                    <p>While useState is simple, it struggles with:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Complex data structures (nested objects)</li>
                      <li>Automatic immutability</li>
                      <li>Derived state in a declarative way</li>
                    </ul>
                    <p className="text-sm">
                      Switch to useReducer? Now you need to learn a new API,
                      define actions and reducers, and trade simplicity for
                      control.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light mb-4">The Solution</h3>
          </div>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-12 h-12 mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                    Professional Power, Simple API
                  </h4>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>API as simple as useState</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>
                        Handle local or global state with a single line
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>
                        No context, providers, or boilerplate required
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Automatic immutability for complex objects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Derived state through declarative functions</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="p-9 bg-slate-900 text-white">
                    <CardContent className="p-0 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-slate-800 rounded-2xl flex items-center justify-center">
                        <Rocket className="w-8 h-8 text-blue-400" />
                      </div>
                      <h4 className="text-2xl font-semibold mb-4">
                        Built on React 18&apos;s useSyncExternalStore
                      </h4>
                      <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        useS leverages React 18&apos;s useSyncExternalStore for
                        automatic reactivity, scalability without external
                        dependencies, and modularity to define local or global
                        state as needed.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
