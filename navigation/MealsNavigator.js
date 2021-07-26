import React from 'react'
import { Platform } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'


import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === "android" ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
}
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
    defaultNavigationOptions: defaultStackNavOptions,
    mode: 'modal',
    // initialRouteName: 'MealDetail'
})

const FavNavigator=createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultStackNavOptions,
    mode: 'modal',
    // initialRouteName: 'MealDetail'
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons
                    name='ios-restaurant'
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: tabInfo => {
                return <Ionicons
                    name='ios-star'
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.accent
        }
    },
}

const MealsFavTabNavigator =
    Platform.OS === 'android' ?
        createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        }) :
        createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.accent
            }
        })

export default createAppContainer(MealsFavTabNavigator)