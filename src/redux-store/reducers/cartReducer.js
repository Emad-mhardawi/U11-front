import * as actionTypes from "../actions/actionTypes";

const initialState = { cartProducts: [], totalPrice: 0 };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD_PRODUCT:
      const addedProduct = action.payload;
      //check if the added product exists in the cartProducts
      const existedItem = state.cartProducts.find(item => item.id === addedProduct.id);
      if(!existedItem) {
         return{
            ...state,
            cartProducts:[...state.cartProducts, addedProduct],
            totalPrice: state.totalPrice + addedProduct.price
         }
      }else{
         existedItem.qty = ++existedItem.qty;
          return{
            ...state,
            totalPrice: state.cartProducts.map(product=> product.price * product.qty).reduce((accumulator, currentValue)=>{
              return accumulator + currentValue
            },0)
         }
      }


      case actionTypes.CART_REMOVE_PRODUCT:
          /// find the product that will be removed from the cart array
         const productToRemove = state.cartProducts.find(product=> product.id === action.payload);
         /// return a new cart array without the removed product 
         const newCartProducts = state.cartProducts.filter(product=> product.id !== productToRemove.id)
         //calculating the new total price
         const newTotalPrice = state.totalPrice - (productToRemove.price * productToRemove.qty)
         return{
            ...state,
            cartProducts: newCartProducts,
            totalPrice: newTotalPrice
         }


      case actionTypes.INCREASE_PRODUCT_QUANTITY:
          /// find the product that we want to increase its quantity
         const productToIncrease = state.cartProducts.find(product=> product.id === action.payload.id);
         productToIncrease.qty = ++productToIncrease.qty;
         return{
            ...state,
            totalPrice: state.totalPrice + action.payload.price
         }

         /// find the product that we want to decrease its quantity
      case actionTypes.DECREASE_PRODUCT_QUANTITY:
         const productToDecrease = state.cartProducts.find(product=> product.id === action.payload.id);
         productToDecrease.qty = --productToDecrease.qty;
          
         return{
            ...state,
            totalPrice: state.totalPrice - action.payload.price
         }
    default:
      return state;
  }
};
