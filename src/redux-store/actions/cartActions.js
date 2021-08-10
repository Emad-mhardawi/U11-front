import * as actionTypes from "./actionTypes";

export const addToCart =(product)=>async(dispatch)=>{
   
    dispatch({
        type: actionTypes.CART_ADD_PRODUCT,
        payload: product
    });
}

export const removeFromCart =(id)=>async(dispatch)=>{
    dispatch({
        type: actionTypes.CART_REMOVE_PRODUCT,
        payload: id
    });
   
}


export const increaseProductQuantity=(product)=>async(dispatch)=>{
    dispatch({
        type: actionTypes.INCREASE_PRODUCT_QUANTITY,
        payload: product,
    });
   
}


export const decreaseProductQuantity=(product)=>async(dispatch)=>{
    dispatch({
        type: actionTypes.DECREASE_PRODUCT_QUANTITY,
        payload: product
    });
   
}



