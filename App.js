
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';
import ProjectList from './Components/ProjectList';




export default function App() {

  const Stack = createStackNavigator();
  return (



    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProjectList" component={ProjectList}  options={({route})=>{
          return({
            title:route.params.title,
            headerStyle:{
              backgroundColor:route.params.color
            },
            headerTintColor:'white'
          })
        }}/>
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
