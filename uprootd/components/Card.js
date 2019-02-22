import React from 'react';
import { StyleSheet, Image, Alert, Text, AppRegistry, TouchableOpacity, View } from 'react-native';
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
    borderRadius: 5
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
        <TouchableOpacity onPress={()=>Alert.alert('test')} underlayColor="white">
          <View style={styles.input}>
            <Text>{this.props.rootName}</Text>
            <Text>{this.props.rootCountry}</Text>
            {/*<Text>{this.props.rootDesc}</Text>*/}
            <Text>{this.props.rootAvg}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );  
  }
}