"use client";

import { Header } from "./Header";
import { useRef, type Dispatch, type SetStateAction } from "react";
import { CollapsibleSidebarItem } from "./CollapsibleSidebarItem";
import {
  LayoutDashboard,
  Plus,
  BookMarked,
  Archive,
  Asterisk,
  Route,
} from "lucide-react";
import { LinkItem } from "./LinkItem";
import { Week } from "@/app/types/personas";
import { Dynamicbar } from "./Dynamicbar";

const samplePersonalItems = [
  {
    id: "persona-1",
    title: "AI Builder Persona",
    vision:
      "In 3 months, I want to be an AI builder with consistent habits and clarity.",
    timeframe: {
      duration: 12, // weeks
      startDate: new Date("2025-10-18"), // Sample start date
      estimatedEndDate: new Date("2026-01-10"), // Approx 3 months later
    },
    status: "active" as const,
    alignmentScore: 75,
    weeks: [
      {
        weekNumber: 1,
        title: "Foundation Building",
        focus:
          "Anchor in clarity: Start with 30-min journaling to define your ML project idea.",
        behaviors: [
          "Daily 30-minute journaling sessions to brainstorm AI project ideas",
          "Review current skills and identify first learning resources",
        ],
        todos: [
          {
            day: "Anytime (Daily)",
            task: "Journal for 30 mins: What excites you about AI? Sketch one project idea.",
            identityLink:
              "This builds the curiosity your future builder thrives on.",
            completed: false,
          },
          {
            day: "Mid-Week Check",
            task: "Assess skills: List 3 ML resources (e.g., free Coursera course).",
            identityLink: "You're stepping into the focused learner role.",
            completed: false,
          },
        ],
        emotionalTone: "Shift from overwhelm to curiosity and quiet confidence",
        affirmations: ["Every small reflection is a step toward mastery."],
        challenges: {
          potentialHurdles: "Work distractions or initial blank-page anxiety.",
          mitigations:
            "Set a 5-min timer to start; remember, consistency compounds like code.",
        },
        visualCues: {
          icon: "🌱",
          colorTheme: "cool_blue_to_warm_green",
        },
        reflectivePrompt:
          "At the end of the week, reflect: How did these actions help you feel more aligned?",
        shareableSnippet:
          "Week 1: Planting seeds of AI curiosity! 💡 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 2,
        title: "Habit Ignition",
        focus: "Commit to 1-hour daily coding and build excitement.",
        behaviors: [
          "Daily 1-hour coding sessions",
          "Weekly journaling for reflections",
        ],
        todos: [
          {
            day: "Daily",
            task: "Code for 1 hour: Practice Python basics for ML.",
            identityLink: "This ignites the builder within you.",
            completed: false,
          },
          {
            day: "Weekend",
            task: "Reflect on progress: Note wins and adjustments.",
            identityLink: "Nurture your growing confidence.",
            completed: false,
          },
        ],
        emotionalTone: "From curiosity to building excitement",
        affirmations: ["Consistency is the key to transformation."],
        challenges: {
          potentialHurdles: "Motivation dips from routine.",
          mitigations: "Pair coding with a reward; track small victories.",
        },
        visualCues: {
          icon: "🔥",
          colorTheme: "warm_orange_to_gold",
        },
        reflectivePrompt:
          "How did your actions this week echo your future self?",
        shareableSnippet:
          "Week 2: Igniting habits on my AI journey! 🚀 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 3,
        title: "Momentum Phase",
        focus: "Deepen skills and adapt based on reflections.",
        behaviors: [
          "Engage with tutorials and projects",
          "Weekly alignment checks",
        ],
        todos: [
          {
            day: "Tue/Thu",
            task: "Complete an ML tutorial module.",
            identityLink: "This propels you toward mastery.",
            completed: false,
          },
          {
            day: "Sunday",
            task: "Full week review: Adjust timeline if needed.",
            identityLink: "Embrace the evolving story of your growth.",
            completed: false,
          },
        ],
        emotionalTone: "Building quiet pride and focus",
        affirmations: ["Progress compounds—keep steering your compass."],
        challenges: {
          potentialHurdles: "Overwhelm from new concepts.",
          mitigations: "Break tasks smaller; seek simple explanations.",
        },
        visualCues: {
          icon: "📈",
          colorTheme: "green_to_blue",
        },
        reflectivePrompt:
          "What insights from this week will shape your path forward?",
        shareableSnippet:
          "Week 3: Gaining momentum as an AI builder! 📊 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
    ],
    connections: [], // Empty for standalone sample
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "persona-2",
    title: "Code Wizard",
    vision:
      "In 3 months, I want to be an AI builder with consistent habits and clarity.",
    timeframe: {
      duration: 12, // weeks
      startDate: new Date("2025-10-18"), // Sample start date
      estimatedEndDate: new Date("2026-01-10"), // Approx 3 months later
    },
    status: "active" as const,
    alignmentScore: 75,
    weeks: [
      {
        weekNumber: 1,
        title: "Foundation Building for Code Wizards",
        focus:
          "Anchor in clarity: Start with 30-min journaling to define your ML project idea.",
        behaviors: [
          "Daily 30-minute journaling sessions to brainstorm AI project ideas",
          "Review current skills and identify first learning resources",
        ],
        todos: [
          {
            day: "Anytime (Daily)",
            task: "Journal for 30 mins: What excites you about AI? Sketch one project idea.",
            identityLink:
              "This builds the curiosity your future builder thrives on.",
            completed: false,
          },
          {
            day: "Mid-Week Check",
            task: "Assess skills: List 3 ML resources (e.g., free Coursera course).",
            identityLink: "You're stepping into the focused learner role.",
            completed: false,
          },
        ],
        emotionalTone: "Shift from overwhelm to curiosity and quiet confidence",
        affirmations: ["Every small reflection is a step toward mastery."],
        challenges: {
          potentialHurdles: "Work distractions or initial blank-page anxiety.",
          mitigations:
            "Set a 5-min timer to start; remember, consistency compounds like code.",
        },
        visualCues: {
          icon: "🌱",
          colorTheme: "cool_blue_to_warm_green",
        },
        reflectivePrompt:
          "At the end of the week, reflect: How did these actions help you feel more aligned?",
        shareableSnippet:
          "Week 1: Planting seeds of AI curiosity! 💡 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 2,
        title: "Habit Ignition",
        focus: "Commit to 1-hour daily coding and build excitement.",
        behaviors: [
          "Daily 1-hour coding sessions",
          "Weekly journaling for reflections",
        ],
        todos: [
          {
            day: "Daily",
            task: "Code for 1 hour: Practice Python basics for ML.",
            identityLink: "This ignites the builder within you.",
            completed: false,
          },
          {
            day: "Weekend",
            task: "Reflect on progress: Note wins and adjustments.",
            identityLink: "Nurture your growing confidence.",
            completed: false,
          },
        ],
        emotionalTone: "From curiosity to building excitement",
        affirmations: ["Consistency is the key to transformation."],
        challenges: {
          potentialHurdles: "Motivation dips from routine.",
          mitigations: "Pair coding with a reward; track small victories.",
        },
        visualCues: {
          icon: "🔥",
          colorTheme: "warm_orange_to_gold",
        },
        reflectivePrompt:
          "How did your actions this week echo your future self?",
        shareableSnippet:
          "Week 2: Igniting habits on my AI journey! 🚀 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 3,
        title: "Momentum Phase",
        focus: "Deepen skills and adapt based on reflections.",
        behaviors: [
          "Engage with tutorials and projects",
          "Weekly alignment checks",
        ],
        todos: [
          {
            day: "Tue/Thu",
            task: "Complete an ML tutorial module.",
            identityLink: "This propels you toward mastery.",
            completed: false,
          },
          {
            day: "Sunday",
            task: "Full week review: Adjust timeline if needed.",
            identityLink: "Embrace the evolving story of your growth.",
            completed: false,
          },
        ],
        emotionalTone: "Building quiet pride and focus",
        affirmations: ["Progress compounds—keep steering your compass."],
        challenges: {
          potentialHurdles: "Overwhelm from new concepts.",
          mitigations: "Break tasks smaller; seek simple explanations.",
        },
        visualCues: {
          icon: "📈",
          colorTheme: "green_to_blue",
        },
        reflectivePrompt:
          "What insights from this week will shape your path forward?",
        shareableSnippet:
          "Week 3: Gaining momentum as an AI builder! 📊 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
    ],
    connections: [], // Empty for standalone sample
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "persona-1",
    title: "AI Builder Persona",
    vision:
      "In 3 months, I want to be an AI builder with consistent habits and clarity.",
    timeframe: {
      duration: 12, // weeks
      startDate: new Date("2025-10-18"), // Sample start date
      estimatedEndDate: new Date("2026-01-10"), // Approx 3 months later
    },
    status: "active" as const,
    alignmentScore: 75,
    weeks: [
      {
        weekNumber: 1,
        title: "Foundation Building",
        focus:
          "Anchor in clarity: Start with 30-min journaling to define your ML project idea.",
        behaviors: [
          "Daily 30-minute journaling sessions to brainstorm AI project ideas",
          "Review current skills and identify first learning resources",
        ],
        todos: [
          {
            day: "Anytime (Daily)",
            task: "Journal for 30 mins: What excites you about AI? Sketch one project idea.",
            identityLink:
              "This builds the curiosity your future builder thrives on.",
            completed: false,
          },
          {
            day: "Mid-Week Check",
            task: "Assess skills: List 3 ML resources (e.g., free Coursera course).",
            identityLink: "You're stepping into the focused learner role.",
            completed: false,
          },
        ],
        emotionalTone: "Shift from overwhelm to curiosity and quiet confidence",
        affirmations: ["Every small reflection is a step toward mastery."],
        challenges: {
          potentialHurdles: "Work distractions or initial blank-page anxiety.",
          mitigations:
            "Set a 5-min timer to start; remember, consistency compounds like code.",
        },
        visualCues: {
          icon: "🌱",
          colorTheme: "cool_blue_to_warm_green",
        },
        reflectivePrompt:
          "At the end of the week, reflect: How did these actions help you feel more aligned?",
        shareableSnippet:
          "Week 1: Planting seeds of AI curiosity! 💡 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 2,
        title: "Habit Ignition",
        focus: "Commit to 1-hour daily coding and build excitement.",
        behaviors: [
          "Daily 1-hour coding sessions",
          "Weekly journaling for reflections",
        ],
        todos: [
          {
            day: "Daily",
            task: "Code for 1 hour: Practice Python basics for ML.",
            identityLink: "This ignites the builder within you.",
            completed: false,
          },
          {
            day: "Weekend",
            task: "Reflect on progress: Note wins and adjustments.",
            identityLink: "Nurture your growing confidence.",
            completed: false,
          },
        ],
        emotionalTone: "From curiosity to building excitement",
        affirmations: ["Consistency is the key to transformation."],
        challenges: {
          potentialHurdles: "Motivation dips from routine.",
          mitigations: "Pair coding with a reward; track small victories.",
        },
        visualCues: {
          icon: "🔥",
          colorTheme: "warm_orange_to_gold",
        },
        reflectivePrompt:
          "How did your actions this week echo your future self?",
        shareableSnippet:
          "Week 2: Igniting habits on my AI journey! 🚀 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 3,
        title: "Momentum Phase",
        focus: "Deepen skills and adapt based on reflections.",
        behaviors: [
          "Engage with tutorials and projects",
          "Weekly alignment checks",
        ],
        todos: [
          {
            day: "Tue/Thu",
            task: "Complete an ML tutorial module.",
            identityLink: "This propels you toward mastery.",
            completed: false,
          },
          {
            day: "Sunday",
            task: "Full week review: Adjust timeline if needed.",
            identityLink: "Embrace the evolving story of your growth.",
            completed: false,
          },
        ],
        emotionalTone: "Building quiet pride and focus",
        affirmations: ["Progress compounds—keep steering your compass."],
        challenges: {
          potentialHurdles: "Overwhelm from new concepts.",
          mitigations: "Break tasks smaller; seek simple explanations.",
        },
        visualCues: {
          icon: "📈",
          colorTheme: "green_to_blue",
        },
        reflectivePrompt:
          "What insights from this week will shape your path forward?",
        shareableSnippet:
          "Week 3: Gaining momentum as an AI builder! 📊 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
    ],
    connections: [], // Empty for standalone sample
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "persona-2",
    title: "Code Wizard",
    vision:
      "In 3 months, I want to be an AI builder with consistent habits and clarity.",
    timeframe: {
      duration: 12, // weeks
      startDate: new Date("2025-10-18"), // Sample start date
      estimatedEndDate: new Date("2026-01-10"), // Approx 3 months later
    },
    status: "active" as const,
    alignmentScore: 75,
    weeks: [
      {
        weekNumber: 1,
        title: "Foundation Building",
        focus:
          "Anchor in clarity: Start with 30-min journaling to define your ML project idea.",
        behaviors: [
          "Daily 30-minute journaling sessions to brainstorm AI project ideas",
          "Review current skills and identify first learning resources",
        ],
        todos: [
          {
            day: "Anytime (Daily)",
            task: "Journal for 30 mins: What excites you about AI? Sketch one project idea.",
            identityLink:
              "This builds the curiosity your future builder thrives on.",
            completed: false,
          },
          {
            day: "Mid-Week Check",
            task: "Assess skills: List 3 ML resources (e.g., free Coursera course).",
            identityLink: "You're stepping into the focused learner role.",
            completed: false,
          },
        ],
        emotionalTone: "Shift from overwhelm to curiosity and quiet confidence",
        affirmations: ["Every small reflection is a step toward mastery."],
        challenges: {
          potentialHurdles: "Work distractions or initial blank-page anxiety.",
          mitigations:
            "Set a 5-min timer to start; remember, consistency compounds like code.",
        },
        visualCues: {
          icon: "🌱",
          colorTheme: "cool_blue_to_warm_green",
        },
        reflectivePrompt:
          "At the end of the week, reflect: How did these actions help you feel more aligned?",
        shareableSnippet:
          "Week 1: Planting seeds of AI curiosity! 💡 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 2,
        title: "Habit Ignition",
        focus: "Commit to 1-hour daily coding and build excitement.",
        behaviors: [
          "Daily 1-hour coding sessions",
          "Weekly journaling for reflections",
        ],
        todos: [
          {
            day: "Daily",
            task: "Code for 1 hour: Practice Python basics for ML.",
            identityLink: "This ignites the builder within you.",
            completed: false,
          },
          {
            day: "Weekend",
            task: "Reflect on progress: Note wins and adjustments.",
            identityLink: "Nurture your growing confidence.",
            completed: false,
          },
        ],
        emotionalTone: "From curiosity to building excitement",
        affirmations: ["Consistency is the key to transformation."],
        challenges: {
          potentialHurdles: "Motivation dips from routine.",
          mitigations: "Pair coding with a reward; track small victories.",
        },
        visualCues: {
          icon: "🔥",
          colorTheme: "warm_orange_to_gold",
        },
        reflectivePrompt:
          "How did your actions this week echo your future self?",
        shareableSnippet:
          "Week 2: Igniting habits on my AI journey! 🚀 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 3,
        title: "Momentum Phase",
        focus: "Deepen skills and adapt based on reflections.",
        behaviors: [
          "Engage with tutorials and projects",
          "Weekly alignment checks",
        ],
        todos: [
          {
            day: "Tue/Thu",
            task: "Complete an ML tutorial module.",
            identityLink: "This propels you toward mastery.",
            completed: false,
          },
          {
            day: "Sunday",
            task: "Full week review: Adjust timeline if needed.",
            identityLink: "Embrace the evolving story of your growth.",
            completed: false,
          },
        ],
        emotionalTone: "Building quiet pride and focus",
        affirmations: ["Progress compounds—keep steering your compass."],
        challenges: {
          potentialHurdles: "Overwhelm from new concepts.",
          mitigations: "Break tasks smaller; seek simple explanations.",
        },
        visualCues: {
          icon: "📈",
          colorTheme: "green_to_blue",
        },
        reflectivePrompt:
          "What insights from this week will shape your path forward?",
        shareableSnippet:
          "Week 3: Gaining momentum as an AI builder! 📊 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 1,
        title: "Foundation Building",
        focus:
          "Anchor in clarity: Start with 30-min journaling to define your ML project idea.",
        behaviors: [
          "Daily 30-minute journaling sessions to brainstorm AI project ideas",
          "Review current skills and identify first learning resources",
        ],
        todos: [
          {
            day: "Anytime (Daily)",
            task: "Journal for 30 mins: What excites you about AI? Sketch one project idea.",
            identityLink:
              "This builds the curiosity your future builder thrives on.",
            completed: false,
          },
          {
            day: "Mid-Week Check",
            task: "Assess skills: List 3 ML resources (e.g., free Coursera course).",
            identityLink: "You're stepping into the focused learner role.",
            completed: false,
          },
        ],
        emotionalTone: "Shift from overwhelm to curiosity and quiet confidence",
        affirmations: ["Every small reflection is a step toward mastery."],
        challenges: {
          potentialHurdles: "Work distractions or initial blank-page anxiety.",
          mitigations:
            "Set a 5-min timer to start; remember, consistency compounds like code.",
        },
        visualCues: {
          icon: "🌱",
          colorTheme: "cool_blue_to_warm_green",
        },
        reflectivePrompt:
          "At the end of the week, reflect: How did these actions help you feel more aligned?",
        shareableSnippet:
          "Week 1: Planting seeds of AI curiosity! 💡 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 2,
        title: "Habit Ignition",
        focus: "Commit to 1-hour daily coding and build excitement.",
        behaviors: [
          "Daily 1-hour coding sessions",
          "Weekly journaling for reflections",
        ],
        todos: [
          {
            day: "Daily",
            task: "Code for 1 hour: Practice Python basics for ML.",
            identityLink: "This ignites the builder within you.",
            completed: false,
          },
          {
            day: "Weekend",
            task: "Reflect on progress: Note wins and adjustments.",
            identityLink: "Nurture your growing confidence.",
            completed: false,
          },
        ],
        emotionalTone: "From curiosity to building excitement",
        affirmations: ["Consistency is the key to transformation."],
        challenges: {
          potentialHurdles: "Motivation dips from routine.",
          mitigations: "Pair coding with a reward; track small victories.",
        },
        visualCues: {
          icon: "🔥",
          colorTheme: "warm_orange_to_gold",
        },
        reflectivePrompt:
          "How did your actions this week echo your future self?",
        shareableSnippet:
          "Week 2: Igniting habits on my AI journey! 🚀 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
      {
        weekNumber: 3,
        title: "Momentum Phase",
        focus: "Deepen skills and adapt based on reflections.",
        behaviors: [
          "Engage with tutorials and projects",
          "Weekly alignment checks",
        ],
        todos: [
          {
            day: "Tue/Thu",
            task: "Complete an ML tutorial module.",
            identityLink: "This propels you toward mastery.",
            completed: false,
          },
          {
            day: "Sunday",
            task: "Full week review: Adjust timeline if needed.",
            identityLink: "Embrace the evolving story of your growth.",
            completed: false,
          },
        ],
        emotionalTone: "Building quiet pride and focus",
        affirmations: ["Progress compounds—keep steering your compass."],
        challenges: {
          potentialHurdles: "Overwhelm from new concepts.",
          mitigations: "Break tasks smaller; seek simple explanations.",
        },
        visualCues: {
          icon: "📈",
          colorTheme: "green_to_blue",
        },
        reflectivePrompt:
          "What insights from this week will shape your path forward?",
        shareableSnippet:
          "Week 3: Gaining momentum as an AI builder! 📊 #TimeCompassAI",
        progress: {
          completedTodos: 0,
          alignment: 0,
          reflection: null,
        },
        updatedAt: new Date(),
      },
    ],
    connections: [], // Empty for standalone sample
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

interface SidebarProps {
  hoveredWeeks: Week[] | null;
  setHoveredWeeks: Dispatch<SetStateAction<Week[] | null>>;
}

const Sidebar: React.FC<SidebarProps> = ({ hoveredWeeks, setHoveredWeeks }) => {
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredWeeks(null);
    }, 200);
  };

  const handlePersonaEnter = (weeks: Week[]) => {
    cancelClose();
    setHoveredWeeks(weeks);
  };

  const handleDynamicEnter = () => {
    cancelClose();
  };

  return (
    <aside
      className="h-screen z-100 relative bg-white dark:bg-black  border-r border-gray-100 dark:border-gray-900"
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      <Header />
      <Dynamicbar
        weeks={hoveredWeeks}
        onMouseEnter={handleDynamicEnter}
        onMouseLeave={scheduleClose}
      />
      <nav className="p-4 bg-white dark:bg-black">
        <ul className="flex flex-col gap-4">
          <LinkItem href="/new" label="New Vision" icon={<Plus size={20} />} />
          <LinkItem
            href="/dashboard"
            label="Dashboard"
            icon={<LayoutDashboard size={20} />}
          />

          <CollapsibleSidebarItem
            label="Paths"
            items={samplePersonalItems}
            icon={<Route size={20} />}
            onItemEnter={handlePersonaEnter}
            onItemLeave={scheduleClose}
          />
          <CollapsibleSidebarItem
            label="Future Visions"
            items={samplePersonalItems}
            icon={<BookMarked size={20} />}
          />
          <CollapsibleSidebarItem
            label="Archive"
            items={samplePersonalItems}
            icon={<Archive size={20} />}
          />
          <LinkItem
            href="/reflections"
            label="Reflections"
            icon={<Asterisk size={20} />}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
