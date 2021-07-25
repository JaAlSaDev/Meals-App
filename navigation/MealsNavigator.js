import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { Platform } from 'react-native'
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
    mode:'modal',
    // initialRouteName: 'MealDetail'
})



export default createAppContainer(MealsNavigator)