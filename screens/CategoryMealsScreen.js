import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data';


const CategoryMealsScreen = props => {
    const catID = props.navigation.getParam('categoryID');


    const selectedCategory = CATEGORIES.find(category => category.id === catID)

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button

                title="Go to Details!"

                onPress={() => {

                    props.navigation.navigate({
                        routeName: "MealDetail"
                    })
                }}
            />

            <Button

                title="Go Back" onPress={() => {
                    // Can only be used on a stack navigator
                    // props.navigation.pop()
                    // Can be used with other navigators
                    props.navigation.goBack()
                }}
            />
        </View>
    )
}

export default CategoryMealsScreen

CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catID = navigationData.navigation.getParam('categoryID');

    const selectedCategory = CATEGORIES.find(category => category.id === catID)

    return {
        headerTitle: selectedCategory.title,
       
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
