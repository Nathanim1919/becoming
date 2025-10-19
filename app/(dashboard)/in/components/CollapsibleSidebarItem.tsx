"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CircleCheck,
  Pause,
  Archive,
  CircleDashed,
} from "lucide-react";
import { Persona, Week } from "@/app/types/personas";
import { LinkItem } from "./LinkItem";

interface CollapsibleSidebarItemProps {
  label: string;
  items: Persona[];
  icon: React.ReactNode;
  onItemEnter?: (weeks: Week[]) => void;
  onItemLeave?: () => void;
  recursiveData?: {
    label: string;
    items: Persona[];
    icon: React.ReactNode;
    onItemEnter?: (weeks: Week[]) => void;
    onItemLeave?: () => void;
    recursiveData?: {};
  } | null;
}

export const CollapsibleSidebarItem: React.FC<CollapsibleSidebarItemProps> = ({
  label,
  items,
  icon,
  onItemEnter,
  onItemLeave,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapsible-sidebar-item select-none">
      <header
        onClick={toggle}
        className="flex justify-between items-center cursor-pointer rounded-md transition-colors duration-200"
      >
        <div className="flex font-semibold items-center gap-2 text-zinc-700 dark:text-zinc-200">
          {icon}
          {label}
        </div>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="w-4 h-4 text-zinc-500" />
        </motion.div>
      </header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                transition: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                  staggerChildren: 0.05,
                },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: { duration: 0.3 },
              },
            }}
            className="ml-5 mt-2 pl-2 flex flex-col gap-1 border-l border-zinc-300 dark:border-zinc-700 overflow-hidden"
          >
            {items.map((persona, index) => (
              <motion.li
                key={index}
                variants={{
                  open: { opacity: 1, x: 0 },
                  collapsed: { opacity: 0, x: -20 },
                }}
                transition={{ duration: 0.25 }}
                className="text-gray-500"
                onMouseEnter={() => onItemEnter?.(persona.weeks)}
                onMouseLeave={() => onItemLeave?.()}
              >
                <LinkItem
                  label={persona.title}
                  href={`/in/personas/${persona.id}`}
                  icon={
                    persona.status === "completed" ? (
                      <CircleCheck size={16} className="text-green-500" />
                    ) : persona.status === "active" ? (
                      <CircleDashed size={16} className="text-yellow-500" />
                    ) : persona.status === "paused" ? (
                      <Pause size={16} className="text-gray-500" />
                    ) : (
                      <Archive size={16} />
                    )
                  }
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
