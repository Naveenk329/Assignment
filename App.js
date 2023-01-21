
import { StyleSheet, Text, View } from 'react-native';
import Button from './Components/Button'
import Demo2 from './Components/Demo2';
import Dome1 from './Components/Dome1';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
      
      <Demo2/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
