import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

export const SignIn: React.FC = () => {
    const [isHidePassword, setIsHidePassword] = useState(true);

    const [keepConnected, setKeepConnected] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignIn = useCallback(() => {
        if (email.includes('@') && email.includes('.')) {

        } else {
            alert('Email inválido.')
        }
    }, []);

    return (
        <View style={styles.contentBase}>
            <View style={styles.contentCenter}>

                <Text style={styles.title}>Fazer login</Text>

                <View style={styles.form}>

                    <View style={styles.emailWrapper}>
                        <Ionicons
                            size={25}
                            color="blue"
                            name="person-circle-outline"
                            style={styles.emailIcon}
                        />

                        <TextInput
                            value={email}
                            placeholder="Email"
                            onChangeText={setEmail}
                            style={styles.emailInput}
                        />
                    </View>

                    <View style={styles.passwordWrapper}>
                        <Ionicons
                            size={25}
                            name="lock-closed"
                            color="blue"
                            style={styles.passwordIconStart}
                        />

                        <TextInput
                            value={password}
                            placeholder="Password"
                            onChangeText={setPassword}
                            style={styles.passwordInput}
                            secureTextEntry={isHidePassword}
                        />

                        <Ionicons
                            size={25}
                            color="blue"
                            style={styles.passwordIconEnd}
                            name={isHidePassword ? "eye-off" : "eye"}
                            onPress={() => setIsHidePassword(!isHidePassword)}
                        />
                    </View>

                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            color="blue"
                            value={keepConnected}
                            onValueChange={setKeepConnected}
                        />
                        <Text>Manter conectado</Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            ...styles.signInButton,
                            opacity: (password.length < 3 || email.length) < 3 ? 0.5 : 1
                        }}
                        onPress={handleSignIn}
                        disabled={(password.length < 3 || email.length) < 3}
                    >
                        <Text style={styles.signButtonText}>Entrar</Text>
                    </TouchableOpacity>

                    <Text style={styles.haveNoAccount}>Não tem uma conta ainda?</Text>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>Cadastrar-se</Text>
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
        backgroundColor: '#CCD',
    },
    contentCenter: {
        width: '80%'
    },

    title: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 36,
    },
    subTitle: {
        fontWeight: '300',
        fontSize: 22,
    },


    form: {
        marginTop: 25,
    },


    emailIcon: {
        marginLeft: 10,
        marginRight: -35,
    },
    emailWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    emailInput: {
        borderColor: 'blue',
        paddingLeft: 45,
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        flex: 1,
    },

    passwordIconStart: {
        marginLeft: 10,
        marginRight: -35,
    },
    passwordIconEnd: {
        marginRight: 10,
        marginLeft: -35,
    },
    passwordWrapper: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    passwordInput: {
        borderColor: 'blue',
        paddingRight: 45,
        paddingLeft: 45,
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        flex: 1,
    },


    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },


    signButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    signInButton: {
        padding: 15,
        marginTop: 15,
        borderRadius: 4,
        backgroundColor: 'blue',
    },


    haveNoAccount: {
        marginTop: 20,
        textAlign: 'center',
    },
    signUpButtonText: {
        color: 'blue',
        textAlign: 'center',
    },
    signUpButton: {
        padding: 15,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'blue',
    }
});