
import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View, SafeAreaView, Linking, Alert} from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'

import InfoText from '../shared/InfoText'

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
})

export default class ProfileScreen extends Component {
  /*
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  }
  

  */

  static navigationOptions = ({ navigation }) => {
    return {
      headerShown: false
    };
    
  }

  state = {
    pushNotifications: true,
  }

  onPressSetting = () => {
    //this.props.navigation.navigate('Options')
  }

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))
  }

  onPressCopyright = async () => {
    var url = "https://www.google.com"
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  onPressWebsite = async () => {
    var url = "https://www.google.com"
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  onPressSwitchLanguage = () => {

  }

  onPressChangeLevel = () => {
    this.props.navigation.navigate('Resources')
  }

  onPressLogout = () => {

  }


  render() {
    //const { avatar, name, emails: [firstEmail] } = this.props
    let avatar = "https://avatars.githubusercontent.com/u/1510494?s=400&v=4"
    let name = "Tom Lai"
    let email = "ymlai87416@gmail.com"

    return (
      <SafeAreaView>
        <ScrollView style={styles.scroll}>
          <View style={styles.userRow}>
            <View style={styles.userImage}>
              <Avatar
                rounded
                size="large"
                source={{ uri: avatar }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 16 }}>{name}</Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 16,
                }}
              >
                {email}
              </Text>
            </View>
          </View>
          <InfoText text="Account" />
          <View>
            <ListItem 
              onPress={() => this.onPressSwitchLanguage()}
              onLongPress={() => this.onPressSwitchLanguage()}>
              <ListItem.Content>
                <ListItem.Title>Switch Language</ListItem.Title>
                <ListItem.Subtitle>English</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>

            <ListItem 
              onPress={() => this.onPressChangeLevel()}
              onLongPress={() => this.onPressChangeLevel()}>
              <ListItem.Content>
                <ListItem.Title>Current level</ListItem.Title>
                <ListItem.Subtitle>B2</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>

            <ListItem 
              onPress={() => this.onPressLogout()}
              onLongPress ={() => this.onPressLogout()}>
              <ListItem.Content>
                <ListItem.Title>Clear and Logout</ListItem.Title>
              </ListItem.Content>
            </ListItem>            
          </View>
          <InfoText text="More" />
          <View>
          <ListItem 
              onPress={() => this.onPressWebsite()}
              onLongPress ={() => this.onPressWebsite()}>
              <ListItem.Content>
                <ListItem.Title>Website</ListItem.Title>
              </ListItem.Content>
            </ListItem>     

            <ListItem 
              onPress={() => this.onPressCopyright() }
              onLongPress ={() => this.onPressCopyright()}>
              <ListItem.Content>
                <ListItem.Title>Copyright</ListItem.Title>
              </ListItem.Content>
            </ListItem>     

            
          </View>
        </ScrollView>
      </SafeAreaView>

    )
  }
}

