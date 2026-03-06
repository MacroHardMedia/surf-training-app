import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="personal-info"
        options={{ headerShown: false, headerBackTitle: "Back", title: "" }}
      />
      <Stack.Screen
        name="surf-profile"
        options={{ headerShown: false, headerBackTitle: "Back", title: "" }}
      />
    </Stack>
  );
}
