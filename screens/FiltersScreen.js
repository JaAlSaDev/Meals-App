import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Filters Screen!</Text>
        </View>
    )
}

export default FiltersScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
