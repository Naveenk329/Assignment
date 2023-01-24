import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const LabeledTextInput = ({ label, value, onChangeText, placeholder }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.textInput}

                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    )
}





const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
        borderColor: 'lightgrey',
        borderTopWidth: 1
    },
    label: {
        flex: 1
    },
    textInput: {
        flex: 2
    }
})

export default LabeledTextInput