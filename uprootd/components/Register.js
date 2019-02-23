import React from 'react';
import { StyleSheet, Text, TextInput, AppRegistry, Button, View } from 'react-native';
import data from '../utils/api';

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
      firstname: '',
      lastname: '',
      location: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleRegister = () => {
    let formBody = this.state;
    console.log(formBody);
    data.registerUser(formBody)
    .then((res) => res.json())
    .then((resJSON) => {
      console.log(resJSON); 
      this.setState({
        response: resJSON,
        isRegistered: true
      });
    })
    .catch((err)=>{
      console.log(err);
      this.setState({
        isRegistered:false
      });
    });

  }

  render() {

    return (
        <View style={styles.container}>
          <Text>Register</Text>
          <TextInput style={styles.input} placeholder="Username" autoCapitalize="none" onChangeText={(text) => this.setState({username: text})} />
          <TextInput style={styles.input} placeholder="First Name" autoCapitalize="none" onChangeText={(text) => this.setState({firstname: text})} />
          <TextInput style={styles.input} placeholder="Last Name" autoCapitalize="none" onChangeText={(text) => this.setState({lastname: text})} />
          <TextInput style={styles.input} placeholder="Location" autoCapitalize="none" onChangeText={(text) => this.setState({location: text})} />
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" onChangeText={(text) => this.setState({email: text})} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} autoCapitalize="none" onChangeText={(text) => this.setState({password: text})} />
          <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} autoCapitalize="none" onChangeText={(text) => this.setState({password: text})} />
          <Button title="Submit" onPress={this.handleRegister} />
          {/*<Text>Not a member? Register Here.</Text>*/}
        </View>
      );  
  }
}