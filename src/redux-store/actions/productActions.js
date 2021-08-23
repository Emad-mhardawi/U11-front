import axiosInstance from "../../helpers/axios";
import * as actionTypes from "./actionTypes";

export const getProducts =(pageNumber)=>async(dispatch)=>{
try{
dispatch({
    type:actionTypes.PRODUCTS_FETCH_REQUEST
});

const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const {data}= await axiosInstance.get(`/getProducts?page=${pageNumber}`, config)
  dispatch({
    type:actionTypes.PRODUCTS_FETCH_SUCCESS,
    payload: data
});

}catch(error){
    dispatch({
        type: actionTypes.PRODUCTS_FETCH_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
}
}

export const getRecentProducts =()=>async(dispatch)=>{
  try{
  dispatch({
      type:actionTypes.RECENT_PRODUCTS_FETCH_REQUEST
  });
  
  const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const {data}= await axiosInstance.get('/get-Latest-products', config)
    dispatch({
      type:actionTypes.RECENT_PRODUCTS_FETCH_SUCCESS,
      payload: data
  });
  
  }catch(error){
      dispatch({
          type: actionTypes.RECENT_PRODUCTS_FETCH_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
  }
  }


  export const getProduct =(product_id)=>async(dispatch)=>{
    try{
    dispatch({
        type:actionTypes.PRODUCT_REVIEWS_FETCH_REQUEST
    });
    
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const {data}= await axiosInstance.get(`/getProduct?product_id=${product_id}`, config)
      dispatch({
        type:actionTypes.PRODUCT_REVIEWS_FETCH_SUCCESS,
        payload: data
    });
    
    }catch(error){
        dispatch({
            type: actionTypes.PRODUCT_REVIEWS_FETCH_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
    }


    export const filterProducts =(priceValues)=>async(dispatch)=>{
      const  filtersQuery = priceValues ? `price[gte]=${priceValues[0]}&price[lte]=${priceValues[1]}` : '';
      try{
      dispatch({
          type:actionTypes.PRODUCTS_FETCH_REQUEST
      });
      
      const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
      console.log(priceValues)
        const {data}= await axiosInstance.get(`/getProducts?${filtersQuery}`, config)
        dispatch({
          type:actionTypes.PRODUCTS_FETCH_SUCCESS,
          payload: data
      });
      
      }catch(error){
          dispatch({
              type: actionTypes.PRODUCTS_FETCH_FAIL,
              payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            });
      }
      }

      export const sortProducts =(sortBy)=>async(dispatch)=>{
        
        const sortQuery = sortBy ? `sort=${sortBy}`:'';
        try{
        dispatch({
            type:actionTypes.PRODUCTS_FETCH_REQUEST
        });
        
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
          const {data}= await axiosInstance.get(`/getProducts?${sortQuery}`, config)
          dispatch({
            type:actionTypes.PRODUCTS_FETCH_SUCCESS,
            payload: data
        });
        
        }catch(error){
            dispatch({
                type: actionTypes.PRODUCTS_FETCH_FAIL,
                payload:
                  error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
              });
        }
        }