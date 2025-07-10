"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Callout } from "nextra/components";
import { Card } from "./card";
import Local from "./Local.mdx";
import Global from "./Global.mdx";
import { Button } from "./button";
import CopyButton from "./copy-button";

export default function Hero() {
  return (
    <section className="px-6 text-center max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full flex justify-center mb-2.5">
          <Image src="/logo.png" alt="useS logo" width={200} height={100} className="hidden dark:block" />
          <Image src="/logo-dark.png" alt="useS logo" width={200} height={100} className="dark:hidden" />
        </div>
        <h1 className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-light leading-relaxed opacity-50">
          React Hook for State Management
        </h1>
      </motion.div>

      {/* Quick Start */}
      <motion.div
        className="text-center flex justify-center flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-900 text-white rounded-lg font-mono text-sm">
          <span className="text-slate-400">$</span>
          <span>npm i use-s-react</span>
          <CopyButton />
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg font-medium rounded-lg"
            asChild
          >
            <Link href="/docs/getting-started">Getting Started</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Code Examples */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-light mb-4">
            From Local to Global in One Line
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 text-left border-white/10 overflow-x-scroll md:overflow-visible">
            <Local />
          </Card>

          <Card className="p-6 text-left border-white/10 overflow-x-scroll md:overflow-visible">
            <Global />
          </Card>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3">
            <Callout type="info" emoji="✅">
              Copy the global state line to any component — they{`'`}ll
              automatically sync!
            </Callout>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
