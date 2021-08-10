import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {userLoginReducer, userSignupReducer} from './reducers/userReducer';
import {fetchProductsReducer, fetchRecentProductsReducer, fetchProductReducer} from './reducers/ProductReducer';
import {cartReducer} from './reducers/cartReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    fetchProducts: fetchProductsReducer,
    fetchRecentProducts:fetchRecentProductsReducer,
    getProduct:fetchProductReducer,
    cart: cartReducer
})



const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo')): null

const initialState ={
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState,composeWithDevTools(
    applyMiddleware(...middleware)
))

export default store;