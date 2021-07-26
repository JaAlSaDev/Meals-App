import React from 'react'
import { Platform, Text } from 'react-native'

import {
    createAppContainer,
    // createBottomTabNavigator,
    // createStackNavigator,
    // createDrawerNavigator

} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'


import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
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
    // mode: 'modal',
    // initialRouteName: 'MealDetail'
})

const FavNavigator = createStackNavigator({
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
            tabBarColor: Colors.primaryColor,
            tabBarLabel:


            Platform.OS === "android" ?
                <Text style={{ fontFamily: 'open-sans-bold' }}>
                    Meals
                </Text> : 'Meals'
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
            tabBarColor: Colors.accent,
            tabBarLabel:

            Platform.OS === "android" ?
                <Text style={{ fontFamily: 'open-sans-bold' }}>
                    Favorites
                </Text> : 'Favorites'

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
                labelStyle: {
                    fontFamily: 'open-sans-bold'
                },
                activeTintColor: Colors.accent
            }
        })



const FilterStackNavigator = createStackNavigator({
    Filters: FiltersScreen
},
    {

        // navigationOptions:{
        //     drawerLabel: 'Filters!!!'
        // },
        defaultNavigationOptions: defaultStackNavOptions,
        mode: 'modal',
        // initialRouteName: 'MealDetail'
    })

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }

    },
    Filters: FilterStackNavigator
},
    {
        contentOptions: {
            activeTintColor: Colors.accent,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    })


export default createAppContainer(MainNavigator)