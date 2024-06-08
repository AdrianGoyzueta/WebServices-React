import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Boton from "./Boton";
import { post } from "../utils/fetchData";

export default function NuevoPuntaje({ tarea, setAlumnos }) {
  const [codigo, setCodigo] = useState("");
  const [puntos, setPuntos] = useState("0");

  const agregar = () => {
    if (!codigo) {
      alert("Ingrese el código del alumno");
      return;
    }
    post("http://192.168.1.102:8000/api/presentas/", {
      tarea,
      codigo,
      puntos
    }, setAlumnos);
    setCodigo("");
    setPuntos("0");
  };

  return (
    <>
      <View style={styles.contenedor}>
        <TextInput
          style={styles.campo}
          value={codigo}
          onChangeText={setCodigo}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.campo}
          value={puntos}
          onChangeText={setPuntos}
          keyboardType="number-pad"
        />
      </View>
      <Boton texto="Agregar" onPress={agregar} />
    </>
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
