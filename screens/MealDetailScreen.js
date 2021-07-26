import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { MEALS } from '../data/dummy-data';
const MealDetailScreen = props => {

    console.log('Meal ID', props.navigation.getParam('mealID'));

    const mealID = props.navigation.getParam('mealID');

    const selectedMeal = MEALS.find(meal => meal.id === mealID);

    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen!</Text>
            <Text>{selectedMeal.title}</Text>
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


MealDetailScreen.navigationOptions = navigationData =>{
    const mealID = navigationData.navigation.getParam('mealID');


    const selectedMeal = MEALS.find(meal => meal.id === mealID);

    return {
        headerTitle: selectedMeal.title
    }

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
