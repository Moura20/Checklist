
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AppItem from './AppItem';

export default function AppList() {

    const [items, setItems] = useState([
        { id: 1, quantidade: 5, descricao: "arroz" },
        { id: 2, quantidade: 1, descricao: "feijão" },
        { id: 3, quantidade: 1, descricao: "açucar" },
        { id: 4, quantidade: 1, descricao: "farinha" },
        { id: 5, quantidade: 1, descricao: "katchup" },
        { id: 6, quantidade: 1, descricao: "queijo-ralado" }
    ]);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.titulo}> CheckList</Text>
            <FontAwesome5 style={styles.icone} name="shopping-cart" size={40} color="black" />
            <Text style={styles.title}>Lista de Compras</Text>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.itemsContainer}>
                {items.map(item => {
                    return <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} />

                })  }
            </ScrollView>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E64FE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20

    },
    scrollContainer: {
        flex: 1,
        width: '90%',
    },
    itemsContainer: {
        flex: 1,
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },


    titulo: {
        alignItems: 'center',
        fontSize: 30,

    },

    icone: {
        alignItems: 'center',
        paddingBottom: 18,
    },
});

