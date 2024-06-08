import { Pressable, StyleSheet, Text } from "react-native";

export default function Boton({ texto, onPress }) {
  return (
    <Pressable style={styles.contenedor} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    backgroundColor: "#6DA5C0",
    borderRadius: 8,
    padding: 8,
    width: "100%",
  },
  texto: {
    color: "#05161A",
    fontSize: 16,
    fontWeight: "bold",
  },
});
