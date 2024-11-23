import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import ImageButton from "@/components/ImageButton";
import { Image } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log("User: ", user);
    console.log("Password: ", password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/battlebus.png")} // Caminho da imagem local
        style={styles.image}
      />

      <Text style={styles.titulo}>Bem vindo! ao FornaiBus</Text>
      <Text style={styles.subtitulo}>Faça seu login</Text>

      <TextInput
        style={styles.input}
        placeholder="User"
        onChangeText={setUser}
        value={user}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <ImageButton
        icon={<MaterialIcons name="login" size={24} color="white" />}
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "80%",
  },

  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 5,
    borderColor: "#3B82F6",
  },
});
