import { warmupRoutine } from "./warmupRoutine";
import { exerciseLibrary } from "../exercises/exerciseLibrary";

export const popupRoutine = {
  title: "Pop up optimization workout",
  description:
    "Having trouble with your pop up? This routine is for you. We will go through exercises that will help you with popping up faster, smoother, and with less energy/effort.",
  difficulty: "Beginner - Advanced",
  duration: "30min - 1hr",
  // instructions: [""],
  section: {
    split: "",
    weekExample: [],
  },
  sections: [
    {
      group: "Mobility",
      exercises: [
        {
          ...exerciseLibrary["shoulder-cars"],
          sets: null,
          reps: "",
          tempo: "",
          rest: "",
        },
        {
          ...exerciseLibrary["shoulder-dislocates"],
          sets: "2",
          reps: "8",
          tempo: "",
          rest: "",
        },
        {
          ...exerciseLibrary["hip-cars"],
          sets: "2",
          reps: "5 - 8 each side",
          tempo: "Very slow and controlled",
          rest: "20 - 30 seconds each side",
        },
        {
          ...exerciseLibrary["hip-airplanes"],
          description: "",
          sets: "2",
          reps: "5 - 10 each side",
          tempo: "",
          rest: "",
        },
        {
          ...exerciseLibrary["ninety-ninety-hip-mobility"],
          sets: "2",
          reps: "",
          tempo: "hold for atleast 30 seconds each side.",
          rest: "",
        },
        {
          ...exerciseLibrary["worlds-greatest-stretch"],
          sets: "2",
          reps: "",
          tempo:
            "Nice and easy make sure to feel your entire body throughout the movement",
          rest: "",
        },
        {
          ...exerciseLibrary["glute-bridge"],
          sets: "2",
          reps: "5 - 8 per side",
          tempo: "Fast up and 4 seconds down",
          rest: "",
        },
        {
          ...exerciseLibrary["scap-push-up"],
          sets: "2",
          reps: "8 - 10",
          tempo: "",
          rest: "",
        },
        {
          name: "Foam rolling T-Spine Extensions",
          description: "",
          sets: null,
          reps: "",
          tempo: "",
          rest: "",
        },
        {
          name: "Crab Reach",
          description: "",
          sets: null,
          reps: "",
          tempo: "",
          rest: "",
        },
      ],
    },

    {
      program: "Mobility",
      group: "A",
      exercises: [
        {
          name: "",
          description: "",
          focus: [],
          sets: null,
          reps: "",
          rest: "",
          progression: "",
        },
        {
          ...exerciseLibrary["dive-bomber-push-up"],
          focus: [],
          sets: null,
          reps: "",
          rest: "",
          progression: "",
        },
        {
          name: "Beast Holds",
          description: "",
          focus: [],
          sets: null,
          reps: "",
          rest: "",
          progression: "",
        },
        {
          name: "Slow RDL",
          description: "",
          focus: [],
          sets: null,
          reps: "",
          rest: "",
          progression: "",
        },
        {
          name: "Arm Low Cobra Push-ups",
          description:
            "Instead of regular pushups where your thumbs are at the nipple line, place your thumbs a few inches lower. Takes some time to get used to.",
          focus: [],
          sets: null,
          reps: "",
          rest: "",
          progression: "",
        },

        {
          name: "Break Dancers",
          description:
            "Aim for slow and controlled movements. Bring your knee up to your chest.",
          focus: [],
          sets: null,
          reps: "",
          rest: "",
          progression: "",
        },
        {
          name: "Slow Mountain Climbers",
          description:
            "Aim for slow and controlled movements. Bring your knee up to your chest.",
          focus: [],
          sets: null,
          reps: "",
          rest: "",
          progression: "",
        },
        {
          name: "Break Dancers",
          description:
            "Aim for slow and controlled movements. Bring your knee up to your chest.",
          focus: [],
          sets: null,
          reps: "",
          rest: "",
          progression: "",
        },
      ],
    },

    {
      program: "",
      group: "B",
      exercises: [],
    },
  ],
};
