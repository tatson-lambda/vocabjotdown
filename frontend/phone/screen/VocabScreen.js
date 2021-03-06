import React from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView, Button, Alert } from 'react-native';
import { AlphabetList } from "react-native-section-alphabet-list";

const data = [
  { key: 1, value: 'shit', },
  { key: 2, value: 'pee', },
  { key: 3, value: 'pusy', },
  { key: 4, value: 'earth', },
  { key: 5, value: 'phone', },
  { key: 6, value: 'pet', },
  { key: 7, value: 'earsplitting', },
  { key: 8, value: 'roomy', },
  { key: 9, value: 'quaint', },
  { key: 10, value: 'hose', },
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
  listItemContainer: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderTopColor: '#e6ebf2',
    borderTopWidth: 1,
  },

  listItemLabel: {
    color: '#8e8e93',
    fontSize: 14,
  },

  sectionHeaderContainer: {
    height: 40,
    backgroundColor: '#8e8e93',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  sectionHeaderLabel: {
    color: "white",
  },

  listHeaderContainer: {
    height: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  wordHeader: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  headerDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15
  },
  
})



export default class VocabScreen extends React.Component {

  addVocabulary() {

  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerDiv}>
          <Text style={styles.wordHeader} >10 words</Text>
          <Button
            onPress={() => Alert.alert('Simple Button pressed')}
            title="Add"
            color="#841584"
            accessibilityLabel="Add vocabulary to this list"
          />
        </View>

        <AlphabetList
          data={data}
          indexLetterStyle={{
            color: 'blue',
            fontSize: 15,
          }}
          renderCustomItem={(item) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.listItemLabel}>{item.value}</Text>
            </View>
          )}
          renderCustomSectionHeader={(section) => (
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}