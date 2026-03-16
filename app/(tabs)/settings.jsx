import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { useRouter } from "expo-router";
import { account } from "../../lib/appwrite";
import { useState } from "react";

const Settings = () => {
  const { theme, colorScheme, toggleTheme } = useTheme();
  const isDarkMode = colorScheme === "dark";
  const router = useRouter();
  const { spacing, radius, fonts } = theme;

  const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.lg,
      paddingBottom: spacing.sm,
    },
    title: {
      fontSize: 34,
      fontWeight: "bold",
      marginBottom: spacing.xs,
    },
    subtitle: { fontSize: fonts.size.md },
    section: { marginTop: spacing.xl, paddingHorizontal: spacing.lg },
    sectionTitle: {
      fontSize: fonts.size.sm + 1,
      fontWeight: "600",
      marginBottom: spacing.sm,
      letterSpacing: 0.5,
    },
    settingCard: {
      borderRadius: radius.lg,
      borderWidth: 1,
      overflow: "hidden",
    },
    settingRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: spacing.md + 2,
      paddingHorizontal: spacing.base,
    },
    iconContainer: {
      width: spacing.xl + spacing.sm,
      height: spacing.xl + spacing.sm,
      borderRadius: radius.md,
      alignItems: "center",
      justifyContent: "center",
      marginRight: spacing.md,
    },
    leftContent: { flex: 1 },
    settingLabel: {
      fontSize: fonts.size.md + 1,
      fontWeight: "500",
      marginBottom: 2,
    },
    settingDescription: { fontSize: fonts.size.sm + 1, lineHeight: 16 },
    passwordForm: {
      borderTopWidth: 1,
      paddingHorizontal: spacing.base,
      paddingTop: spacing.base,
      paddingBottom: spacing.base,
    },
    input: {
      borderWidth: 1,
      borderRadius: radius.lg,
      paddingHorizontal: spacing.base,
      paddingVertical: spacing.base,
      fontSize: fonts.size.md,
      marginBottom: spacing.md,
    },
    errorText: {
      fontSize: fonts.size.sm + 1,
      marginBottom: spacing.sm,
    },
    passwordActions: {
      flexDirection: "row",
      gap: spacing.sm + 2,
      marginTop: spacing.xs,
    },
    secondaryButton: {
      flex: 1,
      borderRadius: radius.lg,
      paddingVertical: spacing.md,
      alignItems: "center",
      justifyContent: "center",
    },
    secondaryButtonText: {
      fontSize: fonts.size.md - 1,
      fontWeight: "600",
    },
    primaryButton: {
      flex: 1,
      borderRadius: radius.lg,
      paddingVertical: spacing.md,
      alignItems: "center",
      justifyContent: "center",
    },
    primaryButtonText: {
      fontSize: fonts.size.md - 1,
      fontWeight: "600",
    },
    footer: {
      textAlign: "center",
      fontSize: fonts.size.sm + 1,
      marginTop: spacing["3xl"],
      marginBottom: spacing.xl + spacing.sm,
    },
  });

  // Password Change Function ------------------

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      setError("Please fill in all password fields.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match.");
      return;
    }

    setPasswordLoading(true);
    setError("");

    try {
      await account.updatePassword(newPassword, oldPassword);
      setShowPasswordForm(false);
      setOldPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (e) {
      setError(e.message ?? "Unable to change password.");
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current").catch(() => null);
      router.replace("/(auth)/signin");
    } catch {}
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Settings
          </Text>
          <Text
            style={[styles.subtitle, { color: theme.colors.textSecondary }]}
          >
            Customize your experience
          </Text>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}
          >
            APPEARANCE
          </Text>

          <View
            style={[
              styles.settingCard,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <View style={styles.settingRow}>
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: isDarkMode
                      ? theme.colors.cardSecondary
                      : theme.colors.backgroundSecondary,
                  },
                ]}
              >
                <Ionicons
                  name={isDarkMode ? "moon" : "sunny"}
                  size={22}
                  color={theme.colors.primary}
                />
              </View>
              <View style={styles.leftContent}>
                <Text
                  style={[styles.settingLabel, { color: theme.colors.text }]}
                >
                  Dark Mode
                </Text>
                <Text
                  style={[
                    styles.settingDescription,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  {isDarkMode ? "Dark theme enabled" : "Light theme enabled"}
                </Text>
              </View>
              <Switch
                value={isDarkMode}
                onValueChange={toggleTheme}
                trackColor={{
                  false: theme.colors.borderStrong,
                  true: theme.colors.success,
                }}
                thumbColor="#fff"
                ios_backgroundColor={theme.colors.borderStrong}
              />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text
            style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}
          >
            ACCOUNT
          </Text>

          <View
            style={[
              styles.settingCard,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
                marginBottom: 12,
              },
            ]}
          >
            <TouchableOpacity
              style={styles.settingRow}
              onPress={() => {
                setShowPasswordForm((prev) => !prev);
                setError("");
              }}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: isDarkMode
                      ? theme.colors.cardSecondary
                      : theme.colors.backgroundSecondary,
                  },
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={22}
                  color={theme.colors.primary}
                />
              </View>
              <View style={styles.leftContent}>
                <Text
                  style={[styles.settingLabel, { color: theme.colors.text }]}
                >
                  Change Password
                </Text>
                <Text
                  style={[
                    styles.settingDescription,
                    { color: theme.colors.textSecondary },
                  ]}
                >
                  Update your account password
                </Text>
              </View>
              <Ionicons
                name={showPasswordForm ? "chevron-up" : "chevron-forward"}
                size={18}
                color={theme.colors.textTertiary}
              />
            </TouchableOpacity>

            {showPasswordForm ? (
              <View
                style={[
                  styles.passwordForm,
                  { borderTopColor: theme.colors.border },
                ]}
              >
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: theme.colors.inputBackground,
                      borderColor: theme.colors.inputBorder,
                      color: theme.colors.inputText,
                    },
                  ]}
                  placeholder="Current password"
                  placeholderTextColor={theme.colors.inputPlaceholder}
                  secureTextEntry
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  autoCapitalize="none"
                />

                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: theme.colors.inputBackground,
                      borderColor: theme.colors.inputBorder,
                      color: theme.colors.inputText,
                    },
                  ]}
                  placeholder="New password"
                  placeholderTextColor={theme.colors.inputPlaceholder}
                  secureTextEntry
                  value={newPassword}
                  onChangeText={(value) => {
                    setNewPassword(value);
                    if (error) {
                      setError("");
                    }
                  }}
                  autoCapitalize="none"
                />

                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: theme.colors.inputBackground,
                      borderColor: theme.colors.inputBorder,
                      color: theme.colors.inputText,
                    },
                  ]}
                  placeholder="Confirm new password"
                  placeholderTextColor={theme.colors.inputPlaceholder}
                  secureTextEntry
                  value={confirmNewPassword}
                  onChangeText={(value) => {
                    setConfirmNewPassword(value);
                    if (error) {
                      setError("");
                    }
                  }}
                  autoCapitalize="none"
                />

                {error ? (
                  <Text
                    style={[styles.errorText, { color: theme.colors.error }]}
                  >
                    {error}
                  </Text>
                ) : null}

                <View style={styles.passwordActions}>
                  <TouchableOpacity
                    style={[
                      styles.secondaryButton,
                      {
                        backgroundColor: theme.colors.buttonSecondary,
                      },
                    ]}
                    onPress={() => {
                      setShowPasswordForm(false);
                      setOldPassword("");
                      setNewPassword("");
                      setConfirmNewPassword("");
                      setError("");
                    }}
                  >
                    <Text
                      style={[
                        styles.secondaryButtonText,
                        { color: theme.colors.buttonSecondaryText },
                      ]}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.primaryButton,
                      {
                        backgroundColor: passwordLoading
                          ? theme.colors.buttonDisabled
                          : theme.colors.buttonPrimary,
                      },
                    ]}
                    onPress={handleChangePassword}
                    disabled={passwordLoading}
                  >
                    <Text
                      style={[
                        styles.primaryButtonText,
                        {
                          color: passwordLoading
                            ? theme.colors.buttonDisabledText
                            : theme.colors.buttonPrimaryText,
                        },
                      ]}
                    >
                      {passwordLoading ? "Saving..." : "Save Password"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>

          <View
            style={[
              styles.settingCard,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
              },
            ]}
          >
            <TouchableOpacity style={styles.settingRow} onPress={handleLogout}>
              <View
                style={[styles.iconContainer, { backgroundColor: "#FEE2E2" }]}
              >
                <Ionicons name="log-out-outline" size={22} color="#EF4444" />
              </View>
              <View style={styles.leftContent}>
                <Text style={[styles.settingLabel, { color: "#EF4444" }]}>
                  Logout
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={18}
                color={theme.colors.textTertiary}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <Text style={[styles.footer, { color: theme.colors.textTertiary }]}>
          Made with 🤙 for surfers
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
