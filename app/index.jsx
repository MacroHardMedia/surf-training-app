import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import ProgramCard from "../components/ProgramCard";

// Themed
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <ScrollView>
          <View style={[styles.content, { height: "auto" }]}>
            <ThemedText style={[styles.title]} title={true}>
              Quick Links
            </ThemedText>
            <Text style={styles.text}>
              Here you'll find our most recommended programs
            </Text>

            <Spacer />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
            >
              <ProgramCard title="Daily Mobility" color="#87CEEB" size={150} />
              <ProgramCard
                title="Beginner Strength Training"
                color="#87CEEB"
                size={150}
              />
              <ProgramCard title="Endurance" color="#87CEEB" size={150} />
              <ProgramCard
                title="Static Stretching"
                color="#87CEEB"
                size={150}
              />
            </ScrollView>

            <Spacer />
          </View>

          <View style={[styles.content, { backgroundColor: "#f0f0f0ff" }]}>
            <ThemedText style={[styles.title]} title={true}>
              Exercise Routines
            </ThemedText>
            <Text style={styles.text}>
              This is where you will find different exercises
            </Text>

            <Spacer />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
            >
              <ProgramCard title="Total Core" color="#90EE90" />
              <ProgramCard title="Strength Training" color="#90EE90" />
              <ProgramCard title="Endurance" color="#90EE90" />
              <ProgramCard title="Daily Mobility" color="#90EE90" />
              <ProgramCard title="Breathwork" color="#90EE90" />
            </ScrollView>

            <Spacer />
          </View>

          <View style={[styles.content]}>
            <ThemedText style={[styles.title, { paddingTop: 30 }]} title={true}>
              Surf Technique
            </ThemedText>
            <Text style={styles.text}>
              Here you will find lessons on techniques
            </Text>

            <Spacer />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
            >
              <ProgramCard title="Stance" color="#FFD700" />
              <ProgramCard title="Frontside Turns" color="#FFD700" />
              <ProgramCard title="Backside Turns" color="#FFD700" />
              <ProgramCard title="Pig Dogg" color="#FFD700" />
            </ScrollView>
            <Spacer />
          </View>

          <View style={[styles.content, { backgroundColor: "#f0f0f0ff" }]}>
            <ThemedText style={[styles.title, { paddingTop: 30 }]} title={true}>
              Community
            </ThemedText>
            <Text style={styles.text}>
              Link up with other people, and talk about what you've learned.
            </Text>

            <Spacer />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 20, paddingRight: 10 }}
            >
              <ProgramCard title="General" color="#a12fffff" />
              <ProgramCard title="Technique Discussion" color="#a12fffff" />
              <ProgramCard title="Fitness Discussions" color="#a12fffff" />
              <ProgramCard title="Meet ups" color="#a12fffff" />
            </ScrollView>
            <Spacer />
          </View>
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: { paddingtop: 10 },
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
