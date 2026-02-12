import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgramCard from "../../components/ProgramCard";
import { useTheme } from "../../contexts/ThemeContext";

// Themed
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const Home = () => {
  // Use global theme
  const { theme } = useTheme();

  // Content Details

  const details = {
    sections: [
      {
        title: "Recommended",
        description: "Here you'll find programs tailored for you",
        backgroundColor: theme.background,
        logo: "Tropa Surf",
        programs: [
          {
            id: "3-month-surf-plan",
            title: "3 Month Surf Fitness Plan",
            backgroundImage: require("../../assets/IMG_1488.jpg"),
          },
          {
            id: "warmup-routine",
            title: "Surf Athlete Warm-up",
            backgroundImage: require("../../assets/me-beach-yoga.png"),
            color: "#FFB347",
          },
          // {
          //   id: "daily-mobility-drill",
          //   title: "Mobility Drill",
          //   backgroundImage: require("../../assets/me-beach-yoga.png"),
          //   color: "#87CEEB",
          // },
          {
            id: "beginner-fullbody",
            title: "Beginner Fullbody Workout",
            color: "#87CEEB",

            backgroundImage: require("../../assets/IMG_1488.jpg"),
          },
          {
            id: "intermediate-fullbody",
            title: "Intermediate Fullbody Workout",
            color: "#87CEEB",

            backgroundImage: require("../../assets/goofy-barrel.png"),
          },
          {
            id: "popup-routine",
            title: "Pop-up Refinement",
            backgroundImage: require("../../assets/IMG_1488.jpg"),
            color: "#FF6B6B",
          },
        ],
      },
      {
        title: "Exercise Routines",
        description: "This is where you will find different exercises",
        backgroundColor: theme.cardBackground,
        programs: [
          { title: "Total Core", color: "#90EE90" },
          { title: "Strength Training", color: "#90EE90" },
          { title: "Endurance", color: "#90EE90" },
          { title: "Daily Mobility", color: "#90EE90" },
          { title: "Breathwork", color: "#90EE90" },
        ],
      },
      {
        title: "Surf Technique",
        description: "Here you will find lessons on techniques",
        backgroundColor: theme.background,
        programs: [
          { title: "Stance", color: "#FFD700" },
          { title: "Frontside Turns", color: "#FFD700" },
          { title: "Backside Turns", color: "#FFD700" },
          { title: "Paddle Technique", color: "#FFD700" },
        ],
      },
      {
        title: "Community",
        description:
          "Link up with other people, and talk about what you've learned.",
        backgroundColor: theme.cardBackground,
        programs: [
          { title: "General", color: "#a12fffff" },
          { title: "Technique Discussion", color: "#a12fffff" },
          { title: "Fitness Discussions", color: "#a12fffff" },
          { title: "Meet ups", color: "#a12fffff" },
          { title: "Find a Surf Buddy", color: "#a12fffff" },
        ],
      },
    ],
  };

  // Helper Function
  const renderSection = (section, index) => (
    <View
      key={index}
      style={[styles.content, { backgroundColor: section.backgroundColor }]}
    >
      <ThemedText style={styles.title} title={true}>
        {section.title}
      </ThemedText>
      <Text style={[styles.text, { color: theme.textSecondary }]}>
        {section.description}
      </Text>

      <Spacer />
      <Spacer />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
      >
        {section.programs.map((program, idx) => (
          <ProgramCard
            key={idx}
            id={program.id}
            title={program.title}
            color={program.color}
            size={styles.cardSize.width}
            backgroundImage={program.backgroundImage}
          />
        ))}
      </ScrollView>

      <Spacer />
    </View>
  );

  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView>{details.sections.map(renderSection)}</ScrollView>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: { paddingTop: 10 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 30,
    marginLeft: 25,
    paddingBottom: 5,
  },
  text: { marginLeft: 25 },
  cardSize: {
    width: 160,
    height: 160,
  },
});
