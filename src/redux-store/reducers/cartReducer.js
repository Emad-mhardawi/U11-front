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
         existedItem.price = existedItem.price + addedProduct.price
         return{
            ...state,
            totalPrice: state.cartProducts.map(product=> product.price).reduce((accumulator, currentValue)=>{
              return accumulator + currentValue
            },0)
         }
      }


      case actionTypes.CART_REMOVE_PRODUCT:
         const productToRemove = state.cartProducts.find(product=> product.id === action.payload);
         const newCartProducts = state.cartProducts.filter(product=> product.id !== productToRemove.id)
         //calculating the new total price
         const newTotalPrice = state.totalPrice - (productToRemove.price * productToRemove.qty );
         return{
            ...state,
            cartProducts: newCartProducts,
            totalPrice: newTotalPrice
         }


      case actionTypes.INCREASE_PRODUCT_QUANTITY:
         const productToIncrease = state.cartProducts.find(product=> product.id === action.payload.id);
         productToIncrease.qty = ++productToIncrease.qty;
         
         return{
            ...state,
            totalPrice: state.totalPrice + action.payload.price
         }

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






/*
  
case actionTypes.CART_ADD_PRODUCT:
        const product = action.payload;
    const productExist = state.cartProducts.find(productInCart=> productInCart.id === product.id);
     
     

       if(!productExist){
           return{
               ...state,
               cartProducts:[...state.cartProducts, product],
               totalPrice: state.totalPrice + product.price
           }
       }else{
        productExist.qty=productExist.qty +1
        productExist.price= product.price * productExist.qty
       
        return{
            ...state,
            totalPrice: state.totalPrice + product.price
        }
       }



      
    case actionTypes.CART_REMOVE_PRODUCT:
        const removedProduct = state.cartProducts.find(product => product.id === action.payload)
        return{
            ...state,
            cartProducts:state.cartProducts.filter(obj => obj.id !== action.payload),
            totalPrice: state.totalPrice - removedProduct.price

        }

    case actionTypes.INCREASE_PRODUCT_QUANTITY:
        
        const UpdatedProductsArray=[];
        state.cartProducts.map(product=>{
            if(product.id === action.payload.id){
                UpdatedProductsArray.push({...product, qty:++product.qty })
            }else{
                UpdatedProductsArray.push(product)
            }
        })

        console.log(UpdatedProductsArray)

    return{
        ...state,
        cartProducts: UpdatedProductsArray
    }

    case actionTypes.DECREASE_PRODUCT_QUANTITY:
        return{
    ...state
        }
    
    default: return state
  
  
  */
