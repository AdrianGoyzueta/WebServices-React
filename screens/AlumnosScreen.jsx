import { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Alumno from "../components/Alumno";
import NuevoAlumno from "../components/NuevoAlumno";
import { get } from "../utils/fetchData";

export default function AlumnosScreen({ navigation }) {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    get("http://url/api/alumnos/", setAlumnos);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      {
        alumnos.map((alumno) => (
          <Alumno key={alumno.codigo} alumno={alumno} />
        ))
      }
      <NuevoAlumno setAlumnos={setAlumnos} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    gap: 20,
  },
});
