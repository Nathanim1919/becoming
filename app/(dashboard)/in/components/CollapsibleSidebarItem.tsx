"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Persona } from "@/app/types/personas";
import { LinkItem } from "./LinkItem";
import { UserRound, Users } from "lucide-react";

interface CollapsibleSidebarItemProps {
  label: string;
  items: Persona[];
}

export const CollapsibleSidebarItem: React.FC<CollapsibleSidebarItemProps> = ({
  label,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapsible-sidebar-item">
      <header className="flex justify-between items-center">
        <button className="flex font-bold items-center justify-between gap-2">
          <Users size={20} />
          {label}
        </button>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 cursor-pointer" onClick={toggle} />
        ) : (
          <ChevronDown className="w-4 h-4 cursor-pointer" onClick={toggle} />
        )}
      </header>
      {isOpen && (
        <ul className="ml-2 p-2 text-md flex flex-col gap-1 border-l border-gray-800">
          {items.map((persona) => (
            <LinkItem
              label={persona.title}
              href={`/in/personas/${persona.id}`}
              icon={<UserRound size={20} />}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
