import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Label from "./Label";

export default function Alumno({ alumno }) {
  const [codigo, setCodigo] = useState(alumno.codigo.toString());
  const [materno, setMaterno] = useState(alumno.materno);
  const [paterno, setPaterno] = useState(alumno.paterno);
  const [nombre, setNombre] = useState(alumno.nombre);

  return (
    <View style={styles.contenedor}>
      <Label
        label="Código"
        value={codigo}
        setValue={setCodigo}
        editable={false}
        numeric={true}
      />
      <Label
        label="Paterno"
        value={paterno}
        setValue={setPaterno}
        editable={false}
      />
      <Label
        label="Materno"
        value={materno}
        setValue={setMaterno}
        editable={false}
      />
      <Label
        label="Nombre"
        value={nombre}
        setValue={setNombre}
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
