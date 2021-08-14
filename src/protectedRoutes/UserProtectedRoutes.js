import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

const UserProtectedRoute = ({component: Components, ...rest})=>{

    const userLogin = useSelector((state)=>state.userLogin);
    const {userInfo} = userLogin;

    return(
        <Route {...rest} render={(props)=>{
            if(userInfo ){
                return <Components/>
            }else{
               return <Redirect to='/login'/>
            }
        }}  />
    )
}

export default UserProtectedRoute;