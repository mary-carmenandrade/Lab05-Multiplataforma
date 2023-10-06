import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const carouselData = [
        { id: 1, image: require('../img/moda.jpg') },
        { id: 2, image: require('../img/moda2.jpg') },
        { id: 3, image: require('../img/moda3.jpg') },
    ];

    const renderItem = ({ item }) => {
        return (
            <Image
                source={item.image}
                style={styles.carouselImage}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                {/* Carrusel de imágenes */}
                <Carousel
                    data={carouselData}
                    renderItem={renderItem}
                    sliderWidth={300}
                    itemWidth={200}
                    layout={'default'}
                    containerCustomStyle={styles.carouselContainer}
                />
                <Text style={styles.title}>¡Bienvenido a mi Tienda Online Shopping!</Text>
                
                <Text style={styles.description}>Esta es una pequeña descripción de mi página.</Text>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate("Stack")}
                    style={[styles.button, { backgroundColor: 'blue' }]}
                >
                    <Text style={styles.buttonText}>Mi perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
    },
    centerContent: {
        alignItems: 'center',
    },
    carouselContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    carouselImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
});

export default HomeScreen;
