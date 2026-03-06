import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useTheme } from "../../contexts/ThemeContext";
import { ROUTES } from "../../constants/routes";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

const TOTAL_STEPS = 6;
const CURRENT_STEP = 4;

const FITNESS_LEVELS = ["Low", "Moderate", "Good", "Athletic"];

const INJURY_OPTIONS = [
  "Knee",
  "Shoulder",
  "Lower back",
  "Neck",
  "Ankle",
  "Wrist",
  "Hip",
  "None",
];

const TRAINING_DAYS = [1, 2, 3, 4, 5, 6, 7];

export default function SurfProfile2() {
  const router = useRouter();
  const { theme } = useTheme();
  const { colors, fonts, spacing, radius } = theme;
  const insets = useSafeAreaInsets();

  const [form, setForm] = useState({
    fitnessLevel: "",
    injuries: [],
    trainingDays: null,
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleInjury = (injury) => {
    setForm((prev) => {
      if (injury === "None") {
        return { ...prev, injuries: ["None"] };
      }
      const without = prev.injuries.filter((i) => i !== "None");
      if (without.includes(injury)) {
        return { ...prev, injuries: without.filter((i) => i !== injury) };
      }
      return { ...prev, injuries: [...without, injury] };
    });
  };

  const isValid =
    form.fitnessLevel && form.injuries.length > 0 && form.trainingDays;

  // ── Styles ────────────────────────────────────────────────────
  const containerStyle = useMemo(
    () => ({
      backgroundColor: colors.background,
      paddingTop: insets.top + spacing.base,
    }),
    [colors.background, insets.top, spacing.base],
  );

  const s = useMemo(
    () =>
      StyleSheet.create({
        scroll: { flexGrow: 1, padding: spacing.xl },
        stepRow: {
          flexDirection: "row",
          justifyContent: "center",
          gap: 8,
          paddingHorizontal: spacing.xl,
        },
        dot: {
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.border,
        },
        dotActive: { backgroundColor: colors.primary, width: 24 },
        title: {
          fontSize: fonts.size["3xl"],
          fontWeight: fonts.weight.bold,
          color: colors.text,
          marginBottom: spacing.xs,
          marginTop: spacing.xl,
        },
        subtitle: {
          fontSize: fonts.size.md,
          color: colors.textSecondary,
          marginBottom: spacing["2xl"],
        },
        label: {
          fontSize: fonts.size.sm,
          fontWeight: fonts.weight.semiBold,
          color: colors.textSecondary,
          marginBottom: spacing.xs,
          textTransform: "uppercase",
          letterSpacing: 0.8,
        },
        field: { marginBottom: spacing.lg },
        optionRow: {
          flexDirection: "row",
          flexWrap: "wrap",
          gap: spacing.sm,
        },
        optionBtn: {
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.sm,
          borderRadius: radius.md,
          borderWidth: 1,
          borderColor: colors.border,
          backgroundColor: colors.buttonSecondary,
        },
        optionBtnActive: {
          borderColor: colors.primary,
          backgroundColor: colors.primaryLight,
        },
        optionBtnText: {
          fontSize: fonts.size.sm,
          fontWeight: fonts.weight.medium,
          color: colors.textSecondary,
        },
        optionBtnTextActive: {
          color: colors.primary,
          fontWeight: fonts.weight.semiBold,
        },
        daysRow: {
          flexDirection: "row",
          gap: spacing.sm,
        },
        dayBtn: {
          flex: 1,
          aspectRatio: 1,
          borderRadius: radius.md,
          borderWidth: 1,
          borderColor: colors.border,
          backgroundColor: colors.buttonSecondary,
          alignItems: "center",
          justifyContent: "center",
        },
        dayBtnActive: {
          borderColor: colors.primary,
          backgroundColor: colors.primaryLight,
        },
        dayBtnText: {
          fontSize: fonts.size.sm,
          fontWeight: fonts.weight.semiBold,
          color: colors.textSecondary,
        },
        dayBtnTextActive: {
          color: colors.primary,
        },
        footer: { marginTop: spacing["2xl"], marginBottom: spacing.xl },
        stepCount: {
          textAlign: "center",
          fontSize: fonts.size.sm,
          color: colors.textTertiary,
          marginBottom: spacing.sm,
        },
        btnRow: {
          flexDirection: "row",
          gap: spacing.sm,
        },
      }),
    [colors, fonts, spacing, radius],
  );

  // ── Render ───────────────────────────────────────────────────
  return (
    <KeyboardAvoidingView
      style={[styles.container, containerStyle]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Step dots */}
      <View style={s.stepRow}>
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => (
          <View
            key={step}
            style={[s.dot, step === CURRENT_STEP && s.dotActive]}
          />
        ))}
      </View>

      <ScrollView
        contentContainerStyle={s.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={s.title}>Fitness & Training</Text>
        <Text style={s.subtitle}>
          Help us understand your body and availability.
        </Text>

        {/* Surf Fitness Level */}
        <View style={s.field}>
          <Text style={s.label}>Current Surf Fitness</Text>
          <View style={s.optionRow}>
            {FITNESS_LEVELS.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[
                  s.optionBtn,
                  form.fitnessLevel === opt && s.optionBtnActive,
                ]}
                onPress={() => update("fitnessLevel", opt)}
              >
                <Text
                  style={[
                    s.optionBtnText,
                    form.fitnessLevel === opt && s.optionBtnTextActive,
                  ]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recurring Injuries */}
        <View style={s.field}>
          <Text style={s.label}>Recurring Injuries</Text>
          <View style={s.optionRow}>
            {INJURY_OPTIONS.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[
                  s.optionBtn,
                  form.injuries.includes(opt) && s.optionBtnActive,
                ]}
                onPress={() => toggleInjury(opt)}
              >
                <Text
                  style={[
                    s.optionBtnText,
                    form.injuries.includes(opt) && s.optionBtnTextActive,
                  ]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Training Days */}
        <View style={s.field}>
          <Text style={s.label}>Training Days Per Week</Text>
          <View style={s.daysRow}>
            {TRAINING_DAYS.map((d) => (
              <TouchableOpacity
                key={d}
                style={[s.dayBtn, form.trainingDays === d && s.dayBtnActive]}
                onPress={() => update("trainingDays", d)}
              >
                <Text
                  style={[
                    s.dayBtnText,
                    form.trainingDays === d && s.dayBtnTextActive,
                  ]}
                >
                  {d}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={s.footer}>
          <Text style={s.stepCount}>
            Step {CURRENT_STEP} of {TOTAL_STEPS}
          </Text>
          <View style={s.btnRow}>
            <SecondaryButton
              label="← Back"
              onPress={() => router.back()}
              style={{ flex: 1 }}
            />
            <PrimaryButton
              label="Next →"
              onPress={() => router.push(ROUTES.ONBOARDING_AVAILABILITY)}
              disabled={!isValid}
              style={{ flex: 2 }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
