import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function ProgramCard({
  title,
  backgroundImage,
  color = "#eee",
  size = 100,
}) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/programs/${encodeURIComponent(title)}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, { height: size, width: size }]}
    >
      {backgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          style={styles.card}
          imageStyle={{ borderRadius: 16 }}
        >
          {/* Overlay for better text readability */}
          <View style={styles.overlay} />
          <Text style={styles.text}>{title}</Text>
        </ImageBackground>
      ) : (
        <View style={[styles.card, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    paddingLeft: 5,
    color: "#fff",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    zIndex: 1,
  },
});
