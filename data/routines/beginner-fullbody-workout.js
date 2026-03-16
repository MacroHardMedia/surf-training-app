export const beginnerFullBodyWorkout = {
  id: "beginner-surf-workout",
  title: "Beginner Surf Workout",
  description:
    "If you're new to workout start with this block. This block will teach you basic compound lifts.",
  instructions: [
    "Move controlled, prioritize full range of motion and technique.",
    "Access to barbells, dumbbells and bands recommended.",
    "Mobility work everyday.",
    "Consistency is key 🔑",
  ],
  structure: {
    split:
      "Train 3 to 4 sessions per week. Customize your workouts days to fit your weekly schedule.",
    weekExample: [
      "Mon — Push/Core",
      "Tue — Active recovery / walk / surf",
      "Wed — Pull/Core",
      "Thu — Active recovery / walk / surf",
      "Fri — Legs/Core",
      "Sat — Active recovery / walk / surf",
      "Sun — Rest",
    ],
    sessionTime: "20–45 minutes depending on rest and intensity",
  },
  sections: [
    {
      group: "Warm‑Up",
      exercises: [
        {
          name: "Dynamic Warm‑Up",
          description:
            "3–5 minutes light cardio (march, jog, jump jacks) to raise body temp.",
          sets: 1,
          reps: "3–5 min",
          tips: "You'll know you're warmed up when you've started sweating.",
        },
        {
          name: "Mobility Circuit",
          description:
            "Arm circles, leg swings (front/back + side), hip circles, ankle rolls; 30–45s each.",
          sets: 1,
          reps: "30–45s each",
          rest: "none",
          tips: "Develop your kinesthetic awareness, and feel how your body moves through space.",
        },
        {
          name: "Movement Prep",
          description:
            "2 light sets of the first compound movement (bodyweight or empty bar) to groove pattern.",
          sets: 2,
          reps: "6–8",
          rest: "60s",
          tips: "Do this before every compound exercise.",
        },
      ],
    },
    {
      group: "Workout A",
      exercises: [
        {
          name: "Scapular Push‑Up (knee or incline if needed)",
          description:
            "The scapular push-up is a bodyweight exercise that strengthens the serratus anterior, improves shoulder stability, and teaches proper control of the shoulder blades. Unlike a traditional push-up, your arms stay straight while the movement comes entirely from the shoulder blades (scapulae).",
          steps: [
            "Start in a high plank position: hands directly under your shoulders, body in a straight line from head to heels, core engaged.",
            "Keep your elbows locked and arms straight throughout the exercise.",
            "Retract your scapulae by squeezing your shoulder blades together, allowing your chest to lower slightly toward the floor.",
            "Protract your scapulae by pushing the floor away and spreading your shoulder blades apart, rounding your upper back slightly.",
            "Move slowly and with control, focusing on the smooth glide of the shoulder blades.",
          ],
          sets: 3,
          reps: "6–12",
          rest: "30–60s",
          tips: "Get in a strong position by rolling your shoulders back, and keep your elbows close to your ribcage.",
        },
        {
          name: "Push‑Up (knee or incline if needed)",
          description:
            "Chest press movement. Keep plank line, descend under control and press up.",
          sets: 3,
          reps: "6–12",
          rest: "30–60s",
          tips: "Get in a strong position by rolling your shoulders back, and keep your elbows close to your ribcage.",
        },
        {
          name: "Overhead Press (dumbbell or band)",
          description:
            "Vertical push. Press overhead with stable core and neutral spine.",
          sets: 3,
          reps: "6–10",
          rest: "60–90s",
        },
        {
          name: "Assisted/Bodyweight Triceps Dip or Bench Dip",
          description: "Accessory for triceps strength and lockout.",
          sets: 2,
          reps: "8–15",
          rest: "45–60s",
        },
        {
          name: "Lateral Raise (optional)",
          description: "Shoulder health and endurance; strict tempo.",
          sets: 2,
          reps: "12–15",
          rest: "30–45s",
        },
      ],
    },
    {
      group: "Workout B",
      exercises: [
        {
          name: "Romanian Deadlift (dumbbell) or Hip Hinge",
          description:
            "Posterior chain: hinge from hips, maintain neutral spine.",
          sets: 3,
          reps: "8–12",
          rest: "60–90s",
        },
        {
          name: "Inverted Row or Band Row",
          description:
            "Horizontal pull. Keep body straight and pull chest to the bar/handle.",
          sets: 3,
          reps: "6–12",
          rest: "60–90s",
        },
        {
          name: "Lat Pull / Assisted Pull‑Up or Band Lat Pull",
          description:
            "Vertical pull. Use assistance or bands to maintain full ROM.",
          sets: 3,
          reps: "6–10",
          rest: "60–90s",
        },
        {
          name: "Face Pulls or Band Pull‑Apart",
          description:
            "Scapular/rotator cuff health; pull to eye level with external rotation.",
          sets: 2,
          reps: "12–20",
          rest: "30–45s",
        },
      ],
    },
    {
      group: "Workout C",
      exercises: [
        {
          name: "Squat (bodyweight / goblet)",
          description:
            "Hip/quad dominant. Sit back, knees track toes, chest up.",
          sets: 3,
          reps: "8–15",
          rest: "60–90s",
        },
        {
          name: "Romanian Deadlift (dumbbell) or Hip Hinge",
          description:
            "Posterior chain: hinge from hips, maintain neutral spine.",
          sets: 3,
          reps: "8–12",
          rest: "60–90s",
        },
        {
          name: "Split Squat / Reverse Lunge",
          description:
            "Unilateral leg strength and balance; step back for less knee stress.",
          sets: 2,
          reps: "8–12 per side",
          rest: "45–60s",
        },
        {
          name: "Calf Raises",
          description: "Single or double‑leg raises for ankle strength.",
          sets: 2,
          reps: "12–20",
          rest: "30–45s",
        },
      ],
    },
    {
      group: "Core",
      exercises: [
        {
          name: "Plank",
          description: "Tall neutral spine, brace core, avoid sagging.",
          sets: 3,
          reps: "20–60s",
          rest: "30–45s",
        },
        {
          name: "Dead Bug",
          description:
            "Anti‑extension core pattern; move slowly and keep low back down.",
          sets: 3,
          reps: "8–12 per side",
          rest: "30–45s",
        },
        {
          name: "Russian Twist or Pallof Press",
          description:
            "Rotational/core anti‑rotation work depending on equipment.",
          sets: 2,
          reps: "12–20 (twists) or 8–10 (Pallof)",
          rest: "30–45s",
        },
      ],
    },
  ],
  group: {
    principle:
      "Progress load, reps, or sets slowly. First improve technique, then increase volume or resistance.",
    sampleProgression: [
      "Week 1–2: focus on form, lower reps (6–10) and unweighted variations.",
      "Week 3–4: increase to target reps, add weight or reduce assistance.",
      "Every 2–3 weeks: add 1 set or 2–3 reps, or increase load by ~5–10%.",
    ],
  },
  implementation: {
    quickPlan:
      "Pick a split (4‑day) or rotate P/P/L across 3 days. Do warmup, 2–3 compound moves, 1–2 accessories, core. Finish with 3–5 min cool down.",
    progressionCheck:
      "If you can do top of rep range for all sets with good form on two workouts in a row, increase load.",
    recovery: "Prioritize sleep, protein and light mobility on off days.",
  },
  safety: {
    notes: [
      "Stop if sharp pain. Discomfort/tightness is normal; sharp/neurological pain is not.",
      "Start with bodyweight / light bands to learn movement patterns.",
      "Control tempo; avoid bouncing in stretches or rapid jerky lifts.",
    ],
    consult:
      "If unsure about form or preexisting conditions, consult a qualified coach or clinician.",
  },
  tips: [
    "Keep workouts consistent: 3–4 weeks of adherence before making big changes.",
    "Record sets/reps to track progress.",
    "Prioritize compound lifts early in the session when fresh.",
  ],
};
