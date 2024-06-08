import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AlumnosScreen from "./screens/AlumnosScreen";
import MainScreen from "./screens/MainScreen";
import PresentadoScreen from "./screens/PresentadoScreen";
import TareasScreen from "./screens/TareasScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#072E33",
          },
        }}
      >
        <Stack.Screen
          options={{ title: "Web Services - React Native" }}
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen name="Alumnos" component={AlumnosScreen} />
        <Stack.Screen name="Tareas" component={TareasScreen} />
        <Stack.Screen name="Presentado" component={PresentadoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
