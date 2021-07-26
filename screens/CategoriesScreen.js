import {
    StyleSheet,
    FlatList,
} from 'react-native'
import React from 'react'

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

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


CategoriesScreen.navigationOptions = navigationData => {

    return {
        headerTitle: 'Meal Categories',
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName='ios-menu'
                    onPress={() => { 

                        navigationData.navigation.toggleDrawer()
                    }}
                />

            </HeaderButtons>
    }

}
export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})
