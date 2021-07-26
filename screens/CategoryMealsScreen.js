import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList
} from 'react-native'
import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}

            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealID: itemData.item.id
                    }
                })
            }}
        />
    }


    const catID = props.navigation.getParam('categoryID');


    const selectedCategory = CATEGORIES.find(category => category.id === catID)

    const displayedMeals = MEALS.filter(meal => {
        return meal.categoryIds.indexOf(catID) > -1
    })
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}

                style={{ width: '100%' }}
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
