import axiosInstance from "../../helpers/axios";
import * as actionTypes from "./actionTypes";

export const getProducts =()=>async(dispatch)=>{
try{
dispatch({
    type:actionTypes.PRODUCTS_FETCH_REQUEST
});

const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const {data}= await axiosInstance.get('/getProducts', config)
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