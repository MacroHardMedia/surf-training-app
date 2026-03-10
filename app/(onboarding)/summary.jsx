import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useMemo } from "react";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";
import { useOnboarding } from "../../contexts/onBoardingContext";
import { ROUTES } from "../../constants/routes";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

const TOTAL_STEPS = 6;
const CURRENT_STEP = 5;

export default function Summary() {
  const router = useRouter();
  const { theme } = useTheme();
  const { colors, fonts, spacing, radius } = theme;
  const insets = useSafeAreaInsets();
  const { onboardingData } = useOnboarding();

  const { personalInfo, surfProfile, goals } = onboardingData;

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
        // ── Section card ──────────────────────────────────────
        card: {
          backgroundColor: colors.card,
          borderRadius: radius.lg,
          borderWidth: 1,
          borderColor: colors.border,
          marginBottom: spacing.base,
          overflow: "hidden",
        },
        cardHeader: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: spacing.base,
          paddingVertical: spacing.sm,
          borderBottomWidth: 1,
          borderBottomColor: colors.divider,
          backgroundColor: colors.backgroundSecondary,
        },
        cardTitle: {
          fontSize: fonts.size.sm,
          fontWeight: fonts.weight.semiBold,
          color: colors.textSecondary,
          textTransform: "uppercase",
          letterSpacing: 0.8,
        },
        editBtn: {
          paddingHorizontal: spacing.sm,
          paddingVertical: spacing.xs,
          borderRadius: radius.sm,
          backgroundColor: colors.primaryLight,
        },
        editBtnText: {
          fontSize: fonts.size.sm,
          fontWeight: fonts.weight.semiBold,
          color: colors.primary,
        },
        cardBody: {
          padding: spacing.base,
          gap: spacing.sm,
        },
        // ── Row ──────────────────────────────────────────────
        row: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        },
        rowLabel: {
          fontSize: fonts.size.base,
          color: colors.textSecondary,
          flex: 1,
        },
        rowValue: {
          fontSize: fonts.size.base,
          fontWeight: fonts.weight.semiBold,
          color: colors.text,
          flex: 2,
          textAlign: "right",
        },
        rowValueMuted: {
          fontSize: fonts.size.base,
          color: colors.textTertiary,
          flex: 2,
          textAlign: "right",
          fontStyle: "italic",
        },

        // ── Footer ───────────────────────────────────────────
        footer: { marginTop: spacing["2xl"], marginBottom: spacing.xl },
        stepCount: {
          textAlign: "center",
          fontSize: fonts.size.sm,
          color: colors.textTertiary,
          marginBottom: spacing.sm,
        },
        btnRow: { flexDirection: "row", gap: spacing.sm },
      }),
    [colors, fonts, spacing, radius],
  );

  // ── Helpers ───────────────────────────────────────────────
  const val = (v) =>
    v && (Array.isArray(v) ? v.length > 0 : String(v).trim() !== "");

  function InfoRow({ label, value, tags = false }) {
    const hasValue = val(value);
    if (tags && hasValue) {
      const display = (Array.isArray(value) ? value : [value]).join(", ");
      return (
        <View style={s.row}>
          <Text style={s.rowLabel}>{label}</Text>
          <Text style={s.rowValue}>{display}</Text>
        </View>
      );
    }
    return (
      <View style={s.row}>
        <Text style={s.rowLabel}>{label}</Text>
        <Text style={hasValue ? s.rowValue : s.rowValueMuted}>
          {hasValue ? value : "Not provided"}
        </Text>
      </View>
    );
  }

  function Section({ title, onEdit, children }) {
    return (
      <View style={s.card}>
        <View style={s.cardHeader}>
          <Text style={s.cardTitle}>{title}</Text>
          <TouchableOpacity style={s.editBtn} onPress={onEdit}>
            <Text style={s.editBtnText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={s.cardBody}>{children}</View>
      </View>
    );
  }

  // ── Render ────────────────────────────────────────────────
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
        <Text style={s.title}>Review Your Profile</Text>
        <Text style={s.subtitle}>
          Check everything looks right before creating your account.
        </Text>

        {/* Personal Info */}
        <Section
          title="Personal Info"
          onEdit={() => router.push(ROUTES.ONBOARDING_PERSONAL_INFO)}
        >
          <InfoRow label="Age" value={personalInfo.age} />
          <InfoRow label="Sex" value={personalInfo.sex} />
          <InfoRow label="Weight" value={personalInfo.weight} />
          <InfoRow label="Height" value={personalInfo.height} />
        </Section>

        {/* Surf Profile */}
        <Section
          title="Surf Profile"
          onEdit={() => router.push(ROUTES.ONBOARDING_SURF_PROFILE)}
        >
          <InfoRow label="Surf Level" value={surfProfile.surfLevel} />
          <InfoRow label="Surf Frequency" value={surfProfile.surfFrequency} />
          <InfoRow label="Board Type" value={surfProfile.boardType} tags />
          <InfoRow label="Main Goals" value={goals.primaryGoal} tags />
        </Section>

        {/* Fitness & Training */}
        <Section
          title="Fitness & Training"
          onEdit={() => router.push(ROUTES.ONBOARDING_SURF_PROFILE_2)}
        >
          <InfoRow label="Fitness Level" value={surfProfile.fitnessLevel} />
          <InfoRow label="Injuries" value={surfProfile.injuries} tags />
          <InfoRow
            label="Training Days"
            value={
              goals.trainingDays ? `${goals.trainingDays} days / week` : null
            }
          />
        </Section>

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
              onPress={() => router.push(ROUTES.ONBOARDING_CREATE_ACCOUNT)}
              style={{ flex: 2 }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
