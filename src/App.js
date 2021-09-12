import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from "./Containers/Layout";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/signup';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import UserProfile from './Pages/UserProfile';
import UserProtectedRoute from './protectedRoutes/UserProtectedRoutes'
import OrderSuccessPage from './Pages/OrderSuccessPage';
import ForgotPassword from './Pages/forgotPassword';
import ResetPassword from './Pages/ResetPassword';
import About from './Pages/About';
const App =()=> {
  return (
    <div className="App">
     <Switch>
      <Layout>
       <Route exact path='/' component={Home}/>
       <Route exact path='/shop' component={Shop}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/signup' component={Signup}/>
       <Route exact path='/products/:id' component={ProductDetails}/>
       <Route exact path='/cart' component={Cart}/>
       <Route exact path='/ABOUT' component={About}/>
       <Route exact path='/order-success' component={OrderSuccessPage}/>
       <Route exact path='/recover-password' component={ForgotPassword}/>
       <Route path="/resetPassword" component={ResetPassword} />
       <UserProtectedRoute exact path="/profile/:sub" component={UserProfile} />
       
      </Layout>
    </Switch>
    </div>
  );
}

export default App;
