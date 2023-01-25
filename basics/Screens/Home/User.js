import { View, Text,StyleSheet,TouchableOpacity,Alert } from 'react-native'
import React from 'react'

const User = ({name,email}) => {
   const  openLink=()=>{
        Alert.alert("Get More details here from API")
      }
      return (
        <View style={styles.article}>
         <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={openLink}>
              <Text style={styles.articleTitle}>
                {name} 
              </Text>
            </TouchableOpacity>
    
            <Text style={styles.articlePublishedAt}>{email}</Text>
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    article: {
      flexDirection: "row",
      paddingVertical: 15,
    },
    articleImage: {
      width: 150,
      height: 85,
      resizeMode: "contain",
      marginRight: 15,
    },
    articleTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
  
  });
  

export default User