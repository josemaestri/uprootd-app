import React from 'react';
import { StyleSheet, Image, Text, TextInput, AppRegistry, Button, View, ProgressBarAndroid } from 'react-native';
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


export default class Log extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  render() {

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Borogu</Text>
          <Text>Vanuatu</Text>
          <Text>Vanuatu Borogu Kava is the most popular variety of kava in Vanuatu, served in most of the nakamals on the islands.</Text>
          <Text>Avg: 4.5</Text>
          <Text>My Rating: 4.5</Text>
          <View style={styles.highlightBox}>
            <Text>Effects</Text> 
            <Text>Medical Benefits</Text> 
            <Text>Side Effects</Text>
          </View>
          <View style={styles.highlightBox}>
            <Text>Flavor Profile</Text> 
          </View>
          <Text style={styles.title}>Recent Logs</Text>
            <Card rootId={1} />
            <Card rootId={2} />
            <Card rootId={3} />
        </View>
      );  
  }
}