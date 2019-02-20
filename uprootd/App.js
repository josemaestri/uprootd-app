import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Profile from './components/Profile';
import Root from './components/Root';
import Log from './components/Log';
import LogForm from './components/LogForm';
import Search from './components/Search';

export default class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state={
      isTest: true
    };
  }

  

  render() {
    return (
      // <Splash />
      // <Login />
      // <Register />
      // <Main />
      // <Profile />
      // <Root />
      // <Log />
      // <LogForm />
      <Search />
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
