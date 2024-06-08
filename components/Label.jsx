import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Label({
  label,
  value,
  setValue,
  editable = true,
  numeric = false,
}) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        editable={editable}
        keyboardType={numeric ? "numeric" : "default"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    borderColor: "#05161A",
    borderRadius: 8,
    borderWidth: 1,
    color: "#05161A",
    flex: 1,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    width: 100,
  },
});
