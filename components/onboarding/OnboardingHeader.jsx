import { View, Text, StyleSheet } from "react-native";
import { useMemo } from "react";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * @param {string} emoji    - Optional emoji displayed above the title
 * @param {string} title    - Main heading text
 * @param {string} subtitle - Supporting description text
 */
export default function OnboardingHeader({ emoji, title, subtitle }) {
  const { theme } = useTheme();
  const { colors, fonts, spacing } = theme;

  const s = useMemo(
    () =>
      StyleSheet.create({
        content: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: spacing.base,
        },
        emoji: {
          fontSize: 72,
        },
        title: {
          textAlign: "center",
          fontSize: fonts.size["3xl"],
          fontWeight: fonts.weight.bold,
          color: colors.text,
        },
        subtitle: {
          textAlign: "center",
          fontSize: fonts.size.md,
          lineHeight: fonts.size.md * fonts.lineHeight.relaxed,
          color: colors.textSecondary,
        },
      }),
    [colors, fonts, spacing],
  );

  return (
    <View style={s.content}>
      {emoji ? <Text style={s.emoji}>{emoji}</Text> : null}
      {title ? <Text style={s.title}>{title}</Text> : null}
      {subtitle ? <Text style={s.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}
