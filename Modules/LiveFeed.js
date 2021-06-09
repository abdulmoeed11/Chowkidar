import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';
import * as WebBrowser from 'expo-web-browser';


export default class LiveFeed extends Component {

    constructor(props){
        super(props)
        this.state={
            live : '0'
        }
    }

    live_state = async() => {
        firebase.database().ref('Chowk/live').on('value', (snapshot) => {
            const liveVal = snapshot.val();
            this.setState({
                live: liveVal,
            });
          });
          console.log(this.state.live)
        //   console.log(snapshot)
          if (this.state.live == '0') {
            firebase.database().ref('Chowk/live').set('1')  
            let result = await WebBrowser.openBrowserAsync('https://meet.jit.si/chowkidar');
            setResult(result);
          } else {
            firebase.database().ref('Chowk/live').set('0')  
          }
        
    }

    render() {
        return (
            <TouchableOpacity onPress={this.live_state}>
                <View style={styles.container}>
                    <Text> Live Feed </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FDB65E',
        height:80,
        marginBottom:20,
        // width:200,
        // flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        shadowRadius:20,
    },
})
