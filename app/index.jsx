import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.getSession("current");
        console.log("✅ Active Session:", session);
        setRoute("/(tabs)");
      } catch (error) {
        console.log("❌ No Session:", error.message);
        setRoute("/(onboarding)");
      }
    };
    checkSession();
  }, []);

  if (!route) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <Redirect href={route} />;
}
