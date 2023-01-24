import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Navigate to editor"
                onPress={() => { navigation.navigate('tweetEditor') }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default HomeScreen