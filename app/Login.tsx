import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Alert, 
  KeyboardAvoidingView, 
  ScrollView, 
  Image, 
  Platform, 
  Dimensions, 
  PixelRatio 
} from "react-native";
import React from "react";
import ImageButton from "@/components/ImageButton";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Login() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (user === "fulano" && password === "123") {
      router.push("/PassagersList")
    } else {
      Alert.alert("Falha na autenticação", "Senha ou usuários incorretos!");
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/images/battlebus.png")}
            style={styles.image}
          />

          <Text style={styles.titulo}>Bem vindo! ao BattleBus</Text>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  image: {
    width: screenWidth * 0.8, // 70% da largura da tela
    height: screenWidth * 0.5,
    resizeMode: "contain",
    marginBottom: 20,
  },

  titulo: {
    fontSize: 15,
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
    width: "100%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#3B82F6",
  },
});
