import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Svg } from 'expo';
const { Circle, Rect } = Svg;

import Logo from '../assets/logo.png';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class Splash extends React.Component {
  render() {

    return (
        <View style={styles.container}>
          <Image source={Logo} />
          {/*<Text>Test</Text>*/}
        </View>
      );  
  }
}