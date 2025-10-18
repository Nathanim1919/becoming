import type { ReactNode } from "react";
import Sidebar from "./components/Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[_.2fr_.9fr]">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
