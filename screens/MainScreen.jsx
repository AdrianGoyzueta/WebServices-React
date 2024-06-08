import { StyleSheet, View } from "react-native";
import Carta from "../components/Carta";
import Footer from "../components/Footer";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.contendedorCartas}>
        <Carta
          icon="people"
          texto="Alumnos"
          onPress={() => navigation.navigate("Alumnos")}
        />
        <Carta
          icon="code"
          texto="Tareas"
          onPress={() => navigation.navigate("Tareas")}
        />
        <Carta
          icon="check-circle"
          texto="Presentado"
          onPress={() => navigation.navigate("Presentado")}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  contendedorCartas: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 20,
  },
});
