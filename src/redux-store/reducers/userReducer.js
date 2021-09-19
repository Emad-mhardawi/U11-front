import * as actionTypes from '../actions/actionTypes';



const initialState = {}


export const userLoginReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.USER_LOGIN_REQUEST:
            return{ loading: true }

        case actionTypes.USER_LOGIN_SUCCESS:
            return{  loading: false, userInfo: action.payload}

        case actionTypes.USER_LOGIN_FAIL:
            return{ loading: false, error: action.payload }

        case actionTypes.USER_LOGOUT:
            return{ }
            
        
        default: return state;

    }

}


export const userSignupReducer =(state = {userInfo:null}, action)=>{
    switch (action.type) {
        case actionTypes.USER_SIGNUP_REQUEST:
            return{loading: true}

        case actionTypes.USER_SIGNUP_SUCCESS:
            return{loading: false, userInfo: action.payload, success:true}
        
        case actionTypes.USER_SIGNUP_FAIL:
            return{ loading: false, userInfo:null, error: action.payload,success:false }
    
        default: return state;
    }
}
