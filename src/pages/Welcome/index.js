import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native'
export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation='flipInY'
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <Animatable.View delay= {600} animation='fadeInUp' style={styles.containerForm}>
        <View style={styles.formContent}>
          <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
          <Text style={styles.text}>Faça o login para começar</Text>
          <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}> Acessar </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#38a69d',
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  containerForm: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  formContent: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#38a69d',
    paddingVertical: 8,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
