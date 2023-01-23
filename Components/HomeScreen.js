import React, { useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import Colors from '../Constants/Colors'


const Project = [
    { title: "Bank- Design Phase", color: Colors.green },
    { title: "Mutual Fund - Analysis Phase", color: Colors.blue },
    { title: "Food App - Testing Phase", color: Colors.purple }

]
const ListButton = ({ navigation, title, color, onDelete }) => {
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("ProjectList", { title, color }) }} style={[styles.itemContainer, { backgroundColor: color }]}>
            <View>
                <Text style={styles.itemTitle}>{title}</Text>

            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { }} >
                    <Ionicons name='options' size={24} color='green' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} >
                    <Ionicons name="trash" size={24} color='red' />
                </TouchableOpacity>

            </View>

        </TouchableOpacity>

    )

}
// addProject components
const RenderAddListIcons = (addProject) => {
    <TouchableOpacity onPress={() => { addProject({ title: 'Title', color: Colors.olive }) }}>
        <Text style={styles.icon}>+</Text>
    </TouchableOpacity>

}
const HomeScreen = ({ navigation }) => {
    const [project1, setProject] = useState(Project)
    const addProject = (Project) => {
         project1.push(...Project)
        setProject([...project1])

    }
    const removeItem = (index) => {
        project1.splice(index, 1)

    }
    const add1 = [{ title: "Bank- Design Phase", color: Colors.green }]
    return (
        <View style={styles.container}>
            <Text>Router App</Text>
            <FlatList data={project1} renderItem={({ item: { title, color }, index }) => {
                return (
                    <ListButton title={title} color={color} navigation={navigation} />

                )
            }} />

            <TouchableOpacity onPress={() => { addProject(add1) }}>
                <Text>ttttttttt</Text>
            </TouchableOpacity>




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