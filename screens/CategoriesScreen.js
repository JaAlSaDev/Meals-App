import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native'
import React from 'react'

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';




const CategoriesScreen = props => {

    console.log(props);

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals'
                    })
                }}>
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>)
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


CategoriesScreen.navigationOptions={
    headerTitle: 'Meal Categories',
    headerStyle:{
        backgroundColor: Platform.OS==="android"? Colors.primaryColor: '',
    },
    headerTintColor:Platform.OS==="android"? 'white': Colors.primaryColor
}
export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,

    }
})
