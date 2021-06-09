import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';


export default class LockOpen extends Component {
    constructor(props){
        super(props)
        this.state={
            motor : ''
        }
    }

openLock = async() => {
    firebase.database().ref('Chowk/motor').on('value', (snapshot) => {
        const motorVal = snapshot.val();
        this.setState({
            motor: motorVal,
        });
      });
      console.log(this.state.motor)
    //   console.log(snapshot)
      if (this.state.motor == '0') {
        firebase.database().ref('Chowk/motor').set('1')  
      } else {
        firebase.database().ref('Chowk/motor').set('0')  
      }

}
    render() {
        return (
            <TouchableOpacity onPress={this.openLock}>
                <View style={styles.container}>
                    <Text> Lock Open </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FDB65E',
        height:80,
        // width:200,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        shadowRadius:20,
    },
})
