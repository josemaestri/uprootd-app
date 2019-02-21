import React from 'react';
import { StyleSheet, SafeAreaView, Flatlist } from 'react-native';
// import axios from 'axios';


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
      isTest: true,
      // dbData: fetch('mongodb://127.0.0.1/kava')
    };
  }

  componentDidMount(){
    return fetch('127.0.0.1:3000/api')
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON);
        this.setState({
          dbData: resJSON.roots
        });
      })
      .catch((err)=>{
        console.log(err);
      });
  }


  // loadData(){
  //   const url = 'mongodb://127.0.0.1:27017/kava';
  //   axios.get(url).then((data) => {
  //     this.setState({
  //       dbData: data.roots
  //     })
  //   });
  // }



  

  render() {

    return (
      <SafeAreaView style={{flex:1}}>
        {/*<Splash />*/}
        {/*<Login />*/}
        {/*<Register />*/}
        {/*<Main />*/}
        {/*<Profile />*/}
        {/*<Root />*/}
        {/*<Log />*/}
        {/*{<LogForm />}*/}
        {/*<Search />*/}
        <Flatlist
          data={this.state.dbData}
          renderItem={({item}) => <Text>{item.root}</Text>}
        />
      </SafeAreaView>
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
