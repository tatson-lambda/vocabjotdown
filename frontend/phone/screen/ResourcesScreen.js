import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View, SafeAreaView, StatusBar, Button } from 'react-native'
import {  ListItem, Overlay } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "space-between",
    marginBottom: 10
  },
  headerText: {
    fontSize: 25 
  },
});

export default class ResourcesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      level: "B2"
    };
  }
  
  list = [
    {
      name: 'A1',
      subtitle: 'Breakthrough'
    },
    {
      name: 'A2',
      subtitle: 'Waystage'
    },
    {
      name: 'B1',
      subtitle: 'Threshold'
    },
    {
      name: 'B2',
      subtitle: 'Vantage'
    },
    {
      name: 'C1',
      subtitle: 'Effective Operational Proficiency'
    },
    {
      name: 'C2',
      subtitle: 'Mastery'
    },
  ]

  toggleOverlay = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  changeLevel = (newLevel) => {
    this.setState({
      level: newLevel
    });
  };

  onPressSwitchLevel = () => {
    this.setState({
      visible: true
    });
  }

  onPressViewResource = (name) => {
    this.props.navigation.navigate('Resource')
  }

  render(){

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.headerText}>Your current level: C2</Text>
          <Button
              onPress={() => this.onPressSwitchLevel()}
              onLongPress={() => this.onPressSwitchLevel()}
              title="Change"
              color="#841584"
              accessibilityLabel="Change your current level"
            />
        </View>

        <Text>If you don't know you current level is, read the following word list and see how much vocabulary you have already learnt.</Text>
        
        <View>
          {
            this.list.map((l, i) => (
              <ListItem key={i} 
                onPress={() => this.onPressViewResource(l.name)}
                onLongPress={() => this.onPressViewResource(l.name)}>
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))
          }
        </View>


        <Overlay isVisible={this.state.visible} onBackdropPress={this.toggleOverlay}>
          <View>
            {
              this.list.map((l, i) => (
                <ListItem key={'a'+i} 
                  onPress={() => this.changeLevel(l.name)}
                  onLongPress={() => this.changeLevel(l.name)}>
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))
            }
          </View>
        </Overlay>
        
      </SafeAreaView>
    )
  }
}

