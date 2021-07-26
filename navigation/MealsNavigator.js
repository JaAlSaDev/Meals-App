import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
        // navigationOptions: {
        //     headerStyle: {
        //         backgroundColor: Platform.OS === "android" ? Colors.primaryColor : '',
        //     },
        //     headerTintColor: Platform.OS === "android" ? 'white' : Colors.primaryColor
        // }
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === "android" ? 'white' : Colors.primaryColor,
        headerTitle: 'A Screen'
    },
    mode: 'modal',
    // initialRouteName: 'MealDetail'
})


const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons
                    name='ios-restaurant'
                    size={25}
                    color={tabInfo.tintColor}
                />
            }
        }
    },
    Favorites: {
        screen:FavoritesScreen,
        navigationOptions: {
            tabBarLabel:'Favorites!',
            tabBarIcon: tabInfo => {
                return <Ionicons
                    name='ios-star'
                    size={25}
                    color={tabInfo.tintColor}
                />
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Colors.accent
    }
})

export default createAppContainer(MealsFavTabNavigator)