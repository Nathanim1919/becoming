import React from "react";
import { Send } from "lucide-react";

const NewVision = () => {
  const titles = [
    "Becoming the person you set out to be.",
    "Becoming who you already know you can be.",
    "Becoming the story you get to write.",
    "Becoming the person you always dreamed of being.",
    "Becoming everything you once thought was impossible.",
    "Becoming your truest, most alive self.",
  ];

  return (
    <div className="grid gap-2 p-4 place-items-center h-screen">
      <div className="w-full max-w-3xl space-y-4">
        <header className="text-center space-y-3">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
            Becoming the person you set out to be.
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Articulate your long-term goal and the identity you want to achieve.
            The AI will build the roadmap.
          </p>
        </header>

        {/* Form Area: Container for the primary input */}
        <div
          className="w-full
          border-2
          border-gray-300 dark:border-[#141414]
          rounded-xl
          shadow-sm
          flex flex-col
          min-h-[150px] relative bg-white dark:bg-[#222222]"
        >
          <label htmlFor="visionTextarea" className="sr-only">
            Your Future Vision
          </label>
          <div className="grid place-items-end p-1">
            <div className="bg-gray-100 dark:bg-[#2c2c2c] p-1 rounded-full flex justify-between items-center gap-1">
              <button className="bg-white flex-1 dark:bg-[#220b0b] px-4 cursor-pointer border dark:border-gray-800 border-gray-200 py-1 rounded-3xl text-sm">
                Project
              </button>
              <button className="flex-1 px-4 cursor-pointer border dark:border-gray-800 border-gray-200 py-1 rounded-3xl text-sm">
                Path
              </button>
            </div>
          </div>
          <textarea
            id="visionTextarea"
            name="vision"
            // The textarea styles are applied here:
            className="
              w-full
              resize-none
              relative
              min-h-[150px]
              p-6
              text-lg
              focus:outline-none
              transition-all
              duration-200
              text-gray-800 dark:text-gray-200
              placeholder:text-gray-400 dark:placeholder:text-gray-600
            "
            placeholder="In 4 months, I want to be a proficient AI developer who can build and deploy a working LLM application, enabling me to transition into a new career path."
          ></textarea>
          <div className="flex items-center justify-between p-4">
            <div>
              <h2>120/500</h2>
            </div>
            <button
              className="
            self-end
              bg-gray-200 dark:bg-[#141414] hover:opacity-60 cursor-pointer px-4 py-2 rounded-2xl
              flex
              items-center
              justify-between gap-2
            "
            >
              Generate
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVision;
