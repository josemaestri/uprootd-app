import React from 'react';
import { StyleSheet, Image, Text, TextInput, AppRegistry, Button, Picker, Slider, View } from 'react-native';
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


export default class LogForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedRoot: 1,
      rating: 0
    };
  }
  render() {

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Add Root Entry</Text>
          <View>
            <Text style={{fontWeight:'bold'}}>Root Name:</Text>
            <Picker selectedValue={this.state.selectedRoot} onValueChange={(itemValue, itemIndex) => this.setState({selectedRoot: itemValue})}>
              <Picker.Item label="Borogu" value={1} />
              <Picker.Item label="Boronguru" value={2} />
              <Picker.Item label="Vula Waka" value={3} />
            </Picker>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>Location:</Text>
            <TextInput placeholder="Roots Miami Kava and Eatery Miami, FL 33127" />
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>Overall Rating:</Text>
            <Slider minimumValue={0} maximumValue={5} step={1} onValueChange={(val)=>{this.setState({rating:val})}} />
            <Text>{this.state.rating}</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>Effects:</Text>
            <Button title="happy" />
            <Button title="relaxed" />
            <Button title="sociable" />
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>Medical Benefits:</Text>
            <Button title="soreness" />
            <Button title="tension" />
            <Button title="insomnia" />
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>Side Effects:</Text>
            <Button title="dry skin" />
            <Button title="dehydration" />
            <Button title="lethargy" />
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>Flavor Profile:</Text>
            <Button title="mud" />
            <Button title="pepper" />
            <Button title="smoke" />
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>Comments:</Text>
            <TextInput borderWidth={1} height={20}/>
          </View>
          <Button title="Submit" />
        </View>
      );  
  }
}