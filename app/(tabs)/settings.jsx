import { View, Text, StyleSheet, Switch, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";

const Settings = () => {
  const { theme, isDarkMode, setIsDarkMode } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>Settings</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Customize your experience
          </Text>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.textSecondary }]}>
            APPEARANCE
          </Text>

          <View
            style={[
              styles.settingCard,
              {
                backgroundColor: theme.cardBackground,
                borderColor: theme.border,
              },
            ]}
          >
            <View style={styles.settingRow}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: isDarkMode ? "#2c2c2e" : "#F2F2F7" },
                ]}
              >
                <Ionicons
                  name={isDarkMode ? "moon" : "sunny"}
                  size={22}
                  color={theme.primary}
                />
              </View>
              <View style={styles.leftContent}>
                <Text style={[styles.settingLabel, { color: theme.text }]}>
                  Dark Mode
                </Text>
                <Text
                  style={[
                    styles.settingDescription,
                    { color: theme.textSecondary },
                  ]}
                >
                  {isDarkMode ? "Dark theme enabled" : "Light theme enabled"}
                </Text>
              </View>
              <Switch
                value={isDarkMode}
                onValueChange={setIsDarkMode}
                trackColor={{ false: "#D1D1D6", true: theme.success }}
                thumbColor="#fff"
                ios_backgroundColor="#D1D1D6"
              />
            </View>
          </View>
        </View>

        {/* Footer */}
        <Text style={[styles.footer, { color: theme.textTertiary }]}>
          Made with 🤙 for surfers
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
  title: { fontSize: 34, fontWeight: "bold", marginBottom: 4 },
  subtitle: { fontSize: 15 },
  section: { marginTop: 24, paddingHorizontal: 20 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  settingCard: { borderRadius: 12, borderWidth: 1, overflow: "hidden" },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  leftContent: { flex: 1 },
  settingLabel: { fontSize: 17, fontWeight: "500", marginBottom: 2 },
  settingDescription: { fontSize: 13, lineHeight: 16 },
  footer: {
    textAlign: "center",
    fontSize: 13,
    marginTop: 40,
    marginBottom: 30,
  },
});
