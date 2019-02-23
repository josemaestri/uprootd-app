import React from 'react';
import { StyleSheet, Image, Alert, Text, AppRegistry, TouchableOpacity, View } from 'react-native';

// import { Svg } from 'expo';
// const { Circle, Rect } = Svg;

// import Logo from '../assets/logo.png';

const flags = {
  Vanuatu: require('../assets/flag_Vanuatu.png'),
  Fiji: require('../assets/flag_Fiji.png'),
  Hawaii: require('../assets/flag_Hawaii.png'),
  Tonga: require('../assets/flag_Tonga.png')
}


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
    justifyContent: 'space-between',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10
  }
})


export default class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rootId: this.props.rootId
    };
  }
  render() {
    // var country = this.props.rootCountry ? require(`../assets/flag_${this.props.rootCountry}.png`) : require('../assets/icon.png');
    return (
      <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>Alert.alert(this.props.rootDesc)} underlayColor="white">
          <View style={styles.input}>
            <Image source={flags[this.props.rootCountry]} width={100} height={100} />
            <View style={{flexDirection:'column'}}>
              <Text>{this.props.rootName}</Text>
              <Text>{this.props.rootCountry}</Text>
              {/*<Text>{this.props.rootDesc}</Text>*/}
              <Text>{this.props.rootAvg}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );  
  }
}