import React from 'react';
import { StyleSheet, Image, Text, TextInput, AppRegistry, Button, View } from 'react-native';
// import { Svg } from 'expo';
// const { Circle, Rect } = Svg;

// import Logo from '../assets/logo.png';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textDecorationLine: 'underline'
  },
  highlightBox:{
    backgroundColor: '#fff'
  },
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


export default class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render() {

    return (
        <View style={styles.container}>
          <Text>Back</Text>
          <TextInput placeholder='Search' />
          <Text>Close</Text>
          <View>
            <Image source={require('../assets/logo.png')} />
          </View>
        </View>
      );  
  }
}