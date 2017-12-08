import * as ACTION_TYPES from '../actions/action_types'

import {combineReducers} from 'redux';

function getVisibleProducts(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_CART:{
            return [
                ...state,
                action.payload
            ];
        }
        default:
            return state;
    }
}

function calcTotalPrice(state={},action) {
    switch (action.type) {
        case ACTION_TYPES.COUNT_PRICE: {
            return {
                data : action.payload
            }
        }
        default:
            return state;
    }
}

export default combineReducers({
    getVisibleProducts,
    calcTotalPrice
})
