import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';


const AdminProtectedRoute = ({component: Components, ...rest})=>{

    const userLogin = useSelector((state)=>state.userLogin)
    const {userInfo } = userLogin;
    return(
        <Route {...rest} render={(props)=>{
            if(userInfo && userInfo.isAdmin){
                return <Components/>
            }else{
               return <Redirect to='/login'/>
            }
        }}/>
    )
}


export default AdminProtectedRoute;