import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Boton from "./Boton";
import Label from "./Label";
import { post } from "../utils/fetchData";

export default function NuevaTarea({ setTareas }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const agregar = () => {
    if (!nombre || !descripcion) {
      alert("Debe ingresar nombre y descripción");
      return;
    }
    post("http://192.168.1.102:8000/api/tareas/", { nombre, descripcion }, setTareas);
    setNombre("");
    setDescripcion("");
  }

  return (
    <View style={styles.contenedor}>
      <Label
        label="Nombre"
        value={nombre}
        setValue={setNombre}
      />
      <Label
        label="Descripción"
        value={descripcion}
        setValue={setDescripcion}
      />
      <Boton texto={"Agregar"} onPress={agregar}/>
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
