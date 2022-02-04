import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";

export default function UserGuest(props) {
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/user-guest.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}> Consulta tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        BlablablablablalbalblalbalblaBlablablablablalbalblalbalbla
        Blablablablablalbalblalbalbla Blablablablablalbalblalbalbla
        Blablablablablalbalblalbalbla Blablablablablalbalblalbalbla
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="Ver tu perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => console.log("Click!")}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRigth: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    marginBottom: 20,
    textAlign: "center",
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnContainer: { width: "70%" },
});
