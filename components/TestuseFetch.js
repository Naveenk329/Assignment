import { View, Text,StyleSheet,FlatList,ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from './useFetch'

const TestuseFetch = () => {
 const url ="https://jsonplaceholder.typicode.com/users"
 const {loading,error,data=[]}= useFetch(url)
 if(error) return <View><Text>Error!</Text></View>
 if(loading) return <View><Text><ActivityIndicator size='large'color='#OOOOff'/></Text></View>

  return (
    <View>
      <View>
      <Text>user for this project</Text>
      <Text>----------------------</Text>
      </View>
      <FlatList
      data={data}
      renderItem={({ item: { id, email }, index })=>{
        return (
            <View>
                <Text>{id}--{email}</Text>
            </View>
        )
      }}
      ></FlatList>
    </View>
  )
}

export default TestuseFetch