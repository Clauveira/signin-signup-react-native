import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

export const SignIn: React.FC = () => {
    return (
        <View style={styles.contentBase}>
            <View style={styles.contentCenter}>
                <Text style={styles.title}>Olá mundo</Text>
                <Text style={styles.subTitle}>Vamos desenvolver um app?</Text>

                {/* <View>
          <Image
            source={require("src/shared/assets/logo-mobile.ico")}
          />
        </View> */}

                <View style={styles.form}>
                    <TextInput
                        placeholder="Username"
                        style={styles.emailInput}
                    />
                    <TextInput
                        placeholder="Senha"
                        style={styles.emailPassword}
                    />

                    <View style={styles.checkboxContainer}>
                        <Checkbox />
                        <Text >Manter conectado</Text>
                    </View>

                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.textSignInButton}>Entrar</Text>
                    </TouchableOpacity>
                    <Text>Não tem uma conta ainda?</Text>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.textSignUpButton}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentBase: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AAF',
    },
    contentCenter: {
        width: '80%',

    },
    subTitle: {
        fontWeight: '300',
        fontSize: 22,
    },
    title: {
        fontWeight: '600',
        fontSize: 36,
    },
    form: {},
    emailInput: {
        borderColor: 'blue',
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
    },
    emailPassword: {
        borderColor: 'blue',
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    signInButton: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 8,
        alignContent: 'center',
    },
    signUpButton: {
        padding: 10,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 8,
    },
    textSignInButton: {
        textAlign: 'center',
        color: 'white'
    },
    textSignUpButton: {
        textAlign: 'center',
    }
});