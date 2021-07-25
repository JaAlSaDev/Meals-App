import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>

            <Button

                title="Go to Details!"

                onPress={() => {

                    props.navigation.navigate({
                        routeName: "MealDetail"
                    })
                }}
            />
        </View>
    )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
