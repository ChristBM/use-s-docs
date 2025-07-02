import {
  Globe,
  FileType,
  GitBranch,
  MapPinCheckInside,
  Sparkles,
  Rocket,
  Shield,
  Feather,
  Shredder,
  Smartphone,
  Bug,
  Database,
} from "lucide-react";

export const FEATURES = [
  {
    icon: Globe,
    title: "Global State",
    description: "Share state across components via key, accessible anywhere",
    status: "complete",
  },
  {
    icon: MapPinCheckInside,
    title: "Local State",
    description: "Works like useState by default when no key is provided",
    status: "complete",
  },
  {
    icon: FileType,
    title: "TypeScript Ready",
    description: "Fully typed with automatic type inference",
    status: "complete",
  },
  {
    icon: Shield,
    title: "Auto Immutability",
    description: "Deep and optimized immutability using efficient cloning",
    status: "complete",
  },
  {
    icon: Shredder,
    title: "Zero Boilerplate",
    description: "No providers, context, or wrapper components needed",
    status: "complete",
  },
  {
    icon: Feather,
    title: "Tiny Bundle",
    description: "Less than 2KB min+gzip - performance first",
    status: "complete",
  },
  {
    icon: GitBranch,
    title: "Derived State",
    description:
      "Built-in computed values via functions, no external abstraction",
    status: "complete",
  },
  {
    icon: Smartphone,
    title: "Universal",
    description: "Works in React Web and React Native applications",
    status: "complete",
  },
  {
    icon: Rocket,
    title: "React 18+",
    description: "Fully compatible with concurrent rendering and modern React",
    status: "complete",
  },
  {
    icon: Sparkles,
    title: "Modern Patterns",
    description: "Enables advanced patterns without breaking existing code",
    status: "complete",
  },
  {
    icon: Bug,
    title: "Debug Tools",
    description: "debugGlobalStore() for development insights",
    status: "partial",
  },
  {
    icon: Database,
    title: "Persistence",
    description: "Built-in state persistence (coming soon)",
    status: "planned",
  },
];

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
