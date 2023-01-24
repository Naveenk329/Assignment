import React, { useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, Button } from 'react-native'

import { launchImageLibraryAsync } from 'expo-image-picker'
import Tweets from '../Components/Tweets'
import LabeledTextInput from '../Components/LabeledTextInput'



//in device , open google chrome browser, download png images and download it.
// click Add Profile Picture, in menu, select image/downloads   and select your pic.
// observe profile.  Any warnings like uri not supported, fix it.

const TweetEditorHooks = () => {
    const [name, setName] = useState('Murthy')
    const [handle, setHandle] = useState('')
    const [tweet, setTweet] = useState('')
    const [imageUri, setImageUri] = useState('')

    useEffect(() => {
        alert('Welcome ' + name)
        return () => {
            alert('Bye...')
            //cleaning
        }
    }, [name])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Tweets
                        name={name}
                        handle={handle}
                        tweet={tweet}
                        imageUri={imageUri}
                    />
                </View>
                <View></View>
                <Button
                    title="Add Profile Picture"
                    onPress={() => {     
                        alert("Select profile picture from your device")
                        launchImageLibraryAsync()
                            .then((imageResult) => {
                                setImageUri(imageResult.uri)
                            })
                    }}
                />
                <LabeledTextInput
                    label={'Account Name'}
                    placeholder={"Murthy"}
                    value={name}
                    onChangeText={(newValue) => {
                        setName(newValue)
                    }}
                />
                <LabeledTextInput
                    label='Account Handle'
                    value={handle}
                    placeholder="@DSRMurthy"
                    onChangeText={(newValue) => {
                        setHandle(newValue)
                    }}
                />
                <LabeledTextInput
                    label="Tweet"
                    placeholder=""
                    value={tweet}
                    onChangeText={(newValue) => {
                        setTweet(newValue)
                    }}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen'
    }
})

export default TweetEditorHooks