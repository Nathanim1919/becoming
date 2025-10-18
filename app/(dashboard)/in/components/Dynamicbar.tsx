import { Week } from "@/app/types/personas";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { WeekCard } from "./WeekCard";

interface DynamicbarProps {
  weeks: Week[] | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Dynamicbar: React.FC<DynamicbarProps> = ({
  weeks,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isOpen = Boolean(weeks?.length);

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ x: -10 }}
      animate={{ x: isOpen ? 0 : -10 }}
      transition={{ duration: 0.3 }}
      className={`absolute z-10 left-[100%] ${isOpen ? "w-[300px]" : "w-0"} top-0 bg-[#f3f3f3] dark:bg-[#100909] h-screen overflow-hidden`}
    >
      <div className="flex flex-col pt-4 px-2">
        <h2 className="font-bold flex items-center gap-1">
          <Target size={20} /> Building Ai Foundations
        </h2>
      </div>
      <div className="">
        {weeks?.map((week, index) => {
          const updatedAt =
            week.updatedAt instanceof Date
              ? week.updatedAt
              : new Date(week.updatedAt);

          return <WeekCard week={week} />;
        })}
      </div>
    </motion.div>
  );
};
