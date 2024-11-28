import { View, Text, StyleSheet, Linking } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import HeaderWithTitle from "@/components/header/HeaderTittle";
import { PRIMARY_COLOR } from "@/constants/themeSettings";

export default function About() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderWithTitle title="Sobre"/>
      
      <View style={styles.content}>
        <Text style={styles.title}>About</Text>
        <View style={styles.infoBox}>
          <Text style={styles.version}>Versão 1.0</Text>
          <Text style={styles.developedBy}>Desenvolvido por:</Text>
          <Text style={styles.name}>Igor Emanuel Roque do Nascimento</Text>
          <Text
            style={styles.githubLink}
            onPress={() => Linking.openURL("https://github.com/iguemanuel")}
          >
            Acesse o GitHub
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  content: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginBottom: 10,
    textAlign: "center",
  },
  infoBox: {
    backgroundColor: "#e2e8f0",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  version: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  developedBy: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  collaborator: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#777",
  },
  githubLink: {
    fontSize: 16,
    color: PRIMARY_COLOR,
    marginTop: 10,
  },
});
