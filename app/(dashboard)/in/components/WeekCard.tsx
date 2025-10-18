import { Week } from "@/app/types/personas";
import { CornerDownRight, Calendar } from "lucide-react";

interface Props {
  week: Week;
}

export const WeekCard = ({ week }: Props) => {
  return (
    <div className="grid gap-2  hover:bg-gray-200 dark:hover:bg-gray-950 cursor-pointer p-4">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-1">
          {" "}
          <CornerDownRight className="text-gray-400" />
          Week {week.weekNumber}
        </h3>
        <p className="text-sm">Upcoming</p>
      </div>
      <div className="ml-4 flex flex-col gap-2 pl-2 border-l border-gray-300 dark:border-gray-700">
        <div className="flex flex-col m-0">
          <h2 className="font-bold">{week.title}</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {week.focus}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="flex items-center gap-1">
              <Calendar size={14} />
              Starte
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Sunday, Oct 23, 2025
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-1">
              <Calendar size={14} />
              End
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Sunday, Oct 29, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
