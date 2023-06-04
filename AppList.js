import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AppItem from './AppItem';
import Database from './Database';

export default function AppList({ route, navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Database.getItems().then(items => setItems(items));
  }, [route]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.titulo}>CheckList</Text>
      <FontAwesome5 style={styles.icone} name="shopping-cart" size={50} color="black" />
      <Text style={styles.title}>Lista de Compras</Text>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}>
        {items.map(item => {
          return <AppItem key={item.id} id={item.id} item={item.quantidade + ' de ' + item.descricao} navigation={navigation} />
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    justifyContent: 'center'
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
    width: '90%'
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
  icone: {
    alignItems: 'center',
    paddingBottom: 18,
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,

  }
});
