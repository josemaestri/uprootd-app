import React from 'react';
import { StyleSheet, Text, TextInput, AppRegistry, Button, View } from 'react-native';
// import { Svg } from 'expo';
// const { Circle, Rect } = Svg;

// import Logo from '../assets/logo.png';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {

    return (
        <View style={styles.container}>
          <Text>Login</Text>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" />
          <Button title="Submit" />
          <Text>Not a member? Register Here.</Text>
        </View>
      );  
  }
}