import { View, Text, StyleSheet } from "react-native";

export default function ProgramCard({ title, color = "#eee", size = 100 }) {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: color, height: size, width: size },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffff",
  },
});
