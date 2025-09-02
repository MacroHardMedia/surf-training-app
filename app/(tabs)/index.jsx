import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import ProgramCard from "../../components/ProgramCard";

// Themed
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const Home = () => {
  // Dark mode
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  // Content Details

  const details = {
    sections: [
      {
        title: "Recommended",
        description: "Here you'll find our most recommended programs",
        backgroundColor: "#fff",
        logo: "Tropa Surf",
        programs: [
          { title: "Daily Movement Drill", color: "#87CEEB", size: 150 },
          { title: "3 Month Training Program", color: "#87CEEB", size: 150 },
          { title: "Endurance", color: "#87CEEB", size: 150 },
          { title: "Static Stretching", color: "#87CEEB", size: 150 },
        ],
      },
      {
        title: "Exercise Routines",
        description: "This is where you will find different exercises",
        backgroundColor: "#f0f0f0ff",
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
        backgroundColor: "#fff",
        programs: [
          { title: "Stance", color: "#FFD700" },
          { title: "Frontside Turns", color: "#FFD700" },
          { title: "Backside Turns", color: "#FFD700" },
          { title: "Paddle Technique", color: "#FFD700" },
        ],
      },
      {
        title: "Forum",
        description:
          "Link up with other people, and talk about what you've learned.",
        backgroundColor: "#f0f0f0ff",
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
      <Text style={styles.text}>{section.description}</Text>

      <Spacer />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
      >
        {section.programs.map((program, idx) => (
          <ProgramCard
            key={idx}
            title={program.title}
            color={program.color}
            size={program.size || 100}
          />
        ))}
      </ScrollView>

      <Spacer />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <ScrollView>{details.sections.map(renderSection)}</ScrollView>
      </ThemedView>
    </SafeAreaView>
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
    color: "#484848ff",
  },
  text: { color: "#818181ff", marginLeft: 25 },
});
