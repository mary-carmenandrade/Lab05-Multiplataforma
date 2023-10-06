import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ShopScreen = () => {
  const navigation = useNavigation();
  const sections = [
    {
      id: 1,
      title: "Ropa para damas",
      subTitle: "Últimas tendencias en moda femenina",
      data: [
        require("../img/modam1.jpg"),
        require("../img/modam2.jpg"),
        require("../img/modam3.jpg"),
        require("../img/modam4.jpg"),
      ],
    },
    {
      id: 2,
      title: "Ropa para varones",
      subTitle: "Estilo y comodidad para hombres",
      data: [
        require("../img/modav1.jpg"),
        require("../img/modav2.jpg"),
        require("../img/modav3.jpg"),
        require("../img/modav4.jpg"),
      ],
    },
    {
      id: 3,
      title: "Ropa para niños",
      subTitle: "Diversión y moda para los más pequeños",
      data: [
        require("../img/modan1.jpg"),
        require("../img/modan2.jpg"),
        require("../img/modan3.jpg"),
        require("../img/modan4.jpg"),
      ],
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <Image
        source={item}
        style={styles.image}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <Text style={styles.sectionSubtitle}>{item.subTitle}</Text>

            {/* FlatList para mostrar las imágenes */}
            <FlatList
              data={item.data}
              horizontal
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Stack")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Mi perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  sectionContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  sectionSubtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: "cover",
    marginRight: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});

export default ShopScreen;
