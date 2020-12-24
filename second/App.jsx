import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import './node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = ()=> {
  return (
    <View >
    <NavBar />
      <Text>Hello World</Text>
    </View>
  );
}

export default App