import React from 'react';
import { View, Image } from 'react-native';

const DELAY_SECOND = 500;

export default class SplashScreen extends React.Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, DELAY_SECOND);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image source={require('../assets/icon.png')} />
      </View>
    );
  }
}
