import React from 'react';
import { StyleSheet, Text, TextInput, AppRegistry, Button, View, Flatlist } from 'react-native';
import Card from './Card';
// import { Svg } from 'expo';
// const { Circle, Rect } = Svg;

// import Logo from '../assets/logo.png';




const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textDecorationLine: 'underline',
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
    flex: 1
  },
  card:{
    flex: 1,
    marginBottom:'5rem'
  },
});


export default class Main extends React.Component {
  
  render() {
    var cards = this.props.data;
    var cardsRendered = [];

    for (var i = 0; i < cards.length; i++) {
      var card = <Card style={styles.card} key={cards[i].id} rootName={cards[i].root} rootCountry={cards[i].country} rootDesc={cards[i].description} rootAvg={cards[i].rating} />
      cardsRendered.push(card);
    }

    console.log(cardsRendered)

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Current Available Roots</Text>
          <View>{cardsRendered}</View>          
          {/*<Card style={styles.card} rootId={1} />
          <Card style={styles.card} rootId={2} />
          <Card style={styles.card} rootId={3} />*/}

          {/*<Text style={styles.title}>Top Roots</Text>
          <Card style={styles.card} rootId={1} />
          <Card style={styles.card} rootId={2} />
          <Card style={styles.card} rootId={3} />*/}
          
          
        </View>
      );  
  }
}