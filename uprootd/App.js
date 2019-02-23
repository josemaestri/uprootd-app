import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, ActivityIndicator, Dimensions, View } from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';
import data from './utils/api';

import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Profile from './components/Profile';
import Root from './components/Root';
import Log from './components/Log';
import LogForm from './components/LogForm';
import Search from './components/Search';



const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA5A',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFCA5A'
  }
});

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state={
      isLoading: false,
      dbData: '',
      currentUser: false,
      screenHeight: 0
    };
  }

  componentDidMount(){
    data.getRoots()
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON); 
        this.setState({
          dbData: resJSON,
          isLoading: true
        });
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  onContentSizeChange = (w,h) => {
    this.setState({screenHeight: h});
  }


  render() {
    if(!this.state.isLoading){
      return(
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" color="#000" />
        </SafeAreaView>
      );
    } else{

      // const scrollEnabled = this.state.screenHeight > height;

      return (
       <NativeRouter>
         <View style={styles.container}>
           <Switch>
             <Route exact path="/" component={Login} />
             <Route exact path="/main" component={Main} />
           </Switch>
         </View>
       </NativeRouter>
      );
    }  
  }
}

export default App;