import React from 'react';
import {  StyleSheet, View, Text, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default class ArticleScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Text>This is article screen</Text>
            <StatusBar style="auto" />
        </View>
        );
    }
  }