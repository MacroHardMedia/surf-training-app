export const surfMonth2 = {
  title: "Strength + Power",
  description:
    "Build strength in key movement patterns and introduce low-volume power work for explosive pop-ups, better drive, and stronger turns.",
  difficulty: "Beginner–Intermediate",
  duration: "4 weeks, 3 sessions per week",
  instructions: [
    "Strength is the priority this month: lift with control and intent.",
    "Power work is always done early in the workout while fresh.",
    "Use weight that will challenge you. Stop with 1 - 2 reps in reserve.",
    "Stop if form gets compromised to prevent injuries.",
    "Rest more between strength sets (2–3 minutes) to improve performance.",
  ],
  section: {
    split: "3-day split: Full body strength with power emphasis",
    weekExample: [
      "Mon — Workout A (Lower)",
      "Tue — Surf / Mobility / Light cardio",
      "Wed — Workout B (Upper strength)",
      "Thu — Surf / Mobility",
      "Fri — Workout C (Full Body)",
      "Sat — Surf / Active recovery",
      "Sun — Rest",
    ],
  },

  sections: [
    {
      group: "Warm-up",
      exercises: [
        {
          name: "Jump Rope",
          description:
            "Light, rhythmic jumps emphasizing quick ankles, upright posture, and relaxed shoulders.",
          sets: 2 - 3,
          reps: "30–60s",
          tempo: "Rhythmic",
          rest: "30s",
        },
        {
          name: "Shoulder CARs",
          description:
            "Perform slow, controlled circular movements through the largest pain-free range of motion. Keep ribs down and spine neutral while maintaining tension through the arm.",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30–45s",
        },
        {
          name: "Hip CARs",
          description:
            "Move the hip through full internal and external rotation while locking the pelvis and spine in place. Emphasize control through weak or restricted ranges.",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30–45s",
        },
        {
          name: "90/90 Hip Stretch",
          description:
            "Sit in the 90/90 position and rotate the hips side to side under control, keeping the chest tall and spine neutral.",
          sets: 2,
          reps: "6-10 transitions",
          tempo: "Controlled",
          rest: "20-30s",
        },
        {
          name: "World’s Greatest Stretch",
          description:
            "Step into a deep lunge, reach elbow toward the instep, then rotate the torso upward. Focus on smooth movement and controlled breathing.",
          sets: 2,
          reps: "4–6 each side",
          tempo: "Controlled",
          rest: "30s",
        },
      ],
    },
    // -------------------------
    // WORKOUT A
    // -------------------------

    {
      program: "A",
      group: "Day A: Lower Strength",
      exercises: [
        {
          name: "Goblet Squat",
          description:
            "Strength-focused squat. Stay tall, brace core, and hit full depth with control.",
          focus: ["legs", "hips", "core", "posture"],
          sets: 3,
          reps: "6-8",
          rest: "2 min",
          progression:
            "Progress load weekly while maintaining full range and perfect form.",
        },
        {
          name: "Romanian Deadlift",
          description:
            "Posterior chain strength. Hinge hips back with neutral spine and strong hamstring tension.",
          focus: ["glutes", "hamstrings", "posterior_chain"],
          sets: 3,
          reps: "6-8",
          rest: "2-3 min",
          progression:
            "Add load slowly week to week; avoid losing hamstring tension.",
        },
        {
          name: "Bulgarian Split Squat",
          description:
            "Unilateral lower-body strength and stability with elevated rear foot. Keep torso tall, knee tracking over toes, and control the descent.",
          focus: ["legs", "hips", "balance", "unilateral_strength"],
          sets: 2,
          reps: "6-10 each leg",
          rest: "90s",
          progression:
            "Add load or increase depth once balance and control are consistent.",
        },
        {
          name: "Pallof Press",
          description:
            "Anti-rotation core strength to build trunk control during turns and stance changes.",
          focus: ["anti_rotation", "core_stability"],
          sets: 3,
          reps: "10-12 each side",
          rest: "30-45s",
          progression:
            "Increase band tension or add longer pauses at extension.",
        },
      ],
    },

    // -------------------------
    // WORKOUT B
    // -------------------------
    {
      program: "B",
      group: "Day B: Upper Strength + Stability",
      exercises: [
        {
          name: "Overhead Press",
          description:
            "Build shoulder strength and trunk stability. Keep ribs down and brace core.",
          focus: ["shoulders", "upper_body", "core"],
          sets: 3,
          reps: "5-8",
          rest: "2 min",
          progression:
            "Increase load gradually while keeping posture stacked and controlled.",
        },
        {
          name: "Pull-up",
          description:
            "Build vertical pulling strength for paddling power. Full range, no swinging.",
          focus: ["upper_back", "lats", "scapular_control"],
          sets: 3,
          reps: "4-8",
          rest: "2-3 min",
          progression:
            "If you can’t hit reps cleanly: use band assist or slow negatives.",
        },
        {
          name: "Ring Press",
          description:
            "Unstable pressing exercise that builds shoulder stability, chest strength, and deep core control. Maintain tension through the rings and keep the body rigid throughout the movement.",
          focus: ["chest", "shoulders", "core_stability", "scapular_control"],
          sets: 3,
          reps: "6-10",
          rest: "75-90s",
          progression:
            "Progress by lowering the rings, slowing the tempo, or adding a pause at the bottom while maintaining full-body tension.",
        },
        {
          name: "Ring Row",
          description:
            "Upper-back endurance and scap control. Pull elbows toward hips and squeeze.",
          focus: ["upper_back", "lats", "scapular_control"],
          sets: 3,
          reps: "8-12",
          rest: "90s",
          progression: "Increase body angle or add pauses before adding reps.",
        },
        {
          name: "Dead Bug",
          description:
            "Core control + rectus abdominis + coordination. Keep low back controlled.",
          focus: ["rectus_abdominis", "anti_extension"],
          sets: 3,
          reps: "8-12 each side",
          rest: "30-45s",
          progression:
            "Extend legs lower or slow tempo once control is perfect.",
        },
      ],
    },

    // -------------------------
    // WORKOUT C
    // -------------------------
    {
      program: "C",
      group: "Day C: Full Body Strength + Rotation Power",
      exercises: [
        // {
        //   name: "Skater Hops (Low Intensity)",
        //   description:
        //     "Side-to-side elastic prep. Stick landings softly with control and balance.",
        //   sets: 3,
        //   reps: "6-8 each side",
        //   rest: "60-90s",
        // },
        {
          name: "Pop-Up Burpees",
          description:
            "From a prone position, perform a fast, controlled pop-up into a surf stance. Focus on smooth hand placement, quick feet, and balanced landing.",
          sets: 2,
          reps: "4-6 reps",
          tempo: "Explosive",
          rest: "60s",
        },
        {
          name: "Kettlebell Swing",
          description:
            "Explosive hip hinge movement to develop power, posterior-chain strength, and conditioning. Drive through the hips, keep a neutral spine, and let the bell float.",
          focus: [
            "glutes",
            "hamstrings",
            "posterior_chain",
            "power",
            "conditioning",
          ],
          sets: 3,
          reps: "12-20",
          rest: "60-90s",
          progression:
            "Increase load or reps only while maintaining crisp hip snap and neutral spine—avoid squatting the swing.",
        },
        {
          name: "Dive Bomber Push-Ups",
          description:
            "Dynamic push-up variation that builds shoulder strength, chest mobility, and core control through a flowing range of motion.",
          focus: ["shoulders", "chest", "core", "mobility"],
          sets: 3,
          reps: "6-12",
          rest: "60s",
          progression:
            "Slow the tempo or elevate feet once full range and control are consistent.",
        },
        {
          name: "Single-Arm Lat Pulldown",
          description:
            "Unilateral vertical pulling exercise to develop lat strength, shoulder control, and core stability for improved paddling mechanics.",
          focus: ["lats", "upper_back", "scapular_control", "core_stability"],
          sets: 3,
          reps: "8-12 each side",
          rest: "60-90s",
          progression:
            "Increase load gradually or slow the eccentric phase while keeping ribs down and shoulders packed.",
        },
        {
          name: "Standing Cable or Band Rotation",
          description:
            "Train controlled trunk rotation for surfing turns—rotate hard, control the return.",
          focus: ["rotation", "obliques"],
          sets: 4,
          reps: "8-10 each side",
          rest: "45-60s",
          progression:
            "Increase resistance slowly and keep hips + trunk stable.",
        },
        // {
        //   name: "Back Extensions",
        //   description:
        //     "Strengthen the posterior chain by extending through the hips while keeping the spine neutral. Focus on glute engagement rather than excessive lower-back arching.",
        //   focus: ["posterior_chain", "glutes", "hamstrings", "spinal_control"],
        //   sets: 3,
        //   reps: "10-15",
        //   rest: "60-90s",
        //   progression:
        //     "Add load or slow the tempo once full range and spinal control are consistent.",
        // },
      ],
    },
  ],
};
