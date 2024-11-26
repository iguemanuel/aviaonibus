import React from "react";
import { Pressable, Image, StyleSheet, View } from "react-native";

interface ImageButtonProps {
  source?: string; // URL da imagem (opcional)
  icon?: React.ReactNode; // Componente como ícone (opcional)
  onPress: () => void; // Evento de clique
}

export default function ImageButton({
  source,
  icon,
  onPress,
}: ImageButtonProps) {
  return (
    <Pressable style={styles.loginButton} onPress={onPress}>
      {source && <Image source={{ uri: source }} style={styles.image} />}
      {icon && <View>{icon}</View>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  loginButton: {
    marginTop: 20,
    backgroundColor: "#3B82F6",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
});
