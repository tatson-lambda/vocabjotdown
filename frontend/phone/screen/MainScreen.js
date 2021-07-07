import React from 'react';
import {  StyleSheet, View, Text, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
  }
})

export default class App extends React.Component {
    render() {
      return (
      <View style={styles.container}>
        <Text>This is the main screen!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}