import React from "react";
import { View, Text, StyleSheet, SectionList, Image } from "react-native";
import { Passenger, organizeByCountry } from "@/helpers/Helper";
import data from "@/services/data-passangers";
import HeaderWithTitle from "@/components/header/HeaderTittle";
import { PRIMARY_COLOR } from "@/constants/themeSettings";

export default function List() {
  const formattedData: Passenger[] = data.map((passenger) => ({
    id: passenger.id,
    name: passenger.passenger_name,
    avatar: passenger.passenger_avatar,
    origin: passenger.origin,
    destination: passenger.destination,
  }));

  const sections = organizeByCountry(formattedData).map((section) => ({
    title: section.country,
    data: section.passengers,
  }));

  return (
    <View style={styles.container}>
      <HeaderWithTitle title="Lista de Passageiros" />
      <SectionList
        sections={sections}
        keyExtractor={(item,index) => index.toString()}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.passengerItem}>
            <Image
              source={{ uri: item.avatar }}
              style={styles.passengerAvatar}
            />
            <View style={styles.passengerInfo}>
              <Text style={styles.passengerName}>{item.name}</Text>
              <Text style={styles.passengerCountry}>
                {item.origin} → {item.destination}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  sectionHeader: {
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#f8f9fa",
    fontWeight: "bold",
  },
  passengerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e2e8f0",
    borderRadius: 5,
    marginBottom: 5,
  },
  passengerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "#ccc",
  },
  passengerInfo: {
    flex: 1,
  },
  passengerName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  passengerCountry: {
    fontSize: 12,
    color: "#555",
  },
});
