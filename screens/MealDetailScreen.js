import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>

            <Button

                title="Go Back to Categories"

                onPress={() => {
                    // Pops off all screens from the stack navigator
                    props.navigation.popToTop();
                }}

            />
        </View>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
