import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const MonthCard = ({ month, title, description, difficulty, onPress }) => (
  <TouchableOpacity style={styles.monthCard} onPress={onPress}>
    <View style={styles.monthHeader}>
      <Text style={styles.monthNumber}>Month {month}</Text>
      <Text style={styles.difficulty}>{difficulty}</Text>
    </View>
    <Text style={styles.monthTitle}>{title}</Text>
    <Text style={styles.monthDescription}>{description}</Text>
    <View style={styles.cardFooter}>
      <Ionicons name="arrow-forward" size={20} color="#007AFF" />
    </View>
  </TouchableOpacity>
);

export default function SurfFitness3Month() {
  const router = useRouter();

  const months = [
    {
      month: 1,
      title: "Foundation Building",
      description:
        "Build basic strength, mobility, and surf-specific movement patterns. Focus on proper form and consistency.",
      difficulty: "Beginner",
      id: "surf-month-1",
    },
    {
      month: 2,
      title: "Strength & Power",
      description:
        "Increase training intensity with compound movements and introduce power exercises for better pop-ups.",
      difficulty: "Intermediate",
      id: "surf-month-2",
    },
    {
      month: 3,
      title: "Performance & Endurance",
      description:
        "Advanced training focusing on surf-specific endurance, rotational power, and competition prep.",
      difficulty: "Advanced",
      id: "surf-month-3",
    },
  ];

  const handleMonthPress = (month) => {
    router.push(`/programs/${encodeURIComponent(month.id)}`);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>3-Month Surf Fitness</Text>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.programInfo}>
            <Text style={styles.programDescription}>
              A comprehensive 3-month progressive training program designed
              specifically for surfers. Each month builds upon the previous,
              taking you from foundational fitness to peak surf performance.
            </Text>

            <View style={styles.overviewSection}>
              <Text style={styles.overviewTitle}>Program Overview:</Text>
              <Text style={styles.overviewText}>
                • Month 1: Master the basics with bodyweight and light
                resistance training{"\n"}• Month 2: Build strength and explosive
                power for better performance{"\n"}• Month 3: Advanced
                conditioning and surf-specific athletic development
              </Text>
            </View>
          </View>

          <View style={styles.monthsContainer}>
            {months.map((month, index) => (
              <MonthCard
                key={index}
                month={month.month}
                title={month.title}
                description={month.description}
                difficulty={month.difficulty}
                onPress={() => handleMonthPress(month)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: "bold",
    flex: 1,
    color: "#2a2a2aff",
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
  programInfo: {
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  programDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
  },
  overviewSection: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 8,
  },
  overviewText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
  },
  monthsContainer: {
    padding: 16,
  },
  monthCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  monthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  monthNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
  },
  difficulty: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#007AFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  monthTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  monthDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
    marginBottom: 12,
  },
  cardFooter: {
    alignItems: "flex-end",
  },
});
