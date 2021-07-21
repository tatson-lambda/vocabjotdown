import React, { Component } from 'react'
import { ScrollView, TextInput, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }, 
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

export default class LoginScreen extends Component {

  constructor(){
    super()
    this.state={
      email:"",
      password:""
    }
  }

  login = () => {
    this.props.navigation.navigate('Home');
  }

  signup = () => {
    this.props.navigation.navigate('Home');
  }

  checkAlreadyLogin = () =>{
    return false;
  }

  componentDidMount(){
    /*
    debugger
    if(this.checkAlreadyLogin()){
      this.props.navigation.navigate('Home');
    }*/
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}  onPress={this.signup}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}