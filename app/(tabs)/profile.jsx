import React, { useEffect, useMemo, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Query } from "react-native-appwrite";
import {
  account,
  databases,
  DATABASE_ID,
  PROFILES_COLLECTION_ID,
} from "../../lib/appwrite";
import { useTheme } from "../../contexts/ThemeContext";

const Profile = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const { colors, fonts, spacing, radius } = theme;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [accountData, setAccountData] = useState(null);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      setError("");
      try {
        const user = await account.get();
        setAccountData(user);

        const profileDocs = await databases.listDocuments(
          DATABASE_ID,
          PROFILES_COLLECTION_ID,
          [Query.equal("userId", user.$id), Query.limit(1)],
        );

        setProfileData(profileDocs.documents[0] ?? null);
      } catch (e) {
        setError(e.message ?? "Unable to load profile.");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const s = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.background,
        },
        content: {
          padding: spacing.xl,
          gap: spacing.lg,
        },
        center: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: spacing.xl,
        },
        avatar: {
          width: 88,
          height: 88,
          borderRadius: 44,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.primaryLight,
        },
        avatarText: {
          color: colors.primaryDark,
          fontSize: fonts.size.xl,
          fontWeight: fonts.weight.bold,
        },
        headerCard: {
          backgroundColor: colors.card,
          borderRadius: radius.lg,
          padding: spacing.lg,
          borderWidth: 1,
          borderColor: colors.border,
          alignItems: "center",
          gap: spacing.sm,
        },
        title: {
          fontSize: fonts.size["2xl"],
          fontWeight: fonts.weight.bold,
          color: colors.text,
        },
        email: {
          fontSize: fonts.size.sm,
          color: colors.textSecondary,
        },
        sectionCard: {
          backgroundColor: colors.card,
          borderRadius: radius.lg,
          padding: spacing.lg,
          borderWidth: 1,
          borderColor: colors.border,
          gap: spacing.sm,
        },
        sectionTitle: {
          fontSize: fonts.size.lg,
          fontWeight: fonts.weight.semiBold,
          color: colors.text,
          marginBottom: spacing.xs,
        },
        row: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: spacing.base,
        },
        label: {
          color: colors.textSecondary,
          fontSize: fonts.size.sm,
        },
        value: {
          color: colors.text,
          fontSize: fonts.size.sm,
          fontWeight: fonts.weight.semiBold,
          flexShrink: 1,
          textAlign: "right",
        },
        empty: {
          color: colors.textSecondary,
          fontSize: fonts.size.sm,
        },
        errorText: {
          color: colors.text,
          fontSize: fonts.size.sm,
          textAlign: "center",
          marginBottom: spacing.base,
        },
        button: {
          borderRadius: radius.md,
          backgroundColor: colors.primary,
          paddingVertical: spacing.md,
          alignItems: "center",
          justifyContent: "center",
        },
        buttonDanger: {
          backgroundColor: colors.accent,
        },
        buttonText: {
          color: colors.primaryText,
          fontSize: fonts.size.md,
          fontWeight: fonts.weight.semiBold,
        },
      }),
    [colors, fonts, spacing, radius],
  );

  const displayName = accountData?.name?.trim() || "Surfer";
  const displayEmail = accountData?.email ?? "";
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const formatValue = (value) => {
    if (Array.isArray(value)) {
      return value.length ? value.join(", ") : "—";
    }
    return value || "—";
  };

  const handleLogout = async () => {
    try {
      const currentSession = await account
        .getSession("current")
        .catch(() => null);

      if (currentSession) {
        await account.deleteSession("current");
      }

      router.replace("/(auth)/signin");
    } catch (e) {
      setError(e.message ?? "Unable to log out.");
    }
  };

  if (loading) {
    return (
      <View style={s.center}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <View style={s.headerCard}>
        <View style={s.avatar}>
          <Text style={s.avatarText}>{initials || "SU"}</Text>
        </View>
        <Text style={s.title}>{displayName}</Text>
        <Text style={s.email}>{displayEmail}</Text>
      </View>

      <View style={s.sectionCard}>
        <Text style={s.sectionTitle}>Your Surf Profile</Text>
        {profileData ? (
          <>
            <View style={s.row}>
              <Text style={s.label}>Date of Birth</Text>
              <Text style={s.value}>{formatValue(profileData.dob)}</Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Sex</Text>
              <Text style={s.value}>{formatValue(profileData.sex)}</Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Weight</Text>
              <Text style={s.value}>{formatValue(profileData.weight)}</Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Height</Text>
              <Text style={s.value}>{formatValue(profileData.height)}</Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Surf Level</Text>
              <Text style={s.value}>{formatValue(profileData.surfLevel)}</Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Surf Frequency</Text>
              <Text style={s.value}>
                {formatValue(profileData.surfFrequency)}
              </Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Board Type</Text>
              <Text style={s.value}>{formatValue(profileData.boardType)}</Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Main Goal</Text>
              <Text style={s.value}>
                {formatValue(profileData.primaryGoal)}
              </Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Fitness Level</Text>
              <Text style={s.value}>
                {formatValue(profileData.fitnessLevel)}
              </Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Injuries</Text>
              <Text style={s.value}>{formatValue(profileData.injuries)}</Text>
            </View>
            <View style={s.row}>
              <Text style={s.label}>Training Days</Text>
              <Text style={s.value}>
                {formatValue(profileData.trainingDays)}
              </Text>
            </View>
          </>
        ) : (
          <Text style={s.empty}>No profile data found yet.</Text>
        )}
      </View>

      {error ? <Text style={s.errorText}>{error}</Text> : null}
    </ScrollView>
  );
};

export default Profile;
