import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { Constants } from 'expo'; 
import SplashScreen from './screen/SplashScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import MainScreen from './screen/MainScreen';
import ArticlesScreen from './screen/ArticlesScreen';
import VocabScreen from './screen/VocabScreen';
import ProfileScreen from './screen/ProfileScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: MainScreen,
    Vocab: VocabScreen,
    Article: ArticlesScreen,
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (routeName === 'Vocab') {
          iconName = focused ? 'ios-text' : 'ios-text-outline';
        } else if (routeName === 'Article') {
          iconName = focused ? 'reader' : 'reader-outline';
        } else if (routeName === 'Profile') {
          iconName = focused ? 'person-circle' : 'person-circle-outline';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const RootNavigator = createSwitchNavigator({
  Home: TabNavigator,
  Splash: SplashScreen
}, {
  initialRouteName: 'Splash'
});

export default createAppContainer(RootNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
