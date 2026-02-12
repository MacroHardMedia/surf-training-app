export const intermediateFullBodyWorkout = {
  title: "Intermediate Surf Foundational",
  description:
    "For surfers who have a consistent foundation and want more strength, power, and work capacity. This plan builds on fundamentals with heavier loads, targeted unilateral work, and sport‑specific core and conditioning. Train 3–5×/week depending on recovery and goals.",
  difficulty: "Intermediate",
  instructions: [
    "Prioritize technique and full range of motion. Use progressive overload (load, reps, sets, density).",
    "Include tempo control (eccentric emphasis 2–4s) on at least one compound per session.",
    "Use RPE 7–9 for main sets; leave 1–2 reps in reserve on most sets.",
    "Rest 60–120s for compound lifts, 30–60s for accessories, 90–150s for heavy deadlifts/squats.",
  ],
  structure: {
    split:
      "Options: 3‑day full‑body (M/W/F) or 4‑day upper/lower split (push/pull/legs/accessory). Include 1–2 short conditioning sessions or surf days.",
    weekExample: [
      "Mon — Full Body (heavy emphasis)",
      "Tue — Conditioning / mobility",
      "Wed — Full Body (speed / accessory focus)",
      "Thu — Rest or light surf",
      "Fri — Full Body (single‑leg & core focus)",
      "Sat — Active recovery / surf",
      "Sun — Rest",
    ],
    sessionTime: "30–60 minutes depending on volume and conditioning work",
  },
  sections: [
    {
      group: "Warm‑Up & Movement Prep",
      exercises: [
        {
          name: "General Cardio + Mobility",
          description:
            "5–8 min easy row/jump rope + dynamic mobility (hips, thoracic, shoulders).",
          sets: 1,
          reps: "5–8 min",
          tips: "Raise temperature and work through movement patterns you'll load.",
        },
        {
          name: "Movement Prep Sets",
          description:
            "2–3 ramp sets of upcoming compound(s) using lighter loads, add movement‑specific activation (band pull‑aparts, glute bridges).",
          sets: 2,
          reps: "6–8",
          rest: "60s",
        },
      ],
    },
    {
      group: "Main Strength (choose 2–3 per session)",
      exercises: [
        {
          name: "Goblet / Front Squat",
          description:
            "Quad & core demand. Use 3–5 sets of moderate reps. Emphasize depth and bracing.",
          sets: 3,
          reps: "5–8",
          rest: "90–120s",
          tips: "Tempo 2s down if pushing hypertrophy; keep chest upright.",
        },
        {
          name: "Romanian Deadlift / Trap Bar Deadlift",
          description:
            "Posterior chain strength. Hinge from hips, maintain neutral spine.",
          sets: 3,
          reps: "4–8",
          rest: "90–150s",
        },
        {
          name: "Weighted Push‑Up / Dumbbell Bench",
          description:
            "Horizontal press with progression—belt, vest, or DBs for load.",
          sets: 3,
          reps: "6–10",
          rest: "60–90s",
        },
        {
          name: "Pull‑Up / Weighted Chin / Assisted Variation",
          description:
            "Vertical pull for back and pulling strength. Prioritize full ROM and scapular control.",
          sets: 3,
          reps: "4–8 (or 6–12 assisted)",
          rest: "60–120s",
        },
        {
          name: "Single‑Leg Bulgarian Split Squat",
          description:
            "Unilateral strength, balance and hip stability; keep torso upright.",
          sets: 3,
          reps: "6–10 per leg",
          rest: "60–90s",
        },
      ],
    },
    {
      group: "Power & Speed (2×/week)",
      exercises: [
        {
          name: "Kettlebell Swings or Jump Squats",
          description:
            "Develop explosive hip extension relevant to pop‑ups and paddling power.",
          sets: 3,
          reps: "8–12",
          rest: "60s",
        },
        {
          name: "Medicine Ball Rotational Throw (or standing cable chop)",
          description: "Rotational power for quick surf maneuvers and pop‑ups.",
          sets: 3,
          reps: "6–8 each side",
          rest: "60s",
        },
      ],
    },
    {
      group: "Accessory & Hypertrophy",
      exercises: [
        {
          name: "Single‑Arm Dumbbell Row",
          description: "Mid‑back thickness and anti‑rotation control.",
          sets: 3,
          reps: "8–12",
          rest: "45–60s",
        },
        {
          name: "Face Pulls / Band Pull‑Apart",
          description: "Scapular health and shoulder integrity.",
          sets: 3,
          reps: "12–20",
          rest: "30–45s",
        },
        {
          name: "Overhead Triceps / Skull Crushers",
          description: "Lockout strength for pressing and paddling stability.",
          sets: 2,
          reps: "8–12",
          rest: "30–45s",
        },
        {
          name: "Lateral Raises / Y‑T Raises",
          description: "Shoulder endurance and posture; light and controlled.",
          sets: 2,
          reps: "12–15",
          rest: "30–45s",
        },
      ],
    },
    {
      group: "Core & Anti‑Rotation",
      exercises: [
        {
          name: "Weighted Plank / RKC Plank",
          description: "High‑tension core bracing under load.",
          sets: 3,
          reps: "30–90s",
          rest: "45s",
        },
        {
          name: "Pallof Press (band/cable)",
          description: "Anti‑rotation stability; single‑arm holds and presses.",
          sets: 3,
          reps: "8–12 each side",
          rest: "30–45s",
        },
        {
          name: "Hanging Knee Raise / Toes‑to‑Bar (progression)",
          description: "Hip flexor control and anterior core strength.",
          sets: 3,
          reps: "8–12",
          rest: "45s",
        },
        {
          name: "Loaded Carry (Farmer's or Suitcase Carry)",
          description:
            "Grip, core, and shoulder stability under load; 30–60s walks.",
          sets: 3,
          reps: "30–60s",
          rest: "60s",
        },
      ],
    },
    {
      group: "Conditioning & Cool‑Down",
      exercises: [
        {
          name: "Short MetCon (optional)",
          description:
            "EMOM/AMRAP 8–12 min: 4–6 kettlebell swings + 6–10 push‑ups + 200m row—adjust intensity to maintain form.",
          sets: 1,
          reps: "8–12 min",
        },
        {
          name: "Mobility / Soft Tissue",
          description:
            "5–8 min focused mobility (thoracic rotations, hip flexor stretch, pec release).",
          sets: 1,
          reps: "5–8 min",
          tips: "Finish sessions with breathing and mobility to aid recovery.",
        },
      ],
    },
  ],
  group: {
    principle:
      "Progress through load, density, and complexity. Add unilateral work and power training to carry over to sport demands.",
    sampleProgression: [
      "Week 1–2: solidify technique, use moderate loads RPE 7 across main lifts.",
      "Week 3–4: increase sets or weight (5–10%) and introduce one heavy top set RPE 8–9.",
      "Week 5–6: add power session (explosiveness) and increase conditioning density.",
    ],
  },
  implementation: {
    quickPlan:
      "Warm up, 2 heavy compounds, 1–2 power/accessory moves, core, optional short conditioning. Rotate emphasis across the week (heavy / speed / unilateral).",
    progressionCheck:
      "If you can complete prescribed sets/reps at target RPE for two consecutive sessions, increase load or density.",
    recovery:
      "Sleep 7–9h, prioritize protein (0.8–1.2 g/kg/day for active trainees), and include active recovery/mobility on off days.",
  },
  safety: {
    notes: [
      "Increase load gradually and keep technique as the gating factor.",
      "Address imbalances with unilateral work to reduce injury risk.",
      "Stop with sharp/neurological pain; get professional assessment if needed.",
    ],
    consult:
      "If in doubt about program suitability or previous injuries, consult a qualified coach or clinician.",
  },
  tips: [
    "Track load, sets, reps and RPE to make informed progressions.",
    "Prioritize compound lifts at the start of the session when fresh.",
    "Match conditioning intensity to recovery—avoid high‑intensity conditioning on max strength days.",
  ],
};
