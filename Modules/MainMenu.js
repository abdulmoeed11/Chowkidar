import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import DataCollect from './DataCollect'
import LiveFeed from './LiveFeed'

import LockOpen from './LockOpen'

export default class MainMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.buttondata}>
                    <LockOpen/> 
                    <LiveFeed></LiveFeed>
                    <DataCollect></DataCollect>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2f385d',
        flex:1,
    },

    buttondata:{
        padding: 40,
    }
})
