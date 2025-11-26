import Car from "@/components/pr-components/carChoise";
import InputSearchAdress from "@/components/pr-components/inputSearchAdress";
import SecondaryButton from "@/components/pr-components/secondaryButton";
import { ScrollView, StyleSheet, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ gap: 12, marginBottom: 24 }}>
        <Car
          title={"Standard"}
          price={"$1.99"}
          minutes={"2 min"}
          seats={"4 Seats"}
        ></Car>
        <Car
          style={styles.accent}
          title={"Comfort"}
          price={"$1.99"}
          minutes={"2 min"}
          seats={"4 Seats"}
        ></Car>
        <Car
          title={"Business"}
          price={"$1.99"}
          minutes={"2 min"}
          seats={"4 Seats"}
        ></Car>
        <Car
          title={"Van"}
          price={"$1.99"}
          minutes={"2 min"}
          seats={"4 Seats"}
        ></Car>
      </View>
      <View style={{ width: "100%", gap: 24 }}>
        <InputSearchAdress text="pick up"></InputSearchAdress>
        <InputSearchAdress text="drop off"></InputSearchAdress>
        <SecondaryButton text="Next Step" style={{ width: "100%" }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  accent: { backgroundColor: "#FCFAE9" },
  container: {
    flex: 1,
    justifyContent: "flex-end",

    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 24,

    backgroundColor: "#fff",
  },
  title: {
    color: "blue",
  },
  buttonsList: {
    gap: 36,
    alignItems: "center",
  },
  textInput: {
    padding: 16,
    borderColor: "black",
    borderWidth: 1,
  },
});
