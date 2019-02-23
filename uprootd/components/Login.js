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


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }


  handleLogin = () => {
    let formBody = this.state;
    console.log(formBody);
    data.loginUser(formBody)
    // .then((res) => {
    //   console.log(res._bodyText);
    //   res._bodyText.json()
    // })
    .then((resJSON) => {
      // console.log(resJSON._bodyText); 
      this.setState({
        response: resJSON._bodyText,
        isRegistered: true
      });
      console.log(this.state);
    })
    .catch((err)=>{
      console.log(err);
      this.setState({
        isRegistered:false
      });
    });

  }

  render() {

    if (this.state.toDashboard === true) {
      return <Redirect to='/main' />
    }

    return (
        <View style={styles.container}>
          <Text>Login</Text>
          <TextInput style={styles.input} placeholder="Username" autoCapitalize="none" onChangeText={(text) => this.setState({username: text})}/>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} autoCapitalize="none" onChangeText={(text) => this.setState({password: text})} />
          <Button title="Submit" onPress={this.handleLogin} />
          <Text>Not a member? Register Here.</Text>
        </View>
      );  
  }
}