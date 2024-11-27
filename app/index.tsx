import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Login from "./Login";
import HeaderHidden from "@/components/header/HeaderHidden";

export default function index() {
  return (
    <View style={styles.container}>
      <HeaderHidden />
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
