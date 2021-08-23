import * as actionTypes from '../actions/actionTypes';

const initialState = {pagesCount:1, products:[], recentProducts:[], product:{reviews:[]}}

export const fetchProductsReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.PRODUCTS_FETCH_REQUEST:
            return{ ...state, loading: true }

        case actionTypes.PRODUCTS_FETCH_SUCCESS:
            return{ ...state,  loading: false, products: action.payload.products, pagesCount:action.payload.pagesCount }

        case actionTypes.PRODUCTS_FETCH_FAIL:
            return{ ...state, loading: false, error: action.payload }

        default: return state;

    }

}


export const fetchRecentProductsReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.RECENT_PRODUCTS_FETCH_REQUEST:
            return{ ...state, loading: true }

        case actionTypes.RECENT_PRODUCTS_FETCH_SUCCESS:
            return{ ...state,  loading: false, recentProducts: action.payload}

        case actionTypes.RECENT_PRODUCTS_FETCH_FAIL:
            return{ ...state, loading: false, error: action.payload }

        default: return state;

    }

}

export const fetchProductReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.PRODUCT_REVIEWS_FETCH_REQUEST:
            return{ ...state, loading: true }

        case actionTypes.PRODUCT_REVIEWS_FETCH_SUCCESS:
            return{ ...state,  loading: false, product: action.payload}

        case actionTypes.PRODUCT_REVIEWS_FETCH_FAIL:
            return{ ...state, loading: false, error: action.payload }

        default: return state;

    }

}



