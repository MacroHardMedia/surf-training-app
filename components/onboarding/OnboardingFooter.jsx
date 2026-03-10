import { View, Text, StyleSheet } from "react-native";
import { useMemo } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

/**
 * @param {string}   step       - Label shown above buttons, e.g. "1 of 5"
 * @param {string}   cta        - Primary button label, e.g. "Next →"
 * @param {function} onPress    - Primary button handler
 * @param {boolean}  ctaDisabled - Disable the primary button
 * @param {string}   backLabel  - Optional back button label, e.g. "← Back"
 * @param {function} onBack     - Optional back button handler
 */
export default function OnboardingFooter({
  step,
  cta = "Next →",
  onPress,
  ctaDisabled = false,
  backLabel,
  onBack,
}) {
  const { theme } = useTheme();
  const { colors, fonts, spacing } = theme;

  const s = useMemo(
    () =>
      StyleSheet.create({
        footer: {
          gap: spacing.sm,
          alignItems: "center",
        },
        stepCount: {
          fontSize: fonts.size.sm,
          color: colors.textTertiary,
        },
        btnRow: {
          flexDirection: "row",
          gap: spacing.sm,
          width: "100%",
        },
      }),
    [colors, fonts, spacing],
  );

  return (
    <View style={s.footer}>
      {step ? <Text style={s.stepCount}>Step {step}</Text> : null}
      <View style={s.btnRow}>
        {backLabel && onBack ? (
          <SecondaryButton
            label={backLabel}
            onPress={onBack}
            style={{ flex: 1 }}
          />
        ) : null}
        <PrimaryButton
          label={cta}
          onPress={onPress}
          disabled={ctaDisabled}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
}
