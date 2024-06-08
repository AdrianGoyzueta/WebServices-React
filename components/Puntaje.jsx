import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Puntaje({ puntaje }) {
  const [codigo] = useState(puntaje.codigo.toString());
  const [puntos] = useState(puntaje.puntos.toString());

  return (
    <View style={styles.contenedor}>
      <Text style={styles.campo}>{codigo}</Text>
      <Text style={styles.campo}>{puntos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    display: "flex",
    flexDirection: "row",
  },
  campo: {
    borderWidth: 1,
    color: "#05161A",
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlignVertical: "center",
    width: "50%",
  },
});
