import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useMemo } from "react";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Shared primary action button.
 *
 * @param {string}   label     - Button text
 * @param {function} onPress   - Press handler
 * @param {boolean}  disabled  - Disabled / greyed-out state
 * @param {boolean}  fullWidth - Stretch to fill parent width
 * @param {object}   style     - Extra style overrides for the container
 */
export default function PrimaryButton({
  label,
  onPress,
  disabled = false,
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
          backgroundColor: disabled
            ? colors.buttonDisabled
            : colors.buttonPrimary,
          alignSelf: fullWidth ? "stretch" : "auto",
          opacity: disabled ? 0.6 : 1,
        },
        label: {
          fontSize: fonts.size.lg,
          fontWeight: fonts.weight.bold,
          color: disabled
            ? colors.buttonDisabledText
            : colors.buttonPrimaryText,
        },
      }),
    [colors, fonts, spacing, radius, disabled, fullWidth],
  );

  return (
    <TouchableOpacity
      style={[s.btn, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.75}
    >
      <Text style={s.label}>{label}</Text>
    </TouchableOpacity>
  );
}
