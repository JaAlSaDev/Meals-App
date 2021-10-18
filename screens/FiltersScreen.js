import {
    StyleSheet,
    Text,
    View,
    Switch,
    Platform
} from 'react-native'

import React, {
    useState,
    useEffect,
    useCallback
} from 'react'
import { useDispatch } from 'react-redux'
import { setFilters } from '../store/actions/meals'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

import Colors from '../constants/Colors'


const FilterSwitch = props => {


    return <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
            trackColor={{
                true: Colors.primaryColor
            }}
            thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
            value={props.state}
            onValueChange={props.onChange}
        />
    </View>
}


const FiltersScreen = props => {
    const { navigation } = props
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch();

    // Only save a new version of this function when its dependencies change
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegan: isVegan,
            isVegetarian: isVegetarian,
        }
        dispatch(setFilters(appliedFilters))


    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])


    useEffect(() => {
        // Saves it in navigationData, so the header can access it
        navigation.setParams({
            save: saveFilters
        })

    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>

            <FilterSwitch
                label="Gluten-free"
                state={isGlutenFree}
                onChange={setIsGlutenFree}

            />

            <FilterSwitch
                label="Lactose-free"
                state={isLactoseFree}
                onChange={setIsLactoseFree}

            />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onChange={setIsVegan}

            />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={setIsVegetarian}

            />
        </View>
    )
}


FiltersScreen.navigationOptions = navigationData => {

    const save=navigationData.navigation.getParam('save')

    return {
        headerTitle: 'Filters Meal',

        headerLeft:
            (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName='ios-menu'
                    onPress={() => {
                        navigationData.navigation.toggleDrawer()
                    }}
                />

            </HeaderButtons>),

        headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Save"
                iconName='ios-save'
                onPress={save}
            />

        </HeaderButtons>)
    }

}
export default FiltersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
})
