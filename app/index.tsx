import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.view}>
        <Text>Jannebög</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }
})