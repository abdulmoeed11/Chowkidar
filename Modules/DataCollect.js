import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';

export default class DataCollect extends Component {

    constructor(props){
        super(props)
        this.state={
            image : '',
            image1 : '',
            image2 : '',
            image3 : '',
            image4 : '',
            text : '',
            picno : 0
        }
    }

    pickImage = async () => {

        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
        
        
       if (!result.cancelled) {
            this.setState({
                image: result.uri,
            });
            console.log(result);
       }
            let result1 = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });
            
            
           if (!result1.cancelled) {
                this.setState({
                    image1: result1.uri,
                });
                console.log(result1);            
        }
        
        let result2 = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
        
        
       if (!result2.cancelled) {
            this.setState({
                image2: result2.uri,
            });
            console.log(result2);
       }
            let result3 = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });
            
            
           if (!result3.cancelled) {
                this.setState({
                    image3: result3.uri,
                });
                console.log(result3);
            }
                let result4 = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                  });
                
                
               if (!result4.cancelled) {
                    this.setState({
                        image4: result4.uri,
                    });
                    console.log(result4);                            
      }
    };

      uploadImage = async() =>{
        const response = await fetch(this.state.image);
        const blob = await response.blob();
        this.setState({
            image: '',
            });
        this.setState({
            picno: this.state.picno + 1,
        })
        console.log(this.state.picno)
        var ref = firebase.storage().ref().child(this.state.text + '/' + this.state.picno+ '.jpg');
        await ref.put(blob)
        const response1 = await fetch(this.state.image1);
        const blob1 = await response1.blob();
        this.setState({
            image: '',
            });
        this.setState({
            picno: this.state.picno + 1,
        })
        console.log(this.state.picno)
        var ref = firebase.storage().ref().child(this.state.text + '/' + this.state.picno+ '.jpg');
        await ref.put(blob1) 
        const response2 = await fetch(this.state.image2);
        const blob2 = await response2.blob();
        this.setState({
            image: '',
            });
        this.setState({
            picno: this.state.picno + 1,
        })
        console.log(this.state.picno)
        var ref = firebase.storage().ref().child(this.state.text + '/' + this.state.picno+ '.jpg');
        await ref.put(blob2) 
        const response3 = await fetch(this.state.image3);
        const blob3 = await response3.blob();
        this.setState({
            image: '',
            });
        this.setState({
            picno: this.state.picno + 1,
        })
        console.log(this.state.picno)
        var ref = firebase.storage().ref().child(this.state.text + '/' + this.state.picno+ '.jpg');
        await ref.put(blob3) 
        const response4 = await fetch(this.state.image4);
        const blob4 = await response4.blob();
        this.setState({
            image: '',
            });
        this.setState({
            picno: this.state.picno + 1,
        })
        console.log(this.state.picno)
        var ref = firebase.storage().ref().child(this.state.text + '/' + this.state.picno+ '.jpg');
        await ref.put(blob4)             
        firebase.database().ref('Chowk/update').set('1')            
      };
    
      render() {
        return (
            <View>
            <TouchableOpacity style={styles.container} onPress={this.pickImage}>
                    <Text> Give New DATA </Text>
            </TouchableOpacity>
                {this.state.image != ''  && (<Image source={{uri: this.state.image}}
                style = {styles.imageStyle}
                ></Image>          
                )}
                {this.state.image != ''  && (    
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white' }}
                placeholder="Person Name"
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                />              
                )}
                {this.state.image != ''  && (    
            <TouchableOpacity style={styles.container} onPress={this.uploadImage}>
                <Text> Send </Text>
            </TouchableOpacity>             
                )}
            </View>
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
    imageView:{
        backgroundColor:'white',
        height:120,
        // width:200,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        shadowRadius:20,
    },
    imageStyle:{
        height:200,
        // width:200,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        shadowRadius:20,
    }
})
