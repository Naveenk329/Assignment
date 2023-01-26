import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ActivityIndicator } from 'react-native';



import {quotes} from '../sample.json'

//1 - LOADING SCREEN
export default function LoadingScreen(props) {
    const { navigation } = props;

    useEffect(() => checkLocalData(), []);

    function  checkLocalData(){
        //Check if LocalStorage has been populated with the sample data
          AsyncStorage.getItem('quotes', (err, data) => {
            //if it doesn't exist, extract from json fil
            if (data === null){
                AsyncStorage.setItem('quotes', JSON.stringify(quotes));//save the initial data in Async

                navigation.navigate('App'); //Navigate to the home page
            }else{
                navigation.navigate('App'); //Navigate to the home page
            }
        });
    }

    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000"}}>
          <Text style={{color: "#FFFFFF", fontSize: 27}}>Loading....</Text>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )
}