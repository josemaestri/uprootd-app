import React from 'react';
import { StyleSheet, SafeAreaView, Flatlist } from 'react-native';
// import axios from 'axios';
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCA5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state={
      isTest: true,
      dbData:data.getRoots
      // dbData: fetch('mongodb://127.0.0.1/kava')
    };
  }

  componentDidMount(){
    data.getRoots()
      .then((res) => res.json())
      .then((resJSON) => {
        console.log(resJSON); 
        this.setState({
          dbData: resJSON
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
        <Main data={this.state.dbData} />
        {/*<Profile />*/}
        {/*<Root />*/}
        {/*<Log />*/}
        {/*{<LogForm />}*/}
        {/*<Search />*/}
        {/*<Flatlist
          data={this.state.dbData}
          renderItem={({item}) => <Text>{item.root}</Text>}
        />*/}
      </SafeAreaView>
    );  
  }
}

export default App;