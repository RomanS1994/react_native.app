import MainButton from "@/components/pr-components/mainButton";
import Logo from "@/components/pr-components/logo";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />

      <View style={styles.buttonsList}>
        <MainButton text="Airport Transfer" />
        <MainButton text="City Transfer" />
        <MainButton text="Hourly Booking" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 26,

    backgroundColor: "#fff",
    paddingVertical: 40,
  },
  title: {
    color: "blue",
  },
  buttonsList: {
    gap: 36,
    alignItems: "center",
  },
});
