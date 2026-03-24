import { exerciseLibrary } from "../exercises/exerciseLibrary";

export const popupRoutine = {
  title: "Pop-up Workout",
  description:
    "Having trouble with your pop up? We will go through exercises that will help you with popping up faster, smoother, and with less energy/effort.",
  difficulty: "Beginner - Advanced",
  duration: "30min - 1hr",
  instructions: [
    "Do the mobility drills everyday. You can never do enough of them.",
    "Focus on form over weight",
    "Make sure to use heavy enough weight to challenge yourself",
    "Listen to your body. If you feel any pain stop the exercise.",
    "Do the strength portion once or twice a week along with your other workouts.",
  ],
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
          sets: "1-2",
          reps: "10",
          note: "These will warm up your shoulder capsule. Perform until you feel warmed-up",
        },
        {
          ...exerciseLibrary["open-books"],
          note: "Follow your hand with your eyes and head",
          reps: "5-10 each side",
          sets: "1-2",
        },
        {
          ...exerciseLibrary["hip-cars"],
          note: "Great for oppening up your hips. Perform until warmed-up",
          sets: "1-2",
          reps: "5 each side",
        },
        {
          ...exerciseLibrary["couch-stretch"],
          note: "2x each side hold for 30sec - 1min",
          sets: "1-2",
        },
        {
          ...exerciseLibrary["ninety-ninety-hip-mobility"],
          sets: "1-2",
          tempo: "hold for atleast 30sec - 1min each side",
        },
        {
          ...exerciseLibrary["worlds-greatest-stretch"],
          sets: "2",
          reps: "5 each side",
          tempo: "Nice and slow feel yourself throughout the movement",
        },
        {
          ...exerciseLibrary["tspine-extension-foam-rolling"],
          description:
            "T-spine extensions will allow your chest to open up more while padding. DO NOT roll your lower back. Focus ONLY on your upper to mid back",
          sets: "1 - 2",
          reps: "",
          tempo: "Slow",
        },
        {
          ...exerciseLibrary["cobra-pose"],
          reps: "1- 2",
          sets: "2",
          tempo: "Hold for 30 sec to 1 min",
        },
      ],
    },

    {
      program: "Strength",
      group: "Strength and Conditioning",
      exercises: [
        {
          ...exerciseLibrary["dive-bomber-push-up"],
          focus: [],
          reps: "5-12",
          sets: "3-5",
          note: "These are an advanced version of a push-up. Do any version of that challenges you.",
        },

        {
          ...exerciseLibrary["mountain-climbers"],
          note: "Perform these quickly for more of a cardio workout, and slow for a core workout.",
          focus: [],
          sets: null,
          reps: "",
          rest: "",
          progression: "",
        },
        { ...exerciseLibrary["plank-step-throughs"], note: "" },
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
      program: "Surf Specific",
      group: "Surf Specific",
      exercises: [
        {
          ...exerciseLibrary["dolphin-pushup"],
          reps: "5 each side",
          sets: "2-3",
        },
        {
          ...exerciseLibrary["land-surf-popup"],
          reps: "5 each side",
          sets: "2-3",
        },
        { ...exerciseLibrary["bosu-ball-popup"] },
      ],
    },
  ],
};
