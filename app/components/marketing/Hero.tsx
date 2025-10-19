import { Send } from "lucide-react";

export const Hero = () => {
  const titles = [
    "Becoming the person you set out to be.",
    "Becoming who you already know you can be.",
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
          </p>
        </header>

        <div className="flex justify-center">
          <button className="btn btn-primary">
            Start Now <Send className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
