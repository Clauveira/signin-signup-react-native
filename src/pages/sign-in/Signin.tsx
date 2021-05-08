import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Signin: React.FC = () => {
    return (
        <View style={styles.contentBase}>
            <Text>Olá mundo!!</Text>
        </View>);
}

const styles = StyleSheet.create(
    {
        contentBase: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
);