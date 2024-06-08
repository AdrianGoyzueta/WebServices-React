import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Hecho Por Adrian Goyzueta</Text>
      <Text style={styles.texto}>Codigo: 336</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
  },
  texto: {
    color: "#05161A",
    fontSize: 16,
    fontWeight: "bold",
  },
});