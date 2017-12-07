import * as ACTION_TYPES from './action_types';

export const addToCart = function (dispatch,product) {
    // console.log(product);
    dispatch({
        type: ACTION_TYPES.ADD_CART,
        payload: product
    })
}