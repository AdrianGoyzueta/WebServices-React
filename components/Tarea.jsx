import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Label from "./Label";

export default function Tarea({ tarea }) {
  const [nombre, setNombre] = useState(tarea.nombre);
  const [descripcion, setDescripcion] = useState(tarea.descripcion);

  return (
    <View style={styles.contenedor}>
      <Label
        label="Nombre"
        value={nombre}
        setValue={setNombre}
        editable={false}
      />
      <Label
        label="Descripción"
        value={descripcion}
        setValue={setDescripcion}
        editable={false}
      />
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
});
