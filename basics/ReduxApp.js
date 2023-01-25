import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppRouter from './AppRouter';
import 'react-native-gesture-handler';

class ReduxApp extends Component {

  render() {
    return (
      
      <View style={styles.container}>
         <AppRouter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    backgroundColor:'yellow'
  },
});

export default ReduxApp;