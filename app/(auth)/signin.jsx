import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useMemo } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";
import { ROUTES } from "../../constants/routes";
import { account } from "../../lib/appwrite";
import PrimaryButton from "../../components/PrimaryButton";

export default function SignIn() {
  const router = useRouter();
  const { redirect } = useLocalSearchParams();
  const { theme } = useTheme();
  const { colors, fonts, spacing, radius } = theme;
  const insets = useSafeAreaInsets();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const isValid = form.email.trim().length > 0 && form.password.length > 0;

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
        scroll: {
          flexGrow: 1,
          padding: spacing.xl,
          justifyContent: "center",
        },
        title: {
          fontSize: fonts.size["3xl"],
          fontWeight: fonts.weight.bold,
          color: colors.text,
          marginBottom: spacing.xs,
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
        inputWrapper: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.inputBackground,
          borderWidth: 1,
          borderColor: colors.inputBorder,
          borderRadius: radius.md,
          paddingHorizontal: spacing.base,
        },
        input: {
          flex: 1,
          paddingVertical: spacing.md,
          fontSize: fonts.size.md,
          color: colors.inputText,
        },
        eyeBtn: {
          paddingLeft: spacing.sm,
          paddingVertical: spacing.md,
        },
        eyeText: {
          fontSize: fonts.size.sm,
          color: colors.textSecondary,
        },
        apiError: {
          fontSize: fonts.size.sm,
          color: "#EF4444",
          textAlign: "center",
          marginBottom: spacing.base,
          backgroundColor: "#FEE2E2",
          borderRadius: radius.md,
          padding: spacing.sm,
        },
        footer: { marginTop: spacing["2xl"] },
        backRow: {
          flexDirection: "row",
          justifyContent: "center",
          marginTop: spacing.lg,
        },
        backText: {
          fontSize: fonts.size.sm,
          color: colors.textSecondary,
        },
        backLink: {
          fontSize: fonts.size.sm,
          color: colors.primary,
          fontWeight: fonts.weight.semiBold,
        },
      }),
    [colors, fonts, spacing, radius],
  );

  return (
    <KeyboardAvoidingView
      style={[styles.container, containerStyle]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={s.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={s.title}>Welcome back</Text>
        <Text style={s.subtitle}>Sign in to continue.</Text>

        {/* Email */}
        <View style={s.field}>
          <Text style={s.label}>Email</Text>
          <View style={s.inputWrapper}>
            <TextInput
              style={s.input}
              placeholder="you@example.com"
              placeholderTextColor={colors.inputPlaceholder}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={form.email}
              onChangeText={(v) => update("email", v)}
            />
          </View>
        </View>

        {/* Password */}
        <View style={s.field}>
          <Text style={s.label}>Password</Text>
          <View style={s.inputWrapper}>
            <TextInput
              style={s.input}
              placeholder="Your password"
              placeholderTextColor={colors.inputPlaceholder}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              value={form.password}
              onChangeText={(v) => update("password", v)}
            />
            <TouchableOpacity
              style={s.eyeBtn}
              onPress={() => setShowPassword((p) => !p)}
            >
              <Text style={s.eyeText}>{showPassword ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CTA */}
        <View style={s.footer}>
          {error ? <Text style={s.apiError}>{error}</Text> : null}
          <PrimaryButton
            label={loading ? "Signing in…" : "Sign In"}
            onPress={async () => {
              setLoading(true);
              setError("");
              try {
                await account.deleteSession("current").catch(() => null);
                await account.createEmailPasswordSession(
                  form.email.trim(),
                  form.password,
                );
                router.replace(redirect ?? ROUTES.HOME);
              } catch (e) {
                setError(
                  e.message ?? "Something went wrong. Please try again.",
                );
              } finally {
                setLoading(false);
              }
            }}
            disabled={!isValid || loading}
          />

          {/* Back to sign up */}
          <View style={s.backRow}>
            <Text style={s.backText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={s.backLink}>Create one</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
