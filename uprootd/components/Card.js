import React from 'react';
import { StyleSheet, Image, Alert, Text, AppRegistry, TouchableHighlight, View } from 'react-native';
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


export default class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rootId: this.props.rootId
    };
  }
  render() {

    return (
      <View>
        <TouchableHighlight onPress={()=>Alert.alert('test')} underlayColor="white">
          <View style={styles.input}>
            <Text>Borogu</Text>
            <Text>Vanuatu</Text>
            <Text>3.5</Text>
          </View>
        </TouchableHighlight>
      </View>
    );  
  }
}