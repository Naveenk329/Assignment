import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons'
import HomeScreen from './Components/HomeScreen';
import ProjectList from './Components/ProjectList';
import Colors from './Constants/Colors';



const Project = [
  { title: "Bank- Design Phase", color: Colors.green },
  { title: "Mutual Fund - Analysis Phase", color: Colors.blue },
  { title: "Food App - Testing Phase", color: Colors.purple }

]
const add1 = [{ title: "Bank- Design Phase", color: Colors.green }]
export default function App() {
  const [project1, setProject] = useState(Project)
  const addProject = (Project) => {
    project1.push(...Project)
    setProject([...project1])

  }
  const removeItem =(ind)=>{
    console.log(ind)
    project1.splice(ind,1)
    setProject([...project1])
  }

  const Stack = createStackNavigator();
  return (



    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => addProject(add1)}>
              <Entypo name="circle-with-plus" size={24} color="black" />
            </TouchableOpacity>
          )
        }} >{(props) => <HomeScreen Project={project1} removeItems={removeItem} />}</Stack.Screen>
        <Stack.Screen name="ProjectList" component={ProjectList} options={({ route }) => {
          return ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: route.params.color
            },
            headerTintColor: 'white'
          })
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
