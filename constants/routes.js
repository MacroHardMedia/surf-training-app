// ── Onboarding ────────────────────────────────────────────────
export const ROUTES = {
  ONBOARDING_WELCOME: "/(onboarding)",
  ONBOARDING_PERSONAL_INFO: "/(onboarding)/personal-info",
  ONBOARDING_SURF_PROFILE: "/(onboarding)/surf-profile",
  ONBOARDING_SURF_PROFILE_2: "/(onboarding)/surf-profile2",
  ONBOARDING_AVAILABILITY: "/(onboarding)/availability",
  ONBOARDING_AVATAR: "/(onboarding)/avatar",
  ONBOARDING_SUMMARY: "/(onboarding)/summary",
  ONBOARDING_CREATE_ACCOUNT: "/(onboarding)/create-account",

  // Auth
  SIGN_IN: "/(auth)/signin",

  // Tabs
  HOME: "/(tabs)",
  LIBRARY: "/(tabs)/library",
  PROFILE: "/(tabs)/profile",
  SETTINGS: "/(tabs)/settings",

  // Dynamic helpers
  exercise: (id) => `/exercises/${id}`,
  program: (id) => `/programs/${encodeURIComponent(id)}`,
};
