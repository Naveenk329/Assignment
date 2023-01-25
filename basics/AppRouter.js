import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Store from './reduxStore/index';

import Index from './Screens/Home/Index';



const Stack = createStackNavigator();

export default function (){
  return (
    <View style={styles.flex}>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Index} 
            options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});
