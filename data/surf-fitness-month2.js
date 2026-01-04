export const surfMonth2 = {
  title: "Month 2: Strength & Power",
  description:
    "Increase training intensity with compound movements and introduce power exercises for better pop-ups and wave performance.",
  difficulty: "Intermediate",
  duration: "4 weeks, 4-5 sessions per week",
  instructions: [
    "Focus on progressive overload - increase weight, reps, or sets each week",
    "Maintain proper form especially as loads increase",
    "Include 2 power/explosive training sessions per week",
    "Rest 48-72 hours between intense strength sessions",
  ],
  structure: {
    split: "Upper/Lower split with power days",
    weekExample: [
      "Mon — Upper Power (explosive push/pull)",
      "Tue — Lower Strength (squats, deadlifts)",
      "Wed — Active recovery or surf",
      "Thu — Upper Strength (heavy pressing/pulling)",
      "Fri — Lower Power (jumps, Olympic lifts)",
      "Sat — Conditioning or surf",
      "Sun — Rest",
    ],
  },
  sections: [
    {
      group: "Strength Training",
      exercises: [
        {
          name: "Barbell Back Squat",
          description: "Build leg and core strength for powerful pop-ups",
          sets: 4,
          reps: "6-8",
          rest: "2-3 min",
        },
        {
          name: "Deadlift",
          description: "Posterior chain strength for paddle power",
          sets: 4,
          reps: "5-6",
          rest: "3 min",
        },
      ],
    },
    {
      group: "Power Training",
      exercises: [
        {
          name: "Box Jumps",
          description: "Explosive leg power for quick pop-ups",
          sets: 4,
          reps: "6-8",
          rest: "2 min",
        },
        {
          name: "Medicine Ball Slams",
          description: "Core power and aggression training",
          sets: 4,
          reps: "8-10",
          rest: "90s",
        },
      ],
    },
  ],
};
