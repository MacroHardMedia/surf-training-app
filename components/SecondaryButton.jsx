import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useMemo } from "react";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Shared secondary / outline button.
 *
 * @param {string}   label     - Button text
 * @param {function} onPress   - Press handler
 * @param {boolean}  fullWidth - Stretch to fill parent width
 * @param {object}   style     - Extra style overrides for the container
 */
export default function SecondaryButton({
  label,
  onPress,
  fullWidth = false,
  style,
}) {
  const { theme } = useTheme();
  const { colors, fonts, spacing, radius } = theme;

  const s = useMemo(
    () =>
      StyleSheet.create({
        btn: {
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: spacing.base,
          paddingHorizontal: spacing.xl,
          borderRadius: radius.full,
          backgroundColor: colors.buttonSecondary,
          borderWidth: 1,
          borderColor: colors.border,
          alignSelf: fullWidth ? "stretch" : "auto",
        },
        label: {
          fontSize: fonts.size.lg,
          fontWeight: fonts.weight.bold,
          color: colors.buttonSecondaryText,
        },
      }),
    [colors, fonts, spacing, radius, fullWidth],
  );

  return (
    <TouchableOpacity
      style={[s.btn, style]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Text style={s.label}>{label}</Text>
    </TouchableOpacity>
  );
}
