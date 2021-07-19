import initialStates from './initialStates';
import { areItemsEqual } from '../shared/itemFunctions';

function reducer(state, action) {
    switch (action.type) {
        case 'OPEN_BASKET':
            return {
                ...state,
                open: !state.open
            };
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.product],
                selectedOptions: []
            };

        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            let itemIndex = state.basket.findIndex((basketItem) =>
                areItemsEqual(basketItem, action.product)
            );

            if (itemIndex >= 0) {
                newBasket.splice(itemIndex, 1);
            }
            return { ...state, basket: newBasket };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: initialStates.basket
            };

        default:
            return state;
    }
}

export default reducer;
