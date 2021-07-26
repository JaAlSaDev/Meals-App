import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList
} from 'react-native'
import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealsScreen = props => {
    const catID = props.navigation.getParam('categoryID');

    const displayedMeals = MEALS.filter(meal => {
        return meal.categoryIds.indexOf(catID) > -1
    })

    return <MealList
        listData={displayedMeals}
        navigation={props.navigation}
    />


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
