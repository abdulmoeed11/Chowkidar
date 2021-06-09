import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';
import { Component } from 'react'
import * as firebase from 'firebase';

export default class LoginScreen extends Component {


  constructor(props){
    super(props)
    this.state={
      image : '',
      ids : '',
      text : '',
      id : '',
      picno : 0
  }
  // firebase.database().ref('Chowk/id').on('value', (snapshot) => {
  //   const liveVal = snapshot.val();
  //   this.setState({
  //       ids: liveVal,
  //   });
  // });
}


  render() {
    
    return (
<KeyboardAvoidingView style={styles.container}>
    <View style={styles.container}>
        <View style ={styles.logoContainer}>
        <Image source={require('./modassets/logo2.png')}
            style = {styles.imageStylea}
        />
        </View>
        <View>
        <View style={styles.containera}>
                <Text
                 style = {styles.textStyle}
                 >Email/Username
                 </Text>
                <TextInput
                style = {styles.input}
                placeholder='Enter email'
                returnKeyType='next'
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                // onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect = {false}
                placeholderTextColor='rgba(255,255,255,0.7)'>
                </TextInput>
                <Text
                style = {styles.textStyle}
                >ID
                </Text>
                <TextInput
                style = {styles.input}
                placeholder='ID'
                returnKeyType='go'
                secureTextEntry
                onChangeText={id => this.setState({ id })}
                // ref = {(input) => this.passwordInput = input }
                placeholderTextColor='rgba(255,255,255,0.7)'>
                </TextInput>
                <TouchableOpacity onPress = {() => {
                console.log(this.state.id)
                if (this.state.id == '12a45'){
                  firebase.database().ref('Chowk/email').set(this.state.text);   
                  this.props.navigation.navigate('MainMenu') 
                }
                else{
                  alert('ID is incorrect')
                }
  }}>
                    <View
                    style={styles.buttonStyle}>
                        <Text
                        style={styles.textStyle}
                        >Log in
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* <LoginForm></LoginForm> */}
        </View>
    </View>
    </KeyboardAvoidingView>
    )
  }
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2f385d',
    },
    imageStylea:{
      width:250,
      height:250,
      marginTop:-80,
    },
    logoContainer:{
      alignItems:'center',
      flexGrow: 1,
      justifyContent:'center',
    },
    textStylea: {
      fontSize: 30,
      fontStyle:'italic',
    },

    containera:{
        padding:20,
    },

    input:{
        height:50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal:10,
        marginBottom:20,
        borderRadius:10,
        color:'#FFF'
    },

    textStyle:{
        left:5,
        color:'#FFF',
        fontSize:15
    },

    buttonStyle:{
        backgroundColor:'#FDB65E',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1,
        borderRadius:10
    }

    


  });
  

// export default LoginScreen;