import { View, StyleSheet } from "react-native";
import { useMemo } from "react";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * @param {number} total   - Total number of steps
 * @param {number} current - Active step (1-based)
 */
export default function OnboardingDots({ total = 5, current = 1 }) {
  const { theme } = useTheme();
  const { colors } = theme;

  const s = useMemo(
    () =>
      StyleSheet.create({
        row: {
          flexDirection: "row",
          justifyContent: "center",
          gap: 8,
        },
        dot: {
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.border,
        },
        dotActive: {
          backgroundColor: colors.primary,
          width: 24,
        },
      }),
    [colors],
  );

  return (
    <View style={s.row}>
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <View key={step} style={[s.dot, step === current && s.dotActive]} />
      ))}
    </View>
  );
}
