import * as ACTION_TYPES from './action_types';

export const addToCart = function (dispatch,product) {
    dispatch({
        type: ACTION_TYPES.ADD_CART,
        payload: product
    })
}
export const calcPrice = function (dispatch,price) {
    dispatch({
        type: ACTION_TYPES.COUNT_PRICE,
        payload: price
    })
}