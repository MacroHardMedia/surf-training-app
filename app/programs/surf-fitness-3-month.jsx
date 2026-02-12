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
import { useTheme } from "../../contexts/ThemeContext";
import { surfMonth1 } from "../../data/routines/surf-fitness-month1";
import { surfMonth2 } from "../../data/routines/surf-fitness-month2";
import { surfMonth3 } from "../../data/routines/surf-fitness-month3";

const MonthCard = ({
  month,
  title,
  description,
  difficulty,
  onPress,
  theme,
}) => (
  <TouchableOpacity style={[styles(theme).monthCard]} onPress={onPress}>
    <View style={styles(theme).monthHeader}>
      <Text style={styles(theme).monthNumber}>Month {month}</Text>
      <Text style={styles(theme).difficulty}>{difficulty}</Text>
    </View>
    <Text style={styles(theme).monthTitle}>{title}</Text>
    <Text style={styles(theme).monthDescription}>{description}</Text>
    <View style={styles(theme).cardFooter}>
      <Ionicons name="arrow-forward" size={20} color={theme.primary} />
    </View>
  </TouchableOpacity>
);

export default function SurfFitness3Month() {
  const router = useRouter();
  const { theme } = useTheme();

  const months = [
    {
      month: 1,
      title: surfMonth1.title,
      description: surfMonth1.description,
      difficulty: surfMonth1.difficulty,
      id: "surf-month-1",
    },
    {
      month: 2,
      title: surfMonth2.title,
      description: surfMonth2.description,
      difficulty: surfMonth2.difficulty,
      id: "surf-month-2",
    },
    {
      month: 3,
      title: surfMonth3.title,
      description: surfMonth3.description,
      difficulty: surfMonth3.difficulty,
      id: "surf-month-3",
    },
  ];

  const handleMonthPress = (month) => {
    router.push(`/programs/${encodeURIComponent(month.id)}`);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles(theme).container} edges={["top", "bottom"]}>
        <View style={styles(theme).header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles(theme).backButton}
          >
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={styles(theme).headerTitle}>3-Month Surf Fitness</Text>
        </View>

        <ScrollView style={styles(theme).content}>
          <View style={styles(theme).programInfo}>
            <Text style={styles(theme).programDescription}>
              A comprehensive 3-month progressive training program designed
              specifically for surfers. Each month builds upon the previous.
              **To complete this routine you will need access to a full gym**.
            </Text>

            <View style={styles(theme).overviewSection}>
              <Text style={styles(theme).overviewTitle}>Program Overview:</Text>
              <Text style={styles(theme).overviewText}>
                • Month 1: Master the basics with bodyweight and light
                resistance training{"\n"}• Month 2: Build strength and explosive
                power for better performance{"\n"}• Month 3: Advanced
                conditioning and surf-specific athletic development
              </Text>
            </View>
          </View>

          <View style={styles(theme).monthsContainer}>
            {months.map((month, index) => (
              <MonthCard
                key={index}
                month={month.month}
                title={month.title}
                description={month.description}
                difficulty={month.difficulty}
                onPress={() => handleMonthPress(month)}
                theme={theme}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = (theme) =>
  StyleSheet.create({
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
      color: theme.textSecondary,
      marginBottom: 12,
    },
    cardFooter: {
      alignItems: "flex-end",
    },
  });
