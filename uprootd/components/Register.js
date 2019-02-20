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


export default class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      location: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  render() {

    return (
        <View style={styles.container}>
          <Text>Register</Text>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Last Name" />
          <TextInput style={styles.input} placeholder="Location" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
          <TextInput style={styles.input} placeholder="Confirm Password" />
          <Button title="Submit" />
          {/*<Text>Not a member? Register Here.</Text>*/}
        </View>
      );  
  }
}