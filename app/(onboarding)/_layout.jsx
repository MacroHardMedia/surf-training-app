import { Stack } from "expo-router";
import { OnboardingProvider } from "../../contexts/onBoardingContext";

export default function OnboardingLayout() {
  return (
    <OnboardingProvider>
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
        <Stack.Screen
          name="create-account"
          options={{ headerShown: false, headerBackTitle: "Back", title: "" }}
        />
      </Stack>
    </OnboardingProvider>
  );
}
