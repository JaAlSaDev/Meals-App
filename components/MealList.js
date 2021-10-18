import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, FlatList } from 'react-native'
import MealItem from './MealItem'

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = itemData => {
        const meal = itemData.item
        const mealId=meal.id
        const isFavorite= favoriteMeals.some(meal => meal.id === mealId)

        return <MealItem
            title={meal.title}
            image={meal.imageUrl}
            duration={meal.duration}
            complexity={meal.complexity}
            affordability={meal.affordability}

            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealID: meal.id,
                        mealTitle: meal.title,
                        isFav: isFavorite
                    }
                })
            }}
        />
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}

                style={{ width: '100%' }}
            />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
