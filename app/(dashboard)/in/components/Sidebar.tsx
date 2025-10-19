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
        status: "completed",
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
        status: "in-progress",
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
        status: "completed",
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
        status: "completed",
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
        status: "completed",
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
        status: "upcoming",
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
        status: "completed",
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
        status: "completed",
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
        status: "in-progress",
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
        status: "in-progress",
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
        status: "upcoming",
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
        status: "completed",
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
        status: "upcoming",
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
        status: "in-progress",
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
        status: "completed",
        updatedAt: new Date(),
      },
    ],
    connections: [], // Empty for standalone sample
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "persona-3",
    title: "Mindful Innovator",
    vision:
      "In 6 months, I want to launch a mindful productivity app that helps makers slow down to speed up.",
    timeframe: {
      duration: 24,
      startDate: new Date("2025-04-01"),
      estimatedEndDate: new Date("2025-09-16"),
    },
    status: "active" as const,
    alignmentScore: 68,
    weeks: [
      {
        weekNumber: 1,
        title: "Vision Mapping",
        focus: "Sketch the north-star experience and define user outcomes.",
        behaviors: [
          "Daily 20-minute visualization of ideal user journey",
          "Capture insights from 2 mindfulness sessions",
        ],
        todos: [
          {
            day: "Monday",
            task: "Draft a one-page app manifesto outlining purpose and promise.",
            identityLink:
              "You are the mindful founder who designs with intention.",
            completed: false,
          },
          {
            day: "Thursday",
            task: "Interview one maker about their current slowdown rituals.",
            identityLink: "Listening cements your empathy-first leadership.",
            completed: false,
          },
        ],
        emotionalTone: "Curious, grounded, and expansive",
        affirmations: ["Clarity flows when I pause to listen."],
        challenges: {
          potentialHurdles:
            "Over-planning instead of shipping tangible artifacts.",
          mitigations: "Timebox strategy work and end with a shipping step.",
        },
        visualCues: {
          icon: "🧭",
          colorTheme: "lavender_to_midnight",
        },
        reflectivePrompt:
          "Which images of the future product felt most alive for you this week?",
        shareableSnippet:
          "Week 1: Charting the mindful maker journey. 🧭 #SlowBuilds",
        progress: {
          completedTodos: 0,
          alignment: 10,
          reflection: null,
        },
        status: "completed",
        updatedAt: new Date(),
      },
      {
        weekNumber: 2,
        title: "Prototype Sprint",
        focus: "Translate vision sketches into a clickable prototype.",
        behaviors: [
          "Two focused design sprints using low-fidelity wireframes",
          "Daily stand-down ritual to note wins and frictions",
        ],
        todos: [
          {
            day: "Tue/Thu",
            task: "Build primary flow in Figma covering onboarding to first check-in.",
            identityLink:
              "You make calm experiences by shaping them with care.",
            completed: false,
          },
          {
            day: "Friday",
            task: "Run two silent demo sessions and collect impressions.",
            identityLink: "Quiet observation sharpens your creator instincts.",
            completed: false,
          },
        ],
        emotionalTone: "Playful experimentation with grounded focus",
        affirmations: ["Momentum is mindful when anchored in intention."],
        challenges: {
          potentialHurdles: "Perfectionism delaying feedback loops.",
          mitigations: "Ship rough drafts and annotate known gaps openly.",
        },
        visualCues: {
          icon: "🛠️",
          colorTheme: "sunrise_orange_to_night_sky",
        },
        reflectivePrompt:
          "Which prototype moments captured the calm you’re building toward?",
        shareableSnippet:
          "Week 2: Spinning up mindful flows one screen at a time. 🎨 #MakerStillness",
        progress: {
          completedTodos: 0,
          alignment: 28,
          reflection: null,
        },
        status: "in-progress",
        updatedAt: new Date(),
      },
      {
        weekNumber: 3,
        title: "User Listening Lab",
        focus: "Validate prototype resonance with mindful makers.",
        behaviors: [
          "Host user conversations focused on feelings over features",
          "Journal nightly about surprises and energy shifts",
        ],
        todos: [
          {
            day: "Wednesday",
            task: "Facilitate a 30-minute listening session with a seasoned meditator.",
            identityLink:
              "Your curiosity is the bridge between vision and reality.",
            completed: false,
          },
          {
            day: "Saturday",
            task: "Synthesize learnings into a resonance matrix.",
            identityLink: "Sense-making turns data into guided momentum.",
            completed: false,
          },
        ],
        emotionalTone: "Empathetic, observant, and adaptive",
        affirmations: ["Listening deeply is building wisely."],
        challenges: {
          potentialHurdles:
            "Hearing conflicting feedback that clouds direction.",
          mitigations:
            "Cluster insights by energy; prioritize what sparks alignment.",
        },
        visualCues: {
          icon: "🎧",
          colorTheme: "teal_to_soft_gold",
        },
        reflectivePrompt:
          "What stories from users shifted your sense of what matters most?",
        shareableSnippet:
          "Week 3: Letting mindful makers co-create the journey. 🎧 #StillnessLab",
        progress: {
          completedTodos: 0,
          alignment: 36,
          reflection: null,
        },
        status: "upcoming",
        updatedAt: new Date(),
      },
      {
        weekNumber: 4,
        title: "Calibration Cycle",
        focus: "Integrate learnings and reprioritize feature roadmap.",
        behaviors: [
          "Daily review of user quotes to anchor decisions",
          "Commit to a single high-impact shift per day",
        ],
        todos: [
          {
            day: "Monday",
            task: "Update backlog with new themes and tag by emotional resonance.",
            identityLink: "Discernment keeps your product soul-aligned.",
            completed: false,
          },
          {
            day: "Thursday",
            task: "Prototype refined flow for the most resonant ritual.",
            identityLink: "You turn insights into embodied experiences.",
            completed: false,
          },
        ],
        emotionalTone: "Reflective, decisive, and steady",
        affirmations: ["Alignment is a series of courageous edits."],
        challenges: {
          potentialHurdles: "Scope creep from wanting to honor every insight.",
          mitigations:
            "Return to the manifesto and focus on first-principle needs.",
        },
        visualCues: {
          icon: "🧘",
          colorTheme: "sage_to_charcoal",
        },
        reflectivePrompt:
          "How did the recalibration honor both user truth and your vision?",
        shareableSnippet:
          "Week 4: Calibrating the calm, one mindful pivot at a time. 🧘 #AlignedBuild",
        progress: {
          completedTodos: 0,
          alignment: 45,
          reflection: null,
        },
        status: "upcoming",
        updatedAt: new Date(),
      },
      {
        weekNumber: 5,
        title: "Ritual Release",
        focus: "Ship the first guided ritual and capture impact signals.",
        behaviors: [
          "Pair each build session with a grounding breath practice",
          "Close days by noting gratitude for micro-progress",
        ],
        todos: [
          {
            day: "Tuesday",
            task: "Deploy MVP ritual flow to a private beta circle.",
            identityLink: "You release with both courage and care.",
            completed: false,
          },
          {
            day: "Friday",
            task: "Collect pulse check notes and schedule integration circle.",
            identityLink: "Holding space turns testers into champions.",
            completed: false,
          },
        ],
        emotionalTone: "Courageous celebration and gentle pace",
        affirmations: ["I can launch boldly without losing my calm center."],
        challenges: {
          potentialHurdles: "Rushing metrics over meaning post-release.",
          mitigations: "Define success as qualitative resonance first.",
        },
        visualCues: {
          icon: "🎁",
          colorTheme: "soft_gold_to_midnight_blue",
        },
        reflectivePrompt:
          "What did releasing teach you about balancing urgency and ease?",
        shareableSnippet:
          "Week 5: Offering the first mindful ritual to the world. 🎁 #CalmLaunch",
        progress: {
          completedTodos: 0,
          alignment: 52,
          reflection: null,
        },
        status: "upcoming",
        updatedAt: new Date(),
      },
    ],
    connections: [],
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
          <LinkItem
            href="/in/new"
            label="New Vision"
            icon={<Plus size={20} />}
          />
          <LinkItem
            href="/in"
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
