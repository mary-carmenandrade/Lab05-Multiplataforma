import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.box}>
          <Text style={styles.title}>Mi Perfil</Text>
          <Image
            style={styles.image}
            source={require('../img/perfil.png')}
          />
          <Text style={styles.name}>Andrade Chura Mary Carmen</Text>
          <Text style={styles.jobTitle}>Soy estudiante de Diseño y Desarrollo de Software, pero una de mis cosas favoritas es la moda, me encanta la ropa de color negro.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  background: {
    backgroundColor: 'rgba(0, 47, 167, 0.5)',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  box: {
    width: 300,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  jobTitle: {
    fontSize: 16,
    color: 'white',
  },
});

export default ProfileScreen;
