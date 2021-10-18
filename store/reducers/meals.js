import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}


const mealsReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVORITE:

            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)

            const updatedFavoriteMeals = [...state.favoriteMeals]

            if (existingIndex >= 0) {
                updatedFavoriteMeals.splice(existingIndex, 1)
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)

                updatedFavoriteMeals.push(meal)
            }


            return {
                ...state,
                favoriteMeals: updatedFavoriteMeals
            }

        default:
            return state;
            break;
    }
    return state;
}


export default mealsReducer;