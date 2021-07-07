import React from 'react';
import {  StyleSheet, View, Text, StatusBar, SafeAreaView, FlatList } from 'react-native';


const DATA = [
    {  id: 1, title: 'shit', },
    {  id: 2, title: 'pee', },
    { id: 3, title: 'pusy', },
    { id: 4, title: 'earth', },
    { id: 5, title: 'phone', },
    { id: 6, title: 'pet', },
    { id: 7, title: 'earsplitting', },
    { id: 8, title: 'roomy', },
    { id: 9, title: 'quaint', },
    { id: 10, title: 'hose', },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  
export default class VocabScreen extends React.Component {
    
    render() {
      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

      return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
            />
        </SafeAreaView>
        );
    }
  }