import { beginnerFullBodyWorkout } from "./beginner-fullbody-workout";
import { dailyMobilityDrill } from "./daily-movement-drill";
import { intermediateFullBodyWorkout } from "./intermediate-fullbody-workout";
import { surfMonth1 } from "./surf-fitness-month1";
import { surfMonth2 } from "./surf-fitness-month2";
import { surfMonth3 } from "./surf-fitness-month3";
import { warmupRoutine } from "./warmupRoutine";
// Add more imports as you create them

export const programsData = {
  "daily-mobility-drill": dailyMobilityDrill,
  "beginner-fullbody": beginnerFullBodyWorkout,
  "intermediate-fullbody": intermediateFullBodyWorkout,
  "warmup-routine": warmupRoutine,

  "3-month-surf-plan": {
    customRoute: "/programs/surf-fitness-3-month",
    isCustomPage: true,
  },
  "surf-month-1": surfMonth1,
  "surf-month-2": surfMonth2,
  "surf-month-3": surfMonth3,
};
