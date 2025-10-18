"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSidebarItemProps {
  children: React.ReactNode;
}

export const CollapsibleSidebarItem: React.FC<CollapsibleSidebarItemProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapsible-sidebar-item">
      <header>
        <h2>{children}</h2>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </header>
      <button onClick={toggle}>{children}</button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};
