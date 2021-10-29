import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text } from "react-native";

function Main(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/pizza2.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <TextInput
        placeholder="Welcome to Pizza Delivery"
        textBreakStrategy="highQuality"
        keyboardAppearance="dark"
        placeholderTextColor="rgba(255,0,0,1)"
        autoCapitalize="sentences"
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.loremIpsum2}></Text>
      <Text style={styles.toDoList}>To do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 306,
    alignSelf: "center"
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 176,
    marginTop: -278,
    marginLeft: 100
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -103,
    marginLeft: 152
  },
  toDoList: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 64,
    marginTop: -36,
    marginLeft: 155
  }
});

export default Main;
