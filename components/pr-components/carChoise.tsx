import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const images = {
  Van: require("../../assets/images/cars/Van.png"),
  Standard: require("../../assets/images/cars/Standard.png"),
  Business: require("../../assets/images/cars/Business.png"),
  Comfort: require("../../assets/images/cars/Comfort.png"),
};

export default function Car({ title, price, minutes, seats, style }) {
  return (
    <TouchableOpacity style={[styles.car, style]}>
      <Image style={styles.photo} source={images[title]} />
      <View style={styles.wrapperDesc}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <View>
            <Text style={styles.title}>{price}</Text>
          </View>
          <View>
            <Text>{minutes}</Text>
          </View>
          <View>
            <Text>{seats}</Text>
          </View>
        </View>
      </View>
      <Icon name="radio-button-unchecked" size={28} color="#DED47B" />
      {/* <Icon name="radio-button-checked" size={28} color="#DED47B" /> */}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  car: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 16,

    width: "100%",
    height: 68,

    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DED47B",
  },

  photo: {
    width: 82,
    height: 42,
    resizeMode: "contain",
  },

  info: {
    flex: 1,
    gap: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  details: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  wrapperDesc: {
    marginRight: "auto",
  },

  price: { fontSize: 16 },
  minutes: { fontSize: 16 },
  seats: { fontSize: 16 },
});
