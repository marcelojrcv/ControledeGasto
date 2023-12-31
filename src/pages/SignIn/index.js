import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Acessar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} >
                    <Text style={styles.buttonTextRegister}> Não possui uma conta? Cadastre-se </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingLeft: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 2,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonRegister: {
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonTextRegister: {
        color: '#a1a1a1',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
