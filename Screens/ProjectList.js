import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors'


const ProjectList = () => {
  return (
    <View style={styles.container}>
      <Text>ProjectList</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',    
    },
    icon:{
        padding:5,
        fontSize:32,
        color:"white",
    }
  });

export default ProjectList