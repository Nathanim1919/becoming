"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Week } from "@/app/types/personas";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [hoveredWeeks, setHoveredWeeks] = useState<Week[] | null>(null);
  return (
    <div className="grid grid-cols-[_.2fr_.9fr]">
      <Sidebar hoveredWeeks={hoveredWeeks} setHoveredWeeks={setHoveredWeeks} />
      <div className="bg-[#f7e7e7]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
