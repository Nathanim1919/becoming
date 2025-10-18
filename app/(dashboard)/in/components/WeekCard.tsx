import { Week } from "@/app/types/personas";
import { CornerDownRight } from "lucide-react";

interface Props {
  week: Week;
}

export const WeekCard = ({ week }: Props) => {
  return (
    <div className="grid gap-2  hover:bg-gray-100 dark:hover:bg-gray-950 cursor-pointer p-4">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-1">
          {" "}
          <CornerDownRight />
          Week {week.weekNumber}
        </h3>
        <p>Upcoming</p>
      </div>
      <div className="pl-4">
        <div className="flex flex-col m-0">
          <h2 className="font-bold">{week.title}</h2>
        </div>
        {/*<div className="flex justify-between items-center">
          <div>
            <h3>Starte</h3>
            <p className="text-sm">Sunday, Oct 23, 2025</p>
          </div>
          <div>
            <h3>End</h3>
            <p className="text-sm">Sunday, Oct 29, 2025</p>
          </div>
        </div>*/}
      </div>
    </div>
  );
};
