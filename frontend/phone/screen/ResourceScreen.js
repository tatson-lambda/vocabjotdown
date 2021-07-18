import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View, SafeAreaView, Alert, StatusBar } from 'react-native'
import { AlphabetList } from "react-native-section-alphabet-list";

const data = [
  { key: 1, value: 'shit', learnt: false },
  { key: 2, value: 'pee', learnt: false },
  { key: 3, value: 'pusy', learnt: false },
  { key: 4, value: 'earth', learnt: true },
  { key: 5, value: 'phone', learnt: true },
  { key: 6, value: 'pet', learnt: false },
  { key: 7, value: 'earsplitting', learnt: true },
  { key: 8, value: 'roomy', learnt: false },
  { key: 9, value: 'quaint', learnt: false },
  { key: 10, value: 'hose', learnt: false },
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
    margin: 15
  }
})
export default class ResourceScreen extends Component {

  markLearnt() {

  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.wordHeader} >B2 word list (100 words) </Text>
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
