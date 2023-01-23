import React, { useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import Colors from '../Constants/Colors'


var Project12 

const ListButton = ({ navigation, title, color,onDelete,ind }) => {
    
   
   
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("ProjectList", { title, color }) }} style={[styles.itemContainer, { backgroundColor: color }]}>
            <View>
                <Text style={styles.itemTitle}>{title}</Text>

            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { }} >
                    <Ionicons name='options' size={24} color='green' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>onDelete(ind)} >
                    <Ionicons name="trash" size={24} color='red' />
                </TouchableOpacity>

            </View>

        </TouchableOpacity>

    )

}
// addProject components
const add1 = [{ title: "Bank- Design Phase", color: Colors.green }]
const RenderAddListIcons = (addProject) => {
     
    return(
        <TouchableOpacity onPress={()=>addProject(add1) }>
        <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
    )

}
const HomeScreen = ({ navigation,Project,removeItems }) => {

  
   
   
    return (
        <View style={styles.container}>
            <Text>Router App</Text>
            <FlatList data={Project} renderItem={({ item: { title, color }, index }) => {
                return (
                    <ListButton navigation={navigation} title={title} color={color}onDelete={removeItems} ind={index} />

                )
            }} />






        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 30,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 5,
        backgroundColor: Colors.blue
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

})

export default HomeScreen
