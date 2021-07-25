import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'
import React from 'react'

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {

    console.log(props);

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                item={itemData.item}
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryID: itemData.item.id
                        }
                    })
                }} />

        )
    }


    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}


CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}
export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})
