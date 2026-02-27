import { useCallback } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";

// Defined outside component — static data, no reason to recreate on every render.

const TAB_ICONS = {
  index: ["home", "home-outline"],
  library: ["library", "library-outline"],
  settings: ["settings", "settings-outline"],
  profile: ["person", "person-outline"],
};

const FALLBACK_ICONS = ["ellipsis-horizontal", "ellipsis-horizontal-outline"];

function getTabIcons(routeName) {
  return TAB_ICONS[routeName] ?? FALLBACK_ICONS;
}

export default function TabLayout() {
  const { theme } = useTheme();

  const screenOptions = useCallback(
    ({ route }) => {
      const [activeIcon, inactiveIcon] = getTabIcons(route.name);

      return {
        tabBarIcon: ({ color, focused, size }) => (
          <Ionicons
            name={focused ? activeIcon : inactiveIcon}
            size={size}
            color={color}
          />
        ),
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.textTertiary,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        headerShown: false,
      };
    },
    [theme],
  );

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="library" options={{ title: "Library" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
