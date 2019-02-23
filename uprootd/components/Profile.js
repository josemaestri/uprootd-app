import React from 'react';
import { StyleSheet, Image, Text, TextInput, AppRegistry, Button, View } from 'react-native';
import Card from './Card';
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


export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render() {

    return (
        <View style={styles.container}>
          <Text style={styles.title}>My Profile</Text>
          <View style={styles.highlightBox}>
            <Image source={{uri: 'https://fillmurray.com/200/200'}} style={{width:200,height:200}} />
            <Text>Jose Maestri</Text>
            <Text>Miami, FL</Text>
            <Text>5/180 Roots Reviewed</Text>
            <Text style={{fontWeight: 'bold'}}>Badges</Text>
            <Text>Badge 1</Text>
            <Text>Badge 2</Text>
            <Text>Badge 3</Text>
          </View>
          <Text style={styles.title}>My Roots Log</Text>
          <Card rootId={1} />
          <Card rootId={2} />
          <Card rootId={3} />
        </View>
      );  
  }
}