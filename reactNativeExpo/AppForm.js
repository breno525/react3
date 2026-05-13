import { StatusBar} from 'expo-status-bar';
import React from 'react';
import { TextInput } from 'react-native-web';

export default function AppForm() {
    return (
        <View style={styles.container}>
        <Text style={style.title}>Item para comprar</Text>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="O que está faltando em casa?"
            clearButtonMode="always" />
            <TextInput
            style={styles.input}
            placeholder="Digite a quantidade"
            keyboardType={'numeric'}
            clearButtonMode="always" />
            <Touchable0pacity style={styles.buttonText}>
                <Text style={styles.buttonText}>Salvar</Text>
                </Touchable0pacity>
         </View>
         <StatusBar style="light" />
         </View>
    );
}
    