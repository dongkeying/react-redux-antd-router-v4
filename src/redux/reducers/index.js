import * as ACTION_TYPES from '../actions/action_types'

import {combineReducers} from 'redux';

function combineGoods(state,action) {
    // console.log(action.count);
    // console.log(state);
    if(state.length > 0){
        return state.forEach(element => {
            if(Number(element.id) === Number(action.id)){
                console.log([
                    ...state
                ]);
                return [
                    state
                ]
            }
        });
        // return [
        //     ...state,
        //     action
        // ]
        // console.log(action);
    }else{
        action.count = 1;
        return [
            ...state,
            action
        ]
        // console.log(action);
    }
}

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

export default combineReducers({
    getVisibleProducts
})
