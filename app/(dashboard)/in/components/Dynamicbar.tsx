import { Week } from "@/app/types/personas";
import { motion } from "framer-motion";

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
      {weeks?.map((week, index) => {
        const updatedAt =
          week.updatedAt instanceof Date
            ? week.updatedAt
            : new Date(week.updatedAt);

        return (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-2"
          >
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {week.title}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {updatedAt.toDateString()}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};
