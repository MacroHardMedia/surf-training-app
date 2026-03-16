export const getHomeSections = (theme) => [
  {
    id: "recommended",
    title: "Recommended",
    description: "Here you'll find programs tailored for you",
    themeKey: "background",
    logo: "Total Surf App",
    sections: [
      {
        id: "recommended-programs",
        title: "Recommended",
        description: "Here you'll find programs tailored for you",
        backgroundColor: theme.colors.background,
        logo: "Total Surf App",
        programs: [
          {
            id: "3-month-surf-plan",
            title: "3 Month Surf Fitness Plan",
            backgroundImage: require("../assets/IMG_1488.jpg"),
          },
          {
            id: "warmup-routine",
            title: "Surf Athlete Warm-up",
            backgroundImage: require("../assets/me-beach-yoga.png"),
            color: theme.colors.warmOrange,
          },
          {
            id: "beginner-fullbody",
            title: "Beginner Gym Workout",
            color: theme.colors.skyBlue,

            backgroundImage: require("../assets/IMG_1488.jpg"),
          },
          {
            id: "intermediate-fullbody",
            title: "Intermediate Fullbody Workout",
            color: theme.colors.skyBlue,

            backgroundImage: require("../assets/goofy-barrel.png"),
          },
          {
            id: "popup-routine",
            title: "Pop-up Refinement",
            backgroundImage: require("../assets/IMG_1488.jpg"),
            color: theme.colors.coral,
          },
        ],
      },
      {
        id: "surf-workouts",
        title: "Surf Workouts",
        description: "This is where you will find different exercises",
        backgroundColor: theme.colors.background,
        programs: [
          { title: "Total Core", color: theme.colors.lightGreen },
          { title: "Strength Training", color: theme.colors.lightGreen },
          { title: "Endurance", color: theme.colors.lightGreen },
          { title: "Daily Mobility", color: theme.colors.lightGreen },
          { title: "Breathwork", color: theme.colors.lightGreen },
        ],
      },
      {
        id: "surf-technique",
        title: "Surf Techniques",
        description: "Here you will improve and refine your technique",
        backgroundColor: theme.colors.background,
        programs: [
          { title: "Stance", color: theme.colors.gold },
          { title: "Frontside Turns", color: theme.colors.gold },
          { title: "Backside Turns", color: theme.colors.gold },
          { title: "Paddle Technique", color: theme.colors.gold },
        ],
      },
      {
        id: "community",
        title: "Community",
        description:
          "Link up with other people, and talk about what you've learned.",
        backgroundColor: theme.colors.background,
        programs: [
          { title: "General", color: theme.colors.purple },
          { title: "Technique Discussion", color: theme.colors.purple },
          { title: "Fitness Discussions", color: theme.colors.purple },
          { title: "Meet ups", color: theme.colors.purple },
          { title: "Find a Surf Buddy", color: theme.colors.purple },
        ],
      },
    ],
  },
];
