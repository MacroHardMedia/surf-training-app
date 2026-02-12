import { warmupRoutine } from "./warmupRoutine";

export const surfMonth1 = {
  title: "Foundation",
  description:
    "Build basic strength, mobility, and surf-specific movement patterns.",
  difficulty: "Beginner",
  duration: "Atleast 4 weeks, 3-4 sessions per week",
  instructions: [
    "Form over how much weight you can do",
    "Start with bodyweight movements and progress with resistance when the exercise is too easy.",
    "Always warm up to avoid injuries and to prime your body.",
    "Listen to your body and allow adequate recovery between sessions",
    "Aim for consistency.",
    "Challenge yourself.",
  ],
  section: {
    split: "Full body sessions with movement pattern focus",
    weekExample: [
      "Mon — Workout A",
      "Tue — Cardio, mobility and/or surf",
      "Wed — Workout B",
      "Thu — Mobility or cardio and/or surf",
      "Fri — Workout A",
      "Sat — Mobility or cardio and/or surf",
      "Sun — Rest",
    ],
  },
  sections: [
    // { group: "Warm-up", subsections: warmupRoutine.sections },
    {
      group: "Warm-up",
      exercises: [
        {
          name: "Jump Rope",
          description:
            "Light, rhythmic jumps emphasizing quick ankles, upright posture, and relaxed shoulders.",
          sets: 2,
          reps: "30–60s",
          tempo: "Rhythmic",
          rest: "30s",
        },
        {
          name: "Shoulder CARs",
          description:
            "Slow shoulder circles through pain-free range. Keep ribs down and spine neutral.",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30s",
        },
        {
          name: "Hip CARs",
          description:
            "Controlled hip circles focusing on rotation and pelvic control.",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30s",
        },
        {
          name: "World’s Greatest Stretch",
          description:
            "Deep lunge with elbow-to-instep and thoracic rotation. Smooth breathing.",
          sets: 2,
          reps: "4–6 each side",
          tempo: "Controlled",
          rest: "30s",
        },
        {
          name: "Beast Hold (Animal Flow)",
          description:
            "Hands under shoulders, knees under hips, hover knees 1–2 inches off floor. Brace core and pack shoulders.",
          sets: 2,
          reps: "20–30s hold",
          tempo: "Isometric",
          rest: "30s",
        },
        {
          name: "Crab Reach (Animal Flow)",
          description:
            "Open hips and shoulders. Drive through hand/foot and reach up and back.",
          sets: 2,
          reps: "4–6 each side",
          tempo: "Smooth",
          rest: "30s",
        },
        {
          name: "Pogo Hops",
          description:
            "Quick ankle rebounds—tall posture, minimal knee bend, quiet landings.",
          sets: 2,
          reps: "15–25 reps",
          tempo: "Explosive",
          rest: "45s",
        },
      ],
    },

    {
      program: "A",
      group: "Day A: Movement Foundations",
      exercises: [
        {
          name: "Box Squats",
          description:
            "Build lower-body strength and reinforce proper squat depth by sitting back onto a box with control, then driving up explosively. Keep knees tracking over toes and maintain a braced core.",
          focus: ["legs", "hips", "posterior_chain", "posture"],
          sets: 3,
          reps: "8-12",
          rest: "60s",
          progression:
            "Progress by lowering box height or adding load once control and depth are consistent.",
        },
        {
          name: "Push-Up",
          description:
            "Develop upper-body pushing strength and trunk stability to support strong pop-ups.",
          focus: ["chest", "shoulders", "core", "trunk_stability"],
          sets: 3,
          reps: "8-12",
          rest: "60s",
          progression:
            "Progress from incline to different pushup variations (such as dive bomber pushups, or diamond pushups) before adding tempo or repetitions.",
        },
        {
          name: "Dumbbell Row",
          description:
            "Build upper-back and lat strength to support paddling endurance and shoulder stability. Keep spine neutral and pull elbow toward the hip.",
          focus: ["upper_back", "lats", "scapular_control"],
          sets: 3,
          reps: "8-12 each side",
          rest: "90s",
          progression:
            "Increase load gradually or add a brief pause at the top while maintaining strict form.",
        },
        {
          name: "Kettlebell Deadlift",
          description:
            "Activate glutes and strengthen the posterior chain while reinforcing proper hip hinge mechanics.",
          focus: ["glutes", "hamstrings", "posterior_chain", "spine_control"],
          sets: 3,
          reps: "12-15",
          rest: "45s",
          progression:
            "Progress to Romanian deadlifts once spinal control is consistent.",
        },
      ],
    },
    {
      program: "B",
      group: "Day B: Movement Foundations",
      exercises: [
        {
          name: "Split Squat",
          description:
            "Build unilateral leg strength, hip stability, and balance for improved board control.",
          focus: ["legs", "hips", "balance", "unilateral_strength"],
          sets: 3,
          reps: "8-12 each leg",
          rest: "60s",
          progression:
            "Progress to goblet split squats or Bulgarian split squats.",
        },
        {
          name: "Overhead Press",
          description:
            "Build vertical pushing strength and shoulder stability while maintaining a braced core and stacked posture.",
          focus: ["shoulders", "upper_body", "core", "trunk_stability"],
          sets: 3,
          reps: "6-10",
          rest: "75-90s",
          progression:
            "Start with dumbbells for control, then progress load only while maintaining rib-down, neutral posture.",
        },
        {
          name: "Pull-up",
          description:
            "Improve unilateral pulling strength and shoulder stability to balance paddling mechanics.",
          focus: ["upper_back", "lats", "scapular_stability"],
          sets: 3,
          reps: "6-8 each side",
          rest: "90s",
          progression:
            "Slow the eccentric or add a pause before increasing reps.",
        },
        {
          name: "Single-Leg Romanian Deadlift",
          description:
            "Reinforce hip dominance, balance, and posterior-chain control through single-leg loading.",
          focus: ["glutes", "hamstrings", "balance", "posterior_chain"],
          sets: 3,
          reps: "8-12",
          rest: "60s",
          progression:
            "Add load only once balance and spinal control are consistent.",
        },
      ],
    },
    {
      group: "Core & Stability",
      exercises: [
        {
          name: "Dead Bug",
          description:
            "Train rectus abdominis control and anti-extension while coordinating opposite limbs.",
          focus: ["rectus_abdominis", "anti_extension", "coordination"],
          sets: 3,
          reps: "8-12 each side",
          rest: "30s",
          progression:
            "Slow the tempo or extend the legs lower once spinal control is maintained.",
        },
        {
          name: "Side Plank",
          description:
            "Develop isometric lateral core strength and quadratus lumborum (QL) endurance.",
          focus: ["QL", "anti_lateral_flexion", "isometric"],
          sets: 3,
          reps: "20-40s each side",
          rest: "30s",
          progression:
            "Progress by lifting the top leg or extending hold duration.",
        },
        {
          name: "Pallof Press",
          description:
            "Build anti-rotation strength to improve trunk stability during dynamic movements.",
          focus: ["anti_rotation", "core_stability"],
          sets: 3,
          reps: "10-12 each side",
          rest: "30s",
          progression:
            "Increase band tension or add a pause at full extension.",
        },
        {
          name: "Standing Cable or Band Rotation",
          description:
            "Develop controlled trunk rotation and transverse plane strength for surfing movements.",
          focus: ["rotation", "obliques", "power_control"],
          sets: 3,
          reps: "8-12 each side",
          rest: "30s",
          progression: "Slow the eccentric phase before increasing resistance.",
        },
        {
          name: "Front Plank",
          description:
            "Reinforce isometric core endurance and anti-extension strength.",
          focus: ["rectus_abdominis", "isometric", "anti_extension"],
          sets: 2,
          reps: "30-60s",
          rest: "45s",
          progression:
            "Add shoulder taps or increase hold time once alignment is consistent.",
        },
      ],
    },
  ],
};
