import React from 'react';
import { StyleSheet, SafeAreaView, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { Card} from 'react-native-elements'


const DATA = [
  { id: 1, title: 'shit', content: 'This is a test content', },
  { id: 2, title: 'pee', content: 'This is a test content', },
  { id: 3, title: 'pusy', content: 'This is a test content', },
  { id: 4, title: 'earth', content: 'This is a test content', },
  { id: 5, title: 'phone', content: 'This is a test content', },
  { id: 6, title: 'pet', content: 'This is a test content', },
  { id: 7, title: 'earsplitting', content: 'This is a test content', },
  { id: 8, title: 'roomy', content: 'This is a test content', },
  { id: 9, title: 'quaint', content: 'This is a test content', },
  { id: 10, title: 'hose', content: 'This is a test content', },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20 ,
  },
  contentText: {
  }
})

export default class ArticleScreen extends React.Component {
  render() {

    const renderItem = ({ item }) => (
      <TouchableOpacity>
        <Card>
          <Card.Title>{item.content}</Card.Title>
          <Card.Divider/>
          <Text style={styles.contentText}>{item.content}</Text>
        </Card>
      </TouchableOpacity>
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />

      </SafeAreaView>
    );
  }
}