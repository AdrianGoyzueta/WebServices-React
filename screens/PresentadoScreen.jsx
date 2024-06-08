import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Entrega from "../components/Entrega";
import { get } from "../utils/fetchData";

export default function PresentadoScreen({ navigation }) {
  const [entregas, setEntregas] = useState([]);

  useEffect(() => {
    get("http://192.168.1.102:8000/api/entregas/", setEntregas)
  }, [])
  
  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      {
        entregas.map((entrega) => (
          <Entrega key={entrega.tarea} entrega={entrega} />
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    gap: 20,
  },
});
