import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NuevoPuntaje from "./NuevoPuntaje";
import Puntaje from "./Puntaje";

export default function Entrega({ entrega }) {
  const [tarea] = useState(entrega.tarea);
  const [alumnos, setAlumnos] = useState(entrega.alumnos);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{tarea}</Text>
      {
        alumnos.map((alumno) => (
          <Puntaje key={alumno.codigo} puntaje={alumno} />
        ))
      }
      <NuevoPuntaje tarea={tarea} setAlumnos={setAlumnos} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    borderRadius: 8,
    borderColor: "#05161A",
    borderWidth: 2,
    gap: 8,
    padding: 8,
  },
  titulo: {
    color: "#05161A",
    fontSize: 16,
    fontWeight: "bold",
  },
});
