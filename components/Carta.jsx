import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Carta({icon, texto, onPress}) {
  return (
    <Pressable style={styles.contenedor} onPress={onPress}>
      <MaterialIcons name={icon} size={120} color="#0C7075" />
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    backgroundColor: "#6DA5C0",
    borderRadius: 8,
    elevation: 6,
    padding: 10,
    width: "45%"
  },
  texto: {
    color: "#05161A",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center"
  }
});