import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useCallback } from 'react'

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

import DefaultText from '../components/DefaultText';

import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>)
}

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealID = props.navigation.getParam('mealID');
    const isCurrentMealFavorited = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealID));

    console.log('Meal ID', props.navigation.getParam('mealID'));



    const selectedMeal = availableMeals.find(meal => meal.id === mealID);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealID));
    }, [dispatch, mealID])

    useEffect(() => {
        props.navigation.setParams({

            toggleFavorite: toggleFavoriteHandler
        })

    }, [toggleFavoriteHandler])


    useEffect(() => {
        props.navigation.setParams({
            isFav: isCurrentMealFavorited
        })

    }, [isCurrentMealFavorited])

    return (
        <ScrollView>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />

            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>

            <Text style={styles.title}>Ingredients</Text>
            <Text>List of ingredients...</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}

            <Text style={styles.title}>Steps</Text>
            <Text>List of steps...</Text>
            {selectedMeal.steps.map((step, index) => <ListItem key={step}>{(index + 1) + ": " + step}</ListItem>)}

        </ScrollView>
    )
}

export default MealDetailScreen


MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam("mealTitle")

    const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
    const isFav=navigationData.navigation.getParam('isFav');

    return {
        headerTitle: mealTitle,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Favorite'
                iconName={isFav?'ios-star':'ios-star-outline'}
                onPress={toggleFavorite}
            />
        </HeaderButtons>
    }

}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})
