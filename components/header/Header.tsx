import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { usePathname, router } from "expo-router";
import { PRIMARY_COLOR } from "@/constants/themeSettings";

export default function HeaderMenu() {
  const { showActionSheetWithOptions } = useActionSheet();
  const currentPath = usePathname(); 

  const onPress = () => {
    const isAboutPage = currentPath === "/About";

    const options = isAboutPage
      ? ["Logout", "Cancelar"]
      : ["Logout", "Cancelar", "Sobre"];
    const destructiveButtonIndex = 0
    const cancelButtonIndex = 1 
   
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            if (router.canDismiss()) {
              router.dismissAll();
            }
            router.replace("/Login");
            break;
  
          case 1: 
            break;
            
            case 2: 
            router.push("/About");
            break;
        }
      }
    );
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.menuButton}>
      <MaterialIcons name="menu" size={24} color={PRIMARY_COLOR} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 10,
  },
});
