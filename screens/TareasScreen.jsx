import { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import NuevaTarea from "../components/NuevaTarea";
import Tarea from "../components/Tarea";
import { get } from "../utils/fetchData";

export default function TareasScreen({ navigation }) {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    get("http://url/api/tareas/", setTareas);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      {
        tareas.map((tarea) => (
          <Tarea key={tarea.nombre} tarea={tarea} />
        ))
      }
      <NuevaTarea setTareas={setTareas}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    gap: 20,
  },
});
