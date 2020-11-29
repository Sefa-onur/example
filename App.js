import React,{Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class App extends Component{
  state={
    user:''
  }
  addButton = async () => {
    let user = this.state.user
      await AsyncStorage.setItem('user',user);
      this.setState({user:''})
    alert('user saved')
 }
 renderButton = async () => {
   let user = await AsyncStorage.getItem('user')
   alert(user)
 }
  render(){
    return(
      <View style = {styles.View} >
        <TextInput
        placeholder = 'Kullanıcı'
        style = {styles.TextInput}
        value = {this.state.user}
        onChangeText = {text => this.setState({user:text})}
        />
        <TouchableOpacity style = {styles.Button} onPress = {() => this.addButton()} >
          <Text style = {{fontSize:18}} >Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.Button} onPress = {() => this.renderButton()} >
          <Text style = {{fontSize:18}} >Görüntüle </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
   View:{
     justifyContent:'center',
     alignItems:'center',
     flex:1
   },
   TextInput:{
     borderWidth:1,
     borderRadius:5,
     width:250,
     margin:5
   },
   Button:{
     borderRadius:5,
     borderWidth:1,
     width:250,
     margin:5,
     height:48,
     justifyContent:'center',
     alignItems:'center'
   }
})