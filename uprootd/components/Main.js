import React from 'react';
import { StyleSheet, Text, TextInput, AppRegistry, Button, View } from 'react-native';
import Card from './Card';
// import { Svg } from 'expo';
// const { Circle, Rect } = Svg;

// import Logo from '../assets/logo.png';




const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textDecorationLine: 'underline'
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


export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render() {

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Trending Roots</Text>
          <Card rootId={1} />
          <Card rootId={2} />
          <Card rootId={3} />

          <Text style={styles.title}>Top Roots</Text>
          <Card rootId={1} />
          <Card rootId={2} />
          <Card rootId={3} />
          
          
        </View>
      );  
  }
}