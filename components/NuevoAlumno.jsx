import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Boton from "./Boton";
import Label from "./Label";
import { post } from "../utils/fetchData";

export default function NuevoAlumno({ setAlumnos }) {
  const [codigo, setCodigo] = useState("");
  const [materno, setMaterno] = useState("");
  const [paterno, setPaterno] = useState("");
  const [nombre, setNombre] = useState("");

  const agregar = () => {
    if (!codigo || !materno || !paterno || !nombre) {
      alert("Debe ingresar todos los datos");
      return;
    }
    post("http://url/api/alumnos/", { codigo, materno, paterno, nombre }, setAlumnos);
    setCodigo("");
    setMaterno("");
    setPaterno("");
    setNombre("");
  };

  return (
    <View style={styles.contenedor}>
      <Label
        label="Código"
        value={codigo}
        setValue={setCodigo}
        numeric={true}
      />
      <Label label="Paterno" value={paterno} setValue={setPaterno} />
      <Label label="Materno" value={materno} setValue={setMaterno} />
      <Label label="Nombre" value={nombre} setValue={setNombre} />
      <Boton texto={"Agregar"} onPress={agregar} />
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
