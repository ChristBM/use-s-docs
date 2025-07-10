import type { MetaRecord } from "nextra";
import { MoveUpRight } from "lucide-react";

const meta: MetaRecord = {
  index: {
    title: "Home",
    type: "page",
    href: "/",
  },
  docs: {
    title: "Docs",
    type: "page",
    href: "/docs",
  },
  llms: {
    title: (<div className="flex items-center gap-0.5">llms.txt <MoveUpRight size={12} /></div>),
    type: "page",
    href: "/llms.txt",
  },
};

export default meta;
