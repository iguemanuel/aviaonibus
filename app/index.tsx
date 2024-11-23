import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Login from "./Login";

export default function index() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
